// game.js - The Life Chosen
(() => {
  "use strict";

  const DEFAULTS = window.GAME_DEFAULTS || {};
  const MIGRATIONS = window.GAME_STATE_MIGRATIONS || {};
  const SYSTEMS = window.GAME_SYSTEMS || {};

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then((regs) => {
      regs.forEach((reg) => reg.update());
    });
  }

  const BUILD_ID = DEFAULTS.BUILD_ID || "v0.3-2026-04-02";
  const STORAGE_KEY = DEFAULTS.STORAGE_KEY || "tlc_save_v3";
  const BACKGROUND_LONG_TERM_FLAG_KEYS = [
    "attachmentStyle",
    "conflictModel",
    "securityModel",
    "vulnerabilityStyle",
    "selfWorthModel"
  ];

  const elMeta = document.querySelector("#meta");
  const elText = document.querySelector("#text");
  const elChoices = document.querySelector("#choices");
  const elToast = document.querySelector("#toast");
  const elBtnBack = document.querySelector("#btnBack");
  const elBtnNames = document.querySelector("#btnNames");
  const elBtnSave = document.querySelector("#btnSave");
  const elBtnLoad = document.querySelector("#btnLoad");
  const elBtnNew = document.querySelector("#btnNew");

  let currentPageIndex = 0;
  let state = null;
  let setupHistory = [];

  const scenes = Array.isArray(window.GAME_SCENES) ? window.GAME_SCENES : [];
  const callbacks = window.GAME_CALLBACKS || {};
  const driftProfiles = window.GAME_DRIFT_PROFILES || {};
  const sceneById = new Map(scenes.map((scene) => [scene.id, scene]));

  function nowIso() {
    return new Date().toISOString();
  }

  function clamp(n, a, b) {
    return Math.max(a, Math.min(b, n));
  }

  function toast(msg) {
    if (elToast) elToast.textContent = msg;
    console.log("[toast]", msg);
  }

  function buildFreshState() {
    const fresh = {
      buildId: BUILD_ID,
      currentSceneId: DEFAULTS.START_SCENE_ID || "start_01_intro",
      age: 0,
      phase: "opening",
      backgroundId: DEFAULTS.DEFAULT_BACKGROUND_ID || "stableMiddleClass",
      backgroundTags: [...(DEFAULTS.DEFAULT_BACKGROUND_TAGS || ["bg_stable"])],
      pov: DEFAULTS.DEFAULT_POV || "narrator",
      names: { ...(DEFAULTS.DEFAULT_NAMES || { boy: "Alex", girl: "Grace" }) },
      stats: { ...(DEFAULTS.DEFAULT_STATS || {}) },
      memories: {},
      flags: {},
      log: []
    };

    const previousState = state;
    state = fresh;
    applyBackgroundStatMods(fresh.backgroundId, "replace");
    applyBackgroundLongTermFlags(fresh.backgroundId, "replace");
    state = previousState;

    return fresh;
  }

  function applyBackgroundStatMods(backgroundId, mode = "replace") {
    if (!state || typeof state !== "object") return;

    const backgrounds = window.GAME_BACKGROUNDS || {};
    const background = backgrounds[backgroundId];
    if (!background) return;

    const statMods = background.statMods || {};
    const defaultStats = DEFAULTS.DEFAULT_STATS || {};

    if (mode === "replace") {
      state.stats = { ...defaultStats };
    }

    for (const [key, delta] of Object.entries(statMods)) {
      if (!(key in state.stats)) continue;
      state.stats[key] = clamp(state.stats[key] + Number(delta || 0), 0, 100);
    }
  }

  function applyBackgroundLongTermFlags(backgroundId, mode = "replace") {
    if (!state || typeof state !== "object") return;

    const backgrounds = window.GAME_BACKGROUNDS || {};
    const background = backgrounds[backgroundId];
    if (!background) return;

    const longTermFlags = background.longTermFlags || {};
    state.flags = (state.flags && typeof state.flags === "object") ? state.flags : {};

    if (mode === "replace") {
      for (const key of BACKGROUND_LONG_TERM_FLAG_KEYS) {
        delete state.flags[key];
      }
    }

    for (const key of BACKGROUND_LONG_TERM_FLAG_KEYS) {
      if (!(key in longTermFlags)) continue;
      state.flags[key] = longTermFlags[key];
    }
  }

  function hydrateLoadedState(raw) {
    if (!raw) return null;

    const loaded = typeof MIGRATIONS.migrate === "function"
      ? MIGRATIONS.migrate(raw, DEFAULTS)
      : raw;

    if (!loaded || typeof loaded !== "object") return null;

    loaded.stats = {
      ...(DEFAULTS.DEFAULT_STATS || {}),
      ...((loaded.stats && typeof loaded.stats === "object") ? loaded.stats : {})
    };
    loaded.names = {
      ...(DEFAULTS.DEFAULT_NAMES || {}),
      ...((loaded.names && typeof loaded.names === "object") ? loaded.names : {})
    };
    loaded.backgroundId = loaded.backgroundId || DEFAULTS.DEFAULT_BACKGROUND_ID || "stableMiddleClass";
    loaded.backgroundTags = Array.isArray(loaded.backgroundTags)
      ? [...loaded.backgroundTags]
      : [...(window.GAME_BACKGROUNDS?.[loaded.backgroundId]?.tags || DEFAULTS.DEFAULT_BACKGROUND_TAGS || [])];
    loaded.pov = ["narrator", "male", "female"].includes(loaded.pov)
      ? loaded.pov
      : (DEFAULTS.DEFAULT_POV || "narrator");
    loaded.memories = (loaded.memories && typeof loaded.memories === "object") ? loaded.memories : {};
    loaded.flags = (loaded.flags && typeof loaded.flags === "object") ? loaded.flags : {};
    loaded.log = Array.isArray(loaded.log) ? loaded.log : [];

    return loaded;
  }

  function persistState(snapshot = state) {
    try {
      if (!snapshot || typeof snapshot !== "object") return false;
      snapshot.buildId = BUILD_ID;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  function saveState() {
    if (persistState(state)) toast("Saved.");
    else toast("Save failed.");
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      return hydrateLoadedState(JSON.parse(raw));
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  state = loadState() || buildFreshState();

  function resetGame() {
    state = buildFreshState();
    currentPageIndex = 0;
    setupHistory = [];
    persistState(state);
    render();
    toast("New game.");
  }

  function cloneSetupSnapshot() {
    return JSON.parse(JSON.stringify({
      state,
      currentPageIndex
    }));
  }

  function isOpeningSetupScene(scene = sceneById.get(state.currentSceneId)) {
    return !!scene && scene.phase === "opening";
  }

  function canRollbackSetup() {
    return isOpeningSetupScene() && setupHistory.length > 0;
  }

  function syncSetupHistory(scene = sceneById.get(state.currentSceneId)) {
    if (!scene || scene.phase !== "opening") {
      setupHistory = [];
    }
  }

  function rememberSetupChoice(scene) {
    if (!scene || scene.phase !== "opening") return;
    setupHistory.push(cloneSetupSnapshot());
  }

  function rollbackSetup() {
    if (!canRollbackSetup()) return;

    const snapshot = setupHistory.pop();
    if (!snapshot || !snapshot.state) return;

    state = snapshot.state;
    currentPageIndex = typeof snapshot.currentPageIndex === "number" ? snapshot.currentPageIndex : 0;
    render();
    toast("Went back.");
  }

  function getMemory(tag) {
    return state.memories[tag] || null;
  }

  function addMemory(tag) {
    if (!tag) return;
    if (!state.memories[tag]) state.memories[tag] = { firstSeen: nowIso(), count: 1 };
    else state.memories[tag].count += 1;
  }

  function conditionsMet(conditions) {
    if (!conditions) return true;

    for (const [k, gate] of Object.entries(conditions)) {
      if (k === "hasMemory") {
        if (!getMemory(gate)) return false;
        continue;
      }
      if (k === "notMemory") {
        if (getMemory(gate)) return false;
        continue;
      }
      if (k === "hasFlag") {
        if (!state.flags || !state.flags[gate]) return false;
        continue;
      }
      if (k === "notFlag") {
        if (state.flags && state.flags[gate]) return false;
        continue;
      }
      if (k === "flags" && gate && typeof gate === "object") {
        if (gate.has && (!state.flags || !state.flags[gate.has])) return false;
        if (gate.not && state.flags && state.flags[gate.not]) return false;
        continue;
      }
      if (k === "flagEquals" && gate && typeof gate === "object") {
        for (const [flagKey, expectedValue] of Object.entries(gate)) {
          if (!state.flags || state.flags[flagKey] !== expectedValue) return false;
        }
        continue;
      }
      if (k === "hasBackground") {
        if (state.backgroundId !== gate) return false;
        continue;
      }
      if (k === "notBackground") {
        if (state.backgroundId === gate) return false;
        continue;
      }
      if (k === "backgroundTag") {
        const tags = Array.isArray(state.backgroundTags) ? state.backgroundTags : [];
        if (!tags.includes(gate)) return false;
        continue;
      }
      if (k === "notBackgroundTag") {
        const tags = Array.isArray(state.backgroundTags) ? state.backgroundTags : [];
        if (tags.includes(gate)) return false;
        continue;
      }

      const v = state.stats[k];
      if (typeof v !== "number") continue;
      if (gate && typeof gate === "object") {
        if (typeof gate.min === "number" && v < gate.min) return false;
        if (typeof gate.max === "number" && v > gate.max) return false;
      }
    }

    return true;
  }

  function applyEffects(effects) {
    if (!effects) return;
    for (const [k, delta] of Object.entries(effects)) {
      if (!(k in state.stats)) continue;
      state.stats[k] = clamp(state.stats[k] + Number(delta || 0), 0, 100);
    }
  }

  function sanitizeName(input, fallback) {
    const s = (input || "").trim();
    if (!s) return fallback;
    const cleaned = s.replace(/[^\p{L}' -]/gu, "").trim();
    return cleaned.slice(0, 20) || fallback;
  }

  function setNamesViaPrompt() {
    const currentBoy = state.names?.boy || "Alex";
    const currentGirl = state.names?.girl || "Grace";

    const boy = prompt("Choose the boy's name:", currentBoy);
    const girl = prompt("Choose the girl's name:", currentGirl);

    state.names.boy = sanitizeName(boy, currentBoy);
    state.names.girl = sanitizeName(girl, currentGirl);

    state.log.push({
      t: nowIso(),
      sceneId: state.currentSceneId,
      choiceText: `Set names: ${state.names.boy} / ${state.names.girl}`
    });

    toast(`Names set: ${state.names.boy} & ${state.names.girl}`);
    render();
  }

  function replaceTokens(text) {
    const boy = state.names?.boy || "Alex";
    const girl = state.names?.girl || "Grace";
    const pov = getActivePov();
    const selfName = pov === "female" ? girl : boy;
    const otherName = pov === "female" ? boy : girl;
    return (text || "")
      .replaceAll("{boyName}", boy)
      .replaceAll("{girlName}", girl)
      .replaceAll("{selfName}", selfName)
      .replaceAll("{otherName}", otherName)
      .replaceAll("*BOY_NAME*", boy)
      .replaceAll("*GIRL_NAME*", girl);
  }

  function adaptLegacyBackgroundIntroText(text, scene) {
    if (!scene || scene.phase !== "background_intro") return text || "";
    if (getActivePov() !== "female") return text || "";

    return String(text || "")
      .replace(/\bHe\b/g, "She")
      .replace(/\bhe\b/g, "she")
      .replace(/\bHis\b/g, "Her")
      .replace(/\bhis\b/g, "her")
      .replace(/\bHim\b/g, "Her")
      .replace(/\bhim\b/g, "her");
  }

  function getActivePov() {
    const pov = String(state.pov || "").trim();
    if (pov === "narrator" || pov === "male" || pov === "female") return pov;

    const role = String(state.playerRole || state.role || "").trim();
    if (role === "male" || role === "female") return role;

    return "narrator";
  }

  function getActiveRole() {
    const role = String(state.playerRole || state.role || "").trim();
    if (role === "male" || role === "female") return role;

    const pov = String(state.pov || "").trim();
    if (pov === "male" || pov === "female") return pov;

    return "narrator";
  }

  function resolveVariantText(value, preferredKey) {
    if (typeof value === "string") return value;
    if (!value || typeof value !== "object" || Array.isArray(value)) return "";

    if (typeof value[preferredKey] === "string") return value[preferredKey];
    if (typeof value.narrator === "string") return value.narrator;
    if (typeof value.male === "string") return value.male;
    if (typeof value.female === "string") return value.female;

    return "";
  }

  function resolveChoiceEffects(effects) {
    if (!effects || typeof effects !== "object" || Array.isArray(effects)) return effects;

    const role = getActiveRole();
    const hasRoleVariants = ["male", "female", "narrator"].some((key) => effects[key] && typeof effects[key] === "object");
    if (!hasRoleVariants) return effects;

    return effects[role] || effects.narrator || effects.male || effects.female || {};
  }

  function getVisiblePages(scene) {
    const rawPages = Array.isArray(scene.pages) && scene.pages.length ? scene.pages : [scene.text || ""];
    return rawPages.filter((page) => {
      if (!page || typeof page !== "object" || Array.isArray(page)) return true;
      return conditionsMet(page.conditions);
    });
  }

  function renderCallbacks(text) {
    return (text || "").replace(/\{\{CALLBACK:([a-zA-Z0-9_\-]+)\}\}/g, (_m, key) => {
      const cb = callbacks[key];
      if (!cb) return "";
      if (Array.isArray(cb.variants)) {
        for (const variant of cb.variants) {
          if (!variant) continue;
          if (conditionsMet(variant.conditions || {})) return variant.text || "";
        }
      }
      return cb.defaultText || "";
    });
  }

  function advanceYears(years) {
    const n = Math.max(0, Number(years) || 0);
    state.age = clamp(state.age + n, 0, 120);
  }

  function applyDriftProfile(profileId) {
    const profile = driftProfiles[profileId];
    if (!profile) {
      console.warn("Missing drift profile:", profileId);
      toast("Missing drift profile.");
      return;
    }

    const years = Math.max(0, Number(profile.years) || 0);
    const perYear = profile.perYear || {};
    const oneTime = profile.oneTime || {};

    for (let i = 0; i < years; i += 1) applyEffects(perYear);
    applyEffects(oneTime);
  }

  function runAction(action) {
    if (!action || !action.type) return;

    if (action.type === "setNames") return void setNamesViaPrompt();

    if (action.type === "setPov") {
      const pov = String(action.pov || "").trim();
      if (pov !== "narrator" && pov !== "male" && pov !== "female") return;
      state.pov = pov;
      return;
    }

    if (action.type === "setBackground") {
      const backgrounds = window.GAME_BACKGROUNDS || {};
      const backgroundId = String(action.backgroundId || "").trim();
      const background = backgrounds[backgroundId];

      if (!background) {
        toast(`Missing background: ${backgroundId || "unknown"}`);
        return;
      }

      state.backgroundId = background.id;
      state.backgroundTags = Array.isArray(background.tags) ? [...background.tags] : [];
      applyBackgroundStatMods(background.id, "replace");
      applyBackgroundLongTermFlags(background.id, "replace");
      return;
    }

    if (action.type === "setFlag") {
      const key = String(action.key || "").trim();
      if (!key) return;
      state.flags[key] = true;
      return;
    }

    if (action.type === "clearFlag") {
      const key = String(action.key || "").trim();
      if (!key) return;
      delete state.flags[key];
      return;
    }

    if (action.type === "advanceYears") return void advanceYears(action.years);
    if (action.type === "applyDrift") return void applyDriftProfile(action.profile);
  }

  function goToScene(nextId) {
    const next = sceneById.get(nextId);
    if (!next) {
      console.warn("Missing scene:", nextId);
      toast(`Missing scene: ${nextId}`);
      return;
    }

    state.currentSceneId = next.id;
    if (typeof next.age === "number") state.age = next.age;
    if (typeof next.phase === "string") state.phase = next.phase;
    currentPageIndex = 0;
    syncSetupHistory(next);
    render();
  }

  function applyChoice(choice, scene) {
    try {
      const choiceText = resolveVariantText(choice.text || "", getActiveRole());
      rememberSetupChoice(scene);
      state.log.push({
        t: nowIso(),
        sceneId: scene.id,
        choiceText
      });

      runAction(choice.action);
      runAction(choice.action2);
      applyEffects(resolveChoiceEffects(choice.effects));

      if (Array.isArray(choice.memoryAdd)) {
        for (const tag of choice.memoryAdd) addMemory(tag);
      } else if (typeof choice.memoryAdd === "string") {
        addMemory(choice.memoryAdd);
      }

      if (choice.goto) goToScene(choice.goto);
    } catch (error) {
      console.error(error);
      toast("Script error. Check console.");
    }
  }

  function render() {
    const scene = sceneById.get(state.currentSceneId);
    syncSetupHistory(scene);
    if (!scene) {
      elMeta.textContent = "";
      elText.textContent = "Missing scene content. Check src/content/data/scenes.js and scene IDs.";
      elChoices.innerHTML = "";
      if (elBtnBack) {
        elBtnBack.hidden = true;
        elBtnBack.disabled = true;
      }
      return;
    }

    elMeta.textContent = `${scene.title} | Age ${state.age} | Phase: ${String(state.phase || "").replaceAll("_", " ")}`;

    const pages = getVisiblePages(scene);
    const totalPages = pages.length;
    const pageText = resolveVariantText(pages[currentPageIndex] || "", getActivePov());
    const withCallbacks = renderCallbacks(pageText);
    const withTokens = replaceTokens(withCallbacks);
    elText.textContent = adaptLegacyBackgroundIntroText(withTokens, scene);
    elChoices.innerHTML = "";

    if (currentPageIndex < totalPages - 1) {
      const button = document.createElement("button");
      button.className = "btn primary";
      button.type = "button";
      button.textContent = "Continue";
      button.addEventListener("click", () => {
        currentPageIndex += 1;
        render();
      });
      elChoices.appendChild(button);
      return;
    }

    currentPageIndex = 0;

    const availableChoices = (scene.choices || []).filter((choice) => conditionsMet(choice.conditions));

    if (!availableChoices.length) {
      const autoNext = typeof SYSTEMS.getAutoNext === "function"
        ? SYSTEMS.getAutoNext(scene.id)
        : (SYSTEMS.AUTO_NEXT && SYSTEMS.AUTO_NEXT[scene.id]) || null;

      if (autoNext) {
        const button = document.createElement("button");
        button.className = "btn primary";
        button.type = "button";
        button.textContent = "Continue";
        button.addEventListener("click", () => goToScene(autoNext));
        elChoices.appendChild(button);
      }
    }

    for (const choice of availableChoices) {
      const button = document.createElement("button");
      button.className = "btn";
      button.type = "button";
      button.textContent = replaceTokens(resolveVariantText(choice.text || "", getActiveRole()));
      button.addEventListener("click", () => applyChoice(choice, scene));
      elChoices.appendChild(button);
    }

    if (elBtnBack) {
      const canGoBack = canRollbackSetup();
      elBtnBack.hidden = !canGoBack;
      elBtnBack.disabled = !canGoBack;
    }
  }

  if (elBtnBack) elBtnBack.addEventListener("click", rollbackSetup);
  if (elBtnNames) elBtnNames.addEventListener("click", setNamesViaPrompt);
  if (elBtnSave) elBtnSave.addEventListener("click", saveState);
  if (elBtnLoad) {
    elBtnLoad.addEventListener("click", () => {
      const loaded = loadState();
      if (!loaded) {
        toast("No save found.");
        return;
      }
      state = loaded;
      currentPageIndex = 0;
      setupHistory = [];
      render();
      toast("Loaded.");
    });
  }
  if (elBtnNew) elBtnNew.addEventListener("click", resetGame);

  render();
})();


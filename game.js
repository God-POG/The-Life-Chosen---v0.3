// game.js — The Life Chosen
(() => {
  "use strict";

  const DEFAULTS = window.GAME_DEFAULTS || {};
  const MIGRATIONS = window.GAME_STATE_MIGRATIONS || {};
  const SYSTEMS = window.GAME_SYSTEMS || {};

  const BUILD_ID = DEFAULTS.BUILD_ID || "demo-2026-03-14";
  const STORAGE_KEY = DEFAULTS.STORAGE_KEY || "tlc_save_v2";

  const elMeta = document.querySelector("#meta");
  const elText = document.querySelector("#text");
  const elChoices = document.querySelector("#choices");
  const elToast = document.querySelector("#toast");
  const elBtnNames = document.querySelector("#btnNames");
  const elBtnSave = document.querySelector("#btnSave");
  const elBtnLoad = document.querySelector("#btnLoad");
  const elBtnNew = document.querySelector("#btnNew");
  const elDebug = document.querySelector("#debug");
  const elDebugBody = document.querySelector("#debugBody");

  let currentPageIndex = 0;

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
    return {
      buildId: BUILD_ID,
      currentSceneId: DEFAULTS.START_SCENE_ID || "bg_stable_intro_01",
      age: 0,
      phase: "background_intro",
      backgroundId: DEFAULTS.DEFAULT_BACKGROUND_ID || "stableMiddleClass",
      backgroundTags: [...(DEFAULTS.DEFAULT_BACKGROUND_TAGS || ["bg_stable"])],
      names: { ...(DEFAULTS.DEFAULT_NAMES || { boy: "Eli", girl: "Mara" }) },
      stats: { ...(DEFAULTS.DEFAULT_STATS || {}) },
      memories: {},
      flags: {},
      log: []
    };
  }

  function hydrateLoadedState(raw) {
    if (!raw) return null;

    if (typeof MIGRATIONS.migrate === "function") {
      return MIGRATIONS.migrate(raw, DEFAULTS);
    }

    return raw;
  }

  function saveState() {
    try {
      state.buildId = BUILD_ID;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      toast("Saved.");
    } catch (error) {
      console.error(error);
      toast("Save failed.");
    }
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

  let state = loadState() || buildFreshState();

  function resetGame() {
    state = buildFreshState();
    currentPageIndex = 0;
    render();
    toast("New game.");
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
    const cleaned = s.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ '\-]/g, "").trim();
    return cleaned.slice(0, 20) || fallback;
  }

  function setNamesViaPrompt() {
    const currentBoy = state.names?.boy || "Eli";
    const currentGirl = state.names?.girl || "Mara";

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
    const boy = state.names?.boy || "Eli";
    const girl = state.names?.girl || "Mara";
    return (text || "")
      .replaceAll("*BOY_NAME*", boy)
      .replaceAll("*GIRL_NAME*", girl);
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
    render();
  }

  function applyChoice(choice, scene) {
    try {
      state.log.push({
        t: nowIso(),
        sceneId: scene.id,
        choiceText: choice.text
      });

      runAction(choice.action);
      runAction(choice.action2);
      applyEffects(choice.effects);

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
    if (!scene) {
      elMeta.textContent = "";
      elText.textContent = "Missing scene content. Check data/scenes.js and scene IDs.";
      elChoices.innerHTML = "";
      return;
    }

    elMeta.textContent = `${scene.title} • Age ${state.age} • Phase: ${String(state.phase || "").replaceAll("_", " ")}`;

    const pages = Array.isArray(scene.pages) && scene.pages.length ? scene.pages : [scene.text || ""];
    const totalPages = pages.length;
    const pageText = pages[currentPageIndex] || "";
    const withCallbacks = renderCallbacks(pageText);
    elText.textContent = replaceTokens(withCallbacks);
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
      button.textContent = replaceTokens(choice.text || "");
      button.addEventListener("click", () => applyChoice(choice, scene));
      elChoices.appendChild(button);
    }

    if (elDebug && elDebugBody) {
      elDebugBody.textContent = JSON.stringify({
        buildId: state.buildId,
        currentSceneId: state.currentSceneId,
        age: state.age,
        phase: state.phase,
        backgroundId: state.backgroundId,
        names: state.names,
        stats: state.stats,
        flags: state.flags,
        memories: state.memories
      }, null, 2);
    }
  }

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
      render();
      toast("Loaded.");
    });
  }
  if (elBtnNew) elBtnNew.addEventListener("click", resetGame);

  render();
})();

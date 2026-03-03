// game.js — The Life Chosen
(() => {
  "use strict";

  const BUILD_ID = "demo-2026-03-03";
  const STORAGE_KEY = "tlc_save_v1";

  // DOM
  const elMeta = document.querySelector("#meta");
  const elText = document.querySelector("#text");
  const elChoices = document.querySelector("#choices");
  const elBtnNames = document.querySelector("#btnNames");
  const elBtnSave = document.querySelector("#btnSave");
  const elBtnLoad = document.querySelector("#btnLoad");
  const elBtnNew = document.querySelector("#btnNew");

  // Debug
  const elDebug = document.querySelector("#debug");
  const elDebugBody = document.querySelector("#debugBody");

  // Global paging cursor
  let currentPageIndex = 0;

  // Scene data
  const scenes = Array.isArray(window.GAME_SCENES) ? window.GAME_SCENES : [];
  const callbacks = window.GAME_CALLBACKS || {};
  const driftProfiles = window.GAME_DRIFT_PROFILES || {};

  const sceneById = new Map(scenes.map(s => [s.id, s]));

  function nowIso() {
    return new Date().toISOString();
  }

  function clamp(n, a, b) {
    return Math.max(a, Math.min(b, n));
  }

  function toast(msg) {
    // lightweight fallback: just console + meta pulse
    console.log("[toast]", msg);
  }

  function newGameState() {
    return {
      buildId: BUILD_ID,
      currentSceneId: "intro_01",
      age: 9,
      phase: "intro",

      names: { boy: "Eli", girl: "Mara" },

      stats: {
        affection: 5,
        trust: 5,
        resilience: 5,
        sharedHistory: 0,
        communication: 5
      },

      memories: {},
      flags: {},
      log: []
    };
  }

  let state = loadState() || newGameState();

  function saveState() {
    try {
      state.buildId = BUILD_ID;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      toast("Saved.");
    } catch (e) {
      console.error(e);
      toast("Save failed.");
    }
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;

      const parsed = JSON.parse(raw);
      if (!parsed || !parsed.currentSceneId || !parsed.stats) return null;

      // Hard guard for mismatched builds
      if (parsed.buildId && parsed.buildId !== BUILD_ID) {
        console.warn("Save buildId mismatch:", parsed.buildId, "!==", BUILD_ID);
        return { __incompatibleSave: true, previousBuildId: parsed.buildId };
      }
      if (!parsed.buildId) {
        console.warn("Save missing buildId; treating as incompatible.");
        return { __incompatibleSave: true, previousBuildId: "(missing)" };
      }

      // Back-compat safety
      if (!parsed.names) parsed.names = { boy: "Eli", girl: "Mara" };
      if (!parsed.names.boy) parsed.names.boy = "Eli";
      if (!parsed.names.girl) parsed.names.girl = "Mara";
      if (!parsed.flags) parsed.flags = {};
      if (!parsed.memories) parsed.memories = {};
      if (!parsed.log) parsed.log = [];

      return parsed;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  function resetGame() {
    state = newGameState();
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

  // Supports:
  //  - { hasMemory:"x" }, { notMemory:"x" }
  //  - { hasFlag:"x" }, { notFlag:"x" }
  //  - { flags:{has:"x"} } and { flags:{not:"x"} } (used by some scenes)
  //  - stat gates: { trust:{min:10,max:50} }
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
        if (gate.not && (state.flags && state.flags[gate.not])) return false;
        continue;
      }

      // Stat gates
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
        for (const v of cb.variants) {
          if (!v) continue;
          if (conditionsMet(v.conditions || {})) return v.text || "";
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
    const p = driftProfiles[profileId];
    if (!p) {
      console.warn("Missing drift profile:", profileId);
      toast("Missing drift profile (check driftProfiles.js).");
      return;
    }
    const years = Math.max(0, Number(p.years) || 0);
    const perYear = p.perYear || {};
    const oneTime = p.oneTime || {};

    for (let i = 0; i < years; i++) applyEffects(perYear);
    applyEffects(oneTime);
  }

  function runAction(action) {
    if (!action || !action.type) return;

    if (action.type === "setNames") return void setNamesViaPrompt();

    if (action.type === "setFlag") {
      const key = String(action.key || "").trim();
      if (!key) return;
      state.flags = state.flags || {};
      state.flags[key] = true;
      return;
    }

    if (action.type === "clearFlag") {
      const key = String(action.key || "").trim();
      if (!key) return;
      state.flags = state.flags || {};
      delete state.flags[key];
      return;
    }

    if (action.type === "advanceYears") return void advanceYears(action.years);

    if (action.type === "applyDrift") return void applyDriftProfile(action.profile);
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

      if (choice.goto) {
        const next = sceneById.get(choice.goto);
        if (!next) {
          console.warn("Missing scene:", choice.goto);
          toast("Missing content (scene not found).");
          return;
        }

        state.currentSceneId = next.id;
        if (typeof next.age === "number") state.age = next.age;
        if (typeof next.phase === "string") state.phase = next.phase;

        // reset paging whenever we change scenes
        currentPageIndex = 0;
        render();
      }
    } catch (e) {
      console.error(e);
      toast("Script error. Check console.");
    }
  }

  function render() {
    // Save incompatible sentinel
    if (state && state.__incompatibleSave) {
      elMeta.textContent = "Save incompatible";
      elText.textContent =
        `Your saved game was created with a different build (${state.previousBuildId}).\n\n` +
        `This demo build is ${BUILD_ID}.\n\n` +
        `Use New to restart.`;
      elChoices.innerHTML = "";
      return;
    }

    const scene = sceneById.get(state.currentSceneId);
    if (!scene) {
      elMeta.textContent = "";
      elText.textContent = "Missing scene content. (Check scenes.js IDs.)";
      elChoices.innerHTML = "";
      return;
    }

    elMeta.textContent =
      `${scene.title} • Age ${state.age} • Phase: ${String(state.phase || "").replaceAll("_", " ")}`;

    // Paging: use scene.pages if present, otherwise fall back to scene.text
    const pages = Array.isArray(scene.pages) ? scene.pages : [scene.text || ""];
    const totalPages = pages.length;

    const pageText = pages[currentPageIndex] || "";
    const withCallbacks = renderCallbacks(pageText);
    elText.textContent = replaceTokens(withCallbacks);

    elChoices.innerHTML = "";

    // If not last page, show Continue only
    if (currentPageIndex < totalPages - 1) {
      const b = document.createElement("button");
      b.className = "btn primary";
      b.type = "button";
      b.textContent = "Continue";
      b.addEventListener("click", () => {
        currentPageIndex++;
        render();
      });
      elChoices.appendChild(b);
      return;
    }

    // On last page, reset index so re-rendering same scene starts at page 1
    currentPageIndex = 0;

    const availableChoices = (scene.choices || []).filter(c => conditionsMet(c.conditions));
    for (const choice of availableChoices) {
      const b = document.createElement("button");
      b.className = "btn";
      b.type = "button";
      b.textContent = replaceTokens(choice.text || "");
      b.addEventListener("click", () => applyChoice(choice, scene));
      elChoices.appendChild(b);
    }

    // Optional debug panel
    if (elDebug && elDebugBody) {
      elDebugBody.textContent = JSON.stringify(
        {
          buildId: state.buildId,
          currentSceneId: state.currentSceneId,
          age: state.age,
          phase: state.phase,
          names: state.names,
          stats: state.stats,
          flags: state.flags,
          memories: state.memories
        },
        null,
        2
      );
    }
  }

  // UI hooks
  if (elBtnNames) elBtnNames.addEventListener("click", () => setNamesViaPrompt());
  if (elBtnSave) elBtnSave.addEventListener("click", () => saveState());
  if (elBtnLoad)
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
  if (elBtnNew) elBtnNew.addEventListener("click", () => resetGame());

  // Initial render
  render();
})();
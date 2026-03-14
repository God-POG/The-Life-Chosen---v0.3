// data/backgrounds/index.js
// Background registry.

window.GAME_BACKGROUNDS = {
  stableMiddleClass: {
    id: "stableMiddleClass",
    label: "Stable Middle-Class Family",
    introSceneId: "bg_stable_intro_01",
    tags: ["bg_stable"],
    introScenes: Array.isArray(window.BG_INTRO_STABLE) ? window.BG_INTRO_STABLE : []
  }
};

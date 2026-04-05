// data/core/systems.js
// Automatic scene continuation rules.

window.GAME_SYSTEMS = {

  AUTO_NEXT: {

    // Background intro chain
    bg_stable_intro_01: "bg_stable_intro_02",
    bg_stable_intro_02: "bg_stable_intro_03",
    bg_stable_intro_03: "bg_stable_intro_04",

    // Transition into Chapter 1
    bg_stable_intro_04: "ch1_01_meet_01"
  },

  getAutoNext(sceneId) {
    return this.AUTO_NEXT[sceneId] || null;
  }

};

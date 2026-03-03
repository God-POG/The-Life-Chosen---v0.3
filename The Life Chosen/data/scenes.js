// data/scenes.js — master aggregator
// Combines chapter scene arrays into window.GAME_SCENES for the engine.

(function () {
  "use strict";

  const ch1Intro = Array.isArray(window.CH1_INTRO) ? window.CH1_INTRO : [];
  const ch1Meet = Array.isArray(window.CH1_FIRST_MEETING) ? window.CH1_FIRST_MEETING : [];
  const ch1Meanwhile = Array.isArray(window.CH1_MEANWHILE) ? window.CH1_MEANWHILE : [];

  window.GAME_SCENES = [
  ...(window.CH1_INTRO || []),
  ...(window.CH1_FIRST_MEETING || []),
  ...(window.CH1_MEANWHILE || []),

  ...(window.CH2_RECOGNITION || []),
  ...(window.CH2_PROXIMITY || []),
  ...(window.CH2_SELF_AWARENESS || []),
  ...(window.CH2_DREAM_COUPLE || []),
  ...(window.CH2_GRADUATION || []),

  ...(window.CH2_MEANWHILE2 || [])
];
})();
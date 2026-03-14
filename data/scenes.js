// data/scenes.js — master aggregator
// Combines background + chapter scene arrays into window.GAME_SCENES.

(function () {
  "use strict";

  const scenes = [
    ...(window.BG_INTRO_STABLE || []),

    ...(window.CH1_FIRST_MEETING || []),
    ...(window.CH1_EARLY_BOND || []),
    ...(window.CH1_CHILDHOOD_CONFLICT || []),
    ...(window.CH1_MEANINGFUL_MOMENT || []),
    ...(window.CH1_MEANWHILE || []),

    ...(window.CH2_NEW_ENVIRONMENT || []),
    ...(window.CH2_RECOGNITION || []),
    ...(window.CH2_ROUTINE_FORMATION || []),
    ...(window.CH2_PROXIMITY || []),
    ...(window.CH2_SOCIAL_FRICTION || []),
    ...(window.CH2_SELF_AWARENESS || []),
    ...(window.CH2_DREAM_COUPLE || []),
    ...(window.CH2_ALMOST_CONFESSION || []),
    ...(window.CH2_GRADUATION || []),
    ...(window.CH2_DIVERGING_PATHS || []),
    ...(window.CH2_MEANWHILE2 || []),

    {
      id: "ch3_stub_start",
      phase: "chapter_3_stub",
      age: 22,
      title: "Chapter 3 Placeholder",
      pages: [
        `Chapter 2 is fully wired and hands off correctly into Chapter 3.\n\nThis placeholder scene exists so the game does not break when you reach the end of Meanwhile 2. Replace it once Chapter 3's opening scene is ready.`
      ],
      choices: []
    }
  ];

  window.GAME_SCENES = scenes;
})();

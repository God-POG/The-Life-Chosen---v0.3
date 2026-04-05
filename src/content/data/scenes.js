// data/scenes.js - master aggregator
// Combines background + chapter scene arrays into window.GAME_SCENES.

(function () {
  "use strict";

  const scenes = [
    ...(window.START_INTRO_SCENES || []),
    ...(window.BG_INTRO_STABLE || []),
    ...(window.BG_INTRO_DIVORCED || []),
    ...(window.BG_INTRO_STRUGGLE || []),
    ...(window.BG_INTRO_WEALTHY || []),
    ...(window.BG_INTRO_URBAN || []),
    ...(window.BG_INTRO_OVERPROTECTIVE || []),
    ...(window.BG_INTRO_NEGLECT || []),
    ...(window.BG_INTRO_RURAL || []),
    ...(window.BG_INTRO_PRODIGY || []),
    ...(window.BG_INTRO_IMMIGRANT || []),

    ...(window.CH1_FIRST_MEETING || []),
    ...(window.CH1_EARLY_BOND || []),
    ...(window.CH1_CHILDHOOD_CONFLICT || []),
    ...(window.CH1_MEANINGFUL_MOMENT || []),
    ...(window.CH1_MEANWHILE || []),

    ...(window.CH2_NEW_ENVIRONMENT || []),
    ...(window.CH2_ROUTINE_FORMATION || []),
    ...(window.CH2_FAMILIAR_DIFFERENT || []),
    ...(window.CH2_PROXIMITY || []),
    ...(window.CH2_SOCIAL_FRICTION || []),
    ...(window.CH2_SELF_AWARENESS || []),
    ...(window.CH2_DREAM_COUPLE || []),
    ...(window.CH2_ALMOST_CONFESSION || []),
    ...(window.CH2_GRADUATION || []),
    ...(window.CH2_DIVERGING_PATHS || []),
    ...(window.CH2_MEANWHILE || []),
    ...(window.CH3_THRESHOLD_OF_INDEPENDENCE || []),
    ...(window.CH3_EARLY_MOMENTUM || []),
    ...(window.CH3_PATHS_TAKING_SHAPE || []),
    ...(window.CH3_DISTANCE_AND_CLOSENESS || []),
    ...(window.CH3_QUIET_CONFLICTS || []),
    ...(window.CH3_DEFINING_MOMENTS || []),
    ...(window.CH3_UNSTABLE_GROUND || []),

    {
      id: "ch4_01_placeholder_01",
      phase: "threshold",
      age: 26,
      title: "For Now",
      pages: [
        `Chapter 3 ends here, on the far side of Unstable Ground.\n\nThe next chapter has not yet opened, so this is where the story rests for now.`
      ],
      choices: []
    }
  ];

  window.GAME_SCENES = scenes;
})();




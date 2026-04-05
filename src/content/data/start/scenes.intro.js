// data/start/scenes.intro.js
// Opening setup flow before background intro.

(function () {
  "use strict";

  const backgrounds = window.GAME_BACKGROUNDS || {};
  const backgroundEntries = Object.values(backgrounds);

  window.START_INTRO_SCENES = [
    {
      id: "start_01_intro",
      phase: "opening",
      age: 0,
      title: "Before Memory",
      pages: [
        `Every life begins before language can hold it. Before anyone can explain who they are, there is only atmosphere: a room, a season, the shape of care settling quietly around them.

{{CALLBACK:hope_visibility}}`,
        `This is where the story gathers itself. Not in a dramatic beginning, but in the small conditions that make a future feel possible.`
      ],
      choices: [
        {
          text: "Begin with the life waiting for them.",
          goto: "start_02_background_choice"
        }
      ]
    },
    {
      id: "start_02_background_choice",
      phase: "opening",
      age: 0,
      title: "The House They Begin In",
      pages: [
        `No one chooses the first shape of their world, but it shapes them all the same. A home teaches its lessons quietly, through rhythm, absence, and what is repaired without being named.

{{CALLBACK:choice_weight_inward}}`
      ],
      choices: backgroundEntries.map((background) => ({
        text: `Begin in ${background.label}.`,
        action: { type: "setBackground", backgroundId: background.id },
        goto: "start_03_pov_choice"
      }))
    },
    {
      id: "start_03_pov_choice",
      phase: "opening",
      age: 0,
      title: "Choose POV",
      pages: [
        `Before memory settles into shape, perspective does. The same life can be carried from outside it, or from within the private weather of one heart or the other.

{{CALLBACK:inner_alignment_check}}`
      ],
      choices: [
        {
          text: "Narrator POV",
          action: { type: "setPov", pov: "narrator" },
          goto: "start_04_name_choice"
        },
        {
          text: "Male POV",
          action: { type: "setPov", pov: "male" },
          goto: "start_04_name_choice"
        },
        {
          text: "Female POV",
          action: { type: "setPov", pov: "female" },
          goto: "start_04_name_choice"
        }
      ]
    },
    {
      id: "start_04_name_choice",
      phase: "opening",
      age: 0,
      title: "Names",
      pages: [
        `Names come later than breath, but earlier than memory. They are the first small stories other people tell about you, and the ones you slowly grow into yourself.`
      ],
      choices: [
        {
          text: "Keep the default names.",
          goto: "start_05_begin"
        },
        {
          text: "Choose their names.",
          action: { type: "setNames" },
          goto: "start_05_begin"
        }
      ]
    },
    {
      id: "start_05_begin",
      phase: "opening",
      age: 0,
      title: "Begin",
      pages: [
        `With a home behind them and names waiting to be spoken, the story can finally move from possibility into lived time.

{{CALLBACK:future_scene_imagination}}`
      ],
      choices: backgroundEntries.map((background) => ({
        text: `Enter ${background.label}.`,
        conditions: { hasBackground: background.id },
        goto: background.introSceneId
      }))
    }
  ];
})();

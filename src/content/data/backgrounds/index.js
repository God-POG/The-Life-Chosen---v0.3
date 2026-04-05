// data/backgrounds/index.js
// Background registry.

(function () {
  "use strict";

  function introScenes(globalName) {
    return Array.isArray(window[globalName]) ? window[globalName] : [];
  }

  window.GAME_BACKGROUNDS = {
    stableMiddleClass: {
      id: "stableMiddleClass",
      label: "Stable Middle-Class Family",
      introSceneId: "bg_stable_intro_01",
      tags: ["bg_stable"],
      statMods: { resilience: +1, empathy: +1 },
      longTermFlags: {
        attachmentStyle: "secure",
        conflictModel: "repair",
        securityModel: "structure",
        vulnerabilityStyle: "gradual_opening",
        selfWorthModel: "steady"
      },
      introScenes: introScenes("BG_INTRO_STABLE")
    },

    divorcedParents: {
      id: "divorcedParents",
      label: "Divorced Parents",
      introSceneId: "bg_divorced_intro_01",
      tags: ["bg_divorced"],
      statMods: { resilience: +1, trust: -1 },
      longTermFlags: {
        attachmentStyle: "guarded",
        conflictModel: "monitor_tone",
        securityModel: "adaptation",
        vulnerabilityStyle: "test_before_trust",
        selfWorthModel: "context_sensitive"
      },
      introScenes: introScenes("BG_INTRO_DIVORCED")
    },

    financialStruggle: {
      id: "financialStruggle",
      label: "Financially Struggling Family",
      introSceneId: "bg_struggle_intro_01",
      tags: ["bg_struggle"],
      statMods: { resilience: +2, openness: -1 },
      longTermFlags: {
        attachmentStyle: "practical_loyalty",
        conflictModel: "cost_assessment",
        securityModel: "scarcity_management",
        vulnerabilityStyle: "restrained_need",
        selfWorthModel: "usefulness"
      },
      introScenes: introScenes("BG_INTRO_STRUGGLE")
    },

    wealthyDistant: {
      id: "wealthyDistant",
      label: "Wealthy but Emotionally Distant Family",
      introSceneId: "bg_wealthy_intro_01",
      tags: ["bg_wealthy"],
      statMods: { ambition: +1, empathy: -1 },
      longTermFlags: {
        attachmentStyle: "controlled_distance",
        conflictModel: "maintain_composure",
        securityModel: "control",
        vulnerabilityStyle: "hidden_until_safe",
        selfWorthModel: "expectation_burden"
      },
      introScenes: introScenes("BG_INTRO_WEALTHY")
    },

    urbanInnerCityUpbringing: {
      id: "urbanInnerCityUpbringing",
      label: "Urban Inner-City Upbringing",
      introSceneId: "bg_urban_intro_01",
      tags: ["bg_urban"],
      statMods: { communication: +1, resilience: +1 },
      longTermFlags: {
        attachmentStyle: "guarded",
        conflictModel: "monitor_tone",
        securityModel: "adaptation",
        vulnerabilityStyle: "test_before_trust",
        selfWorthModel: "context_sensitive"
      },
      introScenes: introScenes("BG_INTRO_URBAN")
    },

    overprotectiveParents: {
      id: "overprotectiveParents",
      label: "Overprotective Parents",
      introSceneId: "bg_overprotective_intro_01",
      tags: ["bg_overprotective"],
      statMods: { empathy: +1, openness: -1 },
      longTermFlags: {
        attachmentStyle: "guarded",
        conflictModel: "maintain_composure",
        securityModel: "control",
        vulnerabilityStyle: "hidden_until_safe",
        selfWorthModel: "steady"
      },
      introScenes: introScenes("BG_INTRO_OVERPROTECTIVE")
    },

    neglectfulHousehold: {
      id: "neglectfulHousehold",
      label: "Neglectful Household",
      introSceneId: "bg_neglect_intro_01",
      tags: ["bg_neglect"],
      statMods: { resilience: +1, trust: -1 },
      longTermFlags: {
        attachmentStyle: "controlled_distance",
        conflictModel: "monitor_tone",
        securityModel: "adaptation",
        vulnerabilityStyle: "hidden_until_safe",
        selfWorthModel: "context_sensitive"
      },
      introScenes: introScenes("BG_INTRO_NEGLECT")
    },

    ruralIsolation: {
      id: "ruralIsolation",
      label: "Rural Isolation",
      introSceneId: "bg_rural_intro_01",
      tags: ["bg_rural"],
      statMods: { trust: +1, openness: -1 },
      longTermFlags: {
        attachmentStyle: "practical_loyalty",
        conflictModel: "repair",
        securityModel: "structure",
        vulnerabilityStyle: "gradual_opening",
        selfWorthModel: "usefulness"
      },
      introScenes: introScenes("BG_INTRO_RURAL")
    },

    prodigy: {
      id: "prodigy",
      label: "Prodigy Household",
      introSceneId: "bg_prodigy_intro_01",
      tags: ["bg_prodigy"],
      statMods: { ambition: +2, openness: -1 },
      longTermFlags: {
        attachmentStyle: "controlled_distance",
        conflictModel: "maintain_composure",
        securityModel: "control",
        vulnerabilityStyle: "hidden_until_safe",
        selfWorthModel: "expectation_burden"
      },
      introScenes: introScenes("BG_INTRO_PRODIGY")
    },

    immigrantHousehold: {
      id: "immigrantHousehold",
      label: "Immigrant Household",
      introSceneId: "bg_immigrant_intro_01",
      tags: ["bg_immigrant"],
      statMods: { communication: +1, ambition: +1 },
      longTermFlags: {
        attachmentStyle: "practical_loyalty",
        conflictModel: "monitor_tone",
        securityModel: "adaptation",
        vulnerabilityStyle: "test_before_trust",
        selfWorthModel: "usefulness"
      },
      introScenes: introScenes("BG_INTRO_IMMIGRANT")
    }
  };
})();

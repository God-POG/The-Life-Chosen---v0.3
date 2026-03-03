// data/core/driftProfiles.js — drift profiles used by { type:"applyDrift" }

window.GAME_DRIFT_PROFILES = {
  // -------------------------
  // Chapter 1 -> Chapter 2 (12 -> 14)
  // -------------------------
  childhood_to_highschool_guarded: {
    years: 2,
    perYear: { resilience: +0.6, communication: -0.3, trust: +0.1, affection: -0.2 },
    oneTime: { sharedHistory: +0.3 }
  },

  childhood_to_highschool_romantic: {
    years: 2,
    perYear: { affection: +0.5, sharedHistory: +0.3, resilience: -0.2, trust: -0.1 },
    oneTime: { communication: +0.2 }
  },

  childhood_to_highschool_present: {
    years: 2,
    perYear: { resilience: +0.3, trust: +0.4, affection: -0.4, sharedHistory: +0.1 },
    oneTime: { communication: +0.2 }
  },

  childhood_to_highschool_direct: {
    years: 2,
    perYear: { communication: +0.7, trust: +0.2, resilience: +0.1, affection: -0.1 },
    oneTime: { sharedHistory: +0.3 }
  },

  // -------------------------
  // Meanwhile 2 (18 -> 22)
  // -------------------------
  mw2_interdependent_18_to_22: {
    years: 4,
    // Drift bias: +sharedHistory, +trust; slight risk: -resilience
    perYear: {
      sharedHistory: +0.6,
      trust: +0.5,
      resilience: -0.2,
      communication: +0.1,
      affection: +0.1
    },
    oneTime: { affection: +0.6 }
  },

  mw2_independent_growth_18_to_22: {
    years: 4,
    // Drift bias: +resilience, +communication; slight risk: -sharedHistory
    perYear: {
      resilience: +0.5,
      communication: +0.5,
      sharedHistory: -0.2,
      trust: +0.1,
      affection: +0.1
    },
    oneTime: { trust: +0.4 }
  },

  mw2_avoidant_definition_18_to_22: {
    years: 4,
    // Drift bias: +affection, -trust stability
    perYear: {
      affection: +0.4,
      trust: -0.3,
      communication: -0.1,
      sharedHistory: +0.1,
      resilience: +0.1
    },
    oneTime: { sharedHistory: +0.3 }
  },

  mw2_quiet_commitment_18_to_22: {
    years: 4,
    // Drift bias: +trust, +sharedHistory, +communication
    perYear: {
      trust: +0.5,
      sharedHistory: +0.4,
      communication: +0.4,
      resilience: +0.1,
      affection: +0.2
    },
    oneTime: { affection: +0.5 }
  }
};
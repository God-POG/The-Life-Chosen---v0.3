// data/core/callbacks.js
// Conditional callback text blocks.
// First matching variant is used; else defaultText.

window.GAME_CALLBACKS = {
  first_grass_touch: {
    variants: [
      {
        conditions: { hasFlag: "romantic" },
        text: "It becomes a story you tell yourself in the dark: not what happened, but what it could have meant."
      },
      {
        conditions: { hasMemory: "asked_name_childhood" },
        text: "Later, you will not remember the words you almost said. You will remember only the brush of her fingers, warm and precise, like a bookmark placed in a page you had not read yet."
      },
      {
        conditions: { hasMemory: "offered_name_childhood" },
        text: "You offered something and the day refused to accept it. Still, her fingers brushed your skin as if to say: I saw you. I saw you anyway."
      },
      {
        conditions: { hasMemory: "didnt_exchange_names" },
        text: "You never learn her name. The touch becomes the closest thing to it: small, careful, and impossible to explain to anyone who was not there."
      }
    ],
    defaultText: "For a while, it feels like something is still happening quietly long after it has ended."
  },

  home_tone: {
    variants: [
      {
        conditions: { backgroundTag: "bg_stable" },
        text: "Home tended to feel ordered, maintained, and quietly reliable, as if steadiness were the natural shape of love."
      },
      {
        conditions: { backgroundTag: "bg_divorced" },
        text: "Home had taught you that closeness could change rooms, rules, and tone without warning, so safety always carried a trace of adjustment."
      },
      {
        conditions: { backgroundTag: "bg_struggle" },
        text: "Home had its own warmth, but it lived beside strain, where comfort was real precisely because it had to be made deliberately."
      },
      {
        conditions: { backgroundTag: "bg_wealthy" },
        text: "Home often felt polished and well-managed, a place where care arrived through provision before it arrived through language."
      },
      {
        conditions: { backgroundTag: "bg_urban" },
        text: "Home felt contained rather than separate, a small controlled space within a world that never fully quieted."
      },
      {
        conditions: { backgroundTag: "bg_overprotective" },
        text: "Home felt carefully managed, as if safety had been constructed deliberately and maintained without pause."
      },
      {
        conditions: { backgroundTag: "bg_neglect" },
        text: "Home felt inconsistent, a place where presence existed but did not always arrive when it was needed."
      },
      {
        conditions: { backgroundTag: "bg_rural" },
        text: "Home felt grounded in place, shaped by familiarity and distance rather than constant change."
      },
      {
        conditions: { backgroundTag: "bg_prodigy" },
        text: "Home felt purposeful, as if growth had always been expected and quietly guided."
      },
      {
        conditions: { backgroundTag: "bg_immigrant" },
        text: "Home carried more than one world at once, a place where identity was held and translated rather than assumed."
      }
    ],
    defaultText: "Home carried its own rhythm, the kind that settled into a person before they knew how to describe it."
  },

  risk_feeling: {
    variants: [
      {
        conditions: { backgroundTag: "bg_stable" },
        text: "Risk felt less like danger than like stepping beyond the edge of what had already been explained."
      },
      {
        conditions: { backgroundTag: "bg_divorced" },
        text: "Risk felt familiar in its own way, like entering one more atmosphere where the rules might shift once you were already inside them."
      },
      {
        conditions: { backgroundTag: "bg_struggle" },
        text: "Risk rarely felt abstract to you. It usually arrived wearing the face of consequence, asking whether the moment was worth the cost."
      },
      {
        conditions: { backgroundTag: "bg_wealthy" },
        text: "Risk felt like loss of control more than ruin itself, the uneasy fact of entering something no one had arranged in advance."
      },
{
  conditions: { backgroundTag: "bg_urban" },
  text: "Risk felt immediate and situational, something managed through awareness rather than avoided entirely."
},
{
  conditions: { backgroundTag: "bg_overprotective" },
  text: "Risk felt unnecessary, something that should have been prevented before it had the chance to exist."
},
{
  conditions: { backgroundTag: "bg_neglect" },
  text: "Risk felt familiar, less an exception than something you had learned to navigate alone."
},
{
  conditions: { backgroundTag: "bg_rural" },
  text: "Risk felt practical, tied to conditions that had to be respected rather than ignored."
},
{
  conditions: { backgroundTag: "bg_prodigy" },
  text: "Risk felt like failure to meet expectation, a deviation from what should have been done correctly."
},
{
  conditions: { backgroundTag: "bg_immigrant" },
  text: "Risk carried weight beyond the moment, as if choices reflected more than just yourself."
}

    ],
    defaultText: "Risk carried the quiet charge of crossing into something that might matter more than expected."
  },

  world_interpretation: {
    variants: [
      {
        conditions: { backgroundTag: "bg_stable" },
        text: "You were used to believing the world made sense if you watched it closely enough."
      },
      {
        conditions: { backgroundTag: "bg_divorced" },
        text: "You had learned that the world could hold more than one truth at once, and that people often lived inside different versions of the same day."
      },
      {
        conditions: { backgroundTag: "bg_struggle" },
        text: "You were used to reading the world for pressure points first: what mattered, what was scarce, what could not be wasted."
      },
      {
        conditions: { backgroundTag: "bg_wealthy" },
        text: "You were used to worlds that had been arranged for smooth passage, which made any roughness feel newly legible."
      },
{
  conditions: { backgroundTag: "bg_urban" },
  text: "You were used to reading the world quickly, knowing it would not slow down to explain itself."
},
{
  conditions: { backgroundTag: "bg_overprotective" },
  text: "You were used to a world that had been filtered for safety, where uncertainty was reduced before it reached you."
},
{
  conditions: { backgroundTag: "bg_neglect" },
  text: "You were used to a world that did not always respond, where meaning had to be formed without confirmation."
},
{
  conditions: { backgroundTag: "bg_rural" },
  text: "You were used to a world defined by familiarity, where distance made the unknown feel significant."
},
{
  conditions: { backgroundTag: "bg_prodigy" },
  text: "You were used to a world that rewarded improvement, where attention followed ability."
},
{
  conditions: { backgroundTag: "bg_immigrant" },
  text: "You were used to holding more than one version of the world at once, adjusting depending on where you stood."
}
    ],
    defaultText: "You were already trying to decide what kind of place this was, and what it might ask of you."
  },

  social_read: {
    variants: [
      {
        conditions: { backgroundTag: "bg_stable" },
        text: "You tended to read people through consistency first, noticing who stayed steady when a moment could have gone another way."
      },
      {
        conditions: { backgroundTag: "bg_divorced" },
        text: "You looked for tonal shifts almost automatically, the small signs that someone might mean more than one thing at once."
      },
      {
        conditions: { backgroundTag: "bg_struggle" },
        text: "You learned to read people quickly, not cynically, but with the practical attention of someone who could not afford to miss what mattered."
      },
      {
        conditions: { backgroundTag: "bg_wealthy" },
        text: "You noticed distance as carefully as warmth, the gap between presentation and whatever a person was not saying aloud."
      },
{
  conditions: { backgroundTag: "bg_urban" },
  text: "You read people quickly, scanning tone and movement for immediate signals."
},
{
  conditions: { backgroundTag: "bg_overprotective" },
  text: "You read situations cautiously, looking for what might go wrong before engaging fully."
},
{
  conditions: { backgroundTag: "bg_neglect" },
  text: "You read people for availability, sensing whether attention would actually be returned."
},
{
  conditions: { backgroundTag: "bg_rural" },
  text: "You read people through familiarity, trusting what repeated and remaining cautious of what did not."
},
{
  conditions: { backgroundTag: "bg_prodigy" },
  text: "You read people for evaluation, noticing where attention sharpened and what it focused on."
},
{
  conditions: { backgroundTag: "bg_immigrant" },
  text: "You read shifts in tone instinctively, aware that context could change how people meant what they said."
}
    ],
    defaultText: "You found yourself reading the other person more carefully than the surface of the moment required."
  },

  hesitation_style: {
    variants: [
      {
        conditions: { backgroundTag: "bg_stable" },
        text: "Your hesitation had the shape of caution taught by care: move gently, do not damage what matters."
      },
      {
        conditions: { backgroundTag: "bg_divorced" },
        text: "Your hesitation came from knowing how quickly a moment could split into different meanings once it was spoken aloud."
      },
      {
        conditions: { backgroundTag: "bg_struggle" },
        text: "You were not naturally drawn to hesitation, but experience had taught you that one badly timed move could carry farther than people admitted."
      },
      {
        conditions: { backgroundTag: "bg_wealthy" },
        text: "Your hesitation often sounded like self-control, though underneath it lived the older fear of doing the wrong thing in full view."
      },
{
  conditions: { backgroundTag: "bg_urban" },
  text: "Your hesitation came from calculation, a quick assessment of timing before acting."
},
{
  conditions: { backgroundTag: "bg_overprotective" },
  text: "Your hesitation felt correct, a learned pause before stepping into uncertainty."
},
{
  conditions: { backgroundTag: "bg_neglect" },
  text: "Your hesitation was self-contained, shaped by the habit of handling things alone."
},
{
  conditions: { backgroundTag: "bg_rural" },
  text: "Your hesitation reflected caution, a respect for conditions that could not be rushed."
},
{
  conditions: { backgroundTag: "bg_prodigy" },
  text: "Your hesitation carried precision, a reluctance to act without getting it right."
},
{
  conditions: { backgroundTag: "bg_immigrant" },
  text: "Your hesitation came from awareness, adjusting expression depending on where you stood."
}
    ],
    defaultText: "Something in you paused, not from indifference, but from the weight of getting the moment wrong."
  },

  identity_weight: {
    variants: [
      {
        conditions: { backgroundTag: "bg_stable" },
        text: "Identity felt tied to being recognizable: dependable, legible, someone whose inner life did not wholly break from the structure around it."
      },
      {
        conditions: { backgroundTag: "bg_divorced" },
        text: "Identity had never felt singular to you. It shifted slightly depending on where you stood and who expected what from you there."
      },
      {
        conditions: { backgroundTag: "bg_struggle" },
        text: "Identity often carried practical weight, as if who you were and what you could manage had been linked for so long they no longer separated cleanly."
      },
      {
        conditions: { backgroundTag: "bg_wealthy" },
        text: "Identity came with inherited expectation, the quiet pressure of being read through context before you ever spoke for yourself."
      },
{
  conditions: { backgroundTag: "bg_urban" },
  text: "Identity felt adaptive, shaped by how well you could keep pace with a changing environment."
},
{
  conditions: { backgroundTag: "bg_overprotective" },
  text: "Identity felt tied to safety, as if independence required stepping beyond what had always been managed."
},
{
  conditions: { backgroundTag: "bg_neglect" },
  text: "Identity felt self-constructed, built without assuming consistent support."
},
{
  conditions: { backgroundTag: "bg_rural" },
  text: "Identity felt rooted, connected to place and shaped by what remained constant."
},
{
  conditions: { backgroundTag: "bg_prodigy" },
  text: "Identity felt performance-linked, as if worth and ability had always been quietly measured."
},
{
  conditions: { backgroundTag: "bg_immigrant" },
  text: "Identity felt layered, carrying both origin and adaptation at once."
}
    ],
    defaultText: "The moment touched something larger than mood alone: the question of who you were becoming inside it."
  },

  emotional_baseline: {
    variants: [
      {
        conditions: { backgroundTag: "bg_stable" },
        text: "Your feelings tended to begin in steadiness, then deepen, which sometimes made strong emotion harder to notice until it was already there."
      },
      {
        conditions: { backgroundTag: "bg_divorced" },
        text: "Your feelings often arrived layered, tenderness and caution moving together closely enough to be mistaken for each other."
      },
      {
        conditions: { backgroundTag: "bg_struggle" },
        text: "Your feelings rarely had the luxury of staying vague for long; they usually pressed toward consequence sooner than you wanted."
      },
      {
        conditions: { backgroundTag: "bg_wealthy" },
        text: "Your feelings often began beneath composure, as if emotion needed to travel through control before it could become visible even to you."
      },
{
  conditions: { backgroundTag: "bg_urban" },
  text: "Your feelings tended to move quickly, shaped by constant input and shifting context."
},
{
  conditions: { backgroundTag: "bg_overprotective" },
  text: "Your feelings often passed through caution first, as if risk needed to be assessed before emotion could settle."
},
{
  conditions: { backgroundTag: "bg_neglect" },
  text: "Your feelings often stabilized internally, less dependent on immediate external response."
},
{
  conditions: { backgroundTag: "bg_rural" },
  text: "Your feelings tended to settle slowly, deepening through familiarity rather than rapid change."
},
{
  conditions: { backgroundTag: "bg_prodigy" },
  text: "Your feelings often tied themselves to outcome, sharpening around success or falling quiet around uncertainty."
},
{
  conditions: { backgroundTag: "bg_immigrant" },
  text: "Your feelings often carried dual awareness, shaped by both personal experience and inherited expectation."
}
    ],
    defaultText: "Whatever you felt, it was already gathering beneath the surface in ways the moment had not fully named yet."
  },

  attach_trust_baseline: {
    variants: [
      {
        conditions: { flagEquals: { attachmentStyle: "secure" } },
        text: "Trust often began as a quiet willingness to keep standing there, to let the moment prove itself without treating uncertainty as a threat."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "guarded" } },
        text: "Trust rarely arrived whole. It assembled itself from small consistencies, each one checked twice before it was allowed to mean too much."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "practical_loyalty" } },
        text: "Trust felt most believable when it had weight behind it, when care showed itself through follow-through instead of promising to be easier than life usually was."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "controlled_distance" } },
        text: "Trust did not usually rush forward in you. It preferred proportion, a closeness measured carefully enough that dignity could remain intact inside it."
      }
    ],
    defaultText: "Trust was never only about liking someone. It was about deciding how much of yourself could rest in their hands."
  },

  attach_guarded_watchfulness: {
    variants: [
      {
        conditions: { flagEquals: { attachmentStyle: "guarded" } },
        text: "Some part of you kept watching the edges of the exchange, listening for the note beneath the note before deciding whether warmth could stay simple."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "controlled_distance" } },
        text: "You were attentive without appearing to be, the old habit of reading a moment thoroughly before letting your own shape change inside it."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "practical_loyalty" } },
        text: "Your watchfulness tended to be practical rather than suspicious, a way of checking whether the moment would actually hold before stepping farther into it."
      }
    ],
    defaultText: "You watched more carefully than the surface of the moment required, as if caution itself might reveal what words had not."
  },

  attach_closeness_tolerance: {
    variants: [
      {
        conditions: { flagEquals: { attachmentStyle: "secure" } },
        text: "Closeness did not alarm you at first. What unsettled you more was how naturally it could begin to matter."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "guarded" } },
        text: "Closeness was possible, but only in portions. Too much of it at once could make even tenderness feel like something to monitor."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "controlled_distance" } },
        text: "You could tolerate nearness best when it retained some shape, some margin that kept the feeling from becoming disorderly too quickly."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "practical_loyalty" } },
        text: "Closeness felt safest when it came attached to something concrete: routine, effort, return, a reason to trust that it would still exist tomorrow."
      }
    ],
    defaultText: "Closeness always carried two questions at once: how good it felt, and how much of it you could bear without losing your balance."
  },

  attach_misreading_fear: {
    variants: [
      {
        conditions: { flagEquals: { attachmentStyle: "guarded" } },
        text: "What frightened you was not only rejection. It was the older fear of having understood a moment too generously and then needing to live with the correction."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "controlled_distance" } },
        text: "Misreading felt especially dangerous when composure mattered to you; once a feeling was shown too plainly, it could not be edited back into elegance."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "secure" } },
        text: "Even you were not immune to the private embarrassment of being wrong about warmth, only less practiced at assuming error before it arrived."
      }
    ],
    defaultText: "There was always the possibility of misreading, of giving the moment more meaning than it had agreed to carry."
  },

  attach_return_instinct: {
    variants: [
      {
        conditions: { flagEquals: { attachmentStyle: "secure" } },
        text: "Part of you believed in return almost before it had evidence, in the quiet dignity of coming back until something became real through repetition."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "practical_loyalty" } },
        text: "Return meant more to you than intensity ever did. Showing up again was the nearest thing affection had to proof."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "guarded" } },
        text: "You noticed return sharply because it answered a question you rarely asked aloud: would the person still be themselves when the moment came around again?"
      }
    ],
    defaultText: "Return had its own emotional authority. Repeated presence changed the scale of what a moment could mean."
  },

  attach_reassurance_interpretation: {
    variants: [
      {
        conditions: { flagEquals: { securityModel: "structure" } },
        text: "Reassurance landed best when it felt steady rather than dramatic, something built into the moment instead of declared over it."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "guarded" } },
        text: "Reassurance helped, though part of you still checked whether it would survive contact with the next difficult tone or altered circumstance."
      },
      {
        conditions: { flagEquals: { selfWorthModel: "usefulness" } },
        text: "Reassurance felt most convincing when it came with evidence, some sign that you were not only wanted in theory but relied on in practice."
      },
      {
        conditions: { flagEquals: { selfWorthModel: "expectation_burden" } },
        text: "Reassurance often had to pass through skepticism first, not because you disbelieved affection, but because you were used to being valued through performance before presence."
      }
    ],
    defaultText: "Reassurance was never only heard. It was tested against everything else the moment seemed likely to become."
  },

  attach_distance_meaning: {
    variants: [
      {
        conditions: { flagEquals: { attachmentStyle: "guarded" } },
        text: "Distance rarely stayed neutral for long. It began asking questions before anyone had fully agreed to hear them."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "controlled_distance" } },
        text: "Distance could feel almost civilized to you, a way of preserving order, until it lasted long enough to start resembling loss instead."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "secure" } },
        text: "Distance did not immediately threaten the bond in your mind, though it made you notice which connections could hold shape without constant proof."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "practical_loyalty" } },
        text: "Distance became meaningful only when it began altering effort, because absence itself mattered less to you than what people still chose to carry across it."
      }
    ],
    defaultText: "Distance changed the emotional math of things, even when no one had yet named exactly how."
  },

  attach_trust_pacing: {
    variants: [
      {
        conditions: { flagEquals: { vulnerabilityStyle: "gradual_opening" } },
        text: "You trusted best by degrees, not because you were withholding, but because some forms of honesty needed time to become livable."
      },
      {
        conditions: { flagEquals: { vulnerabilityStyle: "test_before_trust" } },
        text: "Trust in you liked to arrive with trial runs attached, small chances for the other person to reveal what they would do with unguardedness."
      },
      {
        conditions: { flagEquals: { vulnerabilityStyle: "restrained_need" } },
        text: "Trust moved at the speed of necessity, opening only as far as the moment could justify without asking your need to become its own exposure."
      },
      {
        conditions: { flagEquals: { vulnerabilityStyle: "hidden_until_safe" } },
        text: "Trust advanced quietly, beneath the surface first, until the moment felt controlled enough for the deeper part of it to show."
      }
    ],
    defaultText: "Trust had its own pace, and forcing it faster usually made it less reliable rather than more."
  },

  attach_signal_reading: {
    variants: [
      {
        conditions: { flagEquals: { conflictModel: "monitor_tone" } },
        text: "You read signals not only in words but in their temperature, the slight change in pressure that suggested a sentence might mean more than it admitted."
      },
      {
        conditions: { flagEquals: { conflictModel: "maintain_composure" } },
        text: "You noticed how a person kept themselves composed, because control often revealed as much as disclosure once you knew where to look."
      },
      {
        conditions: { flagEquals: { conflictModel: "repair" } },
        text: "You tended to notice signals through continuity: who moved closer after strain, who softened instead of sharpening, who tried to keep the moment intact."
      }
    ],
    defaultText: "The moment gave off signals beyond its obvious content, and some part of you was already translating them."
  },

  attach_belonging_threshold: {
    variants: [
      {
        conditions: { flagEquals: { selfWorthModel: "steady" } },
        text: "Belonging came easiest when it did not need to be earned all over again in every room."
      },
      {
        conditions: { flagEquals: { selfWorthModel: "context_sensitive" } },
        text: "Belonging could feel real and provisional at once, changing slightly with tone, place, and whatever the room seemed prepared to hold."
      },
      {
        conditions: { flagEquals: { selfWorthModel: "usefulness" } },
        text: "Belonging made deepest sense to you when you could point to what you offered, what you carried, what part of the structure would feel your absence."
      },
      {
        conditions: { flagEquals: { selfWorthModel: "expectation_burden" } },
        text: "Belonging often came entangled with expectation, as though being wanted and being measured had arrived in the same package too many times to separate cleanly."
      }
    ],
    defaultText: "Belonging was never only emotional. It also asked whether the moment had truly made room for you."
  },

  conflict_repair_instinct: {
    variants: [
      {
        conditions: { flagEquals: { conflictModel: "repair" } },
        text: "Even in tension, some part of you kept looking for the repair line, the small action that might keep the moment from hardening into damage."
      },
      {
        conditions: { flagEquals: { conflictModel: "cost_assessment" } },
        text: "You did not rush toward repair sentimentally. You first looked at what had actually been harmed, and what it would take to stabilize it."
      }
    ],
    defaultText: "Conflict did not feel fully complete to you while some form of repair still seemed possible."
  },

  conflict_tone_surveillance: {
    variants: [
      {
        conditions: { flagEquals: { conflictModel: "monitor_tone" } },
        text: "You heard tension earliest in tone, in the half-degree shift that told you a conversation had begun meaning more than its words claimed."
      },
      {
        conditions: { flagEquals: { conflictModel: "maintain_composure" } },
        text: "You were alert to tonal change even when everyone still sounded civilized, because polished strain was still strain once you knew its texture."
      }
    ],
    defaultText: "Before the content of conflict was fully visible, its tone had already started moving through the room."
  },

  conflict_pressure_response: {
    variants: [
      {
        conditions: { flagEquals: { conflictModel: "repair" } },
        text: "Pressure made you want to steady the exchange before it lost proportion, to keep both people recognizable inside the strain."
      },
      {
        conditions: { flagEquals: { conflictModel: "monitor_tone" } },
        text: "Under pressure, your attention narrowed toward nuance, toward the exact place where a manageable moment might tip into something less reversible."
      },
      {
        conditions: { flagEquals: { conflictModel: "cost_assessment" } },
        text: "Pressure translated quickly into consequence in your mind. You wanted to know what this would cost before deciding how much feeling it deserved."
      },
      {
        conditions: { flagEquals: { conflictModel: "maintain_composure" } },
        text: "Pressure made composure feel especially valuable, not because feeling disappeared, but because disorder seemed likely to make everything harder to recover."
      }
    ],
    defaultText: "Pressure altered your instincts immediately, calling up whatever form of self-protection had become most practiced in you."
  },

  conflict_composure_mask: {
    variants: [
      {
        conditions: { flagEquals: { conflictModel: "maintain_composure" } },
        text: "You could still look composed even when the feeling had already turned sharp underneath, the old skill of keeping the surface cleaner than the inside."
      },
      {
        conditions: { flagEquals: { vulnerabilityStyle: "hidden_until_safe" } },
        text: "Composure came to you almost automatically, less as pretense than as a temporary architecture around whatever you were not yet ready to expose."
      }
    ],
    defaultText: "The surface of you stayed cleaner than the emotion itself, at least for a while."
  },

  conflict_cost_calculation: {
    variants: [
      {
        conditions: { flagEquals: { conflictModel: "cost_assessment" } },
        text: "Part of you measured conflict for cost before content, asking what this would drain, damage, delay, or demand once the feeling had spent itself."
      },
      {
        conditions: { flagEquals: { securityModel: "scarcity_management" } },
        text: "You rarely treated tension as free. Even an emotional moment could carry practical fallout, and some part of you felt responsible for noticing that first."
      }
    ],
    defaultText: "Conflict always carried a price somewhere, even when no one had yet put numbers or names to it."
  },

  conflict_hurt_translation: {
    variants: [
      {
        conditions: { flagEquals: { attachmentStyle: "guarded" } },
        text: "Hurt in you often translated first into scrutiny, a heightened need to understand the moment before letting yourself admit how much it had landed."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "controlled_distance" } },
        text: "Hurt often became restraint before it became language, as if feeling it too openly would give the moment more control than you could accept."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "practical_loyalty" } },
        text: "Hurt tended to become assessment in you: what changed, what was risked, what this meant for the actual structure between people."
      }
    ],
    defaultText: "Hurt rarely arrived in pure form. It translated itself into whatever mode of self-protection you knew best."
  },

  conflict_aftershock: {
    variants: [
      {
        conditions: { flagEquals: { conflictModel: "repair" } },
        text: "After conflict, part of you stayed turned toward mending, unable to feel settled while the exchange still seemed misaligned."
      },
      {
        conditions: { flagEquals: { conflictModel: "monitor_tone" } },
        text: "The aftershock in you was tonal. Long after the words had finished, you were still listening to how they had been said."
      },
      {
        conditions: { flagEquals: { conflictModel: "maintain_composure" } },
        text: "The aftershock often arrived in private, once there was finally enough room for the composure to stop doing its work."
      },
      {
        conditions: { flagEquals: { conflictModel: "cost_assessment" } },
        text: "What lingered after conflict was rarely only feeling. It was the sense of having incurred something that would still need to be managed later."
      }
    ],
    defaultText: "Conflict had an afterlife in you, a quieter continuation that persisted after the visible part had ended."
  },

  conflict_approach_bias: {
    variants: [
      {
        conditions: { flagEquals: { conflictModel: "repair" } },
        text: "Your instinct was to move closer to the problem if closeness still seemed capable of helping."
      },
      {
        conditions: { flagEquals: { conflictModel: "monitor_tone" } },
        text: "You approached conflict carefully, testing the air around it before stepping fully inside."
      },
      {
        conditions: { flagEquals: { conflictModel: "cost_assessment" } },
        text: "You approached tension the way you approached other costly things: not avoiding it, but refusing to enter without knowing what you were spending."
      },
      {
        conditions: { flagEquals: { conflictModel: "maintain_composure" } },
        text: "You preferred an approach that preserved form, believing even difficult truth landed better when it arrived with its edges intact."
      }
    ],
    defaultText: "Your first movement in tension revealed a great deal about what you believed conflict was likely to do."
  },

  conflict_softening_move: {
    variants: [
      {
        conditions: { flagEquals: { conflictModel: "repair" } },
        text: "Your softening move was usually sincere and practical at once, the quiet effort to make the other person feel less alone inside the strain."
      },
      {
        conditions: { flagEquals: { conflictModel: "monitor_tone" } },
        text: "You softened conflict by adjusting tone first, because once the temperature came down, the truth had a better chance of surviving its own delivery."
      },
      {
        conditions: { flagEquals: { conflictModel: "cost_assessment" } },
        text: "You softened tension by narrowing it to what actually needed solving, trimming away any extra emotional expense the moment did not require."
      },
      {
        conditions: { flagEquals: { conflictModel: "maintain_composure" } },
        text: "You softened a moment by restoring proportion, returning it to a scale where no one had to become messier than they could bear."
      }
    ],
    defaultText: "Even in tension, some part of you looked for the move that might lower the stakes without falsifying them."
  },

  conflict_unspoken_residue: {
    variants: [
      {
        conditions: { flagEquals: { vulnerabilityStyle: "test_before_trust" } },
        text: "What remained unspoken often mattered almost as much as the argument itself, because silence after strain could still be carrying a verdict."
      },
      {
        conditions: { flagEquals: { vulnerabilityStyle: "hidden_until_safe" } },
        text: "Unspoken residue collected beneath your composure, a second conversation continuing inward after the visible one had already ended."
      },
      {
        conditions: { flagEquals: { vulnerabilityStyle: "restrained_need" } },
        text: "What stayed unsaid often had the weight of need in it, the part of the conflict that wanted something but disliked having to ask."
      }
    ],
    defaultText: "Some part of the conflict remained unspoken, and that remainder kept shaping the moment from underneath."
  },

  security_structure_comfort: {
    variants: [
      {
        conditions: { flagEquals: { securityModel: "structure" } },
        text: "Structure did not feel restrictive to you in itself. It felt like the mercy of knowing what would happen next and where things could safely rest."
      },
      {
        conditions: { flagEquals: { securityModel: "control" } },
        text: "Structure felt best when it was polished enough to reduce surprise, to keep the world from asking for too much improvisation at once."
      }
    ],
    defaultText: "There was comfort in structure, in the parts of life that held shape even before emotion entered them."
  },

  security_adaptation_reflex: {
    variants: [
      {
        conditions: { flagEquals: { securityModel: "adaptation" } },
        text: "You adapted quickly almost before you meant to, reading the room for the version of yourself most likely to move through it without extra damage."
      },
      {
        conditions: { flagEquals: { securityModel: "scarcity_management" } },
        text: "Adaptation in you often looked practical: not becoming someone else, just adjusting fast enough that the moment would ask for less waste."
      }
    ],
    defaultText: "Adaptation had become instinctive, one of the quiet survival skills that stopped feeling like a skill because it was always already happening."
  },

  security_scarcity_evaluation: {
    variants: [
      {
        conditions: { flagEquals: { securityModel: "scarcity_management" } },
        text: "You evaluated the moment the way some people evaluate supplies, noticing what was available, what was being asked, and whether the margin for error felt real."
      },
      {
        conditions: { flagEquals: { selfWorthModel: "usefulness" } },
        text: "Scarcity taught you to notice the weight of things early, including emotional ones, including how much energy a moment might ask you to spend."
      }
    ],
    defaultText: "Some part of you still evaluated the moment for cost and margin, as if not all forms of safety could be separated from resource."
  },

  security_control_seek: {
    variants: [
      {
        conditions: { flagEquals: { securityModel: "control" } },
        text: "Control often felt less like dominance than relief, the narrowing of uncertainty into shapes a person could manage without public strain."
      },
      {
        conditions: { flagEquals: { vulnerabilityStyle: "hidden_until_safe" } },
        text: "When control mattered to you, it was usually because uncontrolled feeling seemed capable of exposing too much before the room had earned it."
      }
    ],
    defaultText: "Some part of you still reached for control whenever a moment threatened to widen faster than you could interpret it."
  },

  security_risk_filter: {
    variants: [
      {
        conditions: { flagEquals: { securityModel: "structure" } },
        text: "You filtered risk through disruption first, asking what would be unsettled if the moment went poorly."
      },
      {
        conditions: { flagEquals: { securityModel: "adaptation" } },
        text: "Your risk filter was tuned to instability, to how quickly the rules of a moment might shift once you were already inside it."
      },
      {
        conditions: { flagEquals: { securityModel: "scarcity_management" } },
        text: "You filtered risk through consequence, because the abstract possibility of trouble meant less to you than the concrete shape of what it would cost."
      },
      {
        conditions: { flagEquals: { securityModel: "control" } },
        text: "Your risk filter sharpened around loss of composure, the point where a situation stopped being readable and started becoming exposure."
      }
    ],
    defaultText: "Risk reached you only after passing through an internal filter already trained by older conditions."
  },

  security_change_tolerance: {
    variants: [
      {
        conditions: { flagEquals: { securityModel: "structure" } },
        text: "You tolerated change best when it could be named, paced, and given somewhere orderly to land."
      },
      {
        conditions: { flagEquals: { securityModel: "adaptation" } },
        text: "Change did not shock you as much as it exhausted you, because part of you had long ago learned to start adjusting before anyone officially announced the need."
      },
      {
        conditions: { flagEquals: { securityModel: "control" } },
        text: "Change became tolerable once it could be managed into form. Until then, it often felt less like movement than like threat."
      }
    ],
    defaultText: "Your relationship to change was rarely simple; tolerance depended on whether the moment still felt interpretable."
  },

  security_resource_attention: {
    variants: [
      {
        conditions: { flagEquals: { securityModel: "scarcity_management" } },
        text: "Your attention moved instinctively toward resources, not only money or time, but patience, energy, goodwill, everything a moment might quietly consume."
      },
      {
        conditions: { flagEquals: { selfWorthModel: "usefulness" } },
        text: "You tended to notice what was being used up and what was still available, because usefulness and care had been linked in you for too long to separate easily."
      }
    ],
    defaultText: "You had a practical awareness of resources, even in moments that pretended to be purely emotional."
  },

  security_order_interpretation: {
    variants: [
      {
        conditions: { flagEquals: { securityModel: "structure" } },
        text: "Order looked trustworthy to you at first, not because it solved everything, but because it suggested someone had thought ahead on purpose."
      },
      {
        conditions: { flagEquals: { securityModel: "control" } },
        text: "Order could be beautiful to you, though you also understood how easily polish might stand in for depth if no one looked past the surface."
      },
      {
        conditions: { flagEquals: { securityModel: "adaptation" } },
        text: "You rarely mistook order for permanence. Even calm rooms could still be carrying a second weather underneath."
      }
    ],
    defaultText: "Order always meant something to you, though not always the same thing it appeared to promise."
  },

  security_exposure_threshold: {
    variants: [
      {
        conditions: { flagEquals: { securityModel: "control" } },
        text: "Your exposure threshold was low whenever the room felt public, because some part of you still believed uncontained feeling became harder to recover than silence."
      },
      {
        conditions: { flagEquals: { securityModel: "adaptation" } },
        text: "You could manage exposure if the atmosphere stayed readable, but once the terms began shifting, your tolerance narrowed quickly."
      },
      {
        conditions: { flagEquals: { securityModel: "structure" } },
        text: "You handled exposure best when the surrounding structure felt sound enough to keep the moment from turning chaotic around the feeling."
      }
    ],
    defaultText: "Every moment had an exposure threshold, the point past which honesty stopped feeling merely brave and started feeling precarious."
  },

  security_future_weight: {
    variants: [
      {
        conditions: { flagEquals: { securityModel: "scarcity_management" } },
        text: "The future often arrived in your mind as weight before possibility, as the next thing that would need accounting before it could be believed in safely."
      },
      {
        conditions: { flagEquals: { securityModel: "structure" } },
        text: "You tended to think of the future in terms of buildable shape, something that might remain bearable if planned for well enough."
      },
      {
        conditions: { flagEquals: { securityModel: "control" } },
        text: "The future felt manageable when it could be arranged into clear lines, less so when it insisted on being felt before it could be governed."
      },
      {
        conditions: { flagEquals: { securityModel: "adaptation" } },
        text: "You rarely expected the future to stay singular for long. Even possibility seemed likely to revise itself once real life entered the room."
      }
    ],
    defaultText: "The future did not arrive empty. It carried whatever older model of safety your mind had already learned to project onto it."
  },

  vulnerability_gradual_opening: {
    variants: [
      {
        conditions: { flagEquals: { vulnerabilityStyle: "gradual_opening" } },
        text: "You opened gradually not from reluctance alone, but from the belief that some truths became more trustworthy once they had survived time."
      }
    ],
    defaultText: "Vulnerability in you preferred sequence over suddenness, a slow consent rather than a dramatic reveal."
  },

  vulnerability_hidden_need: {
    variants: [
      {
        conditions: { flagEquals: { vulnerabilityStyle: "hidden_until_safe" } },
        text: "Need in you often stayed hidden until safety had shape, as if wanting something too openly might hand the moment more power than it had earned."
      },
      {
        conditions: { flagEquals: { vulnerabilityStyle: "restrained_need" } },
        text: "Need tended to go quiet inside you before it went away, reducing itself into manageable size rather than asking to be carried by someone else."
      }
    ],
    defaultText: "Need often hid first, waiting to see whether the moment had truly made room for it."
  },

  vulnerability_usefulness_frame: {
    variants: [
      {
        conditions: { flagEquals: { selfWorthModel: "usefulness" } },
        text: "Part of you still framed value through usefulness, through whether you were helping, easing, holding, making yourself worth the trouble of being kept close."
      }
    ],
    defaultText: "Value was never only a feeling in you. It often wanted proof in action before it fully believed itself."
  },

  vulnerability_expectation_burden: {
    variants: [
      {
        conditions: { flagEquals: { selfWorthModel: "expectation_burden" } },
        text: "Expectation often sat on your shoulders before vulnerability could, making it difficult to tell where being known ended and being measured began."
      }
    ],
    defaultText: "Vulnerability always had to pass through expectation first, through the older question of what the moment would require you to be."
  },

  vulnerability_context_selfworth: {
    variants: [
      {
        conditions: { flagEquals: { selfWorthModel: "context_sensitive" } },
        text: "Your self-worth shifted subtly with context, not vanishing exactly, but changing temperature depending on what the room seemed prepared to reflect back."
      },
      {
        conditions: { flagEquals: { securityModel: "adaptation" } },
        text: "Context changed the inner scale quickly for you; who you felt yourself to be depended more than you liked on what atmosphere had already settled over the exchange."
      }
    ],
    defaultText: "Self-worth was not always a fixed climate. Sometimes it behaved more like weather, responsive to tone, place, and the shape of the room."
  },

  vulnerability_seen_response: {
    variants: [
      {
        conditions: { flagEquals: { vulnerabilityStyle: "gradual_opening" } },
        text: "Being seen did not frighten you immediately; what unsettled you more was how much longer the feeling could linger once it had been allowed to matter."
      },
      {
        conditions: { flagEquals: { vulnerabilityStyle: "test_before_trust" } },
        text: "Being seen could feel intimate and dangerous at once, because once another person noticed the deeper thing, they also gained the chance to mishandle it."
      },
      {
        conditions: { flagEquals: { vulnerabilityStyle: "hidden_until_safe" } },
        text: "Being seen before you were ready often felt like losing control of the edit, the older discomfort of exposure arriving before consent had caught up."
      },
      {
        conditions: { flagEquals: { vulnerabilityStyle: "restrained_need" } },
        text: "Being seen touched the part of you that disliked requiring anything, the private worry that recognition might quietly turn into obligation."
      }
    ],
    defaultText: "Being seen was never only flattering. It also raised the question of what the other person might do with that access."
  },

  vulnerability_asking_cost: {
    variants: [
      {
        conditions: { flagEquals: { vulnerabilityStyle: "restrained_need" } },
        text: "Asking often felt expensive to you, not because the request was large, but because needing anything aloud could make you feel suddenly too visible."
      },
      {
        conditions: { flagEquals: { vulnerabilityStyle: "test_before_trust" } },
        text: "You preferred not to ask until you had some evidence the answer would be given in good faith; uncertainty made even small requests feel exposing."
      },
      {
        conditions: { flagEquals: { selfWorthModel: "expectation_burden" } },
        text: "Asking could feel like admitting you had stepped outside competence, outside the part of you that usually preferred to remain equal to expectation."
      }
    ],
    defaultText: "Asking had a cost in you beyond the request itself, a second charge paid in exposure."
  },

  vulnerability_care_reception: {
    variants: [
      {
        conditions: { flagEquals: { selfWorthModel: "steady" } },
        text: "Care could land in you cleanly when it felt sincere, without immediately requiring a debt ledger to justify its own existence."
      },
      {
        conditions: { flagEquals: { selfWorthModel: "usefulness" } },
        text: "Receiving care was easier when you could reciprocate visibly, when closeness still let you feel like a contributor instead of only a recipient."
      },
      {
        conditions: { flagEquals: { selfWorthModel: "expectation_burden" } },
        text: "Care could unsettle you by its gentleness alone, because gentleness often arrived where expectation normally stood guard."
      },
      {
        conditions: { flagEquals: { selfWorthModel: "context_sensitive" } },
        text: "Care landed differently depending on tone and setting; the same gesture could feel grounding in one atmosphere and uncertain in another."
      }
    ],
    defaultText: "Receiving care was its own emotional event, shaped not only by the gesture but by whatever model of worth you brought to it."
  },

  vulnerability_self_disclosure: {
    variants: [
      {
        conditions: { flagEquals: { vulnerabilityStyle: "gradual_opening" } },
        text: "You disclosed yourself in increments, each one making the next slightly more possible without requiring you to leap farther than the moment had earned."
      },
      {
        conditions: { flagEquals: { vulnerabilityStyle: "test_before_trust" } },
        text: "Self-disclosure in you often came disguised as a test, a partial truth offered first to see how gently the room would hold it."
      },
      {
        conditions: { flagEquals: { vulnerabilityStyle: "hidden_until_safe" } },
        text: "You revealed yourself only after the feeling had already spent time out of sight, as if privacy were the condition that made honesty bearable."
      },
      {
        conditions: { flagEquals: { vulnerabilityStyle: "restrained_need" } },
        text: "Self-disclosure tended to arrive trimmed down, the inner thing translated into a version that asked for less witness and less rescue."
      }
    ],
    defaultText: "Self-disclosure always involved translation, deciding how much of the interior to let survive the trip into language."
  },

  vulnerability_inner_permission: {
    variants: [
      {
        conditions: { flagEquals: { selfWorthModel: "steady" } },
        text: "Some part of you was able to grant itself permission to feel before proving the feeling had fully deserved to exist."
      },
      {
        conditions: { flagEquals: { selfWorthModel: "context_sensitive" } },
        text: "Inner permission came and went with the atmosphere, as if the self inside you still listened closely to what the room would allow."
      },
      {
        conditions: { flagEquals: { selfWorthModel: "usefulness" } },
        text: "You gave yourself permission most easily when feeling and function could coexist, when need did not require you to stop being useful."
      },
      {
        conditions: { flagEquals: { selfWorthModel: "expectation_burden" } },
        text: "Permission had to work against expectation in you, against the older habit of editing emotion until it no longer threatened the image of competence."
      }
    ],
    defaultText: "Before anyone else could make room for the feeling, some part of you still had to grant it permission to exist."
  },
  memory_echo: {
    variants: [
      {
        conditions: { hasMemory: "meet_stone_accepted" },
        text: "The memory returns with the quiet authority of something once chosen without fully understanding its future weight."
      },
      {
        conditions: { hasMemory: "meet_crossed_stone" },
        text: "You still remember the crossing, not as bravery exactly, but as the first time uncertainty became shared ground."
      },
      {
        conditions: { hasMemory: "ne_acknowledged_pattern" },
        text: "The pattern between you had once been named aloud, and that older honesty still altered the shape of silence now."
      }
    ],
    defaultText: "Memory rarely stayed in the past for long. It kept leaning quietly into the present, asking to be felt again."
  },

  memory_private_landmark: {
    variants: [
      {
        conditions: { hasMemory: "meet_stone_halfway" },
        text: "Half-finished gestures stayed with you longest, perhaps because they preserved the feeling before explanation had the chance to flatten it."
      },
      {
        conditions: { hasMemory: "meet_didnt_cross" },
        text: "Even the moments of distance had become landmarks between you, proof that meaning did not always require closeness to begin."
      }
    ],
    defaultText: "Some memories became private landmarks, not dramatic enough for story, but durable enough to keep shaping how you moved."
  },

  memory_unfinished_pull: {
    variants: [
      {
        conditions: { hasMemory: "meet_stone_declined_polite" },
        text: "What stayed with you was not refusal itself, but the way politeness can preserve a moment while still leaving it slightly unresolved."
      },
      {
        conditions: { hasMemory: "ne_left_corner_moment_unspoken" },
        text: "The unspoken moment still held charge, the kind that survives precisely because it was never forced fully into language."
      }
    ],
    defaultText: "Unfinished moments had a way of surviving longer than complete ones, as if the mind kept returning to supply what life had withheld."
  },

  shared_history_density: {
    variants: [
      {
        conditions: { flagEquals: { attachmentStyle: "secure" } },
        text: "Shared history felt dense rather than decorative to you, layered enough that even ordinary exchanges carried earlier versions of themselves inside them."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "guarded" } },
        text: "Shared history mattered because it let trust accumulate slowly, each remembered return making the next one slightly harder to dismiss."
      }
    ],
    defaultText: "History had depth now. Even simple moments arrived carrying older ones behind them."
  },

  shared_history_fragility: {
    variants: [
      {
        conditions: { flagEquals: { securityModel: "adaptation" } },
        text: "You knew history could matter deeply and still remain vulnerable to tone, timing, and the invisible shifts that changed how the same bond felt in different rooms."
      },
      {
        conditions: { flagEquals: { securityModel: "control" } },
        text: "History mattered to you, though you also knew how easily old meaning could be unsettled once the present lost its shape."
      }
    ],
    defaultText: "History did not guarantee safety. It only made the stakes of the present more precise."
  },

  pacing_patience: {
    variants: [
      {
        conditions: { flagEquals: { vulnerabilityStyle: "gradual_opening" } },
        text: "Patience never felt passive to you. It felt like giving the moment enough time to become true in its own proportions."
      },
      {
        conditions: { flagEquals: { vulnerabilityStyle: "test_before_trust" } },
        text: "Patience often protected you from false acceleration, from mistaking early warmth for proof before the exchange had earned that conclusion."
      }
    ],
    defaultText: "There was its own kind of discipline in not forcing the moment faster than it could honestly go."
  },

  pacing_acceleration_fear: {
    variants: [
      {
        conditions: { flagEquals: { attachmentStyle: "controlled_distance" } },
        text: "What unsettled you was not intensity itself, but how quickly intensity could strip a moment of its edges and make retreat feel graceless."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "guarded" } },
        text: "Sudden acceleration always made you suspicious of the moment's stability, as though anything moving that fast might still split when pressure arrived."
      }
    ],
    defaultText: "Some part of you resisted speed, preferring emotion to remain legible while it deepened."
  },

  reciprocity_sensitivity: {
    variants: [
      {
        conditions: { flagEquals: { selfWorthModel: "usefulness" } },
        text: "Reciprocity mattered sharply to you. Being cared for felt safest when you could feel yourself contributing to the structure as well."
      },
      {
        conditions: { flagEquals: { selfWorthModel: "steady" } },
        text: "You could accept unevenness for a while, though some part of you still listened for whether effort was being met with effort."
      }
    ],
    defaultText: "You were attentive to reciprocity, to whether the exchange was being carried by one person or truly held by both."
  },

  reciprocity_imbalance_read: {
    variants: [
      {
        conditions: { flagEquals: { conflictModel: "cost_assessment" } },
        text: "Imbalance registered in you quickly, not as moral drama, but as the practical question of whether the structure could keep holding at this rate."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "guarded" } },
        text: "Imbalance often triggered an older caution in you, the sense that unequal effort might be the first warning of a deeper asymmetry still forming."
      }
    ],
    defaultText: "Even before anyone named it, imbalance had already begun shaping the emotional weather of the moment."
  },

  longing_containment: {
    variants: [
      {
        conditions: { flagEquals: { vulnerabilityStyle: "hidden_until_safe" } },
        text: "Longing in you preferred containment, not because it was small, but because wanting too visibly could make the whole room feel less governable."
      },
      {
        conditions: { flagEquals: { vulnerabilityStyle: "restrained_need" } },
        text: "Longing often translated itself downward in you, becoming something quieter and more manageable before it ever reached language."
      }
    ],
    defaultText: "Longing did not always make itself known dramatically. Sometimes it appeared only in what you could not quite stop noticing."
  },

  longing_recognition: {
    variants: [
      {
        conditions: { flagEquals: { attachmentStyle: "secure" } },
        text: "You recognized longing by how natural it felt to keep returning to the same person in thought, even when nothing urgent had happened."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "practical_loyalty" } },
        text: "Longing announced itself to you through habit more than fantasy, in how firmly someone had begun occupying the structure of your ordinary life."
      }
    ],
    defaultText: "Longing often revealed itself less through declaration than through repetition, through the mind's refusal to move on cleanly."
  },

  tenderness_threshold: {
    variants: [
      {
        conditions: { flagEquals: { attachmentStyle: "guarded" } },
        text: "Tenderness became real to you exactly where it became difficult to dismiss, where its gentleness started carrying the risk of actual consequence."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "controlled_distance" } },
        text: "Tenderness was easiest to bear while it remained elegant, but once it began asking for openness, the older discomfort returned with it."
      }
    ],
    defaultText: "Tenderness always crossed a threshold somewhere, moving from pleasant feeling into something harder to remain detached from."
  },

  tenderness_afterimage: {
    variants: [
      {
        conditions: { flagEquals: { selfWorthModel: "context_sensitive" } },
        text: "Tenderness often stayed with you after the moment itself had ended, altering the next room, the next silence, the next private reading of yourself."
      },
      {
        conditions: { flagEquals: { selfWorthModel: "expectation_burden" } },
        text: "The afterimage of tenderness could feel almost destabilizing, as if softness had reached places usually governed by self-command."
      }
    ],
    defaultText: "Some gestures left an afterimage, softening the inner atmosphere long after their visible form had disappeared."
  },

  hope_management: {
    variants: [
      {
        conditions: { flagEquals: { attachmentStyle: "guarded" } },
        text: "Hope in you was rarely naive. It advanced carefully, trying not to outgrow the evidence before the evidence had a chance to hold."
      },
      {
        conditions: { flagEquals: { securityModel: "scarcity_management" } },
        text: "You managed hope like a finite resource, unwilling to spend too much of it in places that had not yet shown they could sustain return."
      }
    ],
    defaultText: "Hope was never only feeling. It also involved judgment, pacing, and the willingness to let possibility remain possible without overclaiming it."
  },

  hope_visibility: {
    variants: [
      {
        conditions: { flagEquals: { vulnerabilityStyle: "test_before_trust" } },
        text: "Visible hope made you uneasy, not because hope was shameful, but because once another person could see it, they could begin shaping it too."
      },
      {
        conditions: { flagEquals: { vulnerabilityStyle: "gradual_opening" } },
        text: "You preferred hope that ripened privately first, becoming sturdy enough inwardly before it risked being reflected back from outside."
      }
    ],
    defaultText: "Hope became more precarious the moment it turned outward and could be read by someone else."
  },

  emotional_timing_awareness: {
    variants: [
      {
        conditions: { flagEquals: { securityModel: "adaptation" } },
        text: "Timing rarely felt trivial to you. The same truth could land as safety or damage depending on the weather already moving through the room."
      },
      {
        conditions: { flagEquals: { conflictModel: "monitor_tone" } },
        text: "You were always listening for emotional timing, for the difference between honesty arriving helpfully and honesty arriving half a beat too late."
      }
    ],
    defaultText: "Timing changed what a feeling could become. You knew that even when no one else in the moment seemed willing to admit it."
  },

  emotional_overexposure_fear: {
    variants: [
      {
        conditions: { flagEquals: { securityModel: "control" } },
        text: "What you feared was not feeling itself but overexposure, the point where emotion stopped being communicable and started becoming hard to recover from."
      },
      {
        conditions: { flagEquals: { vulnerabilityStyle: "hidden_until_safe" } },
        text: "You disliked the sense of having shown more than the room had earned, more than the moment had been shaped carefully enough to hold."
      }
    ],
    defaultText: "There was always a line beyond which honesty started feeling less brave than irreversible."
  },

  attention_fixation: {
    variants: [
      {
        conditions: { flagEquals: { attachmentStyle: "secure" } },
        text: "Once your attention settled, it rarely did so noisily. It simply kept returning, quietly reorganizing what the day felt like from inside."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "guarded" } },
        text: "Your attention could become fixed before your trust fully understood it, which only made the feeling harder to classify cleanly."
      }
    ],
    defaultText: "Attention had already begun gathering around the person in a way that made the ordinary feel slightly reorganized."
  },

    attention_split_cost: {
    variants: [
      {
        conditions: { flagEquals: { securityModel: "scarcity_management" } },
        text: "Attention always had a cost in your mind. To give it fully somewhere meant something else would go unwatched, delayed, or less well held."
      },
      {
        conditions: { flagEquals: { selfWorthModel: "usefulness" } },
        text: "You felt the split cost of attention sharply, because focusing on one person or problem always raised the quieter question of what else you were no longer helping."
      }
    ],
    defaultText: "Even attention was not free. To focus deeply on one thing always changed what else you could afford to keep carrying at the same intensity."
  },

  domestic_intimacy_read: {
    variants: [
      {
        conditions: { flagEquals: { securityModel: "structure" } },
        text: "Domestic details moved you more than spectacle ever could, perhaps because steadiness had long ago taught you how much love could live in maintenance."
      },
      {
        conditions: { flagEquals: { selfWorthModel: "usefulness" } },
        text: "Intimacy often became most believable to you in practical forms, in shared tasks and repeatable care rather than pure declaration."
      }
    ],
    defaultText: "There was something quietly intimate about ordinary domestic life, the way repetition could begin to resemble devotion once enough feeling entered it."
  },

  domestic_future_projection: {
    variants: [
      {
        conditions: { flagEquals: { securityModel: "structure" } },
        text: "You were quick to imagine what a life might feel like in repeated form, not only in singular moments, but in kitchens, mornings, and all the quiet places where love either deepens or thins."
      },
      {
        conditions: { flagEquals: { securityModel: "control" } },
        text: "Your mind often projected the future through arrangement first, through whether two lives could inhabit the same practical order without grinding each other down."
      }
    ],
    defaultText: "The future began appearing not as abstraction but as rooms, routines, and the practical texture of shared time."
  },

  absence_interpretation: {
    variants: [
      {
        conditions: { flagEquals: { attachmentStyle: "guarded" } },
        text: "Absence always tempted interpretation in you. Even when you resisted it, some part of you was already asking whether distance had begun meaning more than it admitted."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "secure" } },
        text: "Absence did not immediately erode trust in your mind, but it did sharpen your awareness of who still found their way back."
      }
    ],
    defaultText: "Absence had its own emotional language, and the mind rarely left it untranslated for long."
  },

  return_relief: {
    variants: [
      {
        conditions: { flagEquals: { attachmentStyle: "practical_loyalty" } },
        text: "Return brought relief because it restored evidence. It reminded you that the bond still had weight in the world, not only in memory."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "guarded" } },
        text: "Relief arrived with return whether you wanted it to or not, because some older part of you had still been braced for variation until the presence became real again."
      }
    ],
    defaultText: "There was always some relief in return, in the simple fact of not having to imagine the bond alone."
  },

  admiration_private: {
    variants: [
      {
        conditions: { flagEquals: { selfWorthModel: "expectation_burden" } },
        text: "Admiration stayed private in you longer than it needed to, perhaps because naming what impressed you also risked revealing what still had the power to move you."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "controlled_distance" } },
        text: "You preferred admiration at first in internal form, clean, silent, and self-contained before it had to survive contact with disclosure."
      }
    ],
    defaultText: "Admiration often began in private, where it could deepen without yet demanding any outward consequence."
  },

  admiration_destabilization: {
    variants: [
      {
        conditions: { flagEquals: { selfWorthModel: "context_sensitive" } },
        text: "What destabilized you was not admiration alone but how quickly it could alter your own sense of scale, of who you were inside the exchange once the other person became newly vivid."
      },
      {
        conditions: { flagEquals: { selfWorthModel: "expectation_burden" } },
        text: "Admiration could unsettle your composure by making you feel, however briefly, less governed by competence than by response."
      }
    ],
    defaultText: "The difficult part of admiration was how easily it could reorganize self-awareness from the inside."
  },

  closeness_public_private_split: {
    variants: [
      {
        conditions: { flagEquals: { securityModel: "control" } },
        text: "Closeness always felt different in public than in private to you, as if witness alone altered how much truth a moment could safely carry."
      },
      {
        conditions: { flagEquals: { securityModel: "adaptation" } },
        text: "You were highly aware of how atmosphere changed the same closeness, how a bond could feel simple in one setting and precarious in another."
      }
    ],
    defaultText: "There was a difference between private closeness and closeness under witness, and your body knew it before language did."
  },

  choice_weight_inward: {
    variants: [
      {
        conditions: { flagEquals: { selfWorthModel: "steady" } },
        text: "Choices carried inward weight for you because they shaped continuity, not only outcome, deciding what kind of self the next moment would inherit."
      },
      {
        conditions: { flagEquals: { selfWorthModel: "usefulness" } },
        text: "You felt choices through consequence first, through what they built, preserved, risked, or required you to keep carrying afterward."
      }
    ],
    defaultText: "The choice mattered not only for what it changed outside you, but for what it trained inwardly as well."
  },

  choice_regret_anticipation: {
    variants: [
      {
        conditions: { flagEquals: { attachmentStyle: "guarded" } },
        text: "You were always aware of two regrets at once: the regret of speaking too much and the regret of leaving too much unsaid until the chance had narrowed."
      },
      {
        conditions: { flagEquals: { vulnerabilityStyle: "hidden_until_safe" } },
        text: "Regret in you often formed in advance, as the effort to avoid future exposure quietly shaped what you were willing to risk in the present."
      }
    ],
    defaultText: "Regret had a strange anticipatory life, influencing choices before anything had actually gone wrong."
  },

  silence_quality_read: {
    variants: [
      {
        conditions: { flagEquals: { conflictModel: "monitor_tone" } },
        text: "You could hear qualities in silence the way other people heard qualities in speech, the difference between pause, strain, withholding, and relief."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "secure" } },
        text: "Silence did not trouble you by default. What mattered was whether it felt companionable, uncertain, or slightly overfull with what had not yet been said."
      }
    ],
    defaultText: "Silence was never one thing. Its texture depended on what the moment had already made possible."
  },

  silence_mutuality: {
    variants: [
      {
        conditions: { flagEquals: { attachmentStyle: "secure" } },
        text: "Mutual silence felt like its own kind of evidence to you, proof that the bond did not need constant performance in order to remain alive."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "guarded" } },
        text: "Silence became easier when it felt shared rather than unilateral, when both people seemed to be carrying the pause instead of abandoning one another inside it."
      }
    ],
    defaultText: "There was a difference between silence that isolated and silence that joined, and the body rarely confused the two for long."
  },

  self_protection_cost: {
    variants: [
      {
        conditions: { flagEquals: { vulnerabilityStyle: "restrained_need" } },
        text: "Self-protection had helped you before, but you also knew its quieter cost: how easily safety could begin resembling distance once the habit became too efficient."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "controlled_distance" } },
        text: "Your self-protection preserved elegance, yes, but sometimes at the price of making tenderness harder to inhabit once it actually arrived."
      }
    ],
    defaultText: "Protection was never free. Even useful defenses altered what kinds of closeness could still get through."
  },

  self_revelation_aftereffect: {
    variants: [
      {
        conditions: { flagEquals: { vulnerabilityStyle: "gradual_opening" } },
        text: "After revealing something real, you often felt the moment continue inwardly for hours, not in panic, but in the strange echo that follows honest exposure."
      },
      {
        conditions: { flagEquals: { vulnerabilityStyle: "test_before_trust" } },
        text: "Self-revelation always left an aftereffect in you, a heightened watchfulness for how the other person would now carry what you had placed between you."
      }
    ],
    defaultText: "Revelation did not end when the words ended. Some part of you kept listening for what would happen next."
  },

  practical_life_intrusion: {
    variants: [
      {
        conditions: { flagEquals: { securityModel: "scarcity_management" } },
        text: "Practical life never felt separate enough from emotion to be ignored. Time, energy, cost, and logistics all kept insisting on their share of meaning."
      },
      {
        conditions: { flagEquals: { selfWorthModel: "usefulness" } },
        text: "The practical always entered feeling for you, not to cheapen it, but because real care had long ago taught you to recognize consequence as part of affection."
      }
    ],
    defaultText: "Ordinary practical life kept intruding on the emotional moment, not as an interruption only, but as part of what made the feeling real."
  },

  practical_life_tenderness: {
    variants: [
      {
        conditions: { flagEquals: { securityModel: "structure" } },
        text: "You were especially moved by tenderness that survived practical life, by care that remained visible not outside routine but inside it."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "practical_loyalty" } },
        text: "Tenderness meant more to you when it held shape under ordinary pressure, when the person still chose care after the day had already taken something out of them."
      }
    ],
    defaultText: "There was a quiet dignity in tenderness that could live alongside ordinary life without asking to be separated from it."
  },

  internal_contradiction_awareness: {
    variants: [
      {
        conditions: { flagEquals: { selfWorthModel: "expectation_burden" } },
        text: "You were aware of the contradiction in yourself: wanting ease while still respecting effort, wanting to be known while still resisting any gaze that felt too evaluative."
      },
      {
        conditions: { flagEquals: { securityModel: "adaptation" } },
        text: "Contradiction never surprised you much. You had long ago learned that a person could need closeness and caution at the same time without either need becoming false."
      }
    ],
    defaultText: "You could feel more than one truth at once, even when the moment would have preferred a cleaner version of you."
  },

  inner_alignment_check: {
    variants: [
      {
        conditions: { flagEquals: { selfWorthModel: "steady" } },
        text: "Part of you was always checking for alignment, for whether the outer action and the inner truth were still moving in roughly the same direction."
      },
      {
        conditions: { flagEquals: { selfWorthModel: "context_sensitive" } },
        text: "You checked yourself against the room constantly, trying to tell whether what you felt inwardly still matched what the moment would let exist outwardly."
      }
    ],
    defaultText: "Some quieter part of you was always checking whether the moment still fit the truth it seemed to be carrying."
  },

  future_scene_imagination: {
    variants: [
      {
        conditions: { flagEquals: { attachmentStyle: "secure" } },
        text: "Your mind moved easily into future scenes, not fantasy exactly, but the simple extension of wondering what repeated nearness might become if given enough days."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "guarded" } },
        text: "You imagined the future carefully, almost reluctantly, aware that projection could comfort and expose in equal measure once the bond had not yet been fully secured."
      }
    ],
    defaultText: "The future had already begun to appear in fragments, in small imagined continuations the present had not fully authorized and yet could not quite prevent."
  },

  future_scene_resistance: {
    variants: [
      {
        conditions: { flagEquals: { securityModel: "control" } },
        text: "You resisted future projection when the present still felt unstable, preferring not to let possibility run ahead of what the current structure could honestly support."
      },
      {
        conditions: { flagEquals: { securityModel: "scarcity_management" } },
        text: "You were cautious with imagined futures, knowing how easily hope could start spending emotional resources before the world had actually provided return."
      }
    ],
    defaultText: "Some part of you resisted imagining too far ahead, wary of giving possibility more authority than the present had earned."
  },

  bond_interpretation_shift: {
    variants: [
      {
        conditions: { hasFlag: "romantic" },
        text: "Once the bond had taken on romantic charge, even neutral moments risked being re-read under its new light."
      },
      {
        conditions: { hasMemory: "ne_familiarity_changed_shape" },
        text: "Familiarity itself had already changed shape once before, which made you less able now to trust ordinary appearances at face value."
      }
    ],
    defaultText: "The bond no longer meant exactly what it had meant before. Some shift had already taken place, whether either of you had agreed to name it yet or not."
  },

  emotional_carryover: {
    variants: [
      {
        conditions: { flagEquals: { attachmentStyle: "secure" } },
        text: "Emotion carried over easily in you, letting one moment color the next without requiring constant defense against that continuity."
      },
      {
        conditions: { flagEquals: { attachmentStyle: "controlled_distance" } },
        text: "Carryover always unsettled you slightly, the way one honest exchange could continue softening later rooms you would have preferred to keep more self-governed."
      }
    ],
    defaultText: "The moment did not stay contained. Some part of it kept traveling forward into whatever came next."
  }
};

// data/chapter2/scenes.meanwhile2.js
// Chapter 2 — Meanwhile 2 (After Graduation, Ages 18–22)
// Expanded, multi-page, with distinct opening variants based on flags:
// - ch2_confession_success
// - ch2_confession_failure
//
// NOTE: We keep the entry scene id "mw2_01_leaving_parking_lot" as a router,
// so Graduation can keep goto: "mw2_01_leaving_parking_lot" unchanged.

window.CH2_MEANWHILE2 = [
  // --- Router: shows one Continue button depending on flags ---
  {
    id: "mw2_01_leaving_parking_lot",
    phase: "meanwhile",
    age: 18,
    title: "Meanwhile — Leaving the Parking Lot",
    pages: [
`The parking lot lights hummed.

The ceremony was over, but the night hadn’t finished deciding what it meant.

Some endings arrive like fireworks.

Some arrive like a door clicking shut behind you.

Either way—after this moment—the world would begin asking different questions.

And the answers would not come from speeches.

They would come from choices.`
    ],
    choices: [
      {
        text: "Continue.",
        conditions: { flags: { has: "ch2_confession_success" } },
        goto: "mw2_01_opening_success"
      },
      {
        text: "Continue.",
        conditions: { flags: { has: "ch2_confession_failure" } },
        goto: "mw2_01_opening_failure"
      },
      // Fallback if neither flag exists (e.g., dev jump / older saves)
      {
        text: "Continue.",
        goto: "mw2_01_opening_neutral"
      }
    ]
  },

  // --- Success-flavored opening ---
  {
    id: "mw2_01_opening_success",
    phase: "meanwhile",
    age: 18,
    title: "Meanwhile — After Yes",
    pages: [
`They left the parking lot together, not in a dramatic rush—just with the quiet gravity of people who had finally stopped pretending the truth was optional.

The world outside the car windows looked the same: streetlights, dark lawns, the occasional porch glow.

But inside *BOY_NAME*, something had reorganized.

Not into certainty about the future—nothing that simple.

Into permission.

Permission to want without apologizing.
Permission to choose without dithering.
Permission to believe that the thing he’d carried for years wasn’t just a private myth.

When *GIRL_NAME* spoke, her voice sounded close—closer than usual—even when the words were ordinary. Even when she was joking about tassels or complaining about the ceremony.

It felt like standing on the first solid step of a staircase that had been hidden in fog.`,

`In the days that followed, their closeness didn’t become louder.

It became steadier.

They didn’t suddenly perform in public. They didn’t post a parade of proof. They didn’t need an audience.

What changed was subtler:

They made plans without hesitating.
They texted without second-guessing tone.
They spoke with the assumption of return.

And that assumption—the belief that you will come back—changes how you live inside the present.

It made summer feel less like a pause and more like a runway.

Because fall was coming.

College brochures. Job interviews. New cities. New routines.

And now the question wasn’t “Do we feel something?”

The question was: what shape will we give it when life stops being convenient?`,

`*BOY_NAME* realized that loving someone at eighteen felt different than wanting someone at sixteen.

Wanting was heat.

Loving was logistics.

Loving was the calendar.
The distance.
The boring, necessary conversations.
The willingness to let the future touch you without flinching.

They could keep this feeling—this steadiness—only if they built around it.

Adulthood does not respect romance by default.

It respects structure.

And structure begins with a decision no one else can see.

When fall approached, they had to decide how to step into it.

Not as a story.

As a life.

What kind of adulthood would they build?`
    ],
    choices: [
      {
        text: "Continue.",
        goto: "mw2_01_choice_block"
      }
    ]
  },

  // --- Failure-flavored opening ---
  {
    id: "mw2_01_opening_failure",
    phase: "meanwhile",
    age: 18,
    title: "Meanwhile — After Not Yet",
    pages: [
`They left the parking lot with something unfinished still humming between them.

Not a rejection.
Not a breakup.
Not a dramatic wound.

Just an unanswered question—carefully folded, carefully carried, placed gently back where it had lived for years.

In the car ride home, the streetlights passed like slow metronomes.

They talked. They joked. They said normal things.

But underneath the normal conversation, *BOY_NAME* could feel the moment replaying—tiny details looping like a song fragment you can’t stop hearing:

the lamp’s pale light
the weight of the gown
the word “okay” that could hold ten meanings

He told himself he had been careful.

But carefulness has two faces:

one that protects
and one that avoids

And he couldn’t tell which one had guided him.`,

`In the days that followed, their closeness didn’t disappear.

But it changed texture.

There was a new hesitancy in the air, like they were both trying not to step on a crack they hadn’t noticed before.

They still saw each other.

They still sat close.

They still shared quiet routines that looked like intimacy to everyone else.

But now *BOY_NAME* noticed the invisible work underneath:

the way he measured sentences before speaking
the way she sometimes looked away first
the way “us” remained implied instead of chosen out loud

Nothing was broken.

But something was exposed:

Adulthood was coming, and “implied” is a risky foundation when schedules tighten and distance grows teeth.

He didn’t want to lose her.

He also didn’t know how to stop being afraid of changing what they had.`,

`He realized that loving someone at eighteen felt different than wanting someone at sixteen.

Wanting was a heat you could ignore until it passed.

Loving became logistics.

Loving became the calendar.
The distance.
The times you have to choose each other when the world is busy choosing for you.

If they didn’t define something, the world would define it for them—through drift, through silence, through missed chances that weren’t anyone’s fault.

Fall approached with its indifferent certainty.

College brochures arrived. Job applications were filled out. Friends spoke in the future tense for the first time without irony.

And now the question wasn’t only “What are we?”

It was: what do we do when life stops holding us in the same orbit?

Adulthood didn’t begin with a ceremony.

It began with a decision no one else could see.

What kind of adulthood would they build?`
    ],
    choices: [
      {
        text: "Continue.",
        goto: "mw2_01_choice_block"
      }
    ]
  },

  // --- Neutral fallback opening (for dev/testing/old saves) ---
  {
    id: "mw2_01_opening_neutral",
    phase: "meanwhile",
    age: 18,
    title: "Meanwhile",
    pages: [
`The night after graduation did not end with fireworks.

It ended quietly.

The parking lot emptied. The tassels were cut and tucked into drawers. The oak tree stood exactly where it always had, indifferent to ceremony.

But the world had shifted.

College brochures arrived. Job applications were filled out. Friends spoke in the future tense for the first time without irony.

And suddenly love wasn’t only feeling.

It was logistics.

Distance.

Choice.

What kind of adulthood would they build?`
    ],
    choices: [
      { text: "Continue.", goto: "mw2_01_choice_block" }
    ]
  },

  // --- Shared choice block (A–D) ---
  {
    id: "mw2_01_choice_block",
    phase: "meanwhile",
    age: 18,
    title: "Meanwhile — The Decision",
    pages: [
`When fall approached, the decisions stopped being theoretical.

They became real objects in the world:

an acceptance letter on a kitchen counter
a job offer email opened three times in a row
a map app calculating travel time between two cities
a calendar filled with shifts, classes, obligations

Adulthood has a way of making romance practical.

Not less meaningful—more tested.

Because a feeling can survive in private.

A life must survive in public time.

This was the hinge between adolescence and adulthood.

This was where adult patterns began:

whether they prioritized closeness or independence
how they handled distance (college, work, ambition)
whether they defined themselves as “us” or “me + you”

They didn’t get to decide the future.

But they could decide how to meet it.`
    ],
    choices: [
      {
        text: "Choose each other first.",
        action: { type: "setFlag", key: "interdependent" },
        memoryAdd: ["mw2_interdependent"],
        goto: "mw2_02_apply_interdependent"
      },
      {
        text: "Choose growth first.",
        action: { type: "setFlag", key: "independent_growth" },
        memoryAdd: ["mw2_independent_growth"],
        goto: "mw2_02_apply_independent_growth"
      },
      {
        text: "Stay undefined.",
        action: { type: "setFlag", key: "avoidant_definition" },
        memoryAdd: ["mw2_avoidant_definition"],
        goto: "mw2_02_apply_avoidant_definition"
      },
      {
        text: "Commit quietly.",
        action: { type: "setFlag", key: "quiet_commitment" },
        memoryAdd: ["mw2_quiet_commitment"],
        goto: "mw2_02_apply_quiet_commitment"
      }
    ]
  },

  // --- Apply scenes (expanded) ---
  {
    id: "mw2_02_apply_interdependent",
    phase: "meanwhile",
    age: 18,
    title: "Meanwhile — Interdependent",
    pages: [
`You choose each other first.

Not as a performance. Not as a vow shouted into a crowd.

As an orientation.

A practical truth: if one of you turns, the other turns too.

You look at colleges with proximity in mind. You weigh opportunity against distance. You talk before decisions are made, not after.

It feels steady.

It feels safe.

It feels like building a shared room and learning how to move inside it without knocking anything over.

But there’s a quiet risk too:

When you move as a unit long enough, it becomes easy to forget where one person ends and the other begins.

Love becomes strong.

Identity becomes porous.`,

`In the best moments, it’s beautiful.

A hand on the small of a back in a crowded place.
A shared glance that says “I’m here.”
A calendar that aligns, not by accident, but by intention.

In the hard moments, you feel the subtle pressure of togetherness:

the guilt of wanting something separate
the fear of being selfish
the worry that distance—if it ever arrives—will feel like betrayal

You don’t break.
But you learn that closeness is not the same thing as fusion.

Adulthood begins, quietly, with that lesson.`
    ],
    choices: [
      {
        text: "Continue.",
        action: { type: "advanceYears", years: 4 }, // 18 -> 22
        action2: { type: "applyDrift", profile: "mw2_interdependent_18_to_22" },
        goto: "mw2_03_closing"
      }
    ]
  },

  {
    id: "mw2_02_apply_independent_growth",
    phase: "meanwhile",
    age: 18,
    title: "Meanwhile — Independent Growth",
    pages: [
`You choose growth first.

You encourage each other to pursue opportunities even if it means distance.

You say the brave sentences out loud:

“Go.”
“Don’t shrink for me.”
“We’ll figure it out.”

It feels modern. It feels mature. It feels like refusing to make fear into a god.

And in many ways, it works.

You learn to communicate with clarity because you can’t rely on proximity.
You learn to schedule love.
You learn that devotion sometimes looks like letting someone expand.`,

`But distance is not neutral.

Distance creates silence, and silence fills with whatever you pour into it:

trust, if you have it
assumptions, if you don’t
resentment, if you’re tired
fantasy, if you’re lonely

You count weekends. You measure affection in train tickets and video calls and the quiet fatigue of always trying to be “present” across space.

Sometimes it feels like building muscles.

Sometimes it feels like reaching for a hand you can’t touch.

Adulthood begins, quietly, with that question:

Can you be two whole people and still be an “us”?`
    ],
    choices: [
      {
        text: "Continue.",
        action: { type: "advanceYears", years: 4 },
        action2: { type: "applyDrift", profile: "mw2_independent_growth_18_to_22" },
        goto: "mw2_03_closing"
      }
    ]
  },

  {
    id: "mw2_02_apply_avoidant_definition",
    phase: "meanwhile",
    age: 18,
    title: "Meanwhile — Undefined",
    pages: [
`You stay undefined.

You don’t make declarations. You don’t draw hard lines. You assume what you have will hold without formal structure.

It isn’t laziness.

It’s hope.

Hope that love, if it’s real, shouldn’t need a label to survive.

So you drift into adulthood the way you drift into sleep: trusting it will happen naturally.

For a while, it does.

Small kisses.
Long talks.
Familiar hands finding each other in crowded rooms.

The comfort of “we don’t have to explain ourselves.”`,

`But adulthood introduces pressure.

Schedules tighten. New priorities arrive. New people appear with new demands.

And when pressure increases, undefined things sometimes blur—not from malice, but from neglect.

Not because anyone wanted them to disappear.

Because nobody protected them with language.

The question becomes sharp in the quiet moments:

Is avoiding definition a kind of freedom…

…or a kind of slow disappearance?

Adulthood begins, quietly, with that uncertainty.`
    ],
    choices: [
      {
        text: "Continue.",
        action: { type: "advanceYears", years: 4 },
        action2: { type: "applyDrift", profile: "mw2_avoidant_definition_18_to_22" },
        goto: "mw2_03_closing"
      }
    ]
  },

  {
    id: "mw2_02_apply_quiet_commitment",
    phase: "meanwhile",
    age: 18,
    title: "Meanwhile — Quiet Commitment",
    pages: [
`You commit quietly.

No announcements. No public performance. No curated proof.

Just a private agreement spoken in a voice meant only for each other:

“We’re building something.”

It doesn’t feel like a cage.

It feels like choosing a direction and agreeing to carry it together, even when life pushes sideways.

You talk more than you used to—not because you’re less romantic, but because adulthood punishes assumptions.

You ask practical questions and treat them like intimacy:

“When do we visit?”
“What do we need to feel safe?”
“What do we do if one of us has to move?”

The conversations are not glamorous.

They are durable.`,

`In the best moments, it feels like a foundation:

not loud love, but resilient love
not a spotlight, but a structure

In the hard moments, you learn how to repair instead of retreat.

You learn how to fight without cruelty.
You learn how to apologize without bargaining.
You learn how to choose each other again and again without making it a spectacle.

Adulthood begins, quietly, with this:

commitment as a practice, not a mood.`
    ],
    choices: [
      {
        text: "Continue.",
        action: { type: "advanceYears", years: 4 },
        action2: { type: "applyDrift", profile: "mw2_quiet_commitment_18_to_22" },
        goto: "mw2_03_closing"
      }
    ]
  },

  // --- Closing (same for all paths) ---
  {
    id: "mw2_03_closing",
    phase: "meanwhile",
    age: 22,
    title: "Meanwhile",
    pages: [
`Adulthood did not begin with a ceremony.

It began with a decision no one else could see.

Somewhere between calendars and commitments, between distance and proximity, a pattern formed.

Not just how you loved.

But how you lived.

Chapter 3 will open inside that pattern—whether it feels like closeness or distance, ambition or neglect, external pressure or internal uncertainty.

Because the years between are not empty.

They are the shape of what comes next.`
    ],
    choices: [
      { text: "Continue to Chapter 3.", goto: "ch3_stub_start" }
    ]
  }
];
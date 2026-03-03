// data/chapter1/scenes.firstMeeting.js
// Chapter 1 — First Meeting (Fully Expanded, Multi-Page)

window.CH1_FIRST_MEETING = [

  {
    id: "meet_01",
    phase: "first_meeting",
    age: 9,
    title: "The Collision",
    pages: [

`The ditch marked the end of maintenance.

Grass grew taller here. Weeds ignored the idea of boundaries. The oak tree leaned at a slight angle, roots exposed in places where rain had eaten away at the soil over the years.

*BOY_NAME* liked this spot because it felt unobserved.

The houses behind him had windows. Windows meant eyes. Eyes meant expectation.

The ditch only had insects and wind.

He had been running — not fast enough to win anything, just fast enough to feel his heartbeat in his throat. The ground dipped slightly near the oak tree, and he adjusted instinctively, arms pumping.

He didn’t see her until the last possible second.

A flicker of motion from the other side of the tree. A shadow cutting across sunlight. The snap of a twig under someone else’s shoe.

He turned at the same moment she stepped around the trunk.

Two trajectories intersecting without permission.`,

`There is a specific kind of silence that happens right before impact.

It isn’t quiet.

It’s compressed.

Like the world has inhaled and forgotten to exhale.

His untied lace caught on a root.

Her foot slid on loose dirt.

They collided shoulder to shoulder, and for one suspended second, neither of them fell.

Then gravity remembered them.

They went down into the grass in a tangle of limbs and dust, oak leaves scattering upward like startled birds.

The smell hit first: dry earth, crushed greenery, the faint metallic scent of scraped skin.

*BOY_NAME* landed hard on one knee. A sharp sting shot upward, bright and immediate.

He sucked in air through his teeth.

He didn’t want to make a sound.

Beside him, she exhaled sharply — not a cry, not laughter — something between the two.`,

`He rolled onto his side and blinked at the sky through the canopy of leaves.

Sunlight fractured into shifting shards overhead. The cicadas didn’t stop screaming. The world hadn’t paused for them.

He sat up too quickly and felt the blood rush behind his eyes.

She was sitting too, brushing dirt from her palms.

Her hair had come loose from whatever held it back. A dark curl clung to her cheek with sweat.

There was a line of red forming on her chin where bark had grazed skin.

They stared at each other.

Not angry.

Not friendly.

Startled.

The kind of stare children hold when they realize something has happened that wasn’t supposed to — and now they must decide what it means.`

    ],
    choices: [
      {
        text: "Apologize immediately.",
        effects: { trust: +1, communication: +1, sharedHistory: +1 },
        memoryAdd: ["met_apologized_first"],
        goto: "meet_02"
      },
      {
        text: "Ask if she's hurt.",
        effects: { affection: +2, trust: +1, sharedHistory: +1 },
        memoryAdd: ["met_checked_her_first"],
        goto: "meet_02"
      },
      {
        text: "Laugh awkwardly to cover embarrassment.",
        effects: { resilience: +1, communication: -1, sharedHistory: +1 },
        memoryAdd: ["met_laughed_it_off"],
        goto: "meet_02"
      }
    ]
  },


  {
    id: "meet_02",
    phase: "first_meeting",
    age: 9,
    title: "Recognition Without Names",
    pages: [

`Up close, she didn’t look like someone from his immediate orbit.

Not from his classroom.

Not from his usual playground rotation.

There was something unfamiliar about her — not foreign, just not catalogued.

Her eyes were darker than he expected. Not dramatic-dark. Just steady.

They held his gaze a moment longer than most children did.

“You ran into me,” she said.

It wasn’t accusatory. It was observational. Clinical, almost.

He felt heat rise in his face — not from the sun this time.

“I didn’t mean to,” he replied quickly. His voice sounded thinner than he wanted.

He cleared his throat. “My shoe caught.”

She glanced down.

His lace was wrapped around a root like a trap he’d set for himself.

She nodded once, slow and thoughtful, as if filing that detail somewhere private.`,

`He noticed her hands.

There was dirt under her fingernails too.

Not delicate dirt — thick, packed-in earth.

She wasn’t a porch-sitter.

She had the look of someone who moved through places without asking if they were allowed.

A small scrape marked her knee. She brushed at it absentmindedly.

He wanted to look brave.

He wanted to look like this didn’t matter.

Instead, he felt painfully aware of his scraped skin, the sting radiating outward in pulses.

He suddenly understood that this moment would either shrink or grow depending on what he did next.

Nine-year-olds don’t have language for that realization.

But they feel it.`,

`“Are you hurt?” he asked — or maybe apologized — or maybe laughed awkwardly.

Whatever he chose, it came out slightly off-center.

She tilted her head.

“I’m fine.”

A beat.

“You?”

He nodded too fast.

“Yeah.”

They sat in silence for a moment.

Not uncomfortable exactly.

Charged.

The oak tree above them creaked softly in the heat, leaves shifting in small restless motions.

The ditch behind them smelled faintly of old water and weeds.

Somewhere down the block, a lawnmower cut out mid-engine, leaving the air suddenly heavier.

He became aware of the shape of her presence — not just her face, but the space she occupied in the world.

She didn’t seem like someone passing through.

She seemed anchored.`

    ],
    choices: [
      {
        text: "Admit you're embarrassed.",
        effects: { communication: +2, trust: +1, sharedHistory: +1 },
        memoryAdd: ["met_admitted_embarrassed"],
        goto: "meet_03"
      },
      {
        text: "Ask what she was doing out here.",
        effects: { communication: +1, affection: +1, sharedHistory: +1 },
        memoryAdd: ["met_asked_what_doing"],
        goto: "meet_03"
      },
      {
        text: "Offer your hand to help her stand.",
        effects: { affection: +1, trust: +1, sharedHistory: +1 },
        memoryAdd: ["met_offered_hand"],
        goto: "meet_03"
      }
    ]
  },


  {
    id: "meet_03",
    phase: "first_meeting",
    age: 9,
    title: "The Question That Almost Happens",
    pages: [

`They stood slowly.

The grass pressed flat beneath where they had fallen, marking the spot like evidence.

She brushed at her shorts again. He wiped his palms against his own shirt.

“I was just walking,” she said eventually.

He nodded.

“I run here sometimes.”

“Why?”

He hadn’t expected that.

He looked around as if the ditch might answer for him.

“I don’t know.”

It was the most honest answer he had.

She didn’t laugh.

She didn’t press.

She simply accepted it.

Which somehow made it heavier.`,

`He became aware of how close they were standing.

Not touching.

But within reach.

He could see the faint freckles across the bridge of her nose. The way her eyebrows pulled slightly inward when she concentrated.

She wasn’t smiling.

But she wasn’t closed off either.

It felt like standing at the edge of something invisible.

If he spoke correctly, maybe it would open.

If he spoke wrong, maybe it would close forever.

He didn’t know her name.

He didn’t know if she lived nearby.

He didn’t know if this was a one-time accident or the start of something that would repeat.

He only knew that the moment felt fragile — like glass balanced on a fingertip.`,

`He almost asked her name.

He almost offered his.

He almost said something larger than he understood.

But voices carry strangely in summer heat.

From somewhere in the direction of houses, someone called out — distant but sharp.

Her shoulders tensed instantly.

“I’m coming!” she shouted back.

The word echoed off siding and fences.

She looked back at him.

Something unreadable flickered there.

Regret? Annoyance? Curiosity?

He would think about that look for years without being certain which it was.`

    ],
    choices: [
      {
        text: "Ask her name anyway.",
        effects: { communication: +2, trust: +1, sharedHistory: +1 },
        memoryAdd: ["asked_name_childhood"],
        goto: "meet_04_name_interrupted"
      },
      {
        text: "Tell her your name first.",
        effects: { communication: +2, trust: +2, affection: +1, sharedHistory: +1 },
        memoryAdd: ["offered_name_childhood"],
        goto: "meet_04_name_interrupted"
      },
      {
        text: "Let it remain nameless.",
        effects: { resilience: +1, affection: +1, sharedHistory: +1 },
        memoryAdd: ["didnt_exchange_names"],
        goto: "meet_04_separation"
      }
    ]
  },


  {
    id: "meet_04_name_interrupted",
    phase: "first_meeting",
    age: 9,
    title: "Interrupted",
    pages: [

`He began to speak.

So did she.

The words collided in the air between them and fell apart.

She smiled — not wide, just briefly — and that small shift changed the temperature of the entire afternoon.

“You have grass on your shirt,” she said.

She reached forward before he could react.

Her fingers brushed his shoulder.

Warm.

Light.

Precise.

She plucked a thin blade of green from the fabric and held it up like evidence.

For a second, neither of them moved.

It was nothing.

It was everything.`,

`The voice called again from the distance.

More insistent now.

“I really have to go,” she said.

It sounded reluctant.

Or maybe he imagined that later.

She dropped the blade of grass near his shoe.

It landed between them like a small marker.

“I’ll see you,” she said.

Not “maybe.”

Not “if.”

Just: I’ll see you.

And then she turned and stepped away from the oak tree, moving lightly over uneven ground as if she knew exactly where her feet belonged.`

    ],
    choices: [
      {
        text: "Wave goodbye.",
        effects: { trust: +1, affection: +1, sharedHistory: +1 },
        memoryAdd: ["wave_goodbye"],
        goto: "meet_05_end"
      },
      {
        text: "Watch silently as she leaves.",
        effects: { sharedHistory: +1, resilience: +1 },
        memoryAdd: ["watched_silently"],
        goto: "meet_05_end"
      }
    ]
  },


  {
    id: "meet_05_end",
    phase: "first_meeting",
    age: 9,
    title: "The Mark Left Behind",
    pages: [

`She reached the sidewalk and paused.

Not long enough to make a scene.

Just long enough to glance back toward the ditch.

He wasn’t sure if she could see him clearly through the glare.

But he felt seen anyway.

Then she turned and disappeared around the corner.

The oak tree resumed being a tree.

The cicadas resumed their relentless rhythm.

The world returned to scale.

But something had shifted.

He looked down at the blade of grass near his shoelace.

He crouched and picked it up.

It was dry and thin between his fingers.

He rolled it once.

Twice.

Then let it fall back to the dirt.

He tied his lace carefully this time, double-knotting it like preparation mattered.`,

`On the walk home, the neighborhood looked the same.

Driveways.

Mailboxes.

Sprinklers ticking.

But he moved through it differently.

The air felt denser, like it carried something new he hadn’t known to expect.

He didn’t know her name.

He didn’t know if he would see her again tomorrow or never.

But under the ordinary weight of the summer afternoon, something had anchored itself.

A memory.

A place.

An unfinished sentence.

And though he couldn’t articulate it, even at nine years old he understood this:

Some meetings are small on the surface.

But they leave a mark that waits patiently for the rest of your life to catch up to it.`
    ],
    choices: [
      {
        text: "Continue.",
        goto: "mw_01_childhood_to_adolescence"
      }
    ]
  }

];
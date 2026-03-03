// data/chapter1/scenes.intro.js
// Chapter 1 — Intro (Expanded, Multi-Page, Deep Character Establishment)

window.CH1_INTRO = [

  {
    id: "intro_01",
    phase: "intro",
    age: 9,
    title: "The Life Before It Changes",
    pages: [

`Some lives begin with a decision.

Others begin with weather.

This one begins with heat.

Not dramatic heat — not desert sun or cinematic glare — but the ordinary suburban kind that presses gently against windows and makes ceiling fans feel important. The kind that slows everything down by a fraction of a second. The kind that makes childhood stretch long and thin across summer afternoons.

Before anything else, choose their names.

Not because names change fate.

But because they change how memory sounds when you say it back to yourself.

(You can always change them later by starting a new game.)`
    ],
    choices: [
      { text: "Choose names (recommended).", action: { type: "setNames" }, goto: "intro_02" },
      { text: "Continue with default names.", goto: "intro_02" }
    ]
  },

  {
    id: "intro_02",
    phase: "intro",
    age: 9,
    title: "Boyhood",
    pages: [

`*BOY_NAME* was not remarkable in the way childhood measures things.

He was not the fastest runner in his grade. Not the loudest. Not the tallest. He had the kind of face that teachers described as “sweet” and relatives described as “growing into itself.”

His hair refused to lie flat no matter how much water he pressed into it in the bathroom mirror each morning. It stood slightly at the crown, as if permanently surprised by the world.

His eyes were large for his face — observant, careful. The kind of eyes that seemed older than the rest of him. They missed nothing, even when he pretended not to be looking.

His knees were perpetually scabbed.

His sneakers were rarely tied correctly.

He had a thinness to him — not fragile, just unfinished. Like a sketch waiting for shading.

At nine years old, he lived in a body that felt both permanent and temporary at the same time.`,

`He grew up in a house that always smelled faintly of something cooking.

Not because his family was wealthy.

Not because they had elaborate dinners.

Because his mother believed in the ritual of food as proof that a day had structure.

The house itself was small but carefully kept. Beige siding. A front yard that struggled against dry soil every summer. A mailbox that leaned slightly left no matter how often his father straightened it.

Inside, there were photographs on the hallway walls — graduations, weddings, vacations that had taken careful saving. Smiles frozen in frames like promises that everything had always been fine.

His mother moved through rooms with quiet efficiency. She folded laundry as if smoothing wrinkles out of time itself. She asked questions in a tone that sounded casual but always carried concern just beneath it.

“Did you finish your homework?”
“Are you feeling okay?”
“Did anything happen today?”

His father came home in the evenings smelling faintly of metal and engine oil. He worked with his hands — not glamorous work, but steady work. The kind of job that required showing up even when you didn’t feel like yourself.

He didn’t talk much at dinner.

But when he did, it was measured. Thoughtful.

*BOY_NAME* learned early that silence wasn’t always emptiness.

Sometimes it was how adults held their exhaustion without letting it spill.`,

`The neighborhood was made of repetition.

Cul-de-sacs that curved gently like questions.

Driveways with basketball hoops that leaned at slight angles.

Lawns trimmed with inconsistent ambition.

On summer evenings, sprinklers clicked rhythmically while dogs barked at nothing in particular. The air held the smell of cut grass, hot pavement, and distant barbecue smoke drifting lazily over fences.

It was the kind of place where everyone knew roughly who everyone was — not intimately, but structurally.

“That’s the family with the blue minivan.”
“That’s the house with the loud twins.”
“That’s the yard that always forgets to water.”

*BOY_NAME* moved through this world like it was safe by default.

He rode his bike in wide loops until the streetlights flickered on.

He kicked rocks down the sidewalk and pretended they were something more important than they were.

He learned the subtle hierarchy of playground politics: who got picked first, who made the rules, who laughed too loudly when someone else tripped.

He wasn’t the center of attention.

But he wasn’t invisible either.

He existed in the middle — where observation grows.`,

`There were things he didn’t yet have language for.

The way he sometimes felt too aware of himself in groups — like he could see how he was standing from the outside.

The way he studied other children to understand how they moved so confidently through conversations.

The way he noticed the small tremors in adults’ voices when they thought children weren’t paying attention.

He learned early that the world ran on undercurrents.

And he watched them carefully.

At night, when the house grew quiet and the television dimmed to a blue glow in the living room, he would lie in bed staring at the ceiling.

He would listen to the refrigerator hum.

To pipes shifting softly in the walls.

To the distant sound of a car passing outside.

And he would imagine the future the way children do — vaguely, abstractly, like a landscape behind fog.

He didn’t know yet that a single afternoon could bend that fog into something clearer.

He didn’t know yet that memory could anchor itself to a place.

He only knew that tomorrow would probably feel like today.

And today felt long.

Heat pressed against the window screens.

Cicadas screamed from the trees at the edge of the neighborhood.

The drainage ditch near the boundary line collected dry weeds and occasional rainwater, marking the subtle edge between maintained suburb and something slightly wilder.

It was there — near that ditch, under an oak tree older than the houses around it — that the shape of his childhood would change.

But for now, he was just a boy with untied shoes and dirt under his fingernails, running because running felt like motion.

And motion felt like control.

The afternoon stretched wide ahead of him.

Ordinary.

Unremarkable.

Waiting.`
    ],
    choices: [
      {
        text: "Run toward the edge of the neighborhood.",
        effects: { resilience: +1 },
        memoryAdd: ["intro_ran_to_edge"],
        goto: "meet_01"
      },
      {
        text: "Slow down. Notice the world around you first.",
        effects: { affection: +1, sharedHistory: +1 },
        memoryAdd: ["intro_noticed_world"],
        goto: "meet_01"
      }
    ]
  }

];
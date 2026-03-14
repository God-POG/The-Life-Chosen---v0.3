// data/chapter2/scenes.routineFormation.js
// Chapter 2 — Routine Formation (Age 13)
// Bridge between Familiar, Different and Proximity.
// Focus: how repeated small interactions quietly turn into a dependable pattern.

window.CH2_ROUTINE_FORMATION = [
{
  id: "ch2_015_routine_formation",
  phase: "routine_formation",
  age: 13,
  title: "Routine Formation",
  pages: [

`Seventh grade did not arrive with the same sharp edges that high school would later have.

Instead, it crept in quietly.

Schedules became more complicated. Hallways felt more crowded. Teachers expected things to be remembered instead of explained. Nobody announced that childhood had ended, but everyone seemed to be acting as if it had become slightly inconvenient to admit they were still children.

The strange thing was that *BOY_NAME* and *GIRL_NAME* did not suddenly become closer.

They simply stopped drifting apart.

That difference was subtle but important.

There had been years where they happened to cross paths — school, sidewalks, the occasional conversation that grew naturally out of shared history.

Now something new was forming.

Not a dramatic friendship.
Not a declared partnership.

A routine.`,


`It began with small coincidences.

The same math class.
A similar lunch period.
A hallway locker placement close enough that they sometimes arrived within seconds of each other.

At first those overlaps were accidental.

Then they became predictable.

Predictable things slowly change how people behave.

He noticed he walked slightly slower down the science hall in the morning. She noticed she lingered by the lockers a moment longer before heading to class. Neither of them would have described it as waiting.

But waiting was part of it.

Routine, he was discovering, was built out of small adjustments people barely admitted they were making.`,


`The cafeteria was the loudest place in the building.

Metal chairs scraped against tile. Trays clattered. Someone was always laughing too loudly across the room as if volume alone could prove confidence.

In the middle of that noise, certain patterns became easy to follow.

By October, they often ended up at the same stretch of table without discussing it beforehand. Friends rotated in and out. Conversations shifted constantly.

But there was a loose gravitational pull that kept them returning to the same seats.

Once he arrived early and saved a space without thinking about it.

When she dropped her bag beside the chair later, she looked at him with a small raised eyebrow.

"Did you just save me a seat?"

"I guess so."

She smiled slightly.

Neither of them made it a bigger deal than that.

But the next day it happened again.`,


`Routine changed how people noticed each other.

When someone appears repeatedly in the same spaces, details accumulate.

He noticed the way she always pushed her tray slightly to the left before eating. The way she tapped the edge of her pencil twice before starting homework. The way she tilted her head when trying to understand something complicated.

She noticed things too.

The fact that he always checked the classroom clock before packing up. The way he reread instructions even when he already understood them. The quiet concentration that settled over his face when he was thinking carefully.

None of these observations felt dramatic.

But familiarity, repeated enough times, begins to feel like a structure you can stand inside.`,


`One afternoon the rain was heavy enough that the buses arrived late.

Students gathered under the covered entrance near the front of the school, waiting in loose clusters. Water ran down the pavement in thin reflective lines.

*BOY_NAME* stood near the railing watching the parking lot blur under the downpour.

A minute later *GIRL_NAME* stepped beside him.

Neither of them spoke immediately.

Rain made conversation feel optional.

After a while she said, "We're in a lot of the same places lately."

He glanced sideways at her.

"Yeah."

"You ever notice that?"

"Yeah."

She watched the rain for another second.

"It's not bad," she added.

Something about the way she said it made the sentence feel like a quiet agreement.

Not an announcement.

Just recognition.`,


`The buses finally pulled up with a hiss of air brakes and wet tires.

Students began moving toward them in slow uneven lines. The noise of the rain softened under the shelter as everyone shuffled forward.

He realized suddenly that the pattern had already formed.

Morning lockers.
Lunch table.
Certain hallways.
Certain pauses between classes.

None of it had required planning.

But once a routine existed, breaking it would require a decision.

He wasn't sure when exactly that had started to matter.

Maybe it had always mattered.

Some connections didn't begin with declarations.

They began with repetition.

The same person appearing often enough that their presence stopped feeling accidental.

And when something stops feeling accidental, it begins to feel like part of your life.`
],

choices: [
{
text: "Lean into the routine and keep meeting naturally.",
effects: { sharedHistory: +2, affection: +1 },
memoryAdd: ["ch2_routine_comfort"],
goto: "ch2_02_proximity"
},
{
text: "Ask her directly if she notices it too.",
effects: { communication: +2, trust: +1 },
memoryAdd: ["ch2_routine_acknowledged"],
goto: "ch2_02_proximity"
},
{
text: "Pretend it's coincidence and keep things casual.",
effects: { resilience: +1 },
memoryAdd: ["ch2_routine_downplayed"],
goto: "ch2_02_proximity"
}
]
}
];

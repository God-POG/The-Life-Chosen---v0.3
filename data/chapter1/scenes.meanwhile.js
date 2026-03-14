// data/chapter1/scenes.meanwhile.js
// Chapter 1 — Meanwhile (Age 9 -> 10)
// Improved prose, pacing, and emotional continuity.
// Keeps same IDs / flags / memory tags so it can slot into the current structure.

window.CH1_MEANWHILE = [
  {
    id: "mw_01_childhood_to_adolescence",
    phase: "meanwhile",
    age: 9,
    title: "Meanwhile",
    pages: [
`Years still do not arrive all at once.

At nine, growing up does not feel dramatic.

It feels like shoes becoming tight without warning. It feels like sleeves ending a little too high above the wrist. It feels like afternoons shrinking at the edges because school, homework, dinner, and bedtime now divide the day more neatly than they used to.

Nothing announces the change.

The change simply begins happening.

At home, the rhythms remain dependable.

The refrigerator still hums in the kitchen. Plates still appear on the table in their usual places. His mother still asks how school was in the calm voice that makes the question feel routine rather than invasive. His father still notices things without saying much at first, as if observation itself is a kind of care.

The house keeps doing what it has always done.

It holds shape around him.

But *BOY_NAME* is beginning to understand that growing older means carrying parts of yourself outside the house too—into classrooms, onto sidewalks, into conversations with other children, and toward the ditch and the oak tree and whatever waits there when the day opens wide enough to let him go.`,

`The oak tree is not imaginary anymore.

That matters more than he knows how to explain.

It is not some half-forgotten corner of summer that can be dismissed later as a childish feeling. It is a real place, one he has returned to often enough that his feet know the path and his eyes look for the flat crossing stone without thinking.

The ditch is familiar now.

The bend in the road is familiar.

Even the particular change in air beneath the branches—the cooler smell of dirt and leaves and shade—has become something his body recognizes before his mind names it.

And *GIRL_NAME* is not just the girl from the first afternoon anymore either.

She is part of the map now.

Part of the hidden shape his life has taken between home and the far edge of the neighborhood.

Still, something has changed.

Not broken.

Changed.

The afternoons do not last forever. Some days one of them gets there late. Some days the weather turns first. Some days homework waits at home, or dinner comes earlier than expected, or some ordinary responsibility pulls harder than curiosity.

Nothing dramatic happens.

That is what makes the change difficult to name.

Childhood does not always end by shattering.

Sometimes it narrows by degrees.`,

`He begins to notice that meaning does not always arrive with noise.

Sometimes it arrives quietly, the way his childhood home taught him most important things arrive: through habits, repeated returns, and moments that do not look like much to anyone standing outside them.

The oak tree becomes one of those things.

Not because every afternoon there changes the world.

Because the place has started to hold time.

The first stone.
The treasure.
The questions she asks when the afternoon gets quiet.
The feeling that whatever exists between them is real even when neither of them knows exactly what to call it.

At school, other children are loud about everything.

Who is best friends with whom.
Who got picked first.
Who cried.
Who lied.
Who said something mean and then pretended it was a joke.

Their lives seem to happen on the surface.

But under the oak, *BOY_NAME* has started learning something else:
that some of the most important parts of life are not the parts people announce.

They are the parts that gather slowly.

The parts that return.

The parts that last long enough to change the way you notice the world.`,

`By ten, the world will begin asking a little more of him.

Not all at once.

Just a little more structure.
A little more self-consciousness.
A little more awareness that time does not pause simply because something matters.

And so the question is not whether the oak tree mattered.

It did.

The question is what *BOY_NAME* does with that knowledge as childhood starts becoming something slightly older—still soft in places, still unfinished, but no longer as endless as it once seemed.

When he thinks about the oak tree, about *GIRL_NAME*, and about the first years of knowing something mattered before he had the language for it, what does he do with it?

Does he protect it?
Shape it?
Dismiss it?
Follow it?

The answer will not look large from the outside.

But some of the choices that matter most never do.`
    ],
    choices: [
      {
        text: "You put it away. Not denial—storage.",
        action: { type: "setFlag", key: "guarded" },
        memoryAdd: ["mw_stored_it"],
        goto: "mw_01_apply_guarded"
      },
      {
        text: "You replay it until it becomes a private myth.",
        action: { type: "setFlag", key: "romantic" },
        memoryAdd: ["mw_private_myth"],
        goto: "mw_01_apply_romantic"
      },
      {
        text: "You decide it was nothing. You practice being practical.",
        action: { type: "setFlag", key: "present" },
        memoryAdd: ["mw_practicalized"],
        goto: "mw_01_apply_present"
      },
      {
        text: "You learn to say things before they vanish.",
        action: { type: "setFlag", key: "direct" },
        memoryAdd: ["mw_learned_to_say"],
        goto: "mw_01_apply_direct"
      }
    ]
  },

  {
    id: "mw_01_apply_guarded",
    phase: "meanwhile",
    age: 9,
    title: "Meanwhile",
    pages: [
`You put it away.

Not because it means nothing.

Because keeping something safe and keeping it visible are not always the same thing.

This makes sense to you. It fits the world you came from.

At home, things are stored carefully when they matter. Winter clothes go into labeled bins. Important papers go into drawers that are not opened casually. Fragile objects are not left where they can be knocked over.

Care often looks like containment.

So you begin treating the memory that way.

You do not stop caring about the oak tree. You do not stop caring about *GIRL_NAME*. You simply stop reaching for those feelings every time they rise. You keep them behind your ribs where they cannot be made awkward by daylight or reduced by careless words.

It makes you seem calm.

Maybe even mature.

Adults like calm. Teachers like children who do not make every feeling public. The world often rewards whatever looks contained, even when containment is only another word for restraint.`,

`But hidden things still have weight.

On certain afternoons, when the air smells like warm dirt and cut grass, you feel the old place return in your body before it returns in thought. You remember the shade beneath the branches. The careful tone in her voice. The sense that some parts of life become important before you understand why.

You do not talk about any of this.

You become skilled at carrying meaning quietly.

By the time ten arrives, you are steadier on the outside than many children your age. More self-contained. More careful. Less likely to let the inside of you spill out where someone else might mishandle it.

You will walk into the next part of the story with the appearance of calm and the habit of restraint, believing that protecting something means keeping it hidden.

Sometimes that is true.

Sometimes it is only another form of distance.`
    ],
    choices: [
      {
        text: "Continue.",
        action: { type: "advanceYears", years: 1 },
        goto: "ch2_01_new_environment"
      }
    ]
  },

  {
    id: "mw_01_apply_romantic",
    phase: "meanwhile",
    age: 9,
    title: "Meanwhile",
    pages: [
`You replay it until it becomes a private myth.

Not a fantasy exactly.

Something quieter than that.

A way of giving shape to a feeling before you are old enough to call it anything solid.

You return to the oak tree in memory even when you are not there. You remember the first stone in her hand, the treasure hidden beneath the roots, the way she spoke about the tree as if it could keep secrets better than people could.

You begin to feel that some places are larger on the inside than they are from the road.

The oak becomes that kind of place.

A small corner of the neighborhood that somehow contains more than it should. More waiting. More mystery. More possibility than a patch of dirt and roots has any obvious right to hold.`,

`You do not become dramatic about it.

That would not suit you.

Your life still has routine. Homework still gets done. Dinner still arrives on time. You still live inside a house where normalcy has its own quiet authority.

But inside that order, you let one small part of yourself remain unfinished on purpose.

You wonder what *GIRL_NAME* remembers.
You wonder whether she also carries pieces of those afternoons when she is not there.
You wonder whether unfinished things are sometimes meant to stay unfinished for a while so they can grow larger in private.

By the time ten arrives, you are still very much a child.

But you have already begun to understand the pleasure and danger of carrying meaning inward.

You will step into the next part of the story with expectation already living in you—not loud enough to embarrass you, but steady enough to shape what you notice when the world changes.`
    ],
    choices: [
      {
        text: "Continue.",
        action: { type: "advanceYears", years: 1 },
        goto: "ch2_01_new_environment"
      }
    ]
  },

  {
    id: "mw_01_apply_present",
    phase: "meanwhile",
    age: 9,
    title: "Meanwhile",
    pages: [
`You decide it was nothing.

Or at least, nothing that needs to be carried so carefully.

This is not coldness.

It is practicality.

You tell yourself the oak tree is just a place at the edge of the neighborhood. The buried stone is just a game children made real because the afternoon was long. *GIRL_NAME* is simply someone you know there, and that is enough.

In some ways this helps.

It keeps things simple.

You do not get lost in questions that have no immediate answer. You do not build a whole inner world out of fragments and then feel foolish for having done it.

You stay close to what is in front of you.

School.
Home.
Dinner.
Sleep.
The next day.

There is safety in that.

There is competence in that too.`,

`Still, the body is not always as practical as the mind.

Sometimes you catch yourself noticing the old route to the oak tree before you mean to. Sometimes a certain kind of heat in the air makes the memory return with surprising clarity. Sometimes you remember a sentence she said and feel, for one brief second, that it mattered more than you have allowed.

You do not dwell on those moments.

You move on.

And because of that, you become grounded in a way that adults often praise. Less dramatic. Less prone to getting carried away. More willing to trust what is visible instead of what is implied.

By the time ten arrives, you believe you know how to keep life manageable: focus on what is here, not what might be hidden beneath it.

That skill will help you.

It will also make it easier to underestimate the things that matter before they become convenient.`
    ],
    choices: [
      {
        text: "Continue.",
        action: { type: "advanceYears", years: 1 },
        goto: "ch2_01_new_environment"
      }
    ]
  },

  {
    id: "mw_01_apply_direct",
    phase: "meanwhile",
    age: 9,
    title: "Meanwhile",
    pages: [
`You learn to say things before they vanish.

Not perfectly.

You are still ten only in the distance, not yet in full. You still hesitate. You still feel your throat tighten sometimes when the right words arrive half a second too late.

But after the first years under the oak, you begin noticing that silence has its own cost.

Not every silence is peaceful.
Not every unspoken thing stays gentle.

So you practice in small ways.

You answer honestly when your mother asks if something is bothering you.
You ask questions in class even when you are not completely certain.
You try to say what you mean while it is still small enough to hold in your hands.

This does not make you fearless.

It makes you less willing to lose moments simply because they are awkward.`,

`When you think about *GIRL_NAME* and the oak tree, you do not force the memory into a box or reduce it into something ordinary just because ordinary would be easier.

You let it stay real.

A place.
A person.
A set of afternoons that changed the texture of your childhood.

You begin to believe that if something matters, it is worth meeting directly.

Maybe not grandly.
Maybe not all at once.
But directly.

By the time ten arrives, that belief has started shaping you.

You will step into the next part of the story still nervous, still young, still learning.

But you will also carry one advantage that many people do not discover until much later:

the instinct to move toward meaning instead of away from it.`
    ],
    choices: [
      {
        text: "Continue.",
        action: { type: "advanceYears", years: 1 },
        goto: "ch2_01_new_environment"
      }
    ]
  }
];

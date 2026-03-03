// data/chapter1/scenes.meanwhile.js
// Chapter 1 — Meanwhile (bridges into Chapter 2)
// Expanded, multi-page, lore-heavy, same IDs/gotos/profiles.

window.CH1_MEANWHILE = [
  {
    id: "mw_01_childhood_to_adolescence",
    phase: "meanwhile",
    age: 12,
    title: "Meanwhile",
    pages: [
`Years don’t arrive all at once.

They come quietly—one ordinary day stacked on another—until you realize the calendar has been moving without your permission.

At twelve, *BOY_NAME* is no longer the boy with permanently untied shoes, but he is not yet anything else. He is all elbows and half-grown confidence, full of sudden moods he can’t explain and embarrassments he can’t name without making them worse.

The house is the same: the refrigerator hum, the hallway photos, the same worn spot in the carpet where people always turn too sharply.

But he is different in the way a room feels different when the furniture has been shifted just a few inches.

Not enough for anyone to comment.

Enough for him to notice every time he passes through.`,

`The ditch becomes just a place.

The oak tree becomes just a tree.

And yet some part of him keeps returning there—not always with his feet, but with his mind. The memory is not a full scene anymore. It doesn’t play like a movie. It plays like a handful of fragments that refuse to dissolve:

• the smell of dry earth when it’s been baked all day  
• the sting of scraped knees  
• the warmth of fingers brushing his shoulder  
• the feeling, brief and impossible to prove, of being seen without hiding

Sometimes he tries to recall her face and finds the details won’t hold. Childhood doesn’t archive faces well. Childhood archives posture. Tone. The shape of a moment.

He wonders, occasionally, if she remembers.

Then he tells himself not to wonder.

Wondering feels like wanting.

Wanting feels dangerous when you don’t know what to do with it.`,

`Middle school teaches him that the world is loud about its definitions.

You are either popular or you aren’t.

You are either funny or you’re trying too hard.

You are either chosen or left standing near the wall pretending you wanted to be there.

He learns how to look like he isn’t paying attention while paying attention to everything.

He learns how to keep his voice steady when it wants to crack.

He learns that some boys survive by being loud and some survive by being invisible.

He becomes something in between: quiet, observant, careful with his words.

At home, his mother asks how school is and he says “fine” in the practiced tone that makes adults stop asking follow-ups.

His father watches him across the dinner table sometimes with an expression that is not judgment, not disappointment—just a kind of tired concern, like he recognizes the awkwardness of becoming.

No one talks about the oak tree.

No one even knows it matters.

That’s part of what makes it matter.`,

`The memory returns in the strangest places.

When he smells freshly cut grass and the air is too hot for the season.

When his shoulder brushes someone’s in a hallway and his skin reacts like it’s been startled.

When he hears someone laugh—soft, brief—and his brain tries to place it as if laughter could be a fingerprint.

Sometimes, late at night, he lies in bed and rehearses a version of the meeting where he asked her name and she answered and he remembered it perfectly.

Sometimes he imagines that he did tell her his name and she kept it like a secret, the way he kept her touch.

He doesn’t realize yet that this is a kind of practice.

A rehearsal for the person he will become: someone who carries meaning quietly until life forces it into the open.

When he thinks about that day—about the oak tree and the ditch and the moment that almost became a sentence—what does he do with it?`
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
    age: 12,
    title: "Meanwhile",
    pages: [
`You put it away.

Not denial—storage.

You learn how to live with a feeling without feeding it. You learn to place memories in the back of your mind the way your mother places winter clothes into labeled bins: not because they’re useless, but because it isn’t the season for them.

When the oak tree appears in your thoughts, you redirect. You focus on homework. On chores. On whatever noise the world offers you as an alternative.

You become good at avoiding the moment where curiosity turns into longing.

At school, you keep your head down. You don’t volunteer too loudly. You don’t embarrass yourself on purpose for laughs. You observe who gets punished for wanting things openly and you decide you won’t be that target.

It makes you steady.

It also makes you private in a way people sometimes mistake for confidence.`,

`Sometimes, though, storage leaks.

A hot day will arrive unexpectedly, and the smell of cut grass will hit you like a hand pressed gently against your chest.

You’ll remember the warm brush of fingers on your shoulder and feel something uncomfortable—because the body remembers warmth even when the brain tries to be logical.

You don’t talk about it.

You don’t write about it.

You don’t even admit to yourself that you’ve been saving it.

But you have.

Quietly.

And in the quiet, it grows its own weight.

When the time comes to step into high school, you will walk in with practiced calm—holding something fragile behind your ribs, convinced you’ve protected it by hiding it.

You won’t know yet that protection can also be distance.`
    ],
    choices: [
      {
        text: "Continue.",
        action: { type: "advanceYears", years: 2 }, // 12 -> 14
        action2: { type: "applyDrift", profile: "childhood_to_highschool_guarded" },
        goto: "ch2_01_recognition"
      }
    ]
  },

  {
    id: "mw_01_apply_romantic",
    phase: "meanwhile",
    age: 12,
    title: "Meanwhile",
    pages: [
`You replay it until it becomes a private myth.

The mind is good at making altars out of scraps: a blade of grass, a touch, a look that felt like a question.

You remember the oak tree not as a tree but as a stage—where something important happened without anyone else noticing.

You return to it in your imagination the way you return to a favorite page in a book. Not because the page changes, but because you do.

At twelve, you start attaching meaning to things you didn’t understand at nine.

You begin to suspect that moments can be seeds.

That some encounters exist not to be completed immediately, but to be carried forward.

Sometimes you try to reconstruct her face and fill in the gaps with invention.

Sometimes you catch yourself doing it and feel embarrassed, as if someone could see inside your head and judge you for wanting what you can’t even name.`,

`In school, you watch other kids form crushes loudly, dramatically, like they’re auditioning for attention.

You don’t do that.

You keep your myth private.

You become careful about what you reveal.

You become quietly intense.

People might call you “thoughtful.”

What they mean is: hard to read.

But you read yourself constantly.

You wonder whether the girl from the oak tree is still in the neighborhood.

You wonder if you missed her by one street, one summer, one turn of the head.

You wonder if she remembers the warmth of her own fingers the way you remember it.

And because you romanticize the moment, you also romanticize the waiting.

Waiting begins to feel meaningful, like a ritual.

Like the world owes you a second meeting because the first one was unfinished.

When high school comes, you will arrive not only with nerves, but with a quiet expectation that the universe sometimes repeats its patterns.

You will not say this out loud.

But you will feel it in your bones.`
    ],
    choices: [
      {
        text: "Continue.",
        action: { type: "advanceYears", years: 2 },
        action2: { type: "applyDrift", profile: "childhood_to_highschool_romantic" },
        goto: "ch2_01_recognition"
      }
    ]
  },

  {
    id: "mw_01_apply_present",
    phase: "meanwhile",
    age: 12,
    title: "Meanwhile",
    pages: [
`You decide it was nothing.

Not because it was.

Because practicality is a skill, and you practice it like a language.

You tell yourself it was just a collision in the grass. Just a brief touch. Just a summer afternoon that felt important because you were a child and everything felt important back then.

You learn to categorize experiences quickly: useful, useless, forgettable.

You become good at moving forward without always turning your head.

When the oak tree crosses your mind, you cut it off gently. Like snipping a loose thread before it unravels.

The memory becomes weather: it happened, it passed.

And for long stretches, you believe it.

You become calmer than many of your peers.

Less dramatic.

More grounded.

Adults like that. Teachers like that.

They call you “mature.”`,

`But the body has its own language, and it does not always agree with the brain.

On certain hot days, when the air is thick and the cicadas scream, you feel something strange—a brief tightening in your chest, like your skin remembers what your mind refuses to honor.

Sometimes you dream of the ditch. Not as a story, but as a location: grass, heat, light fractured through leaves.

You wake up irritated, because dreams feel like cheating.

Because your mind is reaching backward without permission.

In middle school, you learn that other people attach importance to romance like it’s a requirement.

You roll your eyes. You pretend it’s silly. You stay above it.

But some part of you watches, quietly, with the understanding that you chose practicality not because you don’t feel—because feelings are inconvenient.

When high school arrives, you will walk in thinking you are immune to old ghosts.

And then you will discover that some ghosts aren’t haunting you.

They’re waiting.`
    ],
    choices: [
      {
        text: "Continue.",
        action: { type: "advanceYears", years: 2 },
        action2: { type: "applyDrift", profile: "childhood_to_highschool_present" },
        goto: "ch2_01_recognition"
      }
    ]
  },

  {
    id: "mw_01_apply_direct",
    phase: "meanwhile",
    age: 12,
    title: "Meanwhile",
    pages: [
`You learn to say things before they vanish.

Not grand confessions—small honesty, practiced daily.

You become someone who tries.

In middle school, this shows up in the smallest ways: you answer when someone asks a question instead of shrugging. You raise your hand even when you’re unsure. You tell your mother the truth when she asks if you’re okay.

Sometimes it goes badly.

Sometimes you regret speaking, because honesty can make you vulnerable.

But you notice something important: regret feels different when you tried.

It has edges.

It teaches you.

Silence-based regret just spreads. It becomes fog. It becomes a mood you can’t explain.

So you keep practicing.

You become better at naming what you feel.

Not perfectly.

But more than you used to.`,

`When you think about the oak tree, you don’t force it into “nothing.”

You let it be what it was: a moment you didn’t finish.

You occasionally picture yourself asking her name.

Not with melodrama—just with clarity.

You imagine yourself saying, “Hey,” like you belong in your own mouth.

And because you practice directness, you also practice courage.

You start to believe that if you ever see her again, you won’t freeze.

You won’t pretend it doesn’t matter.

You’ll at least try to make the moment real.

This doesn’t make you fearless.

It makes you prepared.

When high school comes, you will still feel nervous. You will still feel exposed in your new body and new hallways.

But you will carry one private skill that many people don’t develop until much later:

The ability to step forward first.

To say the thing before it turns into a lifetime of “almost.”

And when the hallway smell of floor wax and nervous sweat hits you for the first time, you will feel, deep down, that your story is about to pick up a sentence you once dropped.`
    ],
    choices: [
      {
        text: "Continue.",
        action: { type: "advanceYears", years: 2 },
        action2: { type: "applyDrift", profile: "childhood_to_highschool_direct" },
        goto: "ch2_01_recognition"
      }
    ]
  }
];
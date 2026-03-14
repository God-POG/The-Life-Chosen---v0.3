// data/chapter2/scenes.socialFriction.js
// Chapter 2 — Scene: Social Friction (Age 15)
// Built to follow Proximity: routine closeness is now visible enough
// that other people begin shaping the atmosphere around it.
// Keeps the same slow-burn continuity from Chapter 1 while adding more external pressure.

window.CH2_SOCIAL_FRICTION = [
  {
    id: "ch2_02b_social_friction",
    phase: "social_friction",
    age: 15,
    title: "Social Friction",
    pages: [

`Closeness becomes easier to carry when no one names it.

That had been one of the quiet advantages of the bus.
The windows fogged. The route was long. Most people were too tired to pay close attention to anyone except themselves. What existed there could stay suspended — felt clearly, explained badly, protected by motion.

School was different.

School turned patterns into information.
Who sat where. Who waited for whom. Who laughed first when the other person said something under their breath. Teenagers collected those details the way burrs collected on socks: casually, persistently, without needing permission.

By fifteen, *BOY_NAME* had learned that people noticed much more than they admitted and understood much less than they claimed.

That combination made everything dangerous.`,


`It started small.

A friend from algebra glanced past him in the cafeteria and said, with the false carelessness boys used when they wanted to sound casual and observant at the same time, "You saving that seat or what?"

*BOY_NAME* looked at the empty chair beside him.
He had not thought of himself as saving it.
Not consciously.

But his backpack was on the floor instead of on the chair. His tray was shifted slightly to leave room. His body had angled without asking him first.

Before he could answer, *GIRL_NAME* arrived with her lunch and slid into the seat like it had always been the obvious place for her to go.

His friend gave him a look — not cruel, not even especially sharp, just the kind of look that said: I saw that.

Then he walked off.

Nothing happened after.
No public joke. No announcement. No humiliation.

And still, the whole exchange stayed in *BOY_NAME*'s chest like a splinter too small to remove cleanly.

Being noticed did not always require being exposed.
Sometimes it only required realizing that what felt private to you had already become visible to someone else.`,


`That week, the atmosphere around them changed in tiny, irritating ways.

A girl in English asked *GIRL_NAME* if she was "still doing the bus-wife thing," then laughed before the phrase had time to settle.
A teacher paired them for a project without asking, then smiled as if she were making a harmless joke with the universe.
Someone behind them in the hallway made kissing noises so half-heartedly that pretending not to hear it somehow felt worse than hearing it clearly.

None of it was severe.
That was what made it difficult to fight.

There was no villain.
No single cruel moment dramatic enough to justify outrage.
Just a steady pressure from the social world, trying to flatten something complicated into something easy to say.

At home, life still believed in structure. The kitchen still held its evening sounds in the correct order. Plates, running water, the refrigerator's hum, his mother's questions that left room for silence if he needed it.

But school believed in performance.
And performance turned ambiguity into spectacle the first chance it got.`,


`Friday afternoon brought rain.

Not a storm. Just a persistent gray drizzle that darkened the pavement and made everyone smell faintly of wet fabric by last period. After the final bell, students spilled out under awnings and bus overhangs, gathering in small shifting knots while waiting for rides or weather or courage.

*BOY_NAME* stood beneath the edge of the science wing overhang with his backpack hanging from one shoulder. Water dripped in a slow line from the gutter above, striking the concrete hard enough to splash his shoe if he stood too close.

He saw *GIRL_NAME* across the courtyard, half-sheltered near the bike rack, talking to a boy from her history class.

*BOY_NAME* knew him vaguely.
Tall. Loud in groups. Safer one-on-one than he wanted people to know. The kind of person teachers called "a lot" when they were trying to be generous.

The boy said something that made *GIRL_NAME* laugh.
Not the careful laugh she used when she was being polite.
A real one.
Quick and unguarded.

Jealousy did not arrive like lightning.
It arrived like embarrassment with nowhere clean to go.

He hated how immediate it was.
Hated that it made him feel younger instead of older. Smaller instead of clearer. Hated, most of all, that he had no legitimate claim to the feeling.

They were not official.
They had not named anything.
So what exactly was he supposed to be jealous on behalf of?`,


`By the time she crossed the courtyard toward him, the feeling had already had enough time to become something worse than jealousy.

Self-consciousness.
Defensiveness.
The stupid masculine urge to sound unaffected precisely when you are most affected.

She stepped under the overhang, rain speckling the shoulders of her jacket.
"Bus is late," she said.

He nodded.
"Seems like it."

For a second neither of them mentioned the boy.
That might have been the end of it.
A feeling passing through him privately, as feelings often should.

Then she followed his line of sight across the courtyard and understood too quickly.
He could tell by the way her expression shifted — not guilty, not amused, just aware.

"Evan needed the homework sheet," she said.

The explanation was simple.
Reasonable.
Probably true.

And because it was so reasonable, he heard himself answer in a tone he immediately disliked.
"I didn't ask."

The sentence landed between them with a hardness he had not intended but had not failed to create either.

Rain kept ticking against the metal overhang.
Students kept moving around them, absorbed in their own delays and exits and damp inconvenience.

But inside the small space of that conversation, something tightened.

This, he realized too late, was another kind of threshold.
Not desire.
Not confession.
The first real chance for them to mishandle each other.`,


`She looked at him carefully.

Not wounded exactly.
More like she was deciding what kind of honesty the moment could survive.

"You sounded like you asked," she said.

He could have backed away then.
Could have shrugged, made a joke, blamed the rain, redirected the whole thing into something safer.

Instead he stood there with the unpleasant heat of being seen too accurately.
He thought about the bus seat. The saved chair at lunch. The kissing noises in the hallway. The way other people had begun narrating something he still felt responsible for protecting.

What he wanted, suddenly and painfully, was not a label.
It was relief.
Relief from the constant work of pretending he was less affected than he was.

The bus rounded the corner at the far entrance, tires hissing through wet pavement.
People started moving before it had fully stopped.

They had only a few seconds left before the moment would either harden into distance or soften into something usable.

She did not move yet.
She waited.

He understood, with a kind of frightened gratitude, that she was leaving room for him to choose what kind of person he would be inside friction — defensive, honest, evasive, or brave.

And this time the right answer would not stay private.
It would shape what came next.`

    ],
    choices: [
      {
        text: "Tell her the truth: other people noticing them got inside your head.",
        effects: { communication: +2, trust: +1, affection: +1 },
        memoryAdd: ["ch2_social_friction_honest"],
        goto: "ch2_03_self_awareness"
      },
      {
        text: "Apologize for the tone, even if you can't explain all of it yet.",
        effects: { trust: +2, communication: +1 },
        memoryAdd: ["ch2_social_friction_apologized"],
        goto: "ch2_03_self_awareness"
      },
      {
        text: "Deflect. Say school makes everyone weird lately.",
        effects: { resilience: +1, sharedHistory: +1 },
        memoryAdd: ["ch2_social_friction_deflected"],
        goto: "ch2_03_self_awareness"
      },
      {
        text: "Say nothing and board the bus beside her anyway.",
        effects: { affection: +1, sharedHistory: +1 },
        memoryAdd: ["ch2_social_friction_silence"],
        goto: "ch2_03_self_awareness"
      }
    ]
  }
];

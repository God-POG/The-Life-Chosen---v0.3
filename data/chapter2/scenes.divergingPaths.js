// data/chapter2/scenes.divergingPaths.js
// Chapter 2 — Diverging Paths (Age 18)
// First true post-graduation divergence.
// This scene inherits tone from scenes.graduation.js via:
// - ch2_confession_success
// - ch2_confession_failure
//
// Recommended wiring:
// Graduation success/failure endings should goto: "ch2_06_diverging_paths"
// This file then routes into Meanwhile 2's shared choice block.

window.CH2_DIVERGING_PATHS = [

  {
    id: "ch2_06_diverging_paths",
    phase: "diverging_paths",
    age: 18,
    title: "Diverging Paths",
    pages: [

`The days after graduation did not feel like summer yet.

They felt like aftermath.

Caps had been placed on bedroom shelves. Program booklets lay folded on kitchen counters. Adults kept asking practical questions in cheerful tones that implied practicality should be exciting:
When do you leave?
Have you packed?
What are you doing about work?
Are you ready?

Ready turned out to be one of those words people used when they really meant: the next part has already started whether your inner life has caught up or not.

*BOY_NAME* understood that now with an uncomfortable clarity.

High school had ended in a parking lot under a humming lamp.

What came after would not be decided by speeches or photographs.
It would be decided by what remained once ordinary days returned.

That was the new problem.

Ordinary days had always been where the truth of things revealed itself.`,


`At home, the rhythms were still steady.

The refrigerator hummed.
Dinner arrived in sequence.
His mother asked careful questions disguised as normal ones.
His father moved through the house with that same quiet observational patience that had shaped *BOY_NAME* long before he understood he was being shaped at all.

The steadiness helped.

It also made the coming changes feel sharper.

On the kitchen table sat a list of things he needed before fall.
Forms.
Deadlines.
Move-in details.
A small legal pad with practical notes written in his mother's neat hand.

The future no longer lived in abstraction.

It had become paper.

It had become dates.

It had become distance measured in miles instead of imagination.

And somewhere inside all of that, there was still *GIRL_NAME*.

Not as a fantasy.
Not as an unanswered question from adolescence alone.
As a real person whose life was also beginning to split outward into schedules, obligations, plans, and choices that would not automatically match his.`
    ],
    choices: [
      {
        text: "Continue.",
        conditions: { flags: { has: "ch2_confession_success" } },
        goto: "ch2_06_diverging_paths_success"
      },
      {
        text: "Continue.",
        conditions: { flags: { has: "ch2_confession_failure" } },
        goto: "ch2_06_diverging_paths_failure"
      },
      {
        text: "Continue.",
        goto: "ch2_06_diverging_paths_neutral"
      }
    ]
  },

  // -------------------------
  // Success variant
  // -------------------------
  {
    id: "ch2_06_diverging_paths_success",
    phase: "diverging_paths",
    age: 18,
    title: "Diverging Paths",
    pages: [

`After graduation, they did not suddenly become louder.

That would have been too simple.
Too unlike them.

What changed was subtler and, in some ways, more serious.

The question was no longer whether the feeling was real.

That had been answered.

Now the question was whether reality would make room for it.

They met three evenings later at the park near the edge of town, the one with the cracked tennis courts and the bench that always tilted slightly because one concrete footing had sunk lower than the other. It was not the oak tree, but it carried some of the same privacy — a place ordinary enough to avoid attention, familiar enough to allow honesty.

The air smelled like cut grass, warm dust, and the faint mineral scent that rises from pavement after a hot day even when it has not rained.

When *GIRL_NAME* sat down beside him, their shoulders touched naturally.

That part no longer felt theoretical.

What felt new was the weight inside the silence.

Not awkwardness.
Responsibility.`,


`He had wanted this for so long that part of him had imagined confession as a kind of arrival.

A crossing.
A simplification.
The point where uncertainty finally stopped costing so much.

Instead, saying yes to each other had made the future feel more detailed.

She had a campus in one direction.
He had plans in another.
Not impossibly far. Not easy either.

A relationship, he was discovering, did not become secure simply because two people were honest at the right time.

Honesty only opened the door.

After that came structure.

They talked the way people talk when they are trying to be brave by being practical.

How often could they see each other once classes started?
How much distance becomes normal before normal starts feeling lonely?
What counted as making an effort, and what counted as asking the other person to shrink?

None of it sounded romantic from the outside.

To him it felt more intimate than the kiss had.

Because a kiss answered desire.

These questions answered whether desire could survive a calendar.`,


`At one point she looked down at their joined hands and said, almost lightly, "I think this is the unglamorous part no one talks about."

He smiled.
"The scheduling phase of true love?"

She laughed softly, but the laugh turned thoughtful quickly.

"I mean it," she said. "People act like once you know, everything else just works."

He understood immediately.

That was one of the cruelties of adolescence. Movies and hallway gossip and overheard adult shorthand all suggested that the hard part was confession. As if mutual feeling automatically generated durability.

But durability had always been the harder thing.

The oak tree had not mattered because it was dramatic.
It had mattered because they returned.

Return had built everything.

And now adulthood was asking whether return could be chosen on purpose instead of granted by routine.

He looked out toward the basketball court where nobody was playing.

"I don't want us to become one of those things people mean really sincerely for two months," he said.

She turned toward him fully then.

"Neither do I."

The answer steadied him more than reassurance was supposed to.
Not because it solved anything.
Because it confirmed that she was standing inside the same question.`,


`They walked after that, slowly, following the path around the field in a loop neither of them was trying to finish quickly.

The evening light made everything appear briefly gentler at the edges.
Fences.
Tree lines.
The distant roofs of houses where other families were beginning dinner.

He thought about what love had looked like in his childhood home.

Not loud.
Not performative.
Maintained.
Repaired.
Built out of things returning to their place.

That model had its risks. He knew that. Stability could become passivity if nobody was careful. Silence could pretend to be wisdom. Routine could become a substitute for courage.

But it had also taught him something valuable:
that what lasts usually lasts because somebody keeps tending it.

He wanted that kind of tending here.
Not possessiveness.
Not fusion.
Not the adolescent theater of making grand promises no one has yet tested.

Just two people serious enough to keep choosing structure when spontaneity ran out.

By the time they circled back to the bench, the light had lowered another shade.

She leaned against him for a moment and said quietly, "I don't think this is the part where we promise forever."

He shook his head once.

"No."

"What do we promise then?"

He took longer to answer than the sentence required.

"That we won't let convenience decide for us."

The words were plain.
They felt right anyway.`,


`When they finally stood to leave, neither of them seemed calmer exactly.

But the uncertainty had changed shape.

Before graduation, uncertainty had lived inside naming.
Inside wanting.
Inside timing.

Now it lived inside logistics.
Inside adulthood.
Inside the mundane fact that two lives could love each other and still be pulled by different maps.

That was frightening.

It was also real in a way fantasy never is.

At her car, she kissed him once — briefly, intentionally, not as a climax but as a confirmation.

Then she rested her forehead against his for a second and smiled in that small serious way that had mattered since childhood.

"Okay," she said. "So now we choose how to do this."

He watched her drive away with the odd sensation that the relationship had not just begun.

It had entered its first test.

Not betrayal.
Not collapse.
Something more common and therefore more dangerous:

two futures opening at once.

And somewhere between them, an "us" that would survive only if both of them learned how to build around distance instead of pretending distance was only temporary weather.`
    ],
    choices: [
      {
        text: "Choose what kind of adulthood the relationship will build.",
        effects: { trust: +1, communication: +1, affection: +1 },
        memoryAdd: ["ch2_diverging_paths_after_success"],
        goto: "mw2_01_choice_block"
      }
    ]
  },

  // -------------------------
  // Failure variant
  // -------------------------
  {
    id: "ch2_06_diverging_paths_failure",
    phase: "diverging_paths",
    age: 18,
    title: "Diverging Paths",
    pages: [

`After graduation, nothing between them disappeared.

That was part of what made it difficult.

A cleaner kind of heartbreak might have been easier to understand.
A refusal.
A fight.
A door closing with enough noise to let both people know what had happened.

This was not that.

They still texted.
They still made plans.
They still moved toward each other with the old familiarity of people who had spent years becoming part of the same emotional map.

But now every ordinary interaction carried the memory of the parking lot inside it.

The almost.
The stopping.
The hug that had meant too much and not quite enough.

Three days later, they met at the coffee shop near downtown where students always went in the summer because it offered cold air, bad music, and booths deep enough to feel private if no one looked too closely.

The table between them held two sweating plastic cups and a conversation neither of them yet knew how to begin.`,


`He had spent the intervening days trying to name what exactly had happened.

Failure was too blunt.
Caution was too flattering.
Bad timing was close, but not complete.

What hurt most was not that she had turned away.

She hadn't.

What hurt was that the moment had revealed a limit in him he had hoped he was older than by now.

He had wanted the truth.
He had spoken it.
Then, at the edge of making it fully real, he had translated it back into safety.

The self-knowledge was ugly.
It was also clarifying.

She stirred her drink with the straw without drinking it and said, finally, "I've replayed that night like six times."

He let out a breath that might have been a laugh in another context.

"Only six?"

That got a small real smile out of her, which made him both grateful and worse.

Because kindness after disappointment has its own kind of ache.`,


`They did not force the conversation into clean emotional categories.

That was never their style.

Instead they moved toward honesty the same way they had moved toward most important things: carefully, in increments, leaving room for nuance even when nuance was inconvenient.

"I don't think you didn't mean it," she said.

The sentence mattered because it named the fear beneath all the others.

He looked at her.
"I did mean it."

"I know."

The words were gentle.
Not soothing.

Then she added, "I just don't know what to do with almost anymore."

That landed cleanly.

He thought of childhood then in one fast unwelcome motion:
the buried stone
the questions under the oak
the way their story had always advanced through pauses, thresholds, near-confessions, unfinished sentences

For years, almost had been the texture of intimacy.

Almost touch.
Almost say it.
Almost define it.
Almost now.

But adulthood was approaching fast, and almosts did not make very good architecture once distance entered the frame.

He understood that as soon as she said it.

More importantly, he understood that she did too.`,


`Outside the shop window, the afternoon moved through its ordinary business.

A man walked a dog too large for the leash he held. Two younger kids cut across the sidewalk on bikes. A city bus sighed to a stop, took on passengers, and moved on again.

Life kept demonstrating its indifference to private emotional timing.

That was the new problem.

In high school, proximity had done some of the work for them.
Hallways.
Lunches.
The bus.
Accidental overlaps that were not fully accidental.
Whole weeks held together by institutional structure.

Very soon, none of that would exist.

Whatever they were after this would have to survive because they chose it, not because the world kept placing them beside each other.

He wrapped one hand around his cup and said the thing he disliked most because it was true.

"If we don't decide something, I think life decides for us."

She was quiet for a second.

Then she nodded.

"Yeah," she said. "That's what scares me."

Not rejection.
Not embarrassment.
Drift.

The oldest threat in their story had returned wearing an adult face.`,


`When they left the coffee shop, the heat outside felt brighter than it had through the glass.

They walked half a block together before slowing near the corner where their directions split.

The pause there felt familiar enough to ache.

So many versions of them had existed in pauses like this.
Children near the edge of the neighborhood.
Teenagers under bus awnings.
Seniors outside school doors trying to decide whether caution was wisdom or delay.

He looked at her and understood that the relationship had not ended.

It had become structurally unstable.

That was different.
Less dramatic.
In some ways more dangerous.

You cannot repair instability with intensity alone.
You need definition.
Or discipline.
Or a mutual agreement about what exactly is being protected.

She shifted her bag higher on her shoulder and said, "I don't want us to lose each other just because neither of us knew how to do one moment right."

He nodded.

"Me neither."

"And I don't want to pretend nothing happened."

He almost said neither do I, but stopped himself from wasting the sentence on symmetry.

Instead he said, "Then maybe the next part has to be less about the moment and more about the choice after it."

Her face changed slightly at that.
Not relief.
Recognition.

The kind that said: yes, that is the real question now.`,


`They stood there a second longer than needed, the air between them full of things still unresolved but no longer entirely unnamed.

He thought, strangely, of the oak tree again.

Not because he wished he could go backward.
Because the tree had always represented a place where meaning arrived before language.
And now, for the first time, their lives were demanding the reverse.

Language first.
Choice first.
Structure first.

Not because mystery had failed them.
Because mystery could not carry adulthood by itself.

She touched his arm lightly before stepping back.

"Okay," she said.

The word was different this time.
Less wounded.
More provisional.

Not an ending.
A hinge.

He watched her head down the sidewalk and felt the same double truth pressing on him from both sides:

they had not lost each other,
and they could still lose each other very easily.

The future was no longer threatening them with dramatic tragedy.

It was offering something more ordinary than that.

Separate lives.

Whether those lives would bend toward each other or away would depend not on feeling alone, but on how they chose to meet the distance that was already beginning.`
    ],
    choices: [
      {
        text: "Choose what kind of adulthood this unfinished bond will attempt.",
        effects: { resilience: +1, communication: +1, sharedHistory: +1 },
        memoryAdd: ["ch2_diverging_paths_after_failure"],
        goto: "mw2_01_choice_block"
      }
    ]
  },

  // -------------------------
  // Neutral fallback
  // -------------------------
  {
    id: "ch2_06_diverging_paths_neutral",
    phase: "diverging_paths",
    age: 18,
    title: "Diverging Paths",
    pages: [

`Adulthood rarely begins with a dramatic break.

More often, it begins with schedules.
Applications.
Travel times.
Work shifts.
The first week in which seeing someone you care about stops happening automatically and starts requiring intention.

That was the real divergence.

Not whether they had felt something.
Whether they would build around it once routine stopped doing the work for them.

Whatever had happened on graduation night, the next part would ask the same question:

what do two young lives do when the old structure ends and the future opens in more than one direction at once?`
    ],
    choices: [
      {
        text: "Continue.",
        goto: "mw2_01_choice_block"
      }
    ]
  }

];

// data/chapter2/scenes.graduation.js
// Chapter 2 — Section 5: Graduation Confession (Age 18)
// Restored success/failure gate + expanded endings (multi-page).
// Non-explicit: romantic intimacy only, fade-to-black for anything private.

window.CH2_GRADUATION = [
  {
    id: "ch2_05_graduation",
    phase: "graduation",
    age: 18,
    title: "Graduation Night",
    pages: [
`Graduation night was thick with endings.

Caps sat crooked on heads that had learned to look confident for photographs. Gowns hung heavy on shoulders that had not yet learned the true weight of time. Tassels swung like small pendulums counting down to the moment everyone could take the costume off and return to being ordinary.

The ceremony blurred into a practiced pageant: speeches that tried to sound timeless, names read too quickly, applause arriving in waves—sometimes sincere, sometimes automatic.

A thousand futures were implied without being spoken aloud.

Afterward, the world spilled out into the parking lot behind the school, the place where the official part ended and the human part began.

The air smelled like warm asphalt, exhaust, cheap perfume, and the sharp sweetness of deodorant applied too late.

Families crowded together, taking photos like proof mattered. Friends shouted promises across rows of parked cars, promises that sounded absolute in the moment and fragile in the mouth the next day.

Some people cried.

Some people laughed too loudly because crying would have embarrassed them.

And somewhere near the edge of the lot—under a humming lamp that threw pale light onto the pavement—*GIRL_NAME* leaned against her car and looked out toward the empty football field as if she could memorize it by staring.`,

`*BOY_NAME* found her without thinking.

His feet carried him the way they always did when something mattered: directly, stubbornly, as if hesitation could be lethal.

He heard gravel crunch under his shoes. He heard distant laughter, the slam of car doors, the thin squeal of tires on asphalt.

But the closer he got, the more the noise blurred into background.

When she looked up, her eyes were bright—not quite tears, not quite dryness. The shine of emotion held carefully in place.

“Ready?” he asked.

“For what?” she smiled, but it wavered. “For us to grow up?”

He stopped close enough to feel the warmth that radiated from her body in the night air.

He took off his cap and set it on the hood of her car. She did the same. Two small gestures that felt like removing armor.

They stood there in their gowns, fabric rustling softly in the breeze. The lamp overhead hummed with indifferent electricity.

And beneath the hum, beneath the distant shouting, beneath the leftover adrenaline of ceremony, there was something quieter: the fact that they were here.

Together.

Not by accident.

Not like the oak tree years ago.

By choice.`,

`He noticed the pulse in her neck again, quick and steady. He had noticed it at fourteen, and it had never stopped being a detail that made him feel exposed—as if seeing her pulse meant seeing how alive she was.

He reached out and touched her arm, fingertips brushing the fabric of her gown.

“I don’t want to wait anymore,” he said.

His voice didn’t crack this time. It felt anchored, like the years had finally built a floor strong enough to stand on.

“I want you.”

The words hung between them, plain and dangerous.

For a heartbeat he saw the alternate versions of this moment:

The version where she stepped back, kind but careful.

The version where she smiled sadly and said, “Not yet.”

The version where they kept orbiting forever because orbiting is safer than landing.

But then she nodded slowly, as if agreeing with a truth she’d carried too.

“Me too,” she said.

Relief hit him so fast it felt like dizziness.

He exhaled, realizing he’d been holding his breath in ways that didn’t start tonight.

But relief wasn’t the end.

Relief was the beginning of the next question:

What do you do with the truth once you finally say it?`,

`The parking lot kept emptying. Families pulled away in clusters. Headlights swept across them in passing arcs, briefly turning them into silhouettes.

A few classmates nearby shouted something teasing—an “Ooooooh!” half-joking, half-curious. Someone laughed. Someone else said their names like it was evidence.

Then the voices drifted away.

It was still public enough to feel watched.

Private enough to matter.

*BOY_NAME* felt the old fear rise: that naming it would ruin it. That the moment would become too large, too visible, too brittle.

But he also felt something else—something stronger than fear.

A steady pressure behind his ribs that said: This is the hinge. If you don’t move now, you will always wonder.

He looked at her. She looked back.

Her expression wasn’t demanding.

It wasn’t performative.

It was open—an invitation without force.

And that, more than anything, told him what kind of person she was.

What kind of “us” this could become.

Tonight could become a crossing.

Or it could remain a threshold.

Both were real.

Both had consequences.

And now, for the first time, the next step was not happening to them.

They were choosing it.`,
    ],
    choices: [
      {
        text: "Close the distance. Let the truth become action.",
        conditions: {
          hasFlag: "confess_early",
          affection: { min: 11 },
          trust: { min: 10 },
          sharedHistory: { min: 8 },
          communication: { min: 9 }
        },
        memoryAdd: ["ch2_graduation_crossed_threshold"],
        goto: "ch2_ending_success"
      },
      {
        text: "Close the distance. Let the truth become action.",
        conditions: {
          affection: { min: 13 },
          trust: { min: 11 },
          sharedHistory: { min: 9 },
          communication: { min: 10 }
        },
        memoryAdd: ["ch2_graduation_crossed_threshold"],
        goto: "ch2_ending_success"
      },
      {
        text: "Close the distance. Let the truth become action.",
        memoryAdd: ["ch2_graduation_hesitated_at_threshold"],
        goto: "ch2_ending_failure"
      },
      {
        text: "Stay careful. Hold her instead.",
        memoryAdd: ["ch2_graduation_chose_restraint"],
        goto: "ch2_ending_failure"
      }
    ]
  },

  {
    id: "ch2_ending_success",
    phase: "graduation",
    age: 18,
    title: "Ending A — Confession Success",
    pages: [
`He leaned in slowly, giving her time to refuse.

She didn’t.

Their kiss wasn’t cinematic.

It was real—careful at first, like both of them were still learning the rules of being allowed. Then deeper as she met him halfway, her hands rising to his shoulders, gripping as if the world might tilt without contact.

For a second, the years collapsed:

The ditch.

The oak tree.

The bus seat with thighs pressed together.

The library table with knees touching under wood.

All of it folding into this one simple fact: they had arrived.

When they pulled apart, they stayed close, foreheads nearly touching, breathing softly in the warm night.

Neither spoke immediately.

Speaking would have made it smaller.

She smiled—small, honest, a little stunned—and *BOY_NAME* felt something settle inside him with quiet force.

Not heat.

Not conquest.

Choice.`,

`The parking lot thinned around them until the light over their heads felt like the only light in the world.

Somewhere behind them, someone laughed too loudly and drove off. A door slammed. A muffled cheer rose and faded.

They remained.

*GIRL_NAME* kept his hand in hers, fingers interlaced as if it was the most natural thing. As if it had always been this way and they had just been slow to admit it.

“I thought you’d never say it,” she whispered.

He swallowed. “I didn’t want to ruin anything.”

“You didn’t,” she said. “You… made it real.”

Those words struck him harder than any teasing ever could.

Made it real.

He realized he had been afraid of being real because real meant responsibility.

Real meant the future had to be faced instead of avoided.

And yet—standing here—he felt less trapped than he’d feared.

He felt steadier.

Like the truth had built a rail for his hands to hold onto.`,

`They didn’t rush away.

They didn’t turn it into a spectacle.

They simply stayed close, letting the moment breathe.

Eventually, she glanced toward the empty field again, then back at him.

“Do you want to… sit for a minute?” she asked.

Not an implication.

Not a demand.

A gentle suggestion that the world could be paused for one more breath.

They got into her car and sat with the doors closed, the outside noise muffled into distance.

They talked quietly—not in dramatic declarations, but in practical sentences that felt surprisingly intimate:

“What are you doing this fall?”

“How far is your campus?”

“How often can we see each other?”

“What scares you the most?”

Their answers weren’t perfect.

They were honest.

And honesty—spoken like this—felt like a new kind of closeness.

At some point the talking slowed. Their hands found each other again. Their foreheads touched. Their breathing synchronized.

The night turned private in a way that belonged only to them.

What followed stayed behind the glass and the quiet, safe from the world’s eyes.

Not because it was shameful.

Because it was theirs.`,

`When they stepped out again, the air had cooled slightly. The parking lot was nearly empty now, lights humming over scattered paper programs and a forgotten tassel near a curb.

They walked toward the edge of the lot where grass began, hands still linked.

Beyond the field, somewhere in the dark, the oak tree waited like an old witness—indifferent to ceremony, loyal to memory.

He looked at her and felt a strange combination of relief and fear.

Relief because the question had been answered.

Fear because an answer creates a future.

But her hand in his was steady.

And for the first time in a long time, the future didn’t feel like a cliff.

It felt like a road.

A road they could choose to walk, one ordinary day stacked on another.

He didn’t say “forever.”

He didn’t need to.

He just squeezed her hand, and she squeezed back, and in that small pressure he felt a promise take shape.

A quiet one.

A real one.`,
    ],
    choices: [
      {
        text: "Continue.",
        action: { type: "setFlag", key: "ch2_confession_success" },
        goto: "ch2_06_diverging_paths"
      }
    ]
  },

  {
    id: "ch2_ending_failure",
    phase: "graduation",
    age: 18,
    title: "Ending B — Confession Failure",
    pages: [
`He moved first.

Not dramatically.
Not with the reckless confidence other boys performed in hallways and at parties and all the loud places where uncertainty was treated like weakness.

He just leaned in.

Carefully.
Honestly.
Far enough that the space between them changed from possibility into decision.

And then, in the final inch, something in him caught.

It was not a single feeling.
It was too many at once:

the years behind them
the fear of misreading gentleness as permission
the old instinct to protect what mattered by handling it softly
the sudden sick certainty that if he forced the moment half a beat too early, he would feel the mistake for years

So the motion changed.

Instead of kissing her, he stepped closer and wrapped his arms around her.

A full hug.
Not a brush. Not a half-measure. Not deniable.

Her breath left her in a small sound that could have meant surprise, disappointment, relief, or some careful combination of all three.

Then she hugged him back tightly enough that he felt the truth of one thing immediately:

she was not untouched by this.
Whatever had failed here had failed inside timing, not indifference.`,

`They stayed like that longer than most people hug.

Long enough that the embrace stopped looking polite and became its own kind of confession — one translated too late, or not quite all the way, into the form the moment had asked for.

When they finally separated, her eyes searched his face with a quiet intensity that made lying feel impossible.

No anger.

No mockery.

Just a question he could not answer cleanly even for himself:

Were they still being careful?

Or had he just watched fear put on the clothes of care again?

“Okay,” she said softly.

The word didn’t mean no.
It didn’t mean yes either.

It meant: I felt that.
It meant: I know you stopped.
It meant: we are still standing inside something unfinished.

All of those meanings can fit inside a single syllable when someone is trying to be gentle.

*BOY_NAME* nodded, feeling both relief and a small grief he did not want to name.

Because he had tried.
Because the trying had revealed the limit.
Because limits, once discovered, do not disappear just because nobody speaks them aloud.`,

`They talked for a while, because silence would have been too loud.

They spoke in careful sentences that avoided the most fragile words.

“How was your family?” he asked.

“Emotional,” she replied, and smiled a little. “Yours?”

“My mom cried,” he admitted.

She laughed softly, and it loosened something in his chest.

They spoke about summer. About plans. About college and work and the way adulthood was approaching like weather.

They spoke about the future as if it were neutral.

But underneath the conversation, another truth kept pressing against everything ordinary:

Distance is coming.
Schedules are coming.
Other people are coming.
The ease of seeing each other every day is ending.

And if they did not build structure, they would be tested by the simple mechanics of time.

He wondered whether a kiss would have made things clearer.
He wondered whether clarity had been exactly what frightened him.
He wondered whether the problem had been lack of courage, lack of readiness, or simply that some truths can be spoken before they can be carried.

He had no answer.

That was the worst part.

Mistakes are easier to survive when they have names.`,

`Eventually, the parking lot had nearly emptied.

Their gowns felt heavier now, like wearing something you were supposed to have outgrown.

She reached for his hand — not interlaced, just held, palm to palm for a moment.

“Whatever happens,” she said quietly, “I don’t want to lose you.”

The sentence struck him like a bell.

Because it was the same fear he had been carrying, spoken plainly.
Because it was both comfort and warning.
Because wanting not to lose someone is not the same thing as knowing how to keep them.

“I don’t want to lose you either,” he said.

And he meant it.
He meant it so hard it frightened him.

Because meaning it does not guarantee anything.
It only guarantees that losing would hurt.

They stood there a moment longer, both of them trying to memorize the other’s face in the light that made everything look slightly unreal.

Then they separated — slowly, reluctantly — and the space between them felt too wide too quickly.

As he drove home, he kept one hand on the steering wheel where hers had been earlier, and he wondered whether waiting is always wisdom…

…or sometimes fear wearing wisdom’s clothes.

Either way, the hinge had turned.

Adulthood was coming.

And whatever they were, it would have to survive the next part.`
    ],
    choices: [
      {
        text: "Continue.",
        action: { type: "setFlag", key: "ch2_confession_failure" },
        goto: "ch2_06_diverging_paths"
      }
    ]
  }
];
// data/chapter2/scenes.dreamCouple.js
// Chapter 2 - Dream Couple (Age 17)
// Rewritten to POV page-object standard while preserving the original scene flow.

window.CH2_DREAM_COUPLE = [

{
id: "ch2_07_dream_couple_01",
phase: "dream_couple",
age: 17,
title: "Dream Couple",
pages: [

{
narrator: `By senior year, people had started treating them like a fact.

Not an official fact.
Not something anyone had confirmed.
Just the kind that formed through repetition until everyone stopped asking where it came from.

Teachers paired them together without thinking too hard about it. Friends made room for both of them in the same stretch of hallway, the same lunch table, the same after-school drift between parking lot and bus loop. If one of them showed up alone, someone usually asked where the other was - not in a teasing way exactly, but with the absent confidence people used for things they had already filed into the structure of the world.

At seventeen, high school ran on that kind of filing system.

Who belonged with whom.
Who was temporary.
Who was dramatic.
Who was safe.
Who would probably still be standing beside each other after the last bell of the year.

Somehow, over time, the two of them had been placed in that last category.

It should have felt comforting.

Mostly, it did.

But comfort and pressure were beginning to live very close together now.

{{CALLBACK:identity_weight}}`,

male: `By senior year, people had started treating him and {girlName} like a fact.

Not an official fact.
Not something anyone had confirmed.
Just the kind that formed through repetition until everyone stopped asking where it came from.

Teachers paired them together without thinking too hard about it. Friends made room for both of them in the same stretch of hallway, the same lunch table, the same after-school drift between parking lot and bus loop. If he showed up alone, someone usually asked where she was - not in a teasing way exactly, but with the absent confidence people used for things they had already filed into the structure of the world.

At seventeen, high school ran on that kind of filing system.

Who belonged with whom.
Who was temporary.
Who was dramatic.
Who was safe.
Who would probably still be standing beside each other after the last bell of the year.

Somehow, over time, he and {girlName} had been placed in that last category.

It should have felt comforting.

Mostly, it did.

But comfort and pressure were beginning to live very close together now.

{{CALLBACK:identity_weight}}`,

female: `By senior year, people had started treating her and {boyName} like a fact.

Not an official fact.
Not something anyone had confirmed.
Just the kind that formed through repetition until everyone stopped asking where it came from.

Teachers paired them together without thinking too hard about it. Friends made room for both of them in the same stretch of hallway, the same lunch table, the same after-school drift between parking lot and bus loop. If she showed up alone, someone usually asked where he was - not in a teasing way exactly, but with the absent confidence people used for things they had already filed into the structure of the world.

At seventeen, high school ran on that kind of filing system.

Who belonged with whom.
Who was temporary.
Who was dramatic.
Who was safe.
Who would probably still be standing beside each other after the last bell of the year.

Somehow, over time, she and {boyName} had been placed in that last category.

It should have felt comforting.

Mostly, it did.

But comfort and pressure were beginning to live very close together now.

{{CALLBACK:identity_weight}}`
},

{
narrator: `The strange part was that the assumption was not entirely wrong.

What existed between them was real.
It had been real for years.

The oak tree had made that true before either of them had the vocabulary for it. So had the treasure under the roots. So had the ordinary accumulation that followed - school years, recesses, sidewalks, bus rides, library tables, pauses in hallways, the small instinctive returns that had become the hidden architecture of their lives.

But being seen as a couple by other people was different from deciding, together, what they were.

Other people flattened things.
They liked categories because categories were easier to talk about than uncertainty.

Couple.
Practically dating.
Basically already together.
Destined.
Intense.
Cute.

These were all shortcuts.
And shortcuts often wound a bond by pretending to understand it faster than it has understood itself.

{{CALLBACK:longing_recognition}}`,

male: `The strange part was that the assumption was not entirely wrong.

What existed between him and {girlName} was real.
It had been real for years.

The oak tree had made that true before either of them had the vocabulary for it. So had the buried stone. So had the ordinary accumulation that followed - school years, recesses, sidewalks, bus rides, library tables, pauses in hallways, the small instinctive returns that had become the hidden architecture of his life.

But being seen as a couple by other people was different from deciding, together, what they were.

Other people flattened things.
They liked categories because categories were easier to talk about than uncertainty.

Boyfriend.
Girlfriend.
Practically dating.
Basically married.
Destined.
Intense.
Cute.

He heard all of those versions in one form or another over the course of that year.

Each time, something in him tightened.`,

female: `The strange part was that the assumption was not entirely wrong.

What existed between her and {boyName} was real.
It had been real for years.

The oak tree had made that true before either of them had the vocabulary for it. So had the buried stone. So had the ordinary accumulation that followed - school years, recesses, sidewalks, bus rides, library tables, pauses in hallways, the small instinctive returns that had become the hidden architecture of her life.

But being seen as a couple by other people was different from deciding, together, what they were.

Other people flattened things.
They liked categories because categories were easier to talk about than uncertainty.

Boyfriend.
Girlfriend.
Practically dating.
Basically married.
Destined.
Intense.
Cute.

She heard all of those versions in one form or another over the course of that year.

Each time, something in her tightened.`
},

{
narrator: `The tension came from a simple split.

The outside world was already ahead of them in language.
The inside truth was still trying to choose the right form for itself.

That is part of what makes senior year so pressurized in stories like this.

The future is close enough to cast a shadow backward over the present.
Every ordinary thing begins feeling more temporary.
Every unnamed thing begins feeling more expensive to leave unnamed for too long.

{{CALLBACK:emotional_baseline}}`,

male: `The tightening did not come from wanting to deny her.

He did not.

It came from wanting whatever this was to stay intact when named, and he had begun understanding that names could stabilize things - but they could also expose them.

He was no longer afraid of feeling too little.
He was afraid of speaking too cheaply about something that had taken years to become this exact.

{{CALLBACK:emotional_baseline}}`,

female: `The tightening did not come from wanting to deny him.

She did not.

It came from wanting whatever this was to stay intact when named, and she had begun understanding that names could stabilize things - but they could also expose them.

She was no longer afraid that the feeling was shallow.
She was afraid of letting shallow language touch something that had taken years to become this exact.

{{CALLBACK:emotional_baseline}}`
}

],
choices: [

{
text: {
male: "Treat the outside assumption as pressure, not permission.",
female: "Refuse to let other people's certainty replace your own slower understanding.",
narrator: "Public assumption is recognized as separate from private truth."
},
effects: {
male: { trust: +1, communication: +1 },
female: { trust: +1, communication: +1 }
},
memoryAdd: ["dream_couple_separated_public_assumption_from_private_truth"],
goto: "ch2_07_dream_couple_02"
},

{
text: {
male: "Admit that what people see is not entirely false, only incomplete.",
female: "Allow yourself to recognize that the shallow version still points toward something real.",
narrator: "The social reading is treated as clumsy rather than wholly wrong."
},
effects: {
male: { openness: +1, affection: +1 },
female: { openness: +1, affection: +1 }
},
memoryAdd: ["dream_couple_admitted_public_view_not_entirely_false"],
goto: "ch2_07_dream_couple_02"
},

{
text: {
male: "Protect the bond by keeping your own standard higher than everyone else's language.",
female: "Hold the bond to the complexity it deserves instead of the categories people prefer.",
narrator: "Care takes the form of refusing simplification."
},
effects: {
male: { resilience: +1, trust: +1, sharedHistory: +1 },
female: { resilience: +1, trust: +1, sharedHistory: +1 }
},
memoryAdd: ["dream_couple_refused_simplification"],
goto: "ch2_07_dream_couple_02"
}

]

},

{
id: "ch2_07_dream_couple_02",
phase: "dream_couple",
age: 17,
title: "Dream Couple",
pages: [

{
narrator: `At home, the world still moved in familiar sequences.

Dinner happened when it was supposed to. Parents still folded concern into ordinary questions, or held it back behind observation, or disguised it inside practical conversation, depending on the house. The domestic world continued teaching its old lessons about order, care, predictability, and the cost of carelessness.

{{CALLBACK:domestic_future_projection}}

Senior year existed inside that structure and against it.

Outside, school kept performing youth with all the usual noise - people breaking up beside vending machines, getting back together by gym doors, posting photographs as if evidence could substitute for depth, speaking each other's names too loudly, turning embarrassment into social currency because that was easier than tenderness.

Inside the quieter architecture of home, those performances looked thinner than they did in hallways.

That contrast mattered.`,

male: `At home, the world still moved in whatever sequences home believed in.

Dinner happened when it happened. Concern arrived through the ordinary questions adults used when they wanted information without making the wanting too visible. Observation lingered in rooms longer than speech sometimes did. The household kept teaching its old lessons about order, care, and what happened when emotion was handled well or handled carelessly.

That structure had shaped him more than he liked to admit.
It meant he did not trust chaos, even when chaos called itself romance.
It meant he was suspicious of loud feelings displayed carelessly in public and then abandoned the moment they became inconvenient.

High school was full of that kind of carelessness.

Couples broke up by vending machines and got back together beside gym doors. People posted photographs as if evidence could substitute for depth. Boys said girls' names like trophies. Girls pretended not to care, then cared in public where caring could become social currency.`,

female: `At home, the world still moved in whatever sequences home believed in.

Dinner happened when it happened. Questions arrived in the tones the household specialized in - practical, tired, attentive, efficient, affectionate, distracted, depending on the evening and the people inside it. The domestic world kept offering its old education about what care looked like, how it was shown, and what kinds of disorder a family absorbed or refused.

That had shaped her more than she liked to admit.
It meant she did not trust chaos simply because chaos made stronger claims on attention.
It meant she had become suspicious of loud feelings displayed carelessly in public and then abandoned the moment they became inconvenient.

High school was full of that kind of carelessness.

Couples broke up by vending machines and got back together beside gym doors. People posted photographs as if evidence could substitute for depth. Students said each other's names too loudly, too cheaply, as if public volume could make private feeling more real than patience ever had.`
},

{
narrator: `What they had built together did not resemble any of that.

Not because they were above adolescence.
Because history had made a different kind of intimacy possible.

They knew how to sit beside each other in near-silence and still feel accompanied.
They knew how to let a moment remain small without dismissing its meaning.
They knew how return could matter more than spectacle.

That made the bond feel sturdier.

It also made the possibility of mishandling it feel much more serious.

{{CALLBACK:social_read}}`,

male: `He and {girlName} had built something different.
Not because they were above all that.
Because their history had made a different kind of intimacy possible.

They knew how to sit beside each other in near-silence and still feel accompanied.
They knew how to let a moment remain small without dismissing its meaning.
They knew how return could matter more than spectacle.

That made what they had feel sturdier.
It also made the possibility of mishandling it feel much more serious.

He did not want them to become one more noisy senior-year story that collapsed under the weight of its own performance. If this was going to become something more explicit, he wanted that change to strengthen the structure, not replace it with display.

{{CALLBACK:social_read}}`,

female: `She and {boyName} had built something different.
Not because they were above adolescence.
Because their history had made a different kind of intimacy possible.

They knew how to sit beside each other in near-silence and still feel accompanied.
They knew how to let a moment remain small without dismissing its meaning.
They knew how return could matter more than spectacle.

That made what they had feel sturdier.
It also made the possibility of mishandling it feel much more serious.

She did not want them to become one more public version of a feeling that had been built privately, carefully, and over time. If what existed between them was going to become more visible, it would need to do so without being made cheaper by visibility.

{{CALLBACK:social_read}}`
},

{
narrator: `Senior year changes time.

Not because clocks move differently.
Because every ordinary thing now carries awareness of ending attached to it.

That awareness touches everything:
routes to class
smells in familiar hallways
library windows in late rain
buses turning through known streets
the sense that adulthood will not keep people in each other's orbit automatically the way school has.

This is where the dream in Dream Couple starts acquiring structure.

A fantasy asks: what if this lasts forever?
A more serious imagination asks: what would we have to do for it not to dissolve?

{{CALLBACK:security_future_weight}}`,

male: `Senior year had changed time.

Not because clocks moved differently.
Because every ordinary thing now came with an awareness of ending attached to it.

People talked about the future constantly now.
Applications. Scholarships. Apartments. Gap years. Work. Debt. Cities. Distance.
Adults framed those conversations as practical preparation, but underneath the practicality he could feel the real pressure: everyone was being asked to imagine a self beyond the architecture that had contained them so far.

And when he imagined that future honestly, he kept running into the same fear.

High school had held them in each other's orbit almost automatically.
Adulthood would not do that for them.`,

female: `Senior year had changed time.

Not because clocks moved differently.
Because every ordinary thing now came with an awareness of ending attached to it.

People talked about the future constantly now.
Applications. Scholarships. Apartments. Gap years. Work. Debt. Cities. Distance.
Adults framed those conversations as practical preparation, but underneath the practicality she could feel the real pressure: everyone was being asked to imagine a self beyond the architecture that had contained them so far.

And when she imagined that future honestly, she kept running into the same fear.

High school had held them in each other's orbit almost automatically.
Adulthood would not do that for them.`
}

],
choices: [

{
text: {
male: "Take the future seriously enough that fantasy is no longer enough.",
female: "Let the imagined future become structural instead of merely dreamy.",
narrator: "The dream begins acquiring practical weight."
},
effects: {
male: { ambition: +1, trust: +1, communication: +1 },
female: { ambition: +1, trust: +1, communication: +1 }
},
memoryAdd: ["dream_couple_future_became_structural"],
goto: "ch2_07_dream_couple_03"
},

{
text: {
male: "Protect what exists by refusing to let senior-year chaos define it.",
female: "Let the contrast with everyone else's carelessness sharpen your standards.",
narrator: "Public noise clarifies private seriousness."
},
effects: {
male: { resilience: +1, trust: +1, sharedHistory: +1 },
female: { resilience: +1, trust: +1, sharedHistory: +1 }
},
memoryAdd: ["dream_couple_contrast_sharpened_standards"],
goto: "ch2_07_dream_couple_03"
},

{
text: {
male: "Recognize that the bond already carries more structure than the outside world understands.",
female: "Allow yourself to see that what exists is sturdier than the social version of it.",
narrator: "The inward reading outranks the public one."
},
effects: {
male: { trust: +1, sharedHistory: +1, affection: +1 },
female: { trust: +1, sharedHistory: +1, affection: +1 }
},
memoryAdd: ["dream_couple_inward_reading_outran_public_reading"],
goto: "ch2_07_dream_couple_03"
}

]

},

{
id: "ch2_07_dream_couple_03",
phase: "dream_couple",
age: 17,
title: "Dream Couple",
pages: [

{
narrator: `By spring, other people's assumptions had started taking on the texture of a prediction.

At lunch, one of their friends said, in a tone aimed halfway between joke and observation, "So are you two going to prom together or are we all still pretending this is mysterious?"

The table laughed.

Not cruelly.

That almost made it worse.

Cruelty at least gives you something to push against. Warm mockery mixed with casual certainty is harder to reject cleanly because it claims to be on your side while still taking ownership of a story that is not yours.

One of them looked down at a tray for half a second too long.
The other rolled their eyes and made a joke good enough to redirect the room.
Conversation moved.
The atmosphere did not.

Some sentences linger by refusing to be dramatic enough to justify the amount they alter inside a body.

This was one of them.`,

male: `By spring, other people's assumptions had started taking on the texture of a prediction.

At lunch, one of his friends said, "So are you two going to prom together or are we all still pretending this is mysterious?"

The table laughed.
Not cruelly.

That almost made it worse.

{selfName} looked down at his tray for half a second too long before answering, which was enough for everyone to interpret the pause however they wanted. Across from him, {girlName} rolled her eyes and said, "Maybe we're pretending your personality is mysterious too," which got a bigger laugh and moved the conversation somewhere safer.

But afterward, when they were walking to class with hallway traffic pressing around them, he said quietly, "Sorry about that."`,

female: `By spring, other people's assumptions had started taking on the texture of a prediction.

At lunch, one of his friends said, "So are you two going to prom together or are we all still pretending this is mysterious?"

The table laughed.
Not cruelly.

That almost made it worse.

She saw {selfName} look down at his tray for half a second too long before answering, which was enough for everyone to interpret the pause however they wanted. So she rolled her eyes and said, "Maybe we're pretending your personality is mysterious too," which got a bigger laugh and moved the conversation somewhere safer.

But afterward, when they were walking to class with hallway traffic pressing around them, he said quietly, "Sorry about that."`
},

{
narrator: `The apology mattered.

Not because the joke had been catastrophic.
Because apology is one of the ways people reveal what they believe belongs to both of them.

"For what?"

"People."

That should have ended it.
Instead the answer comes:
"People are always people."

Then, after a beat:
"They're not completely wrong though."

That is the line that changes the scene.

Not the lunch joke.
Not the apology.
The acknowledgment after both.

Not completely wrong.

The social world has projected its shallow dream onto them.
Now one of them admits, carefully, that the projection is not empty - only incomplete.

That kind of honesty is difficult to take back once spoken.

{{CALLBACK:attach_signal_reading}}`,

male: `She glanced at him. "For what?"

"People."

Her mouth tilted slightly at one corner. "People are always people."

That should have ended it.
Instead she added, after a moment, "They're not completely wrong though."

He looked at her then, fully, but she was watching the hallway ahead.
The sentence stayed between them the rest of the walk to class like something warm that neither of them touched directly.

Not completely wrong.

He carried it with him all afternoon.`,

female: `She glanced at him. "For what?"

"People."

Her mouth tilted slightly at one corner. "People are always people."

That should have ended it.
Instead she added, after a moment, "They're not completely wrong though."

She did not look at him right away after saying it.
That was part of the sentence too. It gave him room to hear it without making him answer before he was ready.

The words stayed between them the rest of the walk to class like something warm that neither of them touched directly.

Not completely wrong.

She carried the sentence too, even after she had said it, because saying a true thing aloud does not reduce its force. Sometimes it increases it.

{{CALLBACK:attach_signal_reading}}`
},

{
narrator: `What makes this phase Dream Couple is not simply that other people imagine a future for them.

It is that, for the first time, both of them begin imagining one too.

Not irresponsibly.
Not in the sentimental way youth is often accused of.
In the more grounded, more dangerous way:
they start testing whether the dream could survive practical time.

Prom enters the scene because prom is how senior year ritualizes fantasy.
Graduation enters because graduation is how senior year ritualizes endings.
The real question beneath both rituals is the same:
will they leave this year still undefined, or will they decide the definition themselves before circumstance starts deciding for them?

{{CALLBACK:security_future_weight}}`,

male: `Senior year had changed time so thoroughly that he could no longer think about her only in present-tense fragments.

The route to third period.
The smell of gym varnish.
The row of dented blue lockers near the science wing.
The library windows in late rain.
The bus turning past the strip of hedges before her stop.

All of it had started feeling temporary in a way that made him protective and restless at the same time.

If they wanted to keep becoming part of the same structure, it would require choosing each other in a more visible way than childhood or adolescence ever had. He was beginning to understand that drift rarely felt dramatic from the inside. Things were lost gradually, through postponement, through vagueness, through trusting that something important would survive without being protected.

He did not want to trust that.
Not with her.`,

female: `Senior year had changed time so thoroughly that she could no longer think about him only in present-tense fragments.

The route to third period.
The smell of gym varnish.
The row of dented blue lockers near the science wing.
The library windows in late rain.
The bus turning past the strip of hedges before her stop.

All of it had started feeling temporary in a way that made her protective and restless at the same time.

If they wanted to keep becoming part of the same structure, it would require choosing each other in a more visible way than childhood or adolescence ever had. She was beginning to understand that drift rarely felt dramatic from the inside. Things were lost gradually, through postponement, through vagueness, through trusting that something important would survive without being protected.

She did not want to trust that.
Not with him.`
}

],
choices: [

{
text: {
male: "Take her line seriously and let it remain with you all afternoon.",
female: "Allow the truth in what you said to keep widening after the sentence is over.",
narrator: "The acknowledgment is not treated as casual."
},
effects: {
male: { trust: +1, affection: +1, openness: +1 },
female: { trust: +1, affection: +1, openness: +1 }
},
memoryAdd: ["dream_couple_took_not_completely_wrong_seriously"],
goto: "ch2_07_dream_couple_04"
},

{
text: {
male: "Shift from private feeling toward the question of shared future.",
female: "Let the conversation with others push you inward toward what you actually want.",
narrator: "Social prediction is converted into private seriousness."
},
effects: {
male: { ambition: +1, communication: +1, trust: +1 },
female: { ambition: +1, communication: +1, trust: +1 }
},
memoryAdd: ["dream_couple_turned_prediction_into_seriousness"],
goto: "ch2_07_dream_couple_04"
},

{
text: {
male: "Refuse to let the joke own the meaning, even if it accidentally touched it.",
female: "Keep the public version shallow while privately admitting the truth beneath it.",
narrator: "Public misreading is held apart from inward honesty."
},
effects: {
male: { resilience: +1, trust: +1, sharedHistory: +1 },
female: { resilience: +1, trust: +1, sharedHistory: +1 }
},
memoryAdd: ["dream_couple_separated_joke_from_truth"],
goto: "ch2_07_dream_couple_04"
}

]

},

{
id: "ch2_07_dream_couple_04",
phase: "dream_couple",
age: 17,
title: "Dream Couple",
pages: [

{
narrator: `One Friday evening in late spring, they ended up sitting on the curb outside one of their houses after walking back from a study session that had contained very little studying.

The neighborhood looked almost too peaceful in the long light.
Lawns recently cut.
Mailboxes throwing narrow shadows across the pavement.
A sprinkler clicking methodically in a yard down the street, each turn followed by the soft rush of water through grass.
Somewhere farther away, a garage door groaned open and then settled again.

The air smelled like warm concrete and the green dampness that came after hoses had been running.
It reminded one of them, faintly, of childhood evenings when time still seemed large enough to waste.

Beside them, the other sat with a foot tapping lightly against the curb now and then - a small restless motion long familiar enough to read correctly.
Not panic.
Thought gathering itself.

The whole evening felt balanced on that small movement of a heel.

{{CALLBACK:home_tone}}`,

male: `One Friday evening in late spring, they ended up sitting on the curb outside his house after walking back from a study session that had contained very little studying.

The neighborhood looked almost too peaceful in the long light.
Lawns recently cut.
Mailboxes throwing narrow shadows across the pavement.
A sprinkler clicking methodically in a yard down the street, each turn followed by the soft rush of water through grass.
Somewhere farther away, a garage door groaned open and then settled again.

The air smelled like warm concrete and the green dampness that came after hoses had been running.
It reminded him, faintly, of childhood evenings when time still seemed large enough to waste.

{girlName} sat beside him with her knees angled slightly toward the street.
Her shoes tapped lightly against the curb now and then - a small restless motion he had learned to read over the years.
Not panic.
Thought gathering itself.

He had the irrational feeling that the whole evening was balanced on that small movement of her heel.

{{CALLBACK:home_tone}}`,

female: `One Friday evening in late spring, they ended up sitting on the curb outside his house after walking back from a study session that had contained very little studying.

The neighborhood looked almost too peaceful in the long light.
Lawns recently cut.
Mailboxes throwing narrow shadows across the pavement.
A sprinkler clicking methodically in a yard down the street, each turn followed by the soft rush of water through grass.
Somewhere farther away, a garage door groaned open and then settled again.

The air smelled like warm concrete and the green dampness that came after hoses had been running.
It reminded her, faintly, of childhood evenings when time still seemed large enough to waste.

She sat beside {boyName} with her knees angled slightly toward the street.
Her shoes tapped lightly against the curb now and then - a small restless motion she knew he could read correctly by now.
Not panic.
Thought gathering itself.

The whole evening felt balanced on that small movement of her heel.

{{CALLBACK:home_tone}}`
},

{
narrator: `Then comes one of the clearest questions in the scene.

"Do you ever think people decided who we were before we did?"
The answer arrives with less surprise than either of them might once have expected.

Yes.
Of course.
That has been happening for a long time.

But the more serious line comes after.

Does that bother you?

This is where Dream Couple stops being a category imposed from outside and becomes an internal negotiation:
not whether a dream exists,
but who has the right to author it.`,

male: `After a while she asked, "Do you ever think people decided who we were before we did?"
He let out a breath through his nose. "Yeah."
"Does that bother you?"
He considered lying.
Not because he wanted to hide from her.
Because the truthful answer felt bigger than the question.

"A little," he said. Then, after a second: "Mostly because I don't want them to be the ones deciding it."
She looked at him then.
Not surprised.
Just quiet in the way that meant he had said something real enough to matter.`,

female: `After a while she asked, "Do you ever think people decided who we were before we did?"
He let out a breath through his nose. "Yeah."
"Does that bother you?"
She watched him consider the answer.
That pause mattered. It told her he understood the scale of the question and was resisting the easiest, safest version of it.

"A little," he said. Then, after a second: "Mostly because I don't want them to be the ones deciding it."
She looked at him then.
Not surprised.
Just quiet in the way that meant he had said something real enough to matter.`
},

{
narrator: `A breeze moves down the street.

Hair lifts, then settles again.
The sprinkler keeps clicking somewhere down the block.
The ordinary world goes on around them with no special regard for thresholds, which is often how thresholds actually happen.

Then one of them says the more dangerous thing.

"I keep thinking about next year."
That sentence changes the scale of the scene immediately.

The future is now in the room.
Not in a decorative way.
In a structural one.

And once the future enters a bond like this, fantasy is no longer enough to carry the weight alone.`,

male: `A breeze moved down the street and lifted a few strands of her hair across her cheek. She tucked them back with a motion so familiar it made his chest tighten.

"I keep thinking about next year," she said.

He nodded.
He had been thinking about little else.

"And?" he asked.

She stared toward the streetlight at the corner, though it had not turned on yet. "And I don't know what happens to things like this when everything else changes."
Things like this.

The phrase should have felt evasive.
Instead it felt accurate.
Because what existed between them had always been partly built from things that resisted immediate naming.`,

female: `A breeze moved down the street and lifted a few strands of her hair across her cheek. She tucked them back with a motion so familiar she could feel his attention catch on it even without looking directly at him.

"I keep thinking about next year," she said.

He nodded.
She had expected that.
He had been carrying the future in his body for months now in the way people do when they are trying to think structurally about something they also feel deeply.

"And?" he asked.

She stared toward the streetlight at the corner, though it had not turned on yet. "And I don't know what happens to things like this when everything else changes."
Things like this.

The phrase should have felt evasive.
Instead it felt accurate.
Because what existed between them had always been partly built from things that resisted immediate naming.`
}

],
choices: [

{
text: {
male: "Answer the future question honestly instead of using caution as camouflage.",
female: "Let the conversation move toward the future in its real shape, not a softened one.",
narrator: "The dream is forced to reckon with structure."
},
effects: {
male: { communication: +2, trust: +1, ambition: +1 },
female: { communication: +2, trust: +1, ambition: +1 }
},
memoryAdd: ["dream_couple_answered_future_honestly"],
goto: "ch2_07_dream_couple_05"
},

{
text: {
male: "Stay with the phrase 'things like this' and let its accuracy do the work for now.",
female: "Keep the language careful, but do not let it become an escape from meaning.",
narrator: "Restraint remains, but it is no longer evasive."
},
effects: {
male: { trust: +1, affection: +1, sharedHistory: +1 },
female: { trust: +1, affection: +1, sharedHistory: +1 }
},
memoryAdd: ["dream_couple_kept_language_careful"],
goto: "ch2_07_dream_couple_05"
},

{
text: {
male: "Recognize that next year is asking for intention, not drift.",
female: "Let the possibility of change make you more deliberate, not more vague.",
narrator: "The future turns feeling into responsibility."
},
effects: {
male: { openness: +1, trust: +1, communication: +1 },
female: { openness: +1, trust: +1, communication: +1 }
},
memoryAdd: ["dream_couple_chose_intention_over_drift"],
goto: "ch2_07_dream_couple_05"
}

]

},

{
id: "ch2_07_dream_couple_05",
phase: "dream_couple",
age: 17,
title: "Dream Couple",
pages: [

{
narrator: `What follows is the most structurally honest part of the scene.

One of them says, quietly and with surprising clarity, "I don't want it to disappear just because we were too careful."
The line works because it contains both truths at once:
care has protected the bond,
and care, if confused with indefinite delay, could also become the thing that lets it drift apart.

The answer comes back just as quietly.

"I don't either."
There it is again:
not drama,
not declaration,
just the steady honesty that has been shaping them for years.

The dream projected onto them by other people was always shallow.
The dream forming here is not shallow.

It has logistics inside it.
Distance, schedules, graduation, the hard surfaces of adulthood already beginning to show through the soft cloth of senior year.

That is why the scene matters.

They are not merely imagining forever.
They are beginning to ask what structure would be required for anything like forever not to dissolve.

{{CALLBACK:security_future_weight}}`,

male: `He looked at her hands resting between them on the curb.
He had held one of them before.
A few times now. Enough to know how natural it felt and how much he still noticed it every single time.

"I don't want it to disappear just because we were too careful," he said.

The sentence surprised him with its own clarity.
Maybe because it had been true for so long that it no longer needed polishing.

She let that sit for a moment.
The sprinkler kept clicking somewhere down the block. A car passed slowly, windows open, music low enough that it arrived only as bass and drift.

"I don't either," she said.

There it was again - not drama, not declaration, just the steady honesty that had always made her harder to ignore.

He thought about all the versions of them other people carried.
The almost-couple.
The inevitable couple.
The couple who somehow acted married without ever saying anything out loud.

What unsettled him most was that the dream those people projected onto them was both shallow and uncomfortably close to something he wanted.`,

female: `He looked at her hands resting between them on the curb.
He had held one of them before.
A few times now. Enough that the gesture had become familiar without losing its force.

"I don't want it to disappear just because we were too careful," he said.

The sentence surprised her with its clarity.
Maybe because it had clearly been waiting for him longer than the evening had.

She let that sit for a moment.
The sprinkler kept clicking somewhere down the block. A car passed slowly, windows open, music low enough that it arrived only as bass and drift.

"I don't either," she said.

There it was again - not drama, not declaration, just the steady honesty that had always made him harder to simplify in her mind.

She thought about all the versions of them other people carried.
The almost-couple.
The inevitable couple.
The couple who somehow acted married without ever saying anything out loud.

What unsettled her most was that the dream those people projected onto them was both shallow and uncomfortably close to something she wanted too.

{{CALLBACK:security_future_weight}}`
},

{
narrator: `Then comes one of the simplest and therefore most consequential gestures in the chapter.

One reaches for the other's hand.
Not impulsively.
Not by accident.
In the open air of an ordinary quiet street while the evening keeps going around them as if nothing irreversible has happened.

The other closes their fingers around it at once.

No hesitation.
No performance.
Only recognition.

The contact calms more than it excites.

That calm carries force.

It feels less like beginning from nothing than like finally placing weight on a bridge they have spent years building one board at a time.

This is why history matters in a love story.
Not as backstory.
As load-bearing structure.`,

male: `He did want a future that kept her in it.
He did want the relief of not pretending uncertainty was sophistication.
He did want the private thing between them to become strong enough to survive public time.

But wanting a shared future at seventeen felt different from daydreaming.
It had logistics inside it.
Colleges. Distance. Schedules. Parents. Money. The ordinary hard surfaces of adult life.

Loving someone in adolescence, he was beginning to understand, always contained a fantasy version and a structural version.
The fantasy asked: what if this became forever?
The structural version asked: what would we actually have to do for this not to dissolve?

He no longer trusted one without the other.

He reached for her hand then, not impulsively and not by accident. He took it in the open air of his quiet street while the evening kept going around them as if nothing irreversible had happened.

Her fingers closed around his at once.
No hesitation. No performance. Only recognition.

The contact calmed him more than it excited him, and that calm carried its own force.
It felt less like beginning from nothing than like finally placing weight on a bridge they had spent years building one board at a time.`,

female: `She had begun to understand something similar.

Wanting a future at seventeen could not remain only romantic if it was to become real. Fantasy asked one set of questions. Structure asked another. The dream had to survive both or it would eventually fail one of them.

He reached for her hand then, not impulsively and not by accident. He took it in the open air of his quiet street while the evening kept going around them as if nothing irreversible had happened.

Her fingers closed around his at once.
No hesitation. No performance. Only recognition.

The contact calmed her more than it excited her, and that calm carried force.
It felt less like beginning from nothing than like finally placing weight on a bridge they had spent years building one board at a time.

That was what other people never saw when they called them effortless.
History had been doing structural work for years.`,
},

{
narrator: `They sit like that a long while.

Not speaking much.
Not needing to.

The street darkens gradually around them. Porch lights come on in careful squares. The sprinkler shuts off with a final metallic click and the sudden quiet afterward feels larger than the sound had.

Eventually one rests their head lightly against the other's shoulder.

The gesture is so gentle it might be missed by anyone driving past.

To the person carrying it, it feels enormous.

Then comes the sentence that finally turns Dream Couple from projection into intention:

"I don't want to keep pretending we can leave this undefined forever."
The answer:
"Then maybe we shouldn't."
That is not yet confession.
It is permission.

And permission can be more structurally important than confession, because it changes what kind of future the next scene is allowed to attempt.

Graduation enters here not as a ceremony but as a chosen threshold.

A date.
A moment.
A place to stop drifting and start deciding.

{{CALLBACK:attach_trust_baseline}}

{{CALLBACK:attach_closeness_tolerance}}`,

male: `They sat like that for a long while.
Not speaking much. Not needing to. The street darkened gradually around them. Porch lights came on in careful squares. The sprinkler shut off with a final metallic click and the sudden quiet afterward felt larger than the sound had.

Eventually she rested her head lightly against his shoulder.
The gesture was so gentle it might have been missed by anyone driving past.
To him it felt enormous.

He thought about the first afternoon beneath the oak tree, how impossible it would have been then to understand this version of closeness. Not because the roots weren't already there. Because time had to accumulate around them before the shape became visible.

Maybe that was why other people called them a dream couple.
Not because they looked glamorous.
Because from the outside they looked effortless, and people often mistake history for ease.

But there had never been anything effortless about learning how to carry another person carefully over this many years.
It had taken silence, mistakes, return, patience, and an uncomfortable number of almosts.

"I don't want to keep pretending we can leave this undefined forever," he said.

She lifted her head and looked at him.
"Then maybe we shouldn't," she said.`,

female: `They sat like that for a long while.
Not speaking much. Not needing to. The street darkened gradually around them. Porch lights came on in careful squares. The sprinkler shut off with a final metallic click and the sudden quiet afterward felt larger than the sound had.

Eventually she rested her head lightly against his shoulder.
The gesture was so gentle it might have been missed by anyone driving past.
To her it felt enormous too, because gentleness is often the clearest measurement of trust.

She thought about the first afternoon beneath the oak tree, how impossible it would have been then to understand this version of closeness. Not because the roots had not already started forming. Because time had to accumulate around them before the shape became visible.

Maybe that was why other people called them a dream couple.
Not because they looked glamorous.
Because from the outside they looked effortless, and people often mistake history for ease.

But there had never been anything effortless about learning how to carry another person carefully over this many years.

"I don't want to keep pretending we can leave this undefined forever," he said.

She lifted her head and looked at him.
"Then maybe we shouldn't," she said.

{{CALLBACK:attach_trust_baseline}}`
},

{
narrator: `The scene closes not in climax, but in orientation.

They talk, eventually, in practical fragments.
Not full plans.
Not promises too large for their age.
Just the first honest shaping of intention.

Graduation night.
A chosen moment.
Not because waiting is safer, but because choosing together is different from drifting until choice is forced by circumstance.

By the time one of them stands to go home, the streetlights are fully on and the pavement has given back most of the day's stored warmth.
They face each other in the ordinary dark of a familiar street, both aware that something has changed without yet becoming fully visible from the outside.

A hand is squeezed once.
A warning is given with humor in it.
"Don't back out."
"You either."
Then one walks away, turning once halfway to the corner.
The other is still standing there.

The night around them is ordinary.
The house behind still smells like dinner, detergent, and the calm order of things being where they belong. Tomorrow still contains homework, errands, routines, and all the mechanics of a life that does not care about inner turning points.

But inside that ordinary structure, something has finally taken clearer form.

The dream is no longer only what other people projected onto them.

It has become a question they are now brave enough to answer for themselves.

{{CALLBACK:emotional_carryover}}`,

male: `They were quiet again after that, but it was a different quiet than before.
Less protective. More decided.

They talked, eventually, in practical fragments.
Not full plans. Not promises too large for their age.
Just the first honest shaping of intention.

Graduation was coming.
Everything around them was already treating it like a threshold.
Maybe it could be one for them too - not because the ceremony mattered, but because marking a change on purpose sometimes helped you step into it without pretending it happened by itself.

"Graduation night," she said after a while, testing the idea as much as naming it.

He looked at her, understood immediately, and nodded.

By the time she stood to go home, the streetlights were fully on and the pavement had given back most of the day's stored warmth.
He stood too.

She squeezed his hand once before letting go.
"Don't back out," she said, and there was humor in it, but not only humor.

He smiled. "You either."
Then she started down the sidewalk and turned once halfway to the corner.
He was still standing there.
She gave him that small steady smile he had learned years ago to take seriously, then kept walking.

He stayed where he was until she disappeared from sight.

The night around him felt ordinary.
The house behind him would still smell like dinner and detergent and the calm order of things being where they belonged. Tomorrow would still contain homework, errands, routines, and all the mechanics of a life that did not care about inner turning points.

But inside that ordinary structure, something had finally taken clearer form.

The dream was no longer only what other people projected onto them.
It had become a question they were now brave enough to answer for themselves.`,

female: `They were quiet again after that, but it was a different quiet than before.
Less protective. More decided.

They talked, eventually, in practical fragments.
Not full plans. Not promises too large for their age.
Just the first honest shaping of intention.

Graduation was coming.
Everything around them was already treating it like a threshold.
Maybe it could be one for them too - not because the ceremony mattered, but because choosing a moment together felt different from continuing to drift.

"Graduation night," she said after a while, testing the idea as much as naming it.

He looked at her, understood immediately, and nodded.

By the time she stood to go home, the streetlights were fully on and the pavement had given back most of the day's stored warmth.
He stood too.

She squeezed his hand once before letting go.
"Don't back out," she said, and there was humor in it, but not only humor.

He smiled. "You either."
Then she started down the sidewalk and turned once halfway to the corner.
He was still standing there.
She gave him that small steady smile he had learned years ago to take seriously, then kept walking.

He stayed where he was until she disappeared from sight.

The night around her felt ordinary.
Tomorrow would still contain homework, errands, routines, and the mechanical continuation of senior year.

But inside that ordinary structure, something had finally taken clearer form.

The dream was no longer only what other people projected onto them.
It had become a question they were now brave enough to answer for themselves.`
}

],
choices: [

{
text: {
male: "Confess before graduation. Make it official now.",
female: "Move earlier than planned and refuse to let caution become delay again.",
narrator: "The dream is turned into action ahead of the chosen threshold."
},
action: { type: "setFlag", key: "confess_early" },
effects: {
male: { trust: +2, affection: +2 },
female: { trust: +2, affection: +2 }
},
memoryAdd: ["dream_couple_chose_early_confession"],
goto: "ch2_08_almost_confession_01"
},

{
text: {
male: "Wait for graduation night. Let the ending become the beginning.",
female: "Keep the shared threshold and let intention gather one final layer of meaning.",
narrator: "The dream is carried carefully toward the chosen moment."
},
action: { type: "setFlag", key: "confess_graduation" },
effects: {
male: { sharedHistory: +2 },
female: { sharedHistory: +2 }
},
memoryAdd: ["dream_couple_chose_graduation_confession"],
goto: "ch2_08_almost_confession_01"
}

]

}

];

// data/chapter2/scenes.socialFriction.js
// Chapter 2 - Social Friction (Age 15)
// Rewritten to POV page-object standard while preserving the original scene flow.

window.CH2_SOCIAL_FRICTION = [

{
id: "ch2_05_social_friction_01",
phase: "social_friction",
age: 15,
title: "Social Friction",
pages: [

{
narrator: `Closeness becomes easier to carry when no one names it.

That had been one of the quiet advantages of the bus.
The windows fogged. The route was long. Most people were too tired to pay close attention to anyone except themselves. What existed there could stay suspended - felt clearly, explained badly, protected by motion.

School was different.

School turned patterns into information.
Who sat where.
Who waited for whom.
Who laughed first when the other person said something under their breath.
Teenagers collected those details the way burrs collected on socks: casually, persistently, without needing permission.

By fifteen, one of them had already learned that people noticed much more than they admitted and understood much less than they claimed.

That combination made everything dangerous.

{{CALLBACK:social_read}}`,

male: `Closeness becomes easier to carry when no one names it.

That had been one of the quiet advantages of the bus.
The windows fogged. The route was long. Most people were too tired to pay close attention to anyone except themselves. What existed there could stay suspended - felt clearly, explained badly, protected by motion.

School was different.

School turned patterns into information.
Who sat where.
Who waited for whom.
Who laughed first when the other person said something under their breath.
Teenagers collected those details the way burrs collected on socks: casually, persistently, without needing permission.

By fifteen, {boyName} had learned that people noticed much more than they admitted and understood much less than they claimed.

That combination made everything dangerous.

{{CALLBACK:social_read}}`,

female: `Closeness becomes easier to carry when no one names it.

That had been one of the quiet advantages of the bus.
The windows fogged. The route was long. Most people were too tired to pay close attention to anyone except themselves. What existed there could stay suspended - felt clearly, explained badly, protected by motion.

School was different.

School turned patterns into information.
Who sat where.
Who waited for whom.
Who laughed first when the other person said something under their breath.
Teenagers collected those details the way burrs collected on socks: casually, persistently, without needing permission.

By fifteen, {girlName} had learned that people noticed much more than they admitted and understood much less than they claimed.

That combination made everything dangerous.

{{CALLBACK:social_read}}`
},

{
narrator: `The danger did not come from one large hostile act.

It came from the social world doing what the social world always does once two people have started mattering visibly to each other: reducing complexity into shorthand.

A bus seat becomes a story.
A saved chair becomes proof.
A repeated hallway exchange becomes evidence for people who have never had to carry the actual feeling inside it.

Nothing about this is original.
That is part of what makes it difficult to resist.

The outside world is lazy with intimacy.`,

male: `What unsettled him was not only the fact of being seen.

It was the crudeness of what seeing became in other people's hands.

He and {girlName} had built themselves around years.
Around return.
Around ordinary repetition so layered it had started acquiring emotional authority long before either of them risked naming it.

From outside, though, none of that history mattered.
To other students, what existed between them was just another pattern waiting to be flattened into a joke.

That offended him more than he wanted to admit.
Not because the jokes were especially clever or sharp.
Because they were cheap.`,

female: `What unsettled her was not only the fact of being seen.

It was how quickly being seen invited simplification.

What existed between her and {boyName} was not the kind of thing that could be explained by one lunch seat, one bus ride, one winter evening, or one shared look in a hallway. It had history behind it. Roots. Repetition. All the quiet accumulation that made a bond difficult to perform and difficult to dismiss.

Other people had no use for that complexity.

{{CALLBACK:conflict_tone_surveillance}}

They wanted shorthand.
Evidence.
A label.
Something they could say in a tone light enough to absolve themselves of the fact that careless language changes the atmosphere around real things.`
},

{
narrator: `This is one of adolescence's particular violences.

Not catastrophe.
Reduction.

A feeling still trying to understand itself is dragged outward into a public grammar it did not choose. And once public grammar enters a private pattern, both people inside that pattern must decide whether to resist it, retreat from it, or let it alter the emotional weather between them anyway.

{{CALLBACK:world_interpretation}}

{{CALLBACK:attach_misreading_fear}}`,

male: `He had not expected the first serious pressure on whatever existed between them to come from people who were barely paying attention.

That was what made it so irritating.
No grand confrontation.
No honest question.
Only glances, remarks, half-jokes, and the low adolescent instinct to name a thing before understanding it because naming can feel like control.

He was beginning to understand that some of the hardest tests of closeness are not direct conflict.

They are misreading.`,

female: `She had not expected the first serious pressure on whatever existed between them to arrive so cheaply.

Not through betrayal.
Not through argument.
Not through anything important enough to deserve the word crisis.

Just misreading.
The ordinary teenage version of it.

A remark tossed lightly across a lunch table.
A phrase made jokey enough to survive protest.
A look from someone who thought observation and understanding were the same thing.

That kind of pressure was not large enough to justify drama.
It was still large enough to change tone.`
}

],
choices: [

{
text: {
male: "Treat the social pressure as real before it hardens into habit.",
female: "Acknowledge early that the outside world has started touching what was still mostly yours.",
narrator: "The friction is recognized before it can be dismissed as nothing."
},
effects: {
male: { trust: +1, communication: +1 },
female: { trust: +1, communication: +1 }
},
memoryAdd: ["social_friction_recognized_early"],
goto: "ch2_05_social_friction_02"
},

{
text: {
male: "Keep the tone calm and refuse to let other people define the scale of the problem.",
female: "Stay composed and deny the social world the drama it seems to want.",
narrator: "Composure becomes the first defense against outside pressure."
},
effects: {
male: { resilience: +1, trust: +1 },
female: { resilience: +1, trust: +1 }
},
memoryAdd: ["social_friction_met_with_composure"],
goto: "ch2_05_social_friction_02"
},

{
text: {
male: "Feel the danger without showing it yet.",
female: "Let the unease register inwardly while keeping the surface of the day intact.",
narrator: "Awareness sharpens before reaction does."
},
effects: {
male: { openness: +1, affection: +1 },
female: { openness: +1, affection: +1 }
},
memoryAdd: ["social_friction_felt_before_shown"],
goto: "ch2_05_social_friction_02"
}

]

},

{
id: "ch2_05_social_friction_02",
phase: "social_friction",
age: 15,
title: "Social Friction",
pages: [

{
narrator: `It started small.

A friend from algebra glanced past one of them in the cafeteria and asked, with the false carelessness boys often used when they wanted to sound casual and observant at the same time, whether the seat was being saved.

The question itself was ordinary.

The meaning inside it was not.

The empty chair beside the tray.
The way the bag had been placed.
The angle of the body leaving room before admitting it had left room.
All of it suddenly became visible from the outside in a way it had not been one second earlier.`,

male: `It started small.

A friend from algebra glanced past him in the cafeteria and said, with the false carelessness boys used when they wanted to sound casual and observant at the same time, "You saving that seat or what?"
{boyName} looked at the empty chair beside him.

He had not thought of himself as saving it.
Not consciously.

But his backpack was on the floor instead of on the chair. His tray was shifted slightly to leave room. His body had angled without asking him first.

Before he could answer, {girlName} arrived with her lunch and slid into the seat like it had always been the obvious place for her to go.`,

female: `It started small.

A friend from algebra glanced past him in the cafeteria and said, with the false carelessness boys used when they wanted to sound casual and observant at the same time, "You saving that seat or what?"
She was still walking toward the table when she saw the exchange happen.

Not clearly enough to catch every word.
Clearly enough to read the shape of it.

The empty chair beside him.
The slight shift in his posture.
The way his friend looked at him not cruelly, not even sharply, but with that adolescent look that pretended to be casual while quietly claiming ownership over what it had noticed.

She arrived before the moment could be managed into something cleaner and sat down where, apparently, she had already been expected to sit.`
},

{
narrator: `Nothing large followed.

No public joke.
No announcement.
No humiliation.
Only a look.

The kind that says: I saw that.

Sometimes exposure does not require spectacle.
Sometimes it enters the body through a single glance and remains there, small and abrasive, because a private pattern has suddenly been confirmed by someone not invited to interpret it.

{{CALLBACK:emotional_baseline}}`,

male: `His friend gave him a look - not cruel, not even especially sharp, just the kind of look that said: I saw that.

Then he walked off.

Nothing happened after.
No public joke.
No announcement.
No humiliation.

And still, the whole exchange stayed in his chest like a splinter too small to remove cleanly.

Being noticed did not always require being exposed.
Sometimes it only required realizing that what felt private to you had already become visible to someone else.

{{CALLBACK:emotional_baseline}}`,

female: `She felt the moment remain even after the friend walked away.

Nothing dramatic had happened.
No public scene.
No humiliation worth naming.

And still, something abrasive had entered the afternoon.

It was not exactly shame.
Not even anger in a clean form.

It was the private irritation of seeing something real flattened into a look from someone who had not earned the right to understand it. That kind of social friction did not wound deeply all at once. It settled in smaller, more persistent ways.`
},

{
narrator: `At this age, the body often processes social information before the mind decides what category the information belongs to.

A tighter chest.
An altered tone.
A slightly harder laugh than necessary.
A new awareness of where the hands are resting, how the shoulders are angled, whether sitting where one is sitting has suddenly become a statement visible from across the room.

That was the real beginning of the scene.

Not the question.
The self-consciousness after it.`,

male: `He became abruptly aware of everything.

Where his arms were.
How easily he looked at her when she sat down.
How natural the whole thing had become before anyone had forced him to see it from outside.

That was the part he hated most.

Not that the seat had been saved.
That some stupid half-joking question had made him aware of the fact with a new kind of brightness. The self-consciousness arrived immediately and made the whole cafeteria feel less neutral around him, as if the room had tilted by one invisible degree.`,

female: `She became aware, almost against her will, of how the moment now looked.

Her tray.
The chair.
The fact that she had sat there without asking because asking had not seemed necessary.
The fact that asking suddenly felt like something one might do if other people had not started noticing.

That was what made the friction real.

It changed nothing essential.
It altered the atmosphere anyway.`
}

],
choices: [

{
text: {
male: "Stay where you are and refuse to let one look rearrange the whole truth.",
female: "Sit down as if the seat is still yours to take without apology.",
narrator: "The first response is to protect the ordinary shape of the bond."
},
effects: {
male: { trust: +1, sharedHistory: +1 },
female: { trust: +1, sharedHistory: +1 }
},
memoryAdd: ["social_friction_refused_small_exposure"],
goto: "ch2_05_social_friction_03"
},

{
text: {
male: "Act casual enough that the moment cannot grow bigger on other people's terms.",
female: "Keep the surface easy and deny the room any extra information.",
narrator: "Ease is used strategically."
},
effects: {
male: { resilience: +1, communication: +1 },
female: { resilience: +1, communication: +1 }
},
memoryAdd: ["social_friction_acted_casual"],
goto: "ch2_05_social_friction_03"
},

{
text: {
male: "Notice how much being seen changes your awareness of even ordinary things.",
female: "Feel how quickly visibility turns the ordinary into something harder to carry.",
narrator: "The moment is registered inwardly before any overt response is chosen."
},
effects: {
male: { openness: +1, trust: +1 },
female: { openness: +1, trust: +1 }
},
memoryAdd: ["social_friction_registered_visibility"],
goto: "ch2_05_social_friction_03"
}

]

},

{
id: "ch2_05_social_friction_03",
phase: "social_friction",
age: 15,
title: "Social Friction",
pages: [

{
narrator: `That week, the atmosphere around them changed in tiny, irritating ways.

A girl in English asked if one of them was "Still doing the bus-wife thing," then laughed before the phrase had time to settle.
A teacher paired them for a project without asking, then smiled as if making a harmless joke with the universe.
Someone behind them in the hallway made kissing noises so half-heartedly that pretending not to hear it somehow felt worse than hearing it clearly.

None of it was severe.

That was what made it difficult to fight.

There was no villain.
No single cruel moment dramatic enough to justify outrage.
Just a steady pressure from the social world, trying to flatten something complicated into something easy to say.`,

male: `That week, the atmosphere around them changed in tiny, irritating ways.

A girl in English asked {girlName} if she was "Still doing the bus-wife thing," then laughed before the phrase had time to settle.
A teacher paired them for a project without asking, then smiled as if she were making a harmless joke with the universe.
Someone behind them in the hallway made kissing noises so half-heartedly that pretending not to hear it somehow felt worse than hearing it clearly.

None of it was severe.

That was what made it difficult to fight.

There was no villain.
No single cruel moment dramatic enough to justify outrage.
Just a steady pressure from the social world, trying to flatten something complicated into something easy to say.`,

female: `That week, the atmosphere around them changed in tiny, irritating ways.

A girl in English asked her if she was "Still doing the bus-wife thing," then laughed before the phrase had time to settle.
A teacher paired them for a project without asking, then smiled as if she were making a harmless joke with the universe.
Someone behind them in the hallway made kissing noises so half-heartedly that pretending not to hear it somehow felt worse than hearing it clearly.

None of it was severe.

That was what made it difficult to fight.

There was no villain.
No single cruel moment dramatic enough to justify outrage.
Just a steady pressure from the social world, trying to flatten something complicated into something easy to say.`
},

{
narrator: `Outside school, ordinary life still had whatever structure home believed in.
Homework still had to be done. Dinner still arrived in its usual form. Parents still asked questions in the tones their households specialized in - attentive, distracted, tired, efficient, or affectionate.

But adolescence had changed the terms of what got carried home.

A teenager can move through an entire evening appearing normal while privately replaying a comment that would sound ridiculous if repeated aloud to an adult. Social friction often survives exactly because it is so easy to minimize from outside.`,

male: `Outside school, ordinary life still had whatever structure home believed in.
Homework still had to be done. Dinner still arrived in its usual form. Adults still asked questions in the familiar tones of home.

But adolescence had changed what got carried back through the front door.

He could sit at the table and answer practical questions about classes, assignments, whether the bus had been late, whether math was still annoying, all while privately replaying a single look from the cafeteria or a phrase from the hallway that would have sounded trivial if spoken aloud to an adult.

That was what made the whole thing so efficient.
The comments were small enough to dismiss.
Still large enough to alter the inside of the week.

{{CALLBACK:reciprocity_imbalance_read}}`,

female: `Outside school, ordinary life still had whatever structure home believed in.
Homework still had to be done. Dinner still arrived. Adults still asked questions in the tones their households knew best.

But adolescence had changed what came home with her.

She could move through an entire evening appearing normal while privately replaying one stupid phrase from English or the exact smile on a teacher's face when he was assigned beside her again. The friction was small enough that saying it aloud would have made it sound smaller still. That was part of its power.

It did not need to become crisis to alter the tone of being fifteen.`
},

{
narrator: `What pressure like this does, over time, is force a choice.

Not an ultimate choice.
A tonal one.

Do two people retreat from what is becoming visible?
Do they protect it by making it smaller on purpose?
Do they keep returning to it with ordinary steadiness and trust that the reality beneath the rumor can outlast the rumor?

The scene had not yet reached its answer.

It had reached the point where an answer would soon be required.`,

male: `He could feel the decision approaching even before he named it.

He and {girlName} could make themselves less noticeable.
Sit differently.
Speak less.
Break the routine just enough to let the room believe it had misread the signs.

Or they could keep going as they had been and accept that other people would continue taking pieces of what they saw and turning them into something cheap.

Neither option felt clean.

That was the real friction.

{{CALLBACK:silence_quality_read}}`,

female: `She could feel the decision approaching before she had language for it.

She and {boyName} could protect themselves by stepping back just enough to cool the attention around them.
Or they could keep returning to the same ordinary nearness and let other people keep misreading what they were too shallow to understand.

Neither option felt fair.
That was part of why neither felt simple.`
}

],
choices: [

{
text: {
male: "Refuse to let other people cheapen what has taken years to become real.",
female: "Keep the pattern intact and do not surrender the bond to shallow outside language.",
narrator: "The bond is defended through continuity."
},
effects: {
male: { trust: +2, sharedHistory: +1 },
female: { trust: +2, sharedHistory: +1 }
},
memoryAdd: ["social_friction_defended_continuity"],
goto: "ch2_05_social_friction_04"
},

{
text: {
male: "Step back a little and protect the feeling by making it less visible.",
female: "Reduce the visible pattern for a while so the bond is not constantly handled by others.",
narrator: "Distance is used as cover."
},
effects: {
male: { resilience: +1, trust: -1 },
female: { resilience: +1, trust: -1 }
},
memoryAdd: ["social_friction_used_distance_as_cover"],
goto: "ch2_05_social_friction_04"
},

{
text: {
male: "Watch how she responds before deciding how much to resist or retreat.",
female: "Read his reaction first before choosing whether to harden or hold steady.",
narrator: "The next move is treated as relational, not solitary."
},
effects: {
male: { communication: +1, openness: +1 },
female: { communication: +1, openness: +1 }
},
memoryAdd: ["social_friction_read_other_first"],
goto: "ch2_05_social_friction_04"
}

]

},

{
id: "ch2_05_social_friction_04",
phase: "social_friction",
age: 15,
title: "Social Friction",
pages: [

{
narrator: `What finally mattered was not the comments themselves.

It was what happened between the two of them afterward.

One afternoon they ended up outside near the bike racks after last period, not fully alone, but far enough from the main doors that the sound of other students spread out and lost its sharpness. Winter light made everything look flatter than it was. The air smelled faintly of wet pavement and chain oil.

No one opened with the real thing at first.

That, too, was part of the age.

Instead there were remarks about class. About the teacher who had paired them. About someone being annoying in English. Each sentence moved around the real subject like a hand testing the edge of cold water before deciding how much of the body to put in.`,

male: `What finally mattered was not the comments themselves.

It was what happened between him and {girlName} afterward.

One afternoon they ended up outside near the bike racks after last period, not fully alone, but far enough from the main doors that the sound of other students spread out and lost its sharpness. Winter light made everything look flatter than it was. The air smelled faintly of wet pavement and chain oil.

He said something about the teacher first.
Then about the project.
Then about how stupid the English comment had been.

None of those were the real sentence.

He knew that.
She knew it too.

The real thing was still moving toward the surface more slowly than either of them wanted to force.`,

female: `What finally mattered was not the comments themselves.

It was what happened between her and {boyName} afterward.

One afternoon they ended up outside near the bike racks after last period, not fully alone, but far enough from the main doors that the sound of other students spread out and lost its sharpness. Winter light made everything look flatter than it was. The air smelled faintly of wet pavement and chain oil.

She said something about the teacher first.
Then about the project.
Then about how stupid the English comment had been.

None of those were the real sentence.

She knew that.
He knew it too.

The real thing was still approaching in the slow awkward way real things sometimes do at fifteen, when even honesty needs cover before it can stand in open air.`
},

{
narrator: `Then one of them said, quietly, "I don't like when they talk about us like they know."
That was the line.

Small enough to survive.
True enough to change the atmosphere immediately.

There are ages where truth does not arrive through declarations.
It arrives through resistance.
By naming what feels wrong first, the larger shape of what matters becomes visible around it.`,

male: `Then she said, quietly, "I don't like when they talk about us like they know."
That was the line.

It changed the air at once.

Not because it was grand.
Because it was exact.

He looked at her more fully then. The sentence had not only rejected the others. It had contained a second truth inside it. Us. Not him. Not her. Us. The word carried a meaning neither of them could safely expand too quickly and neither of them could pretend not to have heard.

"I know," he said.

And he did.
More than he had wanted to admit.`,

female: `Then she said, quietly, "I don't like when they talk about us like they know."
That was the line.

It changed the air at once.

Not because it was grand.
Because it was exact.

He looked at her more fully then. She could tell he had heard the second truth hiding inside the first one. Us. Not him. Not her. Us. The word carried more weight than the social problem alone should have required.

"I know," he said.

And the answer sounded like more than agreement.
It sounded like recognition.`
},

{
narrator: `The rest of the conversation stayed careful.

That was right.

Social friction does not always produce clarity by making people bolder. Sometimes it forces them to protect the thing more intelligently. Two people who have been flattened by other people's assumptions may respond by withdrawing, yes - but they may also respond by understanding more precisely what the assumptions have failed to grasp.

This was one of those moments.`,

male: `He wanted to say more.

That the comments bothered him not because they were embarrassing, but because they were wrong in a cheap way.
That what existed between them was too rooted, too accumulated, too hard-won to be reduced to hallway shorthand.
That being misunderstood by shallow people hurt less than watching her absorb the misunderstanding at all.

But fifteen still made directness expensive.

So he stayed inside the version of honesty the moment could bear.

"People always make things smaller than they are," he said.

She looked at him for one long second.

"Yeah," she said. "They do."`,

female: `She wanted him to say more.

Not everything.
Not some reckless declaration by the bike racks.
Only enough to confirm that the social pressure had reached him at the same depth it had reached her.

He did not say everything.

What he said instead was smaller and, for that reason, perhaps truer to the age.

"People always make things smaller than they are."
She looked at him for one long second.

"Yeah," she said. "They do."
The answer carried more tenderness than the wording itself.`
}

],
choices: [

{
text: {
male: "Treat the moment as proof that what exists is shared, not one-sided.",
female: "Let the word 'us' remain in the air and trust that both of you heard it properly.",
narrator: "The social pressure reveals shared understanding rather than breaking it."
},
effects: {
male: { trust: +2, affection: +1, communication: +1 },
female: { trust: +2, affection: +1, communication: +1 }
},
memoryAdd: ["social_friction_shared_understanding"],
goto: "ch2_05_social_friction_05"
},

{
text: {
male: "Protect the bond by keeping the truth small and careful for now.",
female: "Stay within the manageable version of honesty and preserve the rest for later.",
narrator: "The connection is protected through restraint."
},
effects: {
male: { resilience: +1, trust: +1, sharedHistory: +1 },
female: { resilience: +1, trust: +1, sharedHistory: +1 }
},
memoryAdd: ["social_friction_protected_through_restraint"],
goto: "ch2_05_social_friction_05"
},

{
text: {
male: "Notice that misunderstanding has made the bond feel more serious, not less.",
female: "Let the pressure reveal the scale of what outsiders have failed to understand.",
narrator: "Friction sharpens significance."
},
effects: {
male: { openness: +1, affection: +1, trust: +1 },
female: { openness: +1, affection: +1, trust: +1 }
},
memoryAdd: ["social_friction_sharpened_significance"],
goto: "ch2_05_social_friction_05"
}

]

},

{
id: "ch2_05_social_friction_05",
phase: "social_friction",
age: 15,
title: "Social Friction",
pages: [

{
narrator: `After that, nothing dramatic changed outwardly.

That was important.

No one was suddenly corrected. The hallway did not become kind. The jokes did not vanish forever. School remained school - crowded, observant, careless, and young in all the predictable ways.

But something had changed inside the bond.

The friction had made one truth harder to ignore:
what existed between them was no longer shaped only by what they felt privately.
It was also being tested by whether they could keep recognizing each other accurately while the social world kept misreading them from outside.`,

male: `After that, nothing dramatic changed outwardly.

No one was corrected.
The comments did not vanish.
The room did not suddenly become respectful just because he wanted it to.

School stayed school.

But inside him, something had clarified.

The problem was no longer just embarrassment.
It was stewardship.

If what existed between him and {girlName} mattered - and it did - then part of caring for it now meant refusing to let shallow public language decide its meaning by default. That did not necessarily require confrontation. Sometimes it only required steadiness. Sometimes it required not betraying the truth of the bond simply because being seen had become uncomfortable.`,

female: `After that, nothing dramatic changed outwardly.

No one was corrected.
The comments did not vanish.
The hallways did not suddenly become wiser.

School stayed school.

But inside her, something had clarified.

The pressure from outside had not made the bond feel childish.
It had made it feel more serious.

Because now what existed between her and {boyName} had to survive more than private uncertainty. It had to survive public reduction too. That meant some form of mutual recognition would have to become stronger than the noise around it, or the noise would keep trying to rewrite the meaning for them.`,
},

{
narrator: `What social friction often reveals, when a bond survives it well, is not just vulnerability.

It reveals scale.

A connection shallow enough to depend on easy surroundings usually weakens when attention turns crude. A connection with older roots often does something else: it becomes more exact about what must be protected.

That was the threshold here.

Not confession.
Not resolution.

Only the beginning of a harsher adolescence lesson:
that what matters may need defending before it is even fully defined.`,

male: `He thought, later, of the oak tree.

Not sentimentally.
Structurally.

Back then the world had been smaller and less watched. Secrets could still be buried in dirt and left there. Now the social world had grown teeth. It did not care about roots or nuance. It preferred shorthand.

And still, something in him recognized the old continuity beneath the new pressure.

What mattered had not become less real because other people were crude about it.
If anything, the crudeness had made him more aware of how much patience, history, and restraint were already inside the thing they kept carrying between them.`,

female: `She thought, later, of the oak tree too.

Not because childhood had returned.
Because its logic had changed.

Once, secrecy had meant soil, roots, hidden stones, and the private laws two children made for themselves. Now secrecy had become social. It meant learning what not to hand over cheaply to people who would only flatten it into gossip, teasing, or something easier to consume than to understand.

That realization did not make her colder.
It made her more exact about what deserved careful handling.`,
},

{
narrator: `The scene closed without a grand answer.

That was right.

Social friction had not solved anything.
It had done something subtler and, in its own way, more important.

It had made the bond between them newly conscious of itself.

The next phase would ask what happens when that consciousness has to keep living inside real closeness rather than only protecting itself from outside noise.

For now, the truth was enough:
they had not been driven apart.
They had been made more aware.

And awareness, at this age, is often the real beginning of consequence.`,

male: `He did not leave the scene feeling brave.

He left it feeling more responsible.

That was a different thing.
Maybe a more useful one.

The comments still existed.
The hallway still existed.
But now he knew that what mattered between them had entered a stage where care would have to include resistance - not always loudly, not always publicly, but in the steady refusal to let what was shallow become authoritative.`,

female: `She did not leave the scene feeling victorious.

She left it feeling more responsible.

That was heavier than relief and more durable too.

Nothing outside had been fixed.
Something between them had been clarified.

That would have to be enough for now.
And for now, perhaps, enough was exactly what adolescence was willing to give before asking for more.`
}

],
choices: [

{
text: {
male: "Hold steady and let the bond survive the noise without shrinking.",
female: "Keep the bond intact and refuse to let outside language dictate its scale.",
narrator: "Steadiness becomes the answer to misreading."
},
effects: {
male: { trust: +2, sharedHistory: +1, resilience: +1 },
female: { trust: +2, sharedHistory: +1, resilience: +1 }
},
memoryAdd: ["social_friction_held_steady"],
goto: "ch2_06_self_awareness_01"
},

{
text: {
male: "Protect what matters by becoming more careful about when and how it is visible.",
female: "Guard the bond more intelligently now that the outside world has started pressing on it.",
narrator: "Care becomes strategy."
},
effects: {
male: { communication: +1, trust: +1, openness: +1 },
female: { communication: +1, trust: +1, openness: +1 }
},
memoryAdd: ["social_friction_guarded_more_intelligently"],
goto: "ch2_06_self_awareness_01"
},

{
text: {
male: "Accept that the pressure has made the bond feel more serious.",
female: "Let the friction deepen the sense that what exists between you carries real consequence.",
narrator: "The social world's misreading sharpens inward truth."
},
effects: {
male: { affection: +2, trust: +1, sharedHistory: +1 },
female: { affection: +2, trust: +1, sharedHistory: +1 }
},
memoryAdd: ["social_friction_deepened_seriousness"],
goto: "ch2_06_self_awareness_01"
}

]

}

];

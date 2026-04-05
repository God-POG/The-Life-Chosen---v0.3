// data/chapter2/scenes.proximity.js
// Chapter 2 - Proximity (Age 15)
// Rewritten to POV page-object standard while preserving the original scene flow.

window.CH2_PROXIMITY = [

{
id: "ch2_04_proximity_01",
phase: "proximity",
age: 15,
title: "Proximity",
pages: [

{
narrator: `By winter, the school had stopped pretending to be unfamiliar.

The hallways no longer felt oversized. Locker combinations lived in hands now instead of only in heads. Even the fluorescent lights seemed less aggressive than they had in September, though that may have been only what happened when something irritating became routine often enough.

At fifteen, routine mattered more than adults tended to notice.

It was how people ended up part of a life without anyone announcing it.
A seat saved without saying so.
A pause in a hallway that lasted a little longer than necessary.
A person expected before they were actually seen.

That was what the other had become here.

Not new.
Not rediscovered.
Not some sudden event.

A pattern.

And patterns, one of them was learning, could become important so gradually that by the time the feeling was noticed clearly, the feeling already had years behind it.

{{CALLBACK:emotional_baseline}}`,

male: `By winter, the school had stopped pretending to be unfamiliar.

The hallways no longer felt oversized. The locker combination lived in his hands now instead of only in his head. Even the fluorescent lights seemed less aggressive than they had in September, though maybe that was only what happened when something irritating became routine often enough.

At fifteen, routine mattered more than adults tended to notice.

It was how people ended up part of your life without anyone announcing it.
A seat saved without saying so.
A pause in a hallway that lasted a little longer than necessary.
A person you expected to be there before you actually saw them.

That was what {girlName} had become.

Not new.
Not rediscovered.
Not some sudden event.

A pattern.

And patterns, he was learning, could become important so gradually that by the time you realized it, the feeling already had years behind it.

{{CALLBACK:emotional_baseline}}`,

female: `By winter, the school had stopped pretending to be unfamiliar.

The hallways no longer felt oversized. The locker combination lived in her hands now instead of only in her head. Even the fluorescent lights seemed less aggressive than they had in September, though maybe that was only what happened when something irritating became routine often enough.

At fifteen, routine mattered more than adults tended to notice.

It was how people ended up part of your life without anyone announcing it.
A seat saved without saying so.
A pause in a hallway that lasted a little longer than necessary.
A person you expected to be there before you actually saw them.

That was what {boyName} had become.

Not new.
Not rediscovered.
Not some sudden event.

A pattern.

And patterns, she was learning, could become important so gradually that by the time you realized it, the feeling already had years behind it.

{{CALLBACK:emotional_baseline}}`
},

{
narrator: `They had been in each other's orbit too long to pretend otherwise.

First the oak tree.
Then ordinary school years.
Then the strange sharpening that came with getting older, when familiar things stopped feeling neutral simply because body and mind were no longer neutral either.

The change now was quieter but harder to defend against.

It lived in repetition.

{{CALLBACK:attention_fixation}}

They were not in every class together, but they kept arriving in the same parts of the day. A shared class in the morning. A hallway crossing before lunch. Library tables after school sometimes. The bus ride home more often than either had planned out loud.

None of those things looked dramatic.

That was exactly why they mattered.

Important things in a life rarely announced themselves at the beginning.
They accumulated.

{{CALLBACK:hesitation_style}}`,

male: `They had been in each other's orbit for too long to pretend otherwise.

First the oak tree.
Then ordinary school years.
Then the strange sharpening that came with getting older, when familiar things stopped feeling neutral simply because your body and mind were no longer neutral either.

New Environment had been the first time school itself made that familiarity feel public.
Familiar, Different had made the shift impossible to ignore.

Now the change was quieter but harder to defend against.

It lived in repetition.

They were not in every class together, but they kept arriving in the same parts of the day. A shared class in the morning. A hallway crossing before lunch. Library tables after school sometimes. The bus ride home more often than either of them had planned out loud.

None of those things looked dramatic.

That was exactly why they mattered.

Important things in his life rarely announced themselves at the beginning.
They accumulated.

{{CALLBACK:hesitation_style}}`,

female: `They had been in each other's orbit for too long to pretend otherwise.

First the oak tree.
Then ordinary school years.
Then the strange sharpening that came with getting older, when familiar things stopped feeling neutral simply because body and mind were no longer neutral anymore.

New Environment had made school itself feel more public.
Familiar, Different had made the shift impossible to ignore.
Now the change was quieter, but it was harder to deny for that very reason.

It lived in repetition.

They were not in every class together, but they kept arriving in the same parts of the day. A shared class in the morning. A hallway crossing before lunch. Library tables after school sometimes. The bus ride home more often than either of them had ever arranged aloud.

None of those things looked dramatic.

That was exactly why they mattered.

Important things in her life rarely announced themselves at the beginning.
They accumulated.

{{CALLBACK:hesitation_style}}`
},

{
narrator: `This phase was not about surprise.

It was about the emotional authority of repetition.

A person seen often enough begins changing the shape of the day before anyone decides what name to give that change. Proximity, in that sense, does not begin with touch. It begins with expectation.
With the quiet bodily knowledge that a certain seat, a certain hour, a certain stretch of the route feels more settled once the other person is in it.

{{CALLBACK:world_interpretation}}`,

male: `What unsettled him was not that she mattered.

He had already known that, at least in older forms.
What unsettled him was the way the mattering had become harder to keep abstract. The routine no longer felt like background. It felt like architecture. And architecture becomes visible most sharply when you start realizing how much of your internal balance depends on it without having consciously chosen the dependence first.

{{CALLBACK:world_interpretation}}`,

female: `What unsettled her was not that he mattered.

That fact had been present for years in quieter forms.
What unsettled her was how difficult it had become to keep the mattering abstract. Routine had stopped behaving like background and started behaving like structure. And once someone becomes part of the structure of a day, the body starts protecting the pattern before the mind has decided whether such protection is wise.

{{CALLBACK:world_interpretation}}`
}

],
choices: [

{
text: {
male: "Let the routine feel real without forcing it into language yet.",
female: "Accept the pattern as meaningful, even if it stays mostly unspoken.",
narrator: "Repetition is allowed to carry its own authority."
},
effects: {
male: { sharedHistory: +1, trust: +1 },
female: { sharedHistory: +1, trust: +1 }
},
memoryAdd: ["proximity_accepted_pattern"],
goto: "ch2_04_proximity_02"
},

{
text: {
male: "Notice how much the day shifts around her and grow more careful because of it.",
female: "Notice how much the day shifts around him and carry that awareness quietly.",
narrator: "The pattern sharpens attention before it changes behavior."
},
effects: {
male: { openness: +1, affection: +1 },
female: { openness: +1, affection: +1 }
},
memoryAdd: ["proximity_noticed_day_shift"],
goto: "ch2_04_proximity_02"
},

{
text: {
male: "Treat the closeness lightly on the surface, even if it has grown heavier underneath.",
female: "Keep the outward tone easy while the inner meaning keeps gathering weight.",
narrator: "Understatement is used to protect something increasingly difficult to deny."
},
effects: {
male: { resilience: +1, communication: +1 },
female: { resilience: +1, communication: +1 }
},
memoryAdd: ["proximity_kept_tone_light"],
goto: "ch2_04_proximity_02"
}

]

},

{
id: "ch2_04_proximity_02",
phase: "proximity",
age: 15,
title: "Proximity",
pages: [

{
narrator: `The bus became one of those small territories that belonged more to routine than intention.

At first they had sat near each other because it was convenient.
Then because it was normal.
Then because choosing not to would have felt more obvious than simply letting the pattern continue.

The ride home was long enough to create its own atmosphere.
Windows fogged at the edges in cold weather. Wet coats carried in the smell of outside air, old fabric, and slush drying into the ridges of rubber flooring. The heater worked unevenly, always too much or not enough, as if it resented being asked to decide.

Students were louder at the beginning of the route.
Then they got tired.
Then the bus settled.

By the halfway point, the whole vehicle often felt suspended between places - no longer school, not yet home.

Inside that suspended space, closeness became easier to notice.
Harder to explain away.

{{CALLBACK:longing_recognition}}`,

male: `The bus became one of those small territories that belonged more to routine than intention.

At first they had sat near each other because it was convenient.
Then because it was normal.
Then because choosing not to would have felt more obvious than simply letting the pattern continue.

The ride home was long enough to create its own atmosphere.
Windows fogged at the edges in cold weather. Wet coats carried in the smell of outside air, old fabric, and slush drying into the ridges of rubber flooring. The heater worked unevenly, always too much or not enough, as if it resented being asked to decide.

Students were louder at the beginning of the route.
Then they got tired.
Then the bus settled.

By the time it reached the halfway point, the whole vehicle often felt suspended between places - no longer school, not yet home.

Inside that suspended space, closeness became easier to notice.
Harder to explain away.

{{CALLBACK:world_interpretation}}`,

female: `The bus became one of those small territories that belonged more to routine than intention.

At first they had sat near each other because it was convenient.
Then because it was normal.
Then because choosing not to would have felt more obvious than simply letting the pattern continue.

The ride home was long enough to create its own atmosphere.
Windows fogged at the edges in cold weather. Wet coats carried the smell of outside air, old fabric, and slush drying into the grooves of the floor. The heater worked unevenly, always too much or not enough, as if it resented being asked to decide.

Students were louder at the beginning of the route.
Then they got tired.
Then the bus settled.

By the halfway point, the whole vehicle often felt suspended between places - no longer school, not yet home.

Inside that suspended space, closeness became easier to notice.
Harder to explain away.

{{CALLBACK:world_interpretation}}`
},

{
narrator: `The first time their legs stayed pressed together for more than a second, the bus had turned too sharply and nobody had moved away fast enough.

Or maybe that was only the version of the moment that could be said out loud.

What mattered was not only the contact.
It was what happened after.

One could have shifted.
The other could have shifted.
The excuse was available to both of them.

Neither used it.

The pressure remained there between denim and winter fabric: warm, steady, deniable only if neither looked too closely at what their bodies already understood.

{{CALLBACK:attach_closeness_tolerance}}`,

male: `The first time their legs stayed pressed together for more than a second, the bus had turned too sharply and nobody had moved away fast enough.

Or maybe that was only the version of the moment that could be said out loud.

What he remembered most was not the contact itself.
It was what happened after.

She could have shifted.
He could have shifted.
The excuse was available to both of them.

Neither of them used it.

The pressure remained there between denim and winter fabric: warm, steady, deniable only if neither of them looked too closely at what their bodies already understood.

He stared out the fogged window and became absurdly aware of everything at once.
His own breathing.
The heat in his leg.
The vibration of the bus through the seat.
The fact that she was still there.`,

female: `The first time their legs stayed pressed together for more than a second, the bus had turned too sharply and nobody had moved away fast enough.

Or maybe that was only the version of the moment that could still be told plainly.

What she remembered most was not the contact itself.
It was what happened after.

He could have shifted.
She could have shifted.
The excuse was available to both of them.

Neither of them used it.

The pressure remained there between denim and winter fabric: warm, steady, deniable only if neither of them looked too closely at what the body had already understood before language got there.

She looked toward the window and became suddenly aware of everything at once.
Her own breathing.
The heat along her leg.
The vibration of the bus through the seat.
The fact that he had stayed.`,
},

{
narrator: `At nine, being near the other had felt like curiosity.
At ten, it had felt like familiarity made public.
At fourteen, it had felt like recognition with roots.

At fifteen, proximity had become physical enough that it could no longer be mistaken for abstraction.

That was the shift this scene required them to feel, whether either of them felt ready for it or not.`,

male: `At nine, being near her had felt like curiosity.
At ten, it had felt like familiarity made public.
At fourteen, it had felt like recognition with roots.

At fifteen, proximity had become physical enough that he could not keep mistaking it for abstraction.

That made the whole thing feel both simpler and more dangerous. Simpler because the body rarely lies cleanly about what it notices. More dangerous because once the body has noticed, silence stops being neutral.

{{CALLBACK:emotional_timing_awareness}}`,

female: `At nine, being near him had felt like curiosity.
At ten, it had felt like familiarity made public.
At fourteen, it had felt like recognition with roots.

At fifteen, proximity had become physical enough that she could no longer keep mistaking it for abstraction.

That made the feeling harder to sentimentalize and harder to dismiss. The body had entered the story now, and once the body enters it, even a quiet pattern begins carrying risk.`
}

],
choices: [

{
text: {
male: "Stay in the moment and do not move away.",
female: "Let the contact remain and do not break it first.",
narrator: "The body is allowed to keep speaking where language still hesitates."
},
effects: {
male: { affection: +1, trust: +1, sharedHistory: +1 },
female: { affection: +1, trust: +1, sharedHistory: +1 }
},
memoryAdd: ["proximity_did_not_move"],
goto: "ch2_04_proximity_03"
},

{
text: {
male: "Act as if the contact is ordinary, even while feeling exactly how unordinary it is.",
female: "Keep your face calm and let the meaning stay hidden under composure.",
narrator: "Control is used to preserve the scene from exposure."
},
effects: {
male: { resilience: +1, communication: +1 },
female: { resilience: +1, communication: +1 }
},
memoryAdd: ["proximity_masked_reaction"],
goto: "ch2_04_proximity_03"
},

{
text: {
male: "Notice that silence has changed shape now that touch is part of it.",
female: "Recognize that silence is no longer only silence once the body is involved.",
narrator: "The moment is interpreted before it is acted on."
},
effects: {
male: { openness: +1, trust: +1 },
female: { openness: +1, trust: +1 }
},
memoryAdd: ["proximity_reinterpreted_silence"],
goto: "ch2_04_proximity_03"
}

]

},

{
id: "ch2_04_proximity_03",
phase: "proximity",
age: 15,
title: "Proximity",
pages: [

{
narrator: `Observation deepened under repeated nearness.

One of them began to notice details with the intensity of someone trying not to admit they were memorizing them.

The way one wrist rested loosely over the strap of a bag.
The way one body leaned slightly toward the aisle when speaking, then toward the window when thinking.
The way loose strands of hair caught against the collar of a coat when the bus heater blew too hard.

These things should have been trivial.

They were not.`,

male: `He began to notice details with the intensity of someone trying not to admit he was memorizing them.

The way she rested one wrist loosely over the strap of her bag.
The way she leaned slightly toward the aisle when speaking, then toward the window when thinking.
The way loose strands of hair caught against the collar of her coat when the bus heater blew too hard.

These things should have been trivial.
They weren't.

They felt structural.

The same way he had once learned the oak tree by its roots, its crossing stone, the patch of dirt where treasure waited beneath the surface, he was now learning her through repetition and nearness.`,

female: `She began to notice details with the intensity of someone trying not to admit she was memorizing them.

The way he hooked one thumb into the strap of his bag when he was tired.
The way his shoulder shifted before he spoke if he was deciding how much truth to risk.
The way his face went quieter, not emptier but more concentrated, when a thought mattered too much to be thrown carelessly into conversation.

These things should have been trivial.
They weren't.

They felt structural.

The same way the old oak tree had once been learned through roots, ground, and repeated return, she was now learning him through nearness and routine in a form that no longer belonged to childhood alone.`
},

{
narrator: `Adolescence changed the meaning of observation.

It was no longer just knowledge.
It was hunger complicated by affection.
Attention sharpened by restraint.
The difficult realization that wanting to touch someone and wanting to protect what exists between you are not always aligned, even when both feelings are sincere.`,

male: `But adolescence changed the meaning of observation.

It was no longer just knowledge.
It was hunger complicated by affection.
Attention sharpened by restraint.
The difficult realization that wanting to touch someone and wanting to protect what existed between them were not always aligned, even when both feelings were sincere.

That was what made the bus feel so morally exacting in those winter weeks. It was a place where closeness was possible without anyone having to explain it, and because no explanation had yet been forced, the responsibility for not damaging the thing itself felt heavier, not lighter.`,

female: `Adolescence changed the meaning of observation.

It was no longer just knowledge.
It was hunger complicated by affection.
Attention sharpened by restraint.
The difficult realization that wanting to reach toward someone and wanting to protect what existed between you were not always aligned, even when both impulses were honest.

That was what made the bus feel so exacting. The closeness was real. The silence around it was real too. And because nothing had yet been named cleanly, every small physical fact carried more weight than it would have if the whole thing had been louder, cheaper, or less rooted in years already behind them.`
},

{
narrator: `Other people at school made desire look noisy.

Boys in locker rooms.
Couples performing whole relationships in public.
Breakups in hallways.
Reconciliations by vending machines.
Jealousy turned into theater because teenagers often mistake visibility for depth.

What existed here did not resemble any of that.

That should have made it easier to trust.

Sometimes it did.
Sometimes it only made the bond feel more undefended, because nothing protected it except the fact that both people kept returning to it with care.`,

male: `Other people at school made desire look noisy.

Boys in the locker room talked too loudly about girls they barely knew. Couples performed entire relationships in public: breakups in hallways, reconciliations by vending machines, jealousy turned into theater because teenagers often mistook visibility for depth.

What existed between him and {girlName} did not resemble any of that.

That should have made it easier to trust.
Sometimes it did.
Sometimes it only made him more aware of how undefended it was.

They had never built themselves around spectacle.
They had built themselves around return.

And return creates a different kind of intimacy.
Not louder.
More consequential.`,

female: `Other people at school made desire look noisy.

There was always some performance underway somewhere: somebody proving they liked someone by making sure the whole hallway knew it, somebody treating embarrassment like public property, somebody using loudness as if loudness itself could protect a fragile feeling from being questioned.

What existed between her and {boyName} did not resemble any of that.

That should have made it easier to trust.
Sometimes it did.
Sometimes it only made the whole thing feel more exposed.

{{CALLBACK:closeness_public_private_split}}

They had never built themselves around spectacle.
They had built themselves around return.

And return creates a different kind of intimacy.
Not louder.
More consequential.`
}

],
choices: [

{
text: {
male: "Protect what exists by staying careful with it.",
female: "Protect the bond by refusing to let desire turn it careless.",
narrator: "Restraint is treated as part of devotion, not the opposite of it."
},
effects: {
male: { trust: +1, sharedHistory: +1, resilience: +1 },
female: { trust: +1, sharedHistory: +1, resilience: +1 }
},
memoryAdd: ["proximity_chose_careful_restraint"],
goto: "ch2_04_proximity_04"
},

{
text: {
male: "Let yourself feel how physical the closeness has become.",
female: "Acknowledge that the body has entered the story and cannot be argued away now.",
narrator: "The truth of desire is recognized without being sensationalized."
},
effects: {
male: { affection: +2, openness: +1 },
female: { affection: +2, openness: +1 }
},
memoryAdd: ["proximity_acknowledged_desire"],
goto: "ch2_04_proximity_04"
},

{
text: {
male: "Notice that return matters more than spectacle ever could.",
female: "Anchor the feeling in repetition and history rather than performance.",
narrator: "The bond is read through continuity, not noise."
},
effects: {
male: { sharedHistory: +2, trust: +1 },
female: { sharedHistory: +2, trust: +1 }
},
memoryAdd: ["proximity_chose_return_over_spectacle"],
goto: "ch2_04_proximity_04"
}

]

},

{
id: "ch2_04_proximity_04",
phase: "proximity",
age: 15,
title: "Proximity",
pages: [

{
narrator: `One evening, the heater failed almost completely.

Cold climbed up through the metal floor of the bus and settled into shoes, ankles, hands. Windows filmed over until the outside world became mostly light and shadow. Students complained for a while, then gave up and folded inward, each person trying to preserve warmth without admitting they cared.

One of them slid into the seat beside the other with the half-casual confidence of someone who had done it enough times to make it ordinary.

Their sleeves brushed.
Then their shoulders.
Then their thighs settled together with the familiar not-accident of repeated choice.`,

male: `One evening, the heater failed almost completely.

Cold climbed up through the metal floor of the bus and settled into shoes, ankles, hands. Windows filmed over until the outside world became mostly light and shadow. Students complained for a while, then gave up and folded inward, each person trying to preserve warmth without admitting they cared.

He slid into the seat beside her with the half-casual confidence of someone who had done it enough times to make it ordinary.

Their sleeves brushed.
Then their shoulders.
Then their thighs settled together with the familiar not-accident of repeated choice.

"It's freezing," she said, breathing into her hands.

"Yeah."
He looked at the window instead of at her.
Then, after a second: "Your hands are red."`,

female: `One evening, the heater failed almost completely.

Cold climbed up through the metal floor of the bus and settled into shoes, ankles, hands. Windows filmed over until the outside world became mostly light and shadow. Students complained for a while, then gave up and folded inward, each person trying to preserve warmth without admitting they cared.

He slid into the seat beside her with the half-casual confidence of someone who had done it enough times to make it ordinary.

Their sleeves brushed.
Then their shoulders.
Then their thighs settled together with the familiar not-accident of repeated choice.

"It's freezing," she said, breathing into her hands.

"Yeah."
He looked at the window instead of at her.
Then, after a second: "Your hands are red."`
},

{
narrator: `The answer came back with a short laugh.

"Thank you. I grew them myself."
The joke loosened something, but not enough.
The awareness remained.

Cold has a way of making every source of warmth feel more specific.
More dangerous.

For a while they just sat there, listening to the bus rattle through familiar streets.`,

male: `She gave a short laugh. "Thank you. I grew them myself."
He smiled despite himself.
The joke loosened something, but not enough.
The awareness remained.

Cold has a way of making every source of warmth feel more specific.
More dangerous.

For a while they just sat there, listening to the bus rattle through familiar streets. He could feel the warmth along their shared line of contact more vividly because the rest of the evening kept insisting on cold. That contrast made the silence feel more charged than speech would have.`,

female: `She gave a short laugh. "Thank you. I grew them myself."
He smiled despite himself.
The joke loosened something, but not enough.
The awareness remained.

Cold has a way of making every source of warmth feel more specific.
More dangerous.

For a while they just sat there, listening to the bus rattle through familiar streets. She could feel the warmth where their bodies touched with an exactness the weather seemed to sharpen on purpose. Even stillness had become more articulate under these conditions.`
},

{
narrator: `Then one fingertip traced a small shape in the condensation on the glass.
Not words.
Just a circle, then another inside it.

"Do you ever think," one of them asked, "that everyone else makes everything louder than it needs to be?"
The other knew immediately that the question was not only about the bus.

"Yeah."
A second line followed.

"I mean... people always have to say what something is. Right away."
They both understood the subject before it was named.

{{CALLBACK:vulnerability_seen_response}}`,

male: `Then she traced a small shape in the condensation on the glass with one fingertip.
Not words.
Just a circle, then another inside it.

"Do you ever think," she asked, "that everyone else makes everything louder than it needs to be?"
He knew immediately she was not talking only about the bus.

"Yeah," he said.

She kept her finger against the fogged glass.
"I mean... people always have to say what something is. Right away."
He looked down at their knees touching.
At the shared line of warmth between them.

He understood the subject before she named it.
And because he understood it, answering felt risky.

Not because the truth was complicated.
Because it wasn't.`,

female: `Then she traced a small shape in the condensation on the glass with one fingertip.
Not words.
Just a circle, then another inside it.

"Do you ever think," she asked, "that everyone else makes everything louder than it needs to be?"
He knew immediately she was not talking only about the bus.

"Yeah," he said.

She kept her finger against the fogged glass.
"I mean... people always have to say what something is. Right away."
She looked down at their knees touching.
At the shared line of warmth between them.

She understood her own subject before it was named fully. That was part of why asking it out loud in this partial form felt both safer and more frightening than saying something direct. The truth itself was not complicated. The timing of it was.`
}

],
choices: [

{
text: {
male: "Answer carefully and stay inside the quiet truth of the moment.",
female: "Keep the question gentle, but let it remain unmistakably real.",
narrator: "The conversation stays subtle without becoming evasive."
},
effects: {
male: { communication: +1, trust: +1, affection: +1 },
female: { communication: +1, trust: +1, affection: +1 }
},
memoryAdd: ["proximity_spoke_gently"],
goto: "ch2_04_proximity_05"
},

{
text: {
male: "Let the silence hold around the question before you answer it.",
female: "Trust the pause and let the meaning deepen before anyone speaks again.",
narrator: "The pause is treated as part of the conversation."
},
effects: {
male: { openness: +1, sharedHistory: +1 },
female: { openness: +1, sharedHistory: +1 }
},
memoryAdd: ["proximity_trusted_pause"],
goto: "ch2_04_proximity_05"
},

{
text: {
male: "Recognize that the bus, the cold, and the silence have all made the truth harder to hide.",
female: "Acknowledge inwardly that the moment has already crossed into shared knowledge.",
narrator: "The scene is understood as a threshold before it is named as one."
},
effects: {
male: { affection: +1, openness: +1, trust: +1 },
female: { affection: +1, openness: +1, trust: +1 }
},
memoryAdd: ["proximity_recognized_threshold"],
goto: "ch2_04_proximity_05"
}

]

},

{
id: "ch2_04_proximity_05",
phase: "proximity",
age: 15,
title: "Proximity",
pages: [

{
narrator: `"Maybe," one of them said slowly, "Some things get ruined if people talk about them too early."
The other turned to look more fully.

"Do you think that's what we're doing?"
The word we landed harder than anything else in the conversation.

Not because it had never been imagined.
Because hearing it from the other person made the possibility suddenly shared instead of private.

The answer that came first was too small.
Then came the truer one:

"I think maybe we're trying not to say something wrong."`,

male: `"Maybe," he said slowly, "Some things get ruined if people talk about them too early."
She turned to look at him.
Not sharply.
Just fully.

"Do you think that's what we're doing?" she asked.

The word we landed harder than anything else in the conversation.

Not because he had never imagined it.
Because hearing it from her made the possibility suddenly shared instead of private.

He could feel his pulse in his throat now.
In his wrists.
In the leg still pressed against hers.

"I don't know," he said, and hated how small the sentence sounded.
Then he tried again.

"I think maybe we're trying not to say something wrong."`,

female: `"Maybe," he said slowly, "Some things get ruined if people talk about them too early."
She turned to look at him.
Not sharply.
Just fully.

"Do you think that's what we're doing?" she asked.

The word we landed harder than anything else in the conversation.

Not because she had never imagined it.
Because hearing it from herself aloud made the possibility suddenly shared instead of private.

She could feel her pulse in smaller, sharper places now - throat, hands, the warmth along her leg where he still had not moved away.

"I don't know," he said, and she heard immediately that he hated how small the sentence sounded.
Then he tried again.

"I think maybe we're trying not to say something wrong."`
},

{
narrator: `The expression that followed softened.

Not pity.
Not amusement.
Recognition.

Outside, streetlights passed in pale broken bands.
Inside, the bus kept carrying them through the ordinary route home while the atmosphere between them became anything but ordinary.

{{CALLBACK:emotional_carryover}}

Then the stop came too quickly, as important stops often do.

One of them stood, adjusted a bag, and paused in the aisle beside the other for one half-second longer than necessary.

It was such a small pause that anyone else would have missed it.

But their story had always been built out of moments like that.`,

male: `Her expression softened in a way he would think about later.
Not pity.
Not amusement.
Recognition.

Outside, streetlights passed in pale broken bands.
Inside, the bus kept carrying them through the ordinary route home while the atmosphere between them became anything but ordinary.

Her stop came too quickly.
It always did when the conversation mattered.

The bus slowed with a tired groan. She stood, shifting her bag higher onto her shoulder, then paused in the aisle beside him for one half-second longer than necessary.

It was such a small pause that anyone else would have missed it.

But their story had always been built out of moments like that.
The held beat.
The almost-question.
The decision not to step back.`,

female: `Her own expression softened before she fully meant it to.
Not pity.
Not amusement.
Recognition.

Outside, streetlights passed in pale broken bands.
Inside, the bus kept carrying them through the ordinary route home while the atmosphere between them became anything but ordinary.

Her stop came too quickly.
It always did when the conversation mattered.

The bus slowed with a tired groan. She stood, shifting her bag higher onto her shoulder, then paused in the aisle beside him for one half-second longer than necessary.

It was such a small pause that anyone else would have missed it.

But their story had always been built out of moments like that.
The held beat.
The almost-question.
The choice not to withdraw too quickly once something real had been touched.`
},

{
narrator: `"See you tomorrow," one of them said.

The answer came back smaller than everything it meant.

The door opened. Cold entered. Then it shut again.

From the seat, one watched through the blurred window until the other disappeared behind the hedge line near the street.

Only then did the phase become fully legible.

Proximity had changed shape.

It was no longer only comfort.
No longer only habit.
No longer only the easy return of a familiar person.

It had become a threshold.

{{CALLBACK:tenderness_threshold}}

And thresholds do not stay thresholds forever.
Sooner or later, someone either crosses them or retreats from them.

The bus rolled forward through winter dusk.
The one still seated remained looking at a faint reflection in the glass, feeling how much smaller the distance between them had become - and how much riskier that made silence.`,

male: `"See you tomorrow," she said.

"Yeah."
He wanted to say more.
Something clearer.
Something that would keep the warmth of this exact moment from dissolving once the door opened and the cold came in.

But he had not become fearless just because he had become aware.

So he let the sentence remain small, and maybe because she knew him well enough to hear what wasn't inside it, she gave him that slight steady smile before stepping down onto the sidewalk.

Cold air entered the bus in a rush.
Then the door folded shut again.

He watched her through the blurred window until she disappeared behind the hedge line near her street.
Only then did he lean back into the seat, still warm where she had been, and understand with uncomfortable clarity that proximity had changed shape.

It was no longer only comfort.
No longer only habit.
No longer only the easy return of a familiar person.

It had become a threshold.

And thresholds, he knew by now, do not stay thresholds forever.
Sooner or later, someone either crosses them or retreats from them.

The bus rolled forward through winter dusk.
He stayed where he was, looking at his own faint reflection in the glass, feeling how much smaller the distance between them had become - and how much riskier that made silence.`,

female: `"See you tomorrow," she said.

"Yeah."
She could feel that he wanted to say more.
Something clearer.
Something that might keep the warmth of this exact moment from dissolving once the door opened and the cold entered and the ordinary world reclaimed its rights over both of them.

But awareness had not yet made either of them fearless.

So the sentence stayed small, and because she knew him well enough by now to hear what was missing from smallness, she gave him that slight steady smile before stepping down onto the sidewalk.

Cold air entered the bus in a rush.
Then the door folded shut again.

She knew, even before she reached the hedge line near her street, that the scene had crossed into a different kind of truth.

Proximity had changed shape.

It was no longer only comfort.
No longer only habit.
No longer only the easy return of a familiar person.

It had become a threshold.

And thresholds do not stay thresholds forever.`
}

],
choices: [

{
text: {
male: "Ask what she meant by 'we.'",
female: "Leave the word 'we' behind on purpose and trust that he heard its weight.",
narrator: "The moment is pushed slightly closer to definition."
},
effects: {
male: { communication: +2, trust: +1, affection: +1 },
female: { communication: +2, trust: +1, affection: +1 }
},
memoryAdd: ["ch2_proximity_defined_we"],
goto: "ch2_05_social_friction_01"
},

{
text: {
male: "Let the closeness speak for itself.",
female: "Let the closeness stand without forcing it further tonight.",
narrator: "Silence is treated as protection rather than avoidance."
},
effects: {
male: { affection: +2, sharedHistory: +1 },
female: { affection: +2, sharedHistory: +1 }
},
memoryAdd: ["ch2_proximity_let_it_sit"],
goto: "ch2_05_social_friction_01"
},

{
text: {
male: "Treat the threshold as real, even if you are not ready to cross it yet.",
female: "Acknowledge inwardly that something has changed and will not become simple again.",
narrator: "The scene ends with the truth recognized before action catches up to it."
},
effects: {
male: { openness: +1, trust: +1, sharedHistory: +1 },
female: { openness: +1, trust: +1, sharedHistory: +1 }
},
memoryAdd: ["ch2_proximity_recognized_threshold"],
goto: "ch2_05_social_friction_01"
}

]

}

];

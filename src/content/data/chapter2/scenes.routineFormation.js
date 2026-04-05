// data/chapter2/scenes.routineFormation.js
// Chapter 2 - Routine Formation (Age 13)
// Rewritten to POV page-object standard while preserving the original scene flow.

window.CH2_ROUTINE_FORMATION = [

{
id: "ch2_02_routine_formation_01",
phase: "routine_formation",
age: 13,
title: "Routine Formation",
pages: [

{
narrator: `Seventh grade did not arrive with the same sharp edges that high school would later have.

Instead, it crept in quietly.

Schedules became more complicated. Hallways felt more crowded. Teachers expected things to be remembered instead of explained. Nobody announced that childhood had ended, but everyone seemed to be acting as if it had become slightly inconvenient to admit they were still children.

The strange thing was that the two of them did not suddenly become closer.

They simply stopped drifting apart.

That difference was subtle but important.

There had been years where they happened to cross paths - school, sidewalks, the occasional conversation that grew naturally out of shared history. Enough contact to preserve familiarity. Enough distance to keep anything from becoming too obvious too early.

Now something new was forming.

Not a dramatic friendship.
Not a declared partnership.

A routine.

{{CALLBACK:shared_history_density}}`,

male: `Seventh grade did not arrive with the same sharp edges that high school would later have.

Instead, it crept in quietly.

Schedules became more complicated. Hallways felt more crowded. Teachers expected things to be remembered instead of explained. Nobody announced that childhood had ended, but everyone seemed to be acting as if it had become slightly inconvenient to admit they were still children.

The strange thing was that {boyName} and {girlName} did not suddenly become closer.

They simply stopped drifting apart.

That difference was subtle, but it mattered to him more than he wanted to admit. There had been years where they crossed paths naturally - school, sidewalks, the occasional conversation, those lingering pockets of shared history that never quite disappeared even when daily life pulled in different directions.

Now something had started changing again.

Not into spectacle.
Not into anything someone else would point at immediately.

A routine.

And routine, he was beginning to understand, could become intimate long before anyone chose a larger word for it.

{{CALLBACK:shared_history_density}}`,

female: `Seventh grade did not arrive with the same sharp edges that high school would later have.

Instead, it crept in quietly.

Schedules became more complicated. Hallways felt more crowded. Teachers expected things to be remembered instead of explained. Nobody announced that childhood had ended, but everyone seemed to be acting as if it had become slightly inconvenient to admit they were still children.

The strange thing was that {girlName} and {boyName} did not suddenly become closer.

They simply stopped drifting apart.

That difference felt subtle and important at the same time. There had been years where they crossed paths naturally - school, sidewalks, occasional conversations, the loose ordinary continuity of two lives that had known each other long enough not to need reintroduction.

Now something new was beginning.

Not a dramatic friendship.
Not a declared bond.
Not something anyone else could have named cleanly.

A routine.

And routines, she was beginning to understand, could gather meaning before either person was old enough to explain why.

{{CALLBACK:shared_history_density}}`
},

{
narrator: `Routine rarely looks important when it begins.

It looks like ordinary overlap.

The same building.
The same hours.
The same weather trapped in hallways through damp coats and open doors.
The same rotating classroom moods depending on which teacher had assigned too much, which test had gone badly, which group of students had decided to treat noise like proof of confidence that day.

Nothing about this looked romantic from the outside.

That was part of its authority.

Meaning was gathering inside repetition, not performance.`,

male: `What made the change difficult to explain was how ordinary it looked.

The same building.
The same hours.
The same hallways carrying the smell of floor wax, damp coats, pencil shavings, cafeteria heat, and whatever weather students had dragged in with them.

Nothing in it looked dramatic.

That was what made it real.

He was no longer waiting for some larger emotional event to explain why {girlName} had begun occupying more of his attention again. The attention had started rearranging itself around repetition before he noticed it clearly enough to resist.

Routine was doing the work.

And routine, because it looked harmless, was harder to argue with than intensity would have been.`,

female: `What made the change difficult to explain was how ordinary it looked.

The same building.
The same hours.
The same mix of crowded hallways, classroom boredom, unfinished homework, lunch noise, and teacher voices stretched across the week in slightly different tones.

Nothing in it looked dramatic.

That was what gave it weight.

She was not standing inside some obvious turning point. She was only beginning to notice that {boyName} had started appearing in her attention with the authority repetition gives a person once enough small overlaps stop feeling accidental.

Routine was doing the work quietly.

That made it harder to dismiss than a single charged moment would have been.`
},

{
narrator: `This is one of the quieter ways adolescence often advances.

Not through a sudden declaration.
Through a pattern becoming legible.

Two people begin recognizing that the same ordinary spaces keep placing them near each other, and that neither of them is moving especially hard to correct it.`,

male: `He did not yet think of himself as waiting for her.

That would have sounded too deliberate.
Too revealing.

But some part of him had already begun adjusting the day around the possibility of seeing her in it, and that part had grown more practiced than he wanted to inspect too closely. The adjustment was small enough to deny and consistent enough to matter.

That was what made it dangerous in the adolescent way:

not that anyone else could prove it,
but that he could.`,

female: `She did not yet think of herself as waiting for him.

That would have felt too deliberate.
Too vulnerable.

And yet she could already feel the day adjusting itself around certain possibilities. A slower walk down one hallway. A pause near the lockers that did not need to be called waiting in order to contain some fraction of waiting inside it. A lunch period that felt fractionally more settled once his presence had been located somewhere inside the room.

That was what made routine intimate before intimacy had been named.

It altered the body first.`
}

],
choices: [

{
text: {
male: "Notice the routine and let yourself lean into it a little.",
female: "Notice the pattern forming and stop pretending it means nothing.",
narrator: "The new repetition is treated as real before anyone else has words for it."
},
effects: {
male: { sharedHistory: +1, trust: +1 },
female: { sharedHistory: +1, trust: +1 }
},
memoryAdd: ["routine_noticed_pattern_early"],
goto: "ch2_02_routine_formation_02"
},

{
text: {
male: "Treat it lightly on the outside, even if it matters more underneath.",
female: "Keep the tone casual, though the repetition has started to gather weight.",
narrator: "The routine is felt clearly, but kept outwardly easy."
},
effects: {
male: { resilience: +1, affection: +1 },
female: { resilience: +1, affection: +1 }
},
memoryAdd: ["routine_kept_pattern_light"],
goto: "ch2_02_routine_formation_02"
},

{
text: {
male: "Watch the pattern more carefully before trusting what it means.",
female: "Observe the routine closely before allowing it to feel too secure.",
narrator: "Attention comes before surrender."
},
effects: {
male: { communication: +1, openness: +1 },
female: { communication: +1, openness: +1 }
},
memoryAdd: ["routine_observed_pattern"],
goto: "ch2_02_routine_formation_02"
}

]

},

{
id: "ch2_02_routine_formation_02",
phase: "routine_formation",
age: 13,
title: "Routine Formation",
pages: [

{
narrator: `It began with small coincidences.

The same math class.
A similar lunch period.
A hallway locker placement close enough that they sometimes arrived within seconds of each other.

At first those overlaps were accidental.

Then they became predictable.

Predictable things slowly change how people behave.`,

male: `It began with small coincidences.

The same math class.
A similar lunch period.
Locker placement close enough that he sometimes heard the sound of her combination before he actually looked up.

At first those overlaps were accidental.

Then they became predictable.

Predictable things slowly change behavior, especially at thirteen, when almost no one is willing to admit how much the body can learn before the mind agrees to call it intentional.

He noticed he walked slightly slower down the science hall in the morning. Not enough for anyone else to notice. Just enough that the timing at the lockers stayed open a little longer. Just enough that if she was on her usual schedule, the day would not miss the chance to place them side by side too quickly to explain.`,

female: `It began with small coincidences.

The same math class.
A similar lunch period.
Locker placement close enough that she sometimes heard the click of his dial before she saw him directly.

At first those overlaps were accidental.

Then they became predictable.

Predictable things slowly change behavior, especially at thirteen, when people are old enough to adjust themselves toward someone and young enough to insist no adjustment has taken place.

She noticed she lingered by the lockers a moment longer before heading to class. Not enough to become obvious. Just enough to keep the possibility alive that he would arrive in those extra seconds and the hallway would once again become easier to stand inside.`,
},

{
narrator: `Neither of them would have described it as waiting.

But waiting was part of it.

Routine, one of them was discovering, was built out of small adjustments people barely admitted they were making.

{{CALLBACK:emotional_baseline}}

{{CALLBACK:reciprocity_sensitivity}}`,

male: `He would not have called it waiting.

That word felt too large.

And still, some part of him had begun experiencing the absence of those moments when they failed to occur. If she was late, or he was, the hallway felt thinner in a way he would not have confessed to anyone. Not painful. Just fractionally less aligned.

That was the thing routine does once it has formed enough structure:
it begins creating small expectations that do not announce themselves as expectations until they are interrupted.

{{CALLBACK:emotional_baseline}}

{{CALLBACK:reciprocity_sensitivity}}`,

female: `She would not have called it waiting.

That word would have made the whole thing sound more deliberate than it felt from inside.

But routine had already started teaching her the shape of expectation. If he did not appear in the usual place, or if the timing shifted for some reason, the hour felt slightly off-balance. Nothing dramatic. Just enough to make the missing pattern visible by its absence.

That was one of the first emotional powers of recurrence:
it turns a person into part of the environment before anyone has formally granted them that role.

{{CALLBACK:emotional_baseline}}

{{CALLBACK:reciprocity_sensitivity}}`
}

],
choices: [

{
text: {
male: "Let the small overlaps matter without naming them too directly.",
female: "Accept the repetition as meaningful, even if it stays mostly unspoken.",
narrator: "The pattern is allowed to deepen through repetition rather than explanation."
},
effects: {
male: { sharedHistory: +1, affection: +1 },
female: { sharedHistory: +1, affection: +1 }
},
memoryAdd: ["routine_allowed_overlap_to_matter"],
goto: "ch2_02_routine_formation_03"
},

{
text: {
male: "Test the routine a little by slowing down on purpose.",
female: "See whether the pattern holds if you linger just a little more deliberately.",
narrator: "What had been passive starts being quietly tested."
},
effects: {
male: { communication: +1, trust: +1 },
female: { communication: +1, trust: +1 }
},
memoryAdd: ["routine_tested_pattern"],
goto: "ch2_02_routine_formation_03"
},

{
text: {
male: "Pretend it is still coincidence, even while noticing everything.",
female: "Keep calling it coincidence, even while you begin to recognize the shape of it.",
narrator: "Denial remains, but it has grown more intelligent."
},
effects: {
male: { resilience: +1, openness: -1 },
female: { resilience: +1, openness: -1 }
},
memoryAdd: ["routine_called_it_coincidence"],
goto: "ch2_02_routine_formation_03"
}

]

},

{
id: "ch2_02_routine_formation_03",
phase: "routine_formation",
age: 13,
title: "Routine Formation",
pages: [

{
narrator: `The cafeteria was the loudest place in the building.

Metal chairs scraped against tile. Trays clattered. Someone was always laughing too loudly across the room as if volume alone could prove confidence.

In the middle of that noise, certain patterns became easy to follow.

By October, they often ended up at the same stretch of table without discussing it beforehand. Friends rotated in and out. Conversations shifted constantly.

But there was a loose gravitational pull that kept them returning to the same seats.`,

male: `The cafeteria was the loudest place in the building.

Metal chairs scraped against tile. Trays clattered. Someone was always laughing too loudly across the room, as if volume alone could prove confidence. Tables filled and loosened in waves. A dozen different conversations overlapped until none of them could be heard clearly from beginning to end.

In the middle of all that noise, certain patterns became easier to trust because the room itself never stopped changing around them.

By October, he and {girlName} often ended up at the same stretch of table without discussing it beforehand. Friends rotated in and out. Lunch groups expanded and thinned according to whatever minor social weather governed seventh grade that week.

But there was a loose gravitational pull that kept them returning to the same seats.

He began recognizing the seat across from her not as a chosen seat exactly, but as the seat his body seemed to reach before he had reasoned through the alternatives.`,

female: `The cafeteria was the loudest place in the building.

Metal chairs scraped across tile. Trays clattered. Someone was always performing confidence too loudly from another table, hoping the room would mistake volume for importance.

Inside that noise, patterns still formed.

By October, she and {boyName} often ended up at the same stretch of table without ever having formally arranged it. Friends rotated in and out. Conversations shifted with the daily weather of school - homework, rumors, teacher complaints, small jokes stretched thin by repetition.

But even with that constant movement, a loose gravitational pull kept them returning to the same seats.

It was subtle enough not to require defense.
Consistent enough to become part of the room.`,
},

{
narrator: `Once he arrived early and saved a space without thinking about it.

When she dropped her bag beside the chair later, she looked at him with a small raised eyebrow.

"Did you just save me a seat?"

"I guess so."

She smiled slightly.

Neither of them made it a bigger deal than that.

But the next day it happened again.

{{CALLBACK:hesitation_style}}`,

male: `Once he arrived early and saved a space without thinking about it.

At least that was the version he offered himself.

His tray was set down.
His bag dropped.
The chair beside him remained open in a room where empty chairs disappeared quickly enough that leaving one untouched could not honestly be called neutral for very long.

When she dropped her bag beside the chair later, she looked at him with a small raised eyebrow.

"Did you just save me a seat?"

"I guess so."

The answer felt safer than admitting he had noticed the open chair as if it already belonged to her before she arrived.

She smiled slightly.

Neither of them made it a bigger deal than that.

But the next day it happened again, and by the third time repetition had begun stripping coincidence of its innocence.

{{CALLBACK:hesitation_style}}`,

female: `Once he arrived early and left the seat beside him open.

She noticed it immediately.

Not because the gesture was theatrical.
Because it was quieter than that. The kind of thing that can still be denied and is therefore more revealing when repeated.

When she dropped her bag beside the chair, she looked at him with a small raised eyebrow.

"Did you just save me a seat?"

"I guess so."

The casual tone made her want to smile more than the answer itself.

He had done something specific and then framed it lightly enough that both of them could stand inside it without embarrassment.

Neither of them made it a bigger deal than that.

But the next day the same thing happened again, and by then the pattern had begun acquiring the dignity repetition gives to small acts of care.

{{CALLBACK:hesitation_style}}`
}

],
choices: [

{
text: {
male: "Let the seat-saving become a quiet habit.",
female: "Accept the gesture without pressing it too hard, and let it repeat.",
narrator: "Care takes the form of a seat quietly held open."
},
effects: {
male: { affection: +1, sharedHistory: +1 },
female: { affection: +1, sharedHistory: +1 }
},
memoryAdd: ["routine_saved_seat_habit"],
goto: "ch2_02_routine_formation_04"
},

{
text: {
male: "Tease the moment lightly so it stays easy.",
female: "Smile at the habit and keep the tone light enough to protect it.",
narrator: "The routine is acknowledged through humor instead of declaration."
},
effects: {
male: { communication: +1, resilience: +1 },
female: { communication: +1, resilience: +1 }
},
memoryAdd: ["routine_teased_seat_habit"],
goto: "ch2_02_routine_formation_04"
},

{
text: {
male: "Notice how much the small gesture matters and say less because of it.",
female: "Recognize the gesture as meaningful and grow more careful with it, not less.",
narrator: "The quietness of the habit becomes part of its force."
},
effects: {
male: { trust: +1, openness: +1 },
female: { trust: +1, openness: +1 }
},
memoryAdd: ["routine_felt_weight_of_small_gesture"],
goto: "ch2_02_routine_formation_04"
}

]

},

{
id: "ch2_02_routine_formation_04",
phase: "routine_formation",
age: 13,
title: "Routine Formation",
pages: [

{
narrator: `Routine changed how people noticed each other.

When someone appears repeatedly in the same spaces, details accumulate.

One of them noticed the way the other always pushed a tray slightly to the left before eating. The way a pencil tapped twice against the desk before homework began. The way a head tilted when trying to understand something difficult.

The other noticed details too.

None of these observations felt dramatic.

But familiarity, repeated enough times, begins to feel like a structure you can stand inside.`,

male: `Routine changed the scale of his attention.

When someone appears repeatedly in the same places, details begin collecting without permission. Not because he was trying to study {girlName} in any dramatic way. Because repetition does not leave people general for very long.

He noticed the way she always pushed her tray slightly to the left before eating. The way she tapped the edge of her pencil twice before starting homework. The way she tilted her head when trying to understand something complicated, as if the mind could reach the answer more effectively from one angle than another.

He did not tell her he noticed these things.

That would have sounded too intimate for thirteen, too strangely adult in a stage of life still hiding inside jokes and routine.

But the details stayed with him, and staying is one of the earliest forms of attachment.`,

female: `Routine changed the way she noticed him too.

When someone keeps appearing in the same spaces, their habits stop being background. They begin arranging themselves into a private grammar you understand before you realize you have learned it.

She noticed the fact that he always checked the classroom clock before packing up. The way he reread instructions even when he already understood them. The quiet concentration that settled over his face when he was thinking carefully, as if care itself gave him a slightly different expression from the one he wore through the louder parts of the day.

She did not tell him she noticed these things.

The age was too awkward for that kind of honesty.
And yet the noticing continued.

That was what made it matter.`,
},

{
narrator: `Familiarity did not flatten the bond.

It gave it architecture.

The other person stopped being only an event in the day and started becoming one of the ways the day held together. This kind of closeness can grow for a long time before anyone trusts themselves enough to call it closeness aloud.

{{CALLBACK:attach_trust_pacing}}`,

male: `He began feeling the day differently when those details were present.

A lunch period felt more settled once her tray landed in the usual place. A group assignment felt easier once her concentration entered the table with him. A hallway exchange could stay with him longer than the conversation itself because the exchange now belonged to a repeated structure, not a one-time exception.

He did not think of this as romance.

He thought of it as reliability wearing the face of one specific person.

{{CALLBACK:attach_trust_pacing}}`,

female: `She began recognizing that some forms of comfort do not announce themselves as comfort immediately.

The week had become easier to enter in places where he was likely to appear. Not easier in the grand sense. Easier in the subtle bodily sense - less braced, more legible, more willing to remain inside the ordinary day without feeling entirely alone in it.

That kind of familiarity can grow quietly for a long time before either person risks naming it.

{{CALLBACK:attach_trust_pacing}}`
},

{
narrator: `By this point, routine had already stopped being neutral.

That was why the next moment mattered.`,

male: `He would not have said the routine belonged to both of them yet.

But he had started behaving as if breaking it would require explanation.`,

female: `She would not have said the pattern was theirs yet.

But some part of her had already begun trusting it enough that its interruption would have felt like information.`
}

],
choices: [

{
text: {
male: "Let the familiarity keep deepening through observation and return.",
female: "Let the repeated noticing remain quiet, but do not treat it as insignificant.",
narrator: "Familiarity is allowed to become structure."
},
effects: {
male: { sharedHistory: +1, trust: +1 },
female: { sharedHistory: +1, trust: +1 }
},
memoryAdd: ["routine_familiarity_became_structure"],
goto: "ch2_02_routine_formation_05"
},

{
text: {
male: "Protect the routine by keeping it steady and outwardly ordinary.",
female: "Keep the pattern stable by not pressing it into definition too early.",
narrator: "Steadiness becomes the way care is preserved."
},
effects: {
male: { resilience: +1, sharedHistory: +1 },
female: { resilience: +1, sharedHistory: +1 }
},
memoryAdd: ["routine_protected_by_steadiness"],
goto: "ch2_02_routine_formation_05"
},

{
text: {
male: "Notice how much the day changes around one person and let that unsettle you a little.",
female: "Recognize that one repeated person can start holding parts of the day together.",
narrator: "The emotional meaning of routine becomes harder to ignore."
},
effects: {
male: { openness: +1, affection: +1 },
female: { openness: +1, affection: +1 }
},
memoryAdd: ["routine_day_held_together_by_person"],
goto: "ch2_02_routine_formation_05"
}

]

},

{
id: "ch2_02_routine_formation_05",
phase: "routine_formation",
age: 13,
title: "Routine Formation",
pages: [

{
narrator: `One afternoon the rain was heavy enough that the buses arrived late.

Students gathered under the covered entrance near the front of the school, waiting in loose clusters. Water ran down the pavement in thin reflective lines. Bags darkened at the seams. Shoes tracked wet half-moons across the concrete.

One of them stood near the railing watching the parking lot blur under the downpour.

A minute later the other stepped beside them.

Neither of them spoke immediately.

Rain made conversation feel optional.`,

male: `One afternoon the rain was heavy enough that the buses arrived late.

Students gathered under the covered entrance near the front of the school, waiting in loose clusters while the parking lot dissolved into streaked gray movement beyond the shelter. Water ran down the pavement in thin reflective lines. The smell of wet fabric and damp concrete thickened the air.

{boyName} stood near the railing watching the lot blur under the downpour.

A minute later {girlName} stepped beside him.

Neither of them spoke immediately.

Rain made conversation feel optional in a way sun never did. It gave silence a purpose. It made standing still with someone feel less exposed, as if the weather itself had created cover not only over the entrance, but over the need to fill every second with language.`,

female: `One afternoon the rain was heavy enough that the buses arrived late.

Students gathered under the covered entrance in loose clusters while the parking lot blurred into silver-gray movement beyond the shelter. Water ran down the pavement in narrow reflective lines. The whole front of the school smelled faintly of wet coats, damp paper, and concrete holding rain.

{girlName} stood near the railing watching the lot lose its edges in the weather.

A minute later {boyName} stepped beside her.

Neither of them spoke immediately.

Rain made conversation feel optional. It made silence less visible. It allowed two people to stand beside each other without needing to pretend the stillness was awkward simply because it was stillness.`,
},

{
narrator: `After a while one of them said, "We're in a lot of the same places lately."

The other glanced sideways.

"Yeah."

"You ever notice that?"

"Yeah."

The rain continued for another second before the final line came.

"It's not bad."

Something about the way it was said made the sentence feel like a quiet agreement.

Not an announcement.

Just recognition.`,

male: `After a while she said, "We're in a lot of the same places lately."

He glanced sideways at her.

"Yeah."

"You ever notice that?"

"Yeah."

The second answer came easier than the first, as if the routine had reached an age where denying it would have been more embarrassing than admitting it in this small careful form.

She watched the rain for another second.

"It's not bad," she added.

Something about the way she said it made the sentence feel larger than its wording. Not dramatic. Not risky enough to force an answer too big for the shelter, the buses, the age, or the rain.

Just a quiet agreement that the pattern existed and neither of them wanted it treated like a problem.`,

female: `After a while he said, "We're in a lot of the same places lately."

She glanced sideways at him.

"Yeah."

"You ever notice that?"

"Yeah."

The second answer felt easier than the first. By then the honesty had already been made survivable by how small the exchange remained.

He watched the rain a moment longer.

"It's not bad," he added.

Something about the sentence made it feel like a quiet agreement rather than a casual observation. Not an announcement. Not an awkward attempt to force meaning too quickly.

Only recognition.

The kind that matters precisely because it arrives without spectacle.`,
},

{
narrator: `The buses finally pulled up with a hiss of air brakes and wet tires.

Students began moving toward them in slow uneven lines. The noise of the rain softened under the shelter as everyone shuffled forward.

One of them realized suddenly that the pattern had already formed.

Morning lockers.
Lunch table.
Certain hallways.
Certain pauses between classes.

None of it had required planning.

But once a routine existed, breaking it would require a decision.

Some connections do not begin with declarations.

They begin with repetition.

The same person appearing often enough that their presence stops feeling accidental.

And when something stops feeling accidental, it begins to feel like part of your life.`,

male: `The buses finally pulled up with a hiss of air brakes and wet tires.

Students began moving toward them in slow uneven lines. The sound of the rain softened under the shelter as everyone shifted toward departure, bags lifted, shoulders turned, conversations split and re-formed around practical leaving.

He realized suddenly that the pattern had already formed.

Morning lockers.
Lunch table.
Certain hallways.
Certain pauses between classes.

None of it had required planning.

But once a routine existed, breaking it would require a decision.

He was not sure exactly when that had started to matter.

Maybe it had always mattered.
Maybe repetition had simply taken long enough to become visible to him in full.

Some connections did not begin with declarations.

They began like this.
Quietly.
By return.`,

female: `The buses finally pulled up with a hiss of wet tires and air brakes.

Students began moving toward them in slow uneven lines. The sound of the rain softened under the shelter as everyone shuffled forward into departure. The practical machinery of the afternoon resumed itself.

And still, something had clarified.

Morning lockers.
Lunch table.
Certain hallways.
Certain pauses between classes.

None of it had required planning.

But once a routine existed, breaking it would require a decision.

She was not sure when that had started to matter.

Maybe it had mattered before either of them knew enough to recognize it.

Some connections did not begin with declarations.

They began with repetition.
With one person appearing often enough that their presence stopped feeling accidental.
With the quiet authority of return.`
}

],
choices: [

{
text: {
male: "Lean into the routine and keep meeting naturally.",
female: "Let the pattern keep growing in the easy, repeated way it already has.",
narrator: "The routine is accepted as something worth continuing."
},
effects: {
male: { sharedHistory: +2, affection: +1 },
female: { sharedHistory: +2, affection: +1 }
},
memoryAdd: ["ch2_routine_comfort"],
goto: "ch2_03_familiar_different_01"
},

{
text: {
male: "Ask her directly if she notices it too.",
female: "Ask him directly what the pattern feels like from his side.",
narrator: "The repetition is brought a little closer to language."
},
effects: {
male: { communication: +2, trust: +1 },
female: { communication: +2, trust: +1 }
},
memoryAdd: ["ch2_routine_acknowledged"],
goto: "ch2_03_familiar_different_01"
},

{
text: {
male: "Mention the pattern lightly, just enough to see how she answers.",
female: "Acknowledge the repetition gently and let the answer reveal its weight.",
narrator: "The routine is tested without being pushed too hard."
},
effects: {
male: { communication: +1, affection: +1 },
female: { communication: +1, affection: +1 }
},
memoryAdd: ["ch2_routine_named_lightly"],
goto: "ch2_03_familiar_different_01"
},

{
text: {
male: "Pretend it's coincidence and keep things casual.",
female: "Call it coincidence on the surface, even while knowing that is no longer the whole truth.",
narrator: "The pattern remains protected by understatement."
},
effects: {
male: { resilience: +1 },
female: { resilience: +1 }
},
memoryAdd: ["ch2_routine_downplayed"],
goto: "ch2_03_familiar_different_01"
}

]

}

];

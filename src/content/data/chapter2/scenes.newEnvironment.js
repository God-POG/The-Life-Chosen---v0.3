// data/chapter2/scenes.newEnvironment.js
// Chapter 2 - Scene 1: New Environment (Age 10)
// Expanded to a 5-part scene arc with narrator / male / female POV pages.

window.CH2_NEW_ENVIRONMENT = [

{
id: "ch2_01_new_environment_01",
phase: "new_environment",
age: 10,
title: "New Environment",
pages: [

{
narrator: `Fifth grade did not feel new in the simple way younger grades had.

The building was still the same building. The hallways still smelled like floor wax, pencil shavings, damp jackets hung too close together after rain. Classroom doors still opened with the same stiff resistance, and the cafeteria still carried that mixed smell of warm trays, bleach, and milk cartons taken out too early.

Nothing visible had changed enough to deserve the word transformation.

And yet the atmosphere had changed anyway.

School no longer felt like a place where children simply arrived and passed through the day inside a structure built by adults. It felt like a place where everything ordinary had started carrying a second meaning. Where you sat. Who you looked for first. How long you stood beside someone before either of you pretended there was another reason for it.

The difference was not size.

It was attention.

Children who had spent years beside one another were beginning to act as if they had been dropped into a world where everything counted more than it used to, even if no one was willing to say exactly why.

At home, mornings still moved according to whatever order home believed in: breakfast, shoes by the door, reminders shaped by care or by hurry or by simple habit.

{{CALLBACK:security_order_interpretation}}

The private structure of the day still existed.

But school no longer felt like an extension of that rhythm.

It felt like a place where ordinary things could become visible before either of them had decided what those things meant.

{{CALLBACK:world_interpretation}}`,

male: `Fifth grade did not feel new in the simple way younger grades had.

The building was still the same building. The hallways still smelled like floor wax, pencil shavings, damp jackets hung too close together after rain. Classroom doors still opened with the same stiff resistance, and the cafeteria still carried that mixed smell of warm trays, bleach, and milk cartons taken out too early.

Nothing about it should have felt different enough to matter.

And yet it did.

School no longer felt like a place where he could move invisibly through a day arranged by adults. It felt sharper now. More observed. As if the same rooms had quietly learned how to hold second meanings.

Where you stood.
Who you sat with.
Who you looked for before first bell.
How long you stayed beside someone before moving on.

None of those things had become official.
That was what made them harder to argue with.

At home, mornings still moved according to whatever order home believed in: breakfast, shoes by the door, reminders shaped by care or by hurry or by simple habit.

{{CALLBACK:security_order_interpretation}}

The private structure of the day still existed.

But school no longer felt like an extension of that rhythm. It felt like a place where ordinary things might become visible before he had decided what they meant.

{{CALLBACK:world_interpretation}}`,

female: `Fifth grade did not feel new in the simple way younger grades had.

The building was still the same building. The hallways still smelled like floor wax, pencil shavings, damp jackets hung too close together after rain. Classroom doors still opened with the same stiff resistance, and the cafeteria still carried that mixed smell of warm trays, bleach, and milk cartons taken out too early.

Nothing visible had changed enough to justify how different it felt.

And yet the air had changed anyway.

School no longer felt like a place where children simply arrived and lived inside patterns adults had already built for them. It felt more alert than that now. As if the same desks and lines and classroom doors had started collecting meanings they had not used to hold.

Who stood together.
Who drifted apart.
Who pretended not to care.
Who cared enough to hide it badly.

At home, mornings still moved according to whatever order home believed in: breakfast, shoes by the door, reminders shaped by care or by hurry or by simple habit.

{{CALLBACK:security_order_interpretation}}

That private structure still existed.

But school no longer felt like an extension of it. It felt like a place where ordinary things could start meaning more before anyone was ready to admit they had noticed.

{{CALLBACK:world_interpretation}}`
},

{
narrator: `The first week proved this in dozens of small, irritating ways.

Students who had never seemed particularly self-aware in fourth grade were suddenly watching one another with a new kind of side vision. Not mature enough to understand what they were noticing. Just old enough to start noticing it anyway.

Boys laughed too loudly in groups, then dropped their voices around certain girls as if volume itself were a costume they could put on and remove. Girls stood in doorways in clusters that looked casual until someone not invited drifted too close. Even teachers seemed to sense that the air had changed. They gave the same instructions as always, but their eyes stayed on the class a little longer, as though waiting to see what this new age would do to the room.

There had been something easier about being younger. Not easier emotionally exactly. Childhood had never been free of intensity. But the intensity had not yet become public in the same way. You could care about someone deeply at nine and still move through the world without that caring being translated into social information by everyone around you.

At ten, that protection was thinning.

Hallways no longer felt like neutral space. They felt like places where people were always, dimly, being arranged into meanings they had not agreed to carry.

{{CALLBACK:emotional_baseline}}`,

male: `The first week proved this in dozens of small, irritating ways.

Students who had never seemed especially self-aware in fourth grade were suddenly watching one another with a new kind of side vision. Not mature enough to understand what they were noticing. Just old enough to start noticing it anyway.

Boys laughed too loudly in groups, then lowered their voices around certain girls as if loudness itself were part of some costume they had decided to try on. Girls stood in doorways in clusters that looked accidental until someone not invited got too close. Even teachers seemed to sense that the air had changed. They spoke to the class the same way as before, but they watched it differently.

He felt the difference immediately and disliked that he felt it immediately.

There had been something easier about being younger. Not easier emotionally exactly. Childhood had never been free of intensity. But intensity had not yet become public in the same way. You could care about someone deeply and still move through the day without that caring being translated into visible information by everyone around you.

At ten, that protection was thinning.

The hallways no longer felt neutral. They felt like places where people were always, dimly, being arranged into meanings they had not agreed to carry.

{{CALLBACK:emotional_baseline}}`,

female: `The first week proved this in dozens of small, irritating ways.

Students who had never seemed especially thoughtful in fourth grade were suddenly paying attention to one another in strange unfinished ways. Not mature enough to know what they were seeing. Just old enough to know there was something there to see.

Boys laughed too loudly in groups and then turned awkward around certain girls, as if they had not yet decided who they were supposed to be when someone might actually notice them. Girls stood in classroom doorways in loose clusters that looked relaxed until the wrong person wandered too close. Even teachers seemed to sense something had shifted. They still gave the same instructions, but they watched the room more carefully while giving them.

There had been something easier about being younger. Not easier emotionally. Childhood had not been free of weight. But the weight had stayed closer to the people carrying it. It had not yet become something the whole room might start reading badly.

At ten, that protection was thinning.

Hallways no longer felt like neutral space. They felt like places where ordinary things might turn into information before anyone had chosen whether they wanted to be known.

{{CALLBACK:emotional_baseline}}`
}

],
choices: [
{
text: {
male: "Stay alert and let the room teach you how this new year works.",
female: "Watch carefully and let the room show you what has changed.",
narrator: "Attention becomes the first way of entering the year."
},
effects: {
male: { resilience: +1, communication: +1 },
female: { resilience: +1, empathy: +1 },
narrator: { resilience: +1 }
},
memoryAdd: ["ne_opened_year_watchfully"],
goto: "ch2_01_new_environment_02"
},
{
text: {
male: "Treat it like noise. Refuse to let other people's noticing decide your day.",
female: "Act as if nothing has changed and keep your footing steady.",
narrator: "Ordinary structure is trusted over social atmosphere."
},
effects: {
male: { trust: +1, resilience: +1 },
female: { trust: +1, resilience: +1 },
narrator: { trust: +1 }
},
memoryAdd: ["ne_opened_year_steadily"],
goto: "ch2_01_new_environment_02"
},
{
text: {
male: "Admit, privately, that the year already feels sharper than the last one.",
female: "Let yourself notice that the year has become more charged.",
narrator: "Awareness arrives before language for it does."
},
effects: {
male: { openness: +1, empathy: +1 },
female: { openness: +1, empathy: +1 },
narrator: { openness: +1 }
},
memoryAdd: ["ne_opened_year_aware"],
goto: "ch2_01_new_environment_02"
}
]
},

{
id: "ch2_01_new_environment_02",
phase: "new_environment",
age: 10,
title: "New Environment",
pages: [

{
narrator: `One morning, one of them saw the other before being seen.

She was standing near the classroom windows, reading a paper taped crookedly to the glass. One strap of her backpack had slipped down her shoulder. She pushed it back up without looking, then leaned in again with the same slight tilt of her head the other had known for years.

That was what caught attention now.

Not surprise.

Recognition.

Not merely that they knew each other, but that they knew the small ways each moved through space. The pause before touching something. The shift of weight while concentrating. The tiny nearly invisible stillness that passed over a face when deciding whether something was worth saying aloud.

The oak tree had not disappeared into childhood.

It had become structure.

Not the whole structure, not some oversized symbol carried around on purpose, but part of the hidden architecture under everything else. Sidewalks home. Shared classes. Years of seeing each other often enough that familiarity had stopped announcing itself.

They had not stopped knowing each other after that first summer.

That mattered.

If they had vanished from each other's lives and reappeared here, in this new sharper school world, the feeling might have been explained away as reunion. As novelty. As the easy drama of absence giving a familiar face sudden importance.

But this was not novelty.

This was something harder to defend against.

She had been there all along.

And somehow that made her presence feel even more significant now, not less.

{{CALLBACK:attach_return_instinct}}`,

male: `He saw {girlName} before she saw him.

She was standing near the classroom windows, reading a paper taped crookedly to the glass. One strap of her backpack had slipped down her shoulder. She pushed it back up without looking, then leaned in again with the same slight tilt of her head he had known for years.

That was what caught him every time now.

Not surprise.

Recognition.

Not merely that he knew her, but that he knew the small ways she moved through space. The pause before she touched something. The way she shifted her weight when concentrating. The tiny almost invisible stillness that passed over her face when she decided whether something was worth saying aloud.

The oak tree had not disappeared into childhood.

It had become structure.

Not the whole structure, not some oversized symbol he carried around on purpose, but part of the hidden architecture under everything else. Sidewalks home. Shared classes. Years of seeing each other often enough that familiarity had stopped announcing itself.

They had not stopped knowing each other after that first summer.

That mattered.

Because if they had vanished from each other's lives and reappeared here, in this new sharper school world, he might have blamed the feeling on reunion. He might have explained it to himself as novelty.

But this was not novelty.

She had been there all along.

And somehow that made her presence feel even more significant now, not less.

{{CALLBACK:attach_return_instinct}}`,

female: `She saw {boyName} before he saw her.

He was standing near the lockers with one hand on the strap of his backpack, looking as though he had paused for a practical reason and had then forgotten to make it look convincing.

That was what caught her now.

Not surprise.

Recognition.

Not only that she knew him, but that she knew the small ways he occupied a space. The way he went still when thinking. The way his attention narrowed instead of scattering. The way he sometimes looked as though he wanted to understand a moment properly before deciding how to stand inside it.

The oak tree had not disappeared into childhood.

It had become structure.

Not the whole structure, not some oversized symbol she carried around on purpose, but part of the hidden architecture under everything else. Sidewalks home. Shared classes. Years of seeing each other often enough that familiarity had stopped announcing itself.

They had not stopped knowing each other after that first summer.

That mattered.

If he had vanished from her life and reappeared here, in this sharper school world, she might have blamed the feeling on reunion. On distance making familiarity suddenly glow.

But he had not vanished.

He had simply remained.

And somehow that made his presence feel more significant now, not less.

{{CALLBACK:attach_return_instinct}}`
},

{
narrator: `When the other finally noticed, the face changed immediately.

Not surprise.
Not performance.
Just that quick natural adjustment of someone seeing a person they already expect the day to contain.

"You got Mr. Bennett too?" she asked.

Her voice was easy. Familiar. The kind of voice that made it sound like there was nothing difficult about standing in a hallway and talking.

He nodded. "Yeah."

"I heard he gives a lot of group projects."

"My mom says that's supposed to be good," he said.

She made a face. "That sounds like something a mom would say."

A smile appeared before it was fully intended.

Students were still moving around them in loose currents. Someone laughed too loudly by the drinking fountain. A teacher passed carrying a stack of folders pressed against her hip. Locker doors banged farther down the hall.

Everything around them remained ordinary.

But the ordinary no longer felt private.

That was the change.

Not in either of them exactly.

In the world around them, and in the growing awareness that being seen beside someone could begin to mean something before either person had chosen what that something was.

{{CALLBACK:attach_signal_reading}}`,

male: `When she turned and noticed him, her face changed immediately.

Not surprise.
Not performance.
Just that quick natural adjustment of someone seeing a person they already expected the day to contain.

"You got Mr. Bennett too?" she asked.

Her voice was easy. Familiar. The kind of voice that made it sound like there was nothing difficult about standing in a hallway and talking.

He nodded. "Yeah."

"I heard he gives a lot of group projects."

"My mom says that's supposed to be good," he said.

She made a face. "That sounds like something a mom would say."

He smiled before he meant to.

Students were still moving around them in loose currents. Someone laughed too loudly by the drinking fountain. A teacher passed carrying a stack of folders pressed against her hip. Locker doors banged farther down the hall.

Everything around them remained ordinary.

But the ordinary no longer felt private.

That was the change.

Not in {girlName} exactly.

In the world around them, and in the growing awareness that being seen beside someone could start to mean something before either person had chosen what that something was.

{{CALLBACK:attach_signal_reading}}`,

female: `When he turned and noticed her, his face changed immediately.

Not surprise.
Not performance.
Just that quick natural adjustment of someone seeing a person he had already expected the day to contain.

"You got Mr. Bennett too?" she asked.

Her voice came out easier than she felt.

He nodded. "Yeah."

"I heard he gives a lot of group projects."

"My mom says that's supposed to be good," he said.

She made a face. "That sounds like something a mom would say."

He smiled before he meant to.

Students were still moving around them in loose currents. Someone laughed too loudly by the drinking fountain. A teacher passed carrying a stack of folders pressed against her hip. Locker doors banged farther down the hall.

Everything around them remained ordinary.

But the ordinary no longer felt private.

That was the change.

Not in {boyName} exactly.

In the world around them, and in the growing awareness that being seen beside someone could begin to mean something before either person had chosen what that something was.

{{CALLBACK:attach_signal_reading}}`
},

{
narrator: `Nothing dramatic happened after that.

That was part of what made the moment difficult to dismiss.

No one announced anything. No one said the wrong thing. No one came close enough to justify embarrassment.

And yet the small exchange remained afterward with more weight than it should have possessed.

By ten, that was already becoming familiar: the way a moment could stay alive simply because it had passed through the right two people inside the wrong kind of public space.

School had become a place where even ease needed carrying carefully.

{{CALLBACK:attach_trust_baseline}}`,

male: `Nothing dramatic happened after that.

That was part of what made the exchange stay with him.

No one announced anything. No one said the wrong thing. No one came close enough to justify embarrassment.

And yet the few ordinary lines between them remained afterward with more weight than they should have carried.

By ten, he was already learning that some moments stayed alive simply because they had passed through the right two people inside the wrong kind of public space.

School had become a place where even ease needed carrying carefully.

{{CALLBACK:attach_trust_baseline}}`,

female: `Nothing dramatic happened after that.

That was part of what made the exchange stay with her.

No one interrupted. No one stared openly. No one said anything sharp enough to turn the hallway into a scene.

And yet the few ordinary lines between them remained afterward with more weight than they should have carried.

By ten, she was already learning that some moments stayed alive simply because they had passed through the right two people inside a place too public to protect them properly.

School had become a place where even ease needed carrying carefully.

{{CALLBACK:attach_trust_baseline}}`
}

],
choices: [
{
text: {
male: "Stay and let the conversation keep going a little longer.",
female: "Stay with the moment instead of ending it too quickly.",
narrator: "Neither of them rushes the exchange away."
},
effects: {
male: { trust: +1, sharedHistory: +1 },
female: { trust: +1, sharedHistory: +1 },
narrator: { trust: +1 }
},
memoryAdd: ["ne_lingered_hallway"],
goto: "ch2_01_new_environment_03"
},
{
text: {
male: "Keep it light and let familiarity carry the moment.",
female: "Keep the tone easy and let familiarity do the work.",
narrator: "The moment stays ordinary on the surface."
},
effects: {
male: { communication: +1, resilience: +1 },
female: { communication: +1, resilience: +1 },
narrator: { communication: +1 }
},
memoryAdd: ["ne_kept_hallway_light"],
goto: "ch2_01_new_environment_03"
},
{
text: {
male: "Notice how different the same familiar person feels here now.",
female: "Let yourself register that familiarity has started changing shape.",
narrator: "Recognition deepens into awareness."
},
effects: {
male: { affection: +1, empathy: +1 },
female: { affection: +1, empathy: +1 },
narrator: { affection: +1 }
},
memoryAdd: ["ne_familiarity_changed_shape"],
goto: "ch2_01_new_environment_03"
}
]
},

{
id: "ch2_01_new_environment_03",
phase: "new_environment",
age: 10,
title: "New Environment",
pages: [

{
narrator: `At recess, the playground looked divided in the way places always do once children have spent enough days claiming parts of them.

Basketball near the far fence. Four square by the painted lines. A group trading cards beside the portable classrooms. Teachers stood at a distance with coffee cups and the expression adults wore when they wanted children to solve their own problems first.

One of them found the other near the edge of the blacktop where the chain-link fence looked out toward a patch of grass and a row of smaller trees.

Not the oak tree.

Nothing like the oak tree really.

But trees were enough to pull the memory close.

She was using the toe of her shoe to push gravel into a thin crooked line on the asphalt.

"This part's quieter," she said when he came over.

He nodded. It was.

The louder games stayed farther away. Over here, the noise blurred into something softer, less demanding. Balls still struck pavement. Someone still shouted from the basketball court. But the sounds thinned enough that a person could imagine, for a minute, that the edge of the playground belonged more to observation than performance.

"Do you think fifth grade is worse?" she asked.

"Than fourth?"

"Yeah."

He considered this with the seriousness children still give questions adults would answer too quickly.

"A little," he said. "Everyone's acting older on purpose."

She looked pleased in a way that suggested she had already been waiting for someone else to admit it.

{{CALLBACK:social_read}}`,

male: `At recess, the playground looked divided in the way places always do once children have spent enough days claiming parts of them.

Basketball near the far fence. Four square by the painted lines. A group trading cards beside the portable classrooms. Teachers stood at a distance with coffee cups and the expression adults wore when they wanted children to solve their own problems first.

He found {girlName} near the edge of the blacktop where the chain-link fence looked out toward a patch of grass and a row of smaller trees.

Not the oak tree.

Nothing like the oak tree really.

But trees were enough to pull the memory close.

She was using the toe of her shoe to push gravel into a thin crooked line on the asphalt.

"This part's quieter," she said when he came over.

He nodded. It was.

The louder games stayed farther away. Over here, the noise blurred into something softer, less demanding. Balls still struck pavement. Someone still shouted from the basketball court. But the sounds thinned enough that a person could imagine, for a minute, that the edge of the playground belonged more to observation than performance.

"Do you think fifth grade is worse?" she asked.

"Than fourth?"

"Yeah."

He considered this with the seriousness children still give questions adults would answer too quickly.

"A little," he said. "Everyone's acting older on purpose."

She looked pleased in a way that made him think she had already been waiting for someone else to admit it.

{{CALLBACK:social_read}}`,

female: `At recess, the playground looked divided in the way places always do once children have spent enough days claiming parts of them.

Basketball near the far fence. Four square by the painted lines. A group trading cards beside the portable classrooms. Teachers stood at a distance with coffee cups and the expression adults wore when they wanted children to solve their own problems first.

She saw {boyName} coming toward the edge of the blacktop where the chain-link fence looked out toward a patch of grass and a row of smaller trees.

Not the oak tree.

Nothing like the oak tree really.

But trees were enough to pull the memory close.

She was using the toe of her shoe to push gravel into a thin crooked line on the asphalt when he came over.

"This part's quieter," she said.

He nodded. It was.

The louder games stayed farther away. Over here, the noise blurred into something softer, less demanding. Balls still struck pavement. Someone still shouted from the basketball court. But the sounds thinned enough that a person could imagine, for a minute, that the edge of the playground belonged more to observation than performance.

"Do you think fifth grade is worse?" she asked.

"Than fourth?"

"Yeah."

He considered this with the seriousness children still give questions adults would answer too quickly.

"A little," he said. "Everyone's acting older on purpose."

She felt something in her relax when he said that.

It was easier to stand beside someone who had noticed the same thing.

{{CALLBACK:social_read}}`
},

{
narrator: `For a while they stood there without trying too hard to improve the conversation.

That was one of the stranger things changing between them now: silence had started meaning something different too. When they were younger, silence had simply been space inside a shared place. Now it sometimes felt like a question. Not an uncomfortable one exactly. Just a question about whether the other person felt the same awareness you did.

He looked through the fence toward the pale grass beyond the school yard.

The little trees moved easily in the wind. Nothing there carried the same shaded privacy as the ditch or the roots beneath the oak. There were no hidden stones there. No small buried histories. No corners of earth that belonged first to memory and only later to explanation.

Maybe that was why school made everything feel different.

At the oak tree, there had only ever been the place itself and whatever the two of them chose to say inside it.

At school, there were always other eyes, even when no one was really paying attention.

There were hallway rules nobody explained. Who you stood beside. How long you stayed talking. Whether something looked normal or looked like it meant something.

He hated that he understood any of this.

He hated it more because he was pretty sure she understood it too.

{{CALLBACK:hesitation_style}}`,

male: `For a while they stood there without trying too hard to improve the conversation.

That was one of the stranger things changing between them now: silence had started meaning something different too. When they were younger, silence had simply been space inside a shared place. Now it sometimes felt like a question. Not an uncomfortable one exactly. Just a question about whether the other person felt the same awareness you did.

He looked through the fence toward the pale grass beyond the school yard.

The little trees moved easily in the wind. Nothing there carried the same shaded privacy as the ditch or the roots beneath the oak. There were no hidden stones there. No small buried histories. No corners of earth that belonged first to memory and only later to explanation.

Maybe that was why school made everything feel different.

At the oak tree, there had only ever been the place itself and whatever the two of them chose to say inside it.

At school, there were always other eyes, even when no one was really paying attention.

There were hallway rules nobody explained. Who you stood beside. How long you stayed talking. Whether something looked normal or looked like it meant something.

He hated that he understood any of this.

He hated it more because he was pretty sure she understood it too.

{{CALLBACK:hesitation_style}}`,

female: `For a while they stood there without trying too hard to improve the conversation.

That was one of the stranger things changing between them now: silence had started meaning something different too. When they were younger, silence had simply been space inside a shared place. Now it sometimes felt like a question. Not an uncomfortable one exactly. Just a question about whether the other person felt the same awareness you did.

She looked through the fence toward the pale grass beyond the school yard.

The little trees moved easily in the wind. Nothing there carried the same shaded privacy as the ditch or the roots beneath the oak. There were no hidden stones there. No small buried histories. No corners of earth that belonged first to memory and only later to explanation.

Maybe that was why school made everything feel different.

At the oak tree, there had only ever been the place itself and whatever the two of them chose to say inside it.

At school, there were always other eyes, even when no one was really paying attention.

There were hallway rules nobody explained. Who you stood beside. How long you stayed talking. Whether something looked normal or looked like it meant something.

She disliked that she understood any of this already.

She disliked it more because she was fairly sure he understood it too.

{{CALLBACK:hesitation_style}}`
},

{
narrator: `The awareness sat between them without fully becoming language, which only made it feel more real.

Children that age still lived close enough to honesty that they could sense when a thing had changed before they could explain how. They simply lacked the social freedom to say it plainly without also making it fragile.

That, perhaps, was the new difficulty of ten years old.

Not that feelings had become larger.

That they had become easier to expose and harder to name without exposing them badly.

{{CALLBACK:attach_misreading_fear}}`,

male: `The awareness sat between them without fully becoming language, which only made it feel more real.

Children that age still lived close enough to honesty that they could sense when a thing had changed before they could explain how. They simply lacked the social freedom to say it plainly without also making it fragile.

That, maybe, was the new difficulty of ten years old.

Not that feelings had become larger.

That they had become easier to expose and harder to name without exposing them badly.

{{CALLBACK:attach_misreading_fear}}`,

female: `The awareness sat between them without fully becoming language, which only made it feel more real.

Children that age still lived close enough to honesty that they could sense when a thing had changed before they could explain how. They simply lacked the social freedom to say it plainly without also making it fragile.

That, maybe, was the new difficulty of ten years old.

Not that feeling had become larger.

That it had become easier to expose and harder to name without exposing it badly.

{{CALLBACK:attach_misreading_fear}}`
}

],
choices: [
{
text: {
male: "Ask whether she thinks school feels different too.",
female: "Ask whether he feels the change too, or only you do.",
narrator: "The half-spoken awareness is brought a little closer to language."
},
effects: {
male: { communication: +2, trust: +1 },
female: { communication: +2, trust: +1 },
narrator: { communication: +1 }
},
memoryAdd: ["ne_named_school_difference"],
goto: "ch2_01_new_environment_04"
},
{
text: {
male: "Leave the feeling mostly unspoken and stay beside her anyway.",
female: "Let the feeling remain mostly unspoken and keep the moment steady.",
narrator: "Silence is trusted to carry what words might flatten."
},
effects: {
male: { sharedHistory: +2, trust: +1 },
female: { sharedHistory: +2, trust: +1 },
narrator: { sharedHistory: +1 }
},
memoryAdd: ["ne_kept_feeling_unspoken"],
goto: "ch2_01_new_environment_04"
},
{
text: {
male: "Make the conversation lighter before it gets too exposed.",
female: "Shift the tone before the moment starts feeling too visible.",
narrator: "Lightness becomes a way of protecting the moment."
},
effects: {
male: { resilience: +1, empathy: +1 },
female: { resilience: +1, empathy: +1 },
narrator: { resilience: +1 }
},
memoryAdd: ["ne_lightened_recess_moment"],
goto: "ch2_01_new_environment_04"
}
]
},

{
id: "ch2_01_new_environment_04",
phase: "new_environment",
age: 10,
title: "New Environment",
pages: [

{
narrator: `By the end of the week, a pattern had already begun forming.

Not a dramatic one.

Just enough to notice.

Sometimes they reached class at the same time in the morning. Sometimes they ended up near each other at recess without planning it. Once, when the teacher told everyone to find partners for a local-history worksheet, neither of them moved very quickly, and somehow that was enough.

Patterns like that always looked accidental from the outside.

Maybe they were.

But repeated accidents begin to feel like choices.

On Friday, the teacher kept them a few extra minutes before lunch. By the time the class spilled into the hallway, the line for cafeteria trays had already curled back on itself. Metal trays clattered. Shoes slid over tile. Children talked over one another because volume still felt like confidence at that age.

She stood just ahead of him in line. She turned slightly, enough that he could hear her without anyone else needing to.

"Do you ever think," she said, "that school's just a place where everyone tries not to look weird at the same time?"

He stared at her, then laughed.

Not loudly. But enough.

"Yeah," he said.

She faced forward again. "Good."

The line moved.

He picked up a tray and found himself noticing that she chose apple slices over the brownie. It was a tiny detail. Too small to matter.

And still, it stayed with him.

{{CALLBACK:attach_trust_baseline}}`,

male: `By the end of the week, a pattern had already begun forming.

Not a dramatic one.

Just enough to notice.

Sometimes they reached class at the same time in the morning. Sometimes they ended up near each other at recess without planning it. Once, when the teacher told everyone to find partners for a local-history worksheet, neither of them moved very quickly, and somehow that was enough.

Patterns like that always looked accidental from the outside.

Maybe they were.

But repeated accidents begin to feel like choices.

On Friday, the teacher kept them a few extra minutes before lunch. By the time the class spilled into the hallway, the line for cafeteria trays had already curled back on itself. Metal trays clattered. Shoes slid over tile. Children talked over one another because volume still felt like confidence at that age.

{girlName} stood just ahead of him in line. She turned slightly, enough that he could hear her without anyone else needing to.

"Do you ever think," she said, "that school's just a place where everyone tries not to look weird at the same time?"

He stared at her, then laughed.

Not loudly. But enough.

"Yeah," he said.

She faced forward again. "Good."

The line moved.

He picked up a tray and found himself noticing that she chose apple slices over the brownie. It was a tiny detail. Too small to matter.

And still, it stayed with him.

{{CALLBACK:attach_trust_baseline}}`,

female: `By the end of the week, a pattern had already begun forming.

Not a dramatic one.

Just enough to notice.

Sometimes they reached class at the same time in the morning. Sometimes they ended up near each other at recess without planning it. Once, when the teacher told everyone to find partners for a local-history worksheet, neither of them moved very quickly, and somehow that was enough.

Patterns like that always looked accidental from the outside.

Maybe they were.

But repeated accidents begin to feel like choices.

On Friday, the teacher kept them a few extra minutes before lunch. By the time the class spilled into the hallway, the line for cafeteria trays had already curled back on itself. Metal trays clattered. Shoes slid over tile. Children talked over one another because volume still felt like confidence at that age.

She stood just ahead of {boyName} in line. She turned slightly, enough that he could hear her without anyone else needing to.

"Do you ever think," she said, "that school's just a place where everyone tries not to look weird at the same time?"

He stared at her, then laughed.

Not loudly. But enough.

"Yeah," he said.

She faced forward again. "Good."

The line moved.

She picked up a tray and found herself noticing that he was still half smiling when he reached for his milk. It was a tiny detail. Too small to matter.

And still, it stayed with her.

{{CALLBACK:attach_trust_baseline}}`
},

{
narrator: `After the last bell, they ended up walking the same stretch of sidewalk toward home.

The neighborhood looked the way it always did in early fall. Lawns clipped short. Mailboxes casting thin shadows. A dog barking from behind a fence two streets over. Ordinary life, steady enough to recognize even when it meant different things in different houses.

He kept thinking about how school and the oak tree now seemed to belong to two different ways of knowing someone.

At school, there were desks, bells, lines, teachers, classmates, noise, and all the rules of being seen.

At the oak tree, there had only ever been shade, dirt, memory, and the feeling that whatever passed between them belonged first to the two of them before it belonged to the world.

He wondered which version mattered more.

Or whether one of them was already changing the other.

{{CALLBACK:security_change_tolerance}}

{{CALLBACK:emotional_baseline}}`,

male: `After the last bell, they ended up walking the same stretch of sidewalk toward home.

The neighborhood looked the way it always did in early fall. Lawns clipped short. Mailboxes casting thin shadows. A dog barking from behind a fence two streets over. Ordinary life, steady enough to recognize even when it meant different things in different houses.

He kept thinking about how school and the oak tree now seemed to belong to two different ways of knowing someone.

At school, there were desks, bells, lines, teachers, classmates, noise, and all the rules of being seen.

At the oak tree, there had only ever been shade, dirt, memory, and the feeling that whatever passed between them belonged first to the two of them before it belonged to the world.

He wondered which version mattered more.

Or whether one of them was already changing the other.

{{CALLBACK:security_change_tolerance}}

{{CALLBACK:emotional_baseline}}`,

female: `After the last bell, they ended up walking the same stretch of sidewalk toward home.

The neighborhood looked the way it always did in early fall. Lawns clipped short. Mailboxes casting thin shadows. A dog barking from behind a fence two streets over. Ordinary life, steady enough to recognize even when it meant different things in different houses.

She kept thinking about how school and the oak tree now seemed to belong to two different ways of knowing someone.

At school, there were desks, bells, lines, teachers, classmates, noise, and all the rules of being seen.

At the oak tree, there had only ever been shade, dirt, memory, and the feeling that whatever passed between them belonged first to the two of them before it belonged to the world.

She wondered which version mattered more.

Or whether one of them was already changing the other.

{{CALLBACK:security_change_tolerance}}

{{CALLBACK:emotional_baseline}}`
},

{
narrator: `They slowed near the corner where their routes usually separated.

She looked down the street first, then back at him.

"It feels different now," she said.

He knew immediately that she was not talking about the sidewalk.

Not really.

She meant school.
She meant them inside school.
She meant growing older without saying growing older.

The moment was small enough that someone watching from a porch would have missed it entirely.

But small moments had always mattered most between them.

The oak tree had taught him that.

So had everything after it.`,

male: `They slowed near the corner where their routes usually separated.

She looked down the street first, then back at him.

"It feels different now," she said.

He knew immediately that she wasn't talking about the sidewalk.

Not really.

She meant school.
She meant them inside school.
She meant growing older without saying growing older.

The moment was small enough that someone watching from a porch would have missed it entirely.

But small moments had always mattered most between them.

The oak tree had taught him that.

So had everything after it.`,

female: `They slowed near the corner where their routes usually separated.

She looked down the street first, then back at him.

"It feels different now," she said.

He knew immediately that she wasn't talking about the sidewalk.

Not really.

She meant school.
She meant them inside school.
She meant growing older without saying growing older.

The moment was small enough that someone watching from a porch would have missed it entirely.

But small moments had always mattered most between them.

The oak tree had taught them that.

So had everything after it.`
}

],
choices: [
{
text: {
male: "Agree openly and let the pattern between you become more visible.",
female: "Say it plainly and see whether he will meet you there.",
narrator: "The changing atmosphere is acknowledged instead of avoided."
},
effects: {
male: { trust: +1, communication: +1, sharedHistory: +1 },
female: { trust: +1, communication: +1, sharedHistory: +1 },
narrator: { trust: +1, sharedHistory: +1 }
},
memoryAdd: ["ne_acknowledged_pattern"],
goto: "ch2_01_new_environment_05"
},
{
text: {
male: "Answer carefully and keep the moment from becoming too exposed.",
female: "Leave the truth partly covered and keep the moment steady.",
narrator: "Care enters through restraint rather than directness."
},
effects: {
male: { resilience: +1, trust: +1 },
female: { resilience: +1, trust: +1 },
narrator: { resilience: +1 }
},
memoryAdd: ["ne_kept_corner_moment_measured"],
goto: "ch2_01_new_environment_05"
},
{
text: {
male: "Let the feeling stay in the air without naming it yet.",
female: "Trust the silence to hold the meaning a little longer.",
narrator: "Silence becomes a way of preserving weight."
},
effects: {
male: { sharedHistory: +1, affection: +1 },
female: { sharedHistory: +1, affection: +1 },
narrator: { sharedHistory: +1 }
},
memoryAdd: ["ne_left_corner_moment_unspoken"],
goto: "ch2_01_new_environment_05"
}
]
},

{
id: "ch2_01_new_environment_05",
phase: "new_environment",
age: 10,
title: "New Environment",
pages: [

{
narrator: `He could answer honestly.
He could make it lighter.
He could ask her something instead.
He could stay still and let the moment keep its shape without forcing words into it.
He could move the conversation somewhere safer.

The choice did not look large from the outside.

It did not feel small inside him.

That was another thing changing at ten: small exchanges had started developing private weight before they acquired any public form. You could still walk home like children. You could still say simple things. But simplicity no longer guaranteed innocence.

He looked at her and saw, all at once, several years at once.

The girl beneath the oak tree.
The girl beside him in school lines and recess edges and classroom moments that should have been forgettable and had somehow remained.
The girl standing here now with enough awareness in her face to make him understand that she knew something had changed too.

Not everything.
Not even enough to name cleanly.

Just enough that the world around them had begun pressing on the connection from the outside.

And perhaps that pressure was not entirely bad.

Pressure made outlines clearer.

It made certain things easier to ignore, but it also made other things impossible to keep calling accidental forever.

{{CALLBACK:attach_belonging_threshold}}`,

male: `He could answer honestly.
He could make it lighter.
He could ask her something instead.
He could stay still and let the moment keep its shape without forcing words into it.
He could move the conversation somewhere safer.

The choice did not look large from the outside.

It did not feel small inside him.

That was another thing changing at ten: small exchanges had started developing private weight before they acquired any public form. You could still walk home like children. You could still say simple things. But simplicity no longer guaranteed innocence.

He looked at her and saw, all at once, several years at once.

The girl beneath the oak tree.
The girl beside him in school lines and recess edges and classroom moments that should have been forgettable and had somehow remained.
The girl standing here now with enough awareness in her face to make him understand that she knew something had changed too.

Not everything.
Not even enough to name cleanly.

Just enough that the world around them had begun pressing on the connection from the outside.

And perhaps that pressure was not entirely bad.

Pressure made outlines clearer.

It made certain things easier to ignore, but it also made other things impossible to keep calling accidental forever.

{{CALLBACK:attach_belonging_threshold}}`,

female: `He could answer honestly.
He could make it lighter.
He could ask her something instead.
He could stay still and let the moment keep its shape without forcing words into it.
He could move the conversation somewhere safer.

The choice did not look large from the outside.

She suspected it did not feel small inside him.

That was another thing changing at ten: small exchanges had started developing private weight before they acquired any public form. They could still walk home like children. They could still say simple things. But simplicity no longer guaranteed innocence.

She looked at him and saw, all at once, several years at once.

The boy beneath the oak tree.
The boy beside her in school lines and recess edges and classroom moments that should have been forgettable and had somehow remained.
The boy standing here now with enough awareness in his face to make her understand that he knew something had changed too.

Not everything.
Not even enough to name cleanly.

Just enough that the world around them had begun pressing on the connection from the outside.

And perhaps that pressure was not entirely bad.

Pressure made outlines clearer.

It made certain things easier to ignore, but it also made other things impossible to keep calling accidental forever.

{{CALLBACK:attach_belonging_threshold}}`
},

{
narrator: `Evening had not arrived yet, but the day was already leaning toward closure. A car passed slowly through the intersection. Somewhere nearby, a screen door slammed and then opened again. A sprinkler clicked on in one yard and began its careful mechanical sweep.

Ordinary life continued.

That was what made the moment feel so precarious and so important at the same time.

Nothing around them had paused in acknowledgment.
No one had announced this as a threshold.
No one would have pointed to it later and called it the beginning of anything.

And yet he could feel, with the strange accuracy children sometimes have before they know how to explain themselves, that something had shifted into visibility.

Not the story itself.

The way the story was being understood.

The oak tree had belonged to childhood because childhood still allowed mysteries to remain private and complete.

Fifth grade was doing something else.

It was forcing private things to survive inside a world that noticed more, interpreted badly, and still somehow mattered.

Maybe that was what growing older meant at first.

Not losing the hidden places.

Learning what happened when they followed you back into public life.`,

male: `Evening had not arrived yet, but the day was already leaning toward closure. A car passed slowly through the intersection. Somewhere nearby, a screen door slammed and then opened again. A sprinkler clicked on in one yard and began its careful mechanical sweep.

Ordinary life continued.

That was what made the moment feel so precarious and so important at the same time.

Nothing around them had paused in acknowledgment.
No one had announced this as a threshold.
No one would have pointed to it later and called it the beginning of anything.

And yet he could feel, with the strange accuracy children sometimes have before they know how to explain themselves, that something had shifted into visibility.

Not the story itself.

The way the story was being understood.

The oak tree had belonged to childhood because childhood still allowed mysteries to remain private and complete.

Fifth grade was doing something else.

It was forcing private things to survive inside a world that noticed more, interpreted badly, and still somehow mattered.

Maybe that was what growing older meant at first.

Not losing the hidden places.

Learning what happened when they followed you back into public life.`,

female: `Evening had not arrived yet, but the day was already leaning toward closure. A car passed slowly through the intersection. Somewhere nearby, a screen door slammed and then opened again. A sprinkler clicked on in one yard and began its careful mechanical sweep.

Ordinary life continued.

That was what made the moment feel precarious and important at the same time.

Nothing around them had paused in acknowledgment.
No one had announced this as a threshold.
No one would have pointed to it later and called it the beginning of anything.

And yet she could feel, with the strange accuracy children sometimes have before they know how to explain themselves, that something had shifted into visibility.

Not the story itself.

The way the story was being understood.

The oak tree had belonged to childhood because childhood still allowed mysteries to remain private and complete.

Fifth grade was doing something else.

It was forcing private things to survive inside a world that noticed more, interpreted badly, and still somehow mattered.

Maybe that was what growing older meant at first.

Not losing the hidden places.

Learning what happened when they followed you back into public life.`
}

],
choices: [
{
text: {
male: "Tell her the truth about the memory.",
female: "Tell him the truth about what this still means to you.",
narrator: "The memory is allowed to become spoken fact."
},
effects: {
male: { trust: +2, sharedHistory: +2, affection: +1 },
female: { trust: +2, sharedHistory: +2, affection: +1 },
narrator: { trust: +2, sharedHistory: +2 }
},
memoryAdd: ["ne_told_truth_memory"],
goto: "ch2_02_routine_formation_01"
},
{
text: {
male: "Make a joke to defuse the moment.",
female: "Lighten the moment before it gets too exposed.",
narrator: "Humor is used to protect the feeling without denying it."
},
effects: {
male: { resilience: +1, empathy: +1 },
female: { resilience: +1, empathy: +1 },
narrator: { resilience: +1 }
},
memoryAdd: ["ne_joked_defuse"],
goto: "ch2_02_routine_formation_01"
},
{
text: {
male: "Ask her a question instead.",
female: "Ask him something that lets the moment keep moving.",
narrator: "The feeling is carried forward by curiosity rather than confession."
},
effects: {
male: { communication: +1, trust: +1 },
female: { communication: +1, trust: +1 },
narrator: { communication: +1 }
},
memoryAdd: ["ne_asked_question_instead"],
goto: "ch2_02_routine_formation_01"
},
{
text: {
male: "Stay quiet and observe.",
female: "Let the silence hold a little longer before either of you changes it.",
narrator: "The moment is preserved as awareness rather than explanation."
},
effects: {
male: { sharedHistory: +1, affection: +1 },
female: { sharedHistory: +1, affection: +1 },
narrator: { sharedHistory: +1 }
},
memoryAdd: ["ne_stayed_quiet"],
goto: "ch2_02_routine_formation_01"
}
]
}

];

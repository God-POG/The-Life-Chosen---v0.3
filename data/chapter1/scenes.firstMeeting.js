// data/chapter1/scenes.firstMeeting.js
// Chapter 1 — First Meeting

window.CH1_FIRST_MEETING = [

{
id: "meet_01",
phase: "first_meeting",
age: 5,
title: "First Meeting",

pages: [

`The pavement ended where the neighborhood's certainty ran out.

Beyond the final driveway, the asphalt thinned into a cracked ribbon before surrendering completely to dirt and stubborn grass. The line between maintained and forgotten wasn't sharp. It blurred gradually, the way rules sometimes do when adults stop paying attention.

Heat shimmered above the dry ground, bending the distant houses into soft wavering shapes.

*BOY_NAME* stood at that boundary with his hands deep in the pockets of his denim shorts.

Behind him, the house continued existing in quiet mechanical rhythms — the refrigerator humming steadily in the kitchen, the hallway clock ticking with patient precision, the faint muffled voices of a television drifting through the walls.

The world back there was predictable.

Out here the sounds were different.

Crickets clicked invisibly in the tall grass. Wind pushed through dry weeds with a soft whispering sound like paper being shuffled somewhere far away. The air smelled like baked dirt, pine needles, and faint damp soil where sprinklers barely reached the edge of the yard.

He stepped off the pavement.

The ground felt softer immediately.

Less certain.

He took another step.

It felt like walking somewhere adults knew existed but didn't consider important enough to explain.`,


`The land dipped slightly into a shallow drainage ditch.

Concrete lined its sides, cracked by years of weather and slow shifting ground. Most days it carried only what the rain left behind. Today small puddles remained in the deeper parts, reflecting fragments of sky like broken mirrors scattered along the channel.

Green moss clung stubbornly to the concrete edges. Weeds forced their way through seams where the ditch had tried and failed to stay solid.

*BOY_NAME* crouched to look closer.

A dragonfly hovered above the water. Its wings flashed silver when sunlight struck them, vanishing again when it shifted direction. Beneath the surface, thin plant stems moved slowly with the weight of the water.

Everything here seemed alive in quiet ways.

At the far end of the ditch stood the oak tree.

Its trunk rose wide and steady from the earth. Thick roots pushed through the soil like old knuckles where rain had eaten away the ground over many seasons. Shade pooled beneath its branches, darker and cooler than the bright afternoon beyond.

His mother called this place "the bend in the road."

But to *BOY_NAME*, it felt more like something else.

A pause.

A place where the neighborhood stopped pretending it controlled everything.`,


`He stepped beneath the branches.

The air changed immediately.

The sunlight filtered through layers of leaves, breaking into soft green light across the dirt. The ground smelled damp here, like soil that remembered rain longer than the rest of the yard.

He pressed his hand against the bark.

The surface was rough, warm from the sun. Small ridges scratched lightly across his palm.

For a moment he simply stood there.

The quiet under the oak wasn't empty.

It held tiny movements — insects shifting in the leaves, wind brushing gently through the canopy, the faint distant murmur of life continuing somewhere far beyond the ditch.

Then a twig snapped.

The sound was small.

But in the stillness beneath the branches it felt sharp.

*BOY_NAME* turned too quickly and nearly tripped over one of the exposed roots.

A girl stood a few feet away.

She had stopped mid-step, as if she had been trying to move quietly and suddenly decided it wasn't worth pretending anymore. Dust lifted slightly around her sneakers as both feet settled into the dirt.`,


`Her sneakers were worn along the rubber edges, the white faded to dull gray.

Grass stains marked the lower edge of her dress where the fabric brushed her knees. A yellow ribbon held her hair back, though the knot looked loose enough that it might have been tied in a hurry.

For several seconds neither of them spoke.

They simply looked at each other with the startled stillness of two people who had both expected to be alone.

*BOY_NAME* felt an awkward urge to adjust something — his hands, his stance, the way his face looked.

But the girl didn't step back.

She stood easily where she was, like the quiet beneath the oak already belonged to her.

Wind moved softly through the branches overhead.

The smell of sun-warmed grass drifted between them.`,


`"You're far from home," she said.

Her voice wasn't suspicious.

It sounded more like someone stating a fact they had already decided was true.

*BOY_NAME* glanced briefly toward the pavement behind him.

"I was looking for bugs," he said.

She tilted her head slightly.

"Out here?"

"I live nearby."

He almost said more — something about how this still counted as the neighborhood, how it wasn't really far.

But the way she looked at him made it clear she already understood the difference between the sidewalk and here.

She stepped closer.

Then she reached into her pocket.

When her hand came out again, a stone rested in her palm.

It was smooth and dark gray, worn round by water into a perfect oval. Sunlight slid across its polished surface when she turned it slightly.

"I found it by the water," she said.

The gesture didn't feel random.

It felt deliberate.

Like the beginning of something.

Or maybe a small test.

*BOY_NAME* looked at the stone.

Then at her hand.

His own hands stayed inside his pockets.

He could reach out.

Or he could leave them where they were.`

],

choices: [

{
text: "Reach out and take the stone.",
effects: { trust: +2, sharedHistory: +1, affection: +1 },
memoryAdd: ["meet_stone_accepted"],
goto: "meet_02"
},

{
text: "Leave your hands in your pockets. Ask what it is like near the water.",
effects: { resilience: +1, communication: +1, sharedHistory: +1 },
memoryAdd: ["meet_stone_declined_polite"],
goto: "meet_02"
},

{
text: "Hold out an empty palm—halfway. Let her decide.",
effects: { trust: +1, communication: +1, sharedHistory: +1 },
memoryAdd: ["meet_stone_halfway"],
goto: "meet_02"
}

]

},


{
id: "meet_02",
phase: "first_meeting",
age: 5,
title: "First Meeting",

pages: [

`"My mom says it gets wild out here," he said. "But I don't see anything."

The girl smiled faintly.

"That's because you're looking for the wrong thing."

He frowned.

"What's the right thing?"

Instead of answering immediately, she glanced toward the ditch where a beetle struggled across the thin surface of the water.

"It isn't scary," she said after a moment. "People just say that when they don't know a place."

She said it calmly.

Like someone who had spent enough afternoons here to understand the difference.

*BOY_NAME* realized he had never seen anyone else standing beneath this tree before.`,


`"Do you live near here?" he asked.

"On the other side."

She gestured loosely beyond the ditch, toward where the houses stopped lining up neatly and the streets became harder to follow.

She didn't offer a street name.

She didn't ask for his.

The conversation stayed strangely balanced — each of them sharing small pieces of information while keeping the rest just out of reach.

Behind him, the pavement waited.

Order waited.

But turning around now suddenly felt like missing something important without knowing exactly what.`,


`He stepped closer to the ditch.

"The water looks deep there," he said.

She leaned slightly to look down.

"It's mostly mud."

Mostly did not make him feel much better.

A flat stone stuck out from the concrete wall — wide enough for one careful step.

She placed her sneaker on it without hesitation.

Her arms lifted slightly for balance.

Then she pushed off and landed easily on the opposite side.

She turned back toward him.

Now the distance between them felt different.

Not far.

But important.

The water below was dark enough that he couldn't see the bottom clearly. Mud clung thickly along the edges.

The ground behind him felt safe.

The ground beside her felt uncertain.

She didn't hurry him.

She simply waited.

Like she already believed he would decide.`

],

choices: [

{
text: "Step onto the stone and follow her across.",
effects: { resilience: +1, sharedHistory: +2, affection: +1 },
memoryAdd: ["meet_crossed_stone"],
goto: "meet_03"
},

{
text: "Stay on your side. Ask what she sees over there.",
effects: { communication: +2, sharedHistory: +1 },
memoryAdd: ["meet_didnt_cross"],
goto: "meet_03"
},

{
text: "Warn her to be careful. The mud looks deeper than it seems.",
effects: { trust: +1, communication: +1, sharedHistory: +1 },
memoryAdd: ["meet_warned_careful"],
goto: "meet_03"
}

]

},

{
id: "meet_03",
phase: "first_meeting",
age: 5,
title: "First Meeting",

pages: [

`"You should see this," she said.

The words sounded less like a command and more like an invitation.

Near the base of the oak tree, small purple flowers had gathered between the thick ridges of root and bark.

"They only grow here," she said quietly.

*BOY_NAME* stepped closer.

The shade beneath the tree felt cooler now. The scent of damp soil mixed with something faintly sweet from the tiny blossoms.

The flowers were small.

Easy to miss.

If she hadn't pointed them out, he might have walked past without ever noticing.`,


`He lifted his hand toward one of the petals.

Then hesitated.

At home his mother always said not to touch the flowers unless he asked first.

But this wasn't the garden.

There were no fences here.

No signs explaining what was allowed.

He looked at the girl.

She crouched beside the roots, watching a tiny bug crawl along the bark.

"They fold back if you pinch them," she said.

"But if you're careful, they stay open."

She spoke like someone who had learned by trying.

Not by being told.

That made the place feel even more real.

His hand hovered above the flowers.

Curiosity pulled one way.

Caution pulled the other.`

],

choices: [

{
text: "Touch one flower gently.",
effects: { sharedHistory: +1, affection: +1 },
memoryAdd: ["meet_touched_purple_flowers"],
goto: "meet_04"
},

{
text: "Keep your hand back and ask how she knows.",
effects: { communication: +2, sharedHistory: +1 },
memoryAdd: ["meet_asked_about_flowers"],
goto: "meet_04"
},

{
text: "Let her guide your hand.",
effects: { trust: +2, affection: +1, sharedHistory: +1 },
memoryAdd: ["meet_guided_hand_flowers"],
goto: "meet_04"
}

]

},

{
id: "meet_04",
phase: "first_meeting",
age: 5,
title: "First Meeting",

pages: [

`"Where do you go when it gets dark?" he asked.

She thought for a moment.

"Home," she said.

He hesitated.

"Not here?"

She smiled slightly.

"I sleep in a bed like yours."

The answer made her seem more ordinary.

And somehow more mysterious at the same time.

Then she looked directly at him.

"But sometimes I come back here before I sleep."

The sentence felt like something quietly shared.

A secret she had decided he was allowed to hear.`,


`Evening had begun creeping across the neighborhood.

A kitchen light flickered on in one of the houses down the street. Somewhere farther away a screen door slammed shut.

Then she asked:

"Who are you?"

The question sounded simple.

But suddenly his name felt heavier than usual.

Saying it would make the moment real.

Something that could be remembered clearly later.

He could say his name.

He could ask for hers.

Or he could leave the moment exactly the way it was.`,


`A voice called from the street.

"Time!"

The voice belonged to an adult — sharp and familiar in the way voices become when they expect an answer.

*BOY_NAME* turned instinctively.

When he looked back, she was already moving.

She ran toward the bend in the road, her sneakers striking the ground in quick soft beats.

Within seconds she disappeared around the corner.

The quiet returned.

*BOY_NAME* stood beneath the oak tree alone.

The ditch was still just a ditch.

The oak was still just a tree.

But the place felt different now.

Because it held a moment that hadn't finished yet.`

],

choices: [

{
text: "Say your name, even if she can't hear it.",
effects: { communication: +2, trust: +1, sharedHistory: +1 },
memoryAdd: ["meet_said_name_too_late"],
goto: "meet_05_end"
},

{
text: "Call after her and ask her name.",
effects: { communication: +2, affection: +1, sharedHistory: +1 },
memoryAdd: ["meet_asked_her_name_too_late"],
goto: "meet_05_end"
},

{
text: "Stay silent and keep the moment unnamed.",
effects: { resilience: +1, sharedHistory: +2 },
memoryAdd: ["meet_left_unnamed"],
goto: "meet_05_end"
}

]

}

];

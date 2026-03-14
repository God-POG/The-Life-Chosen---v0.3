// data/chapter1/scenes.earlyBond.js
// Chapter 1 — Early Bond (Age 6)
// Improved pacing, sensory immersion, and emotional weight
// Story, IDs, choices, and mechanics unchanged.

window.CH1_EARLY_BOND = [

{
id: "bond_01",
phase: "early_bond",
age: 6,
title: "Early Bond",
pages: [

`The oak tree looked different in spring.

When *BOY_NAME* reached the ditch that afternoon, the air felt softer than it had the year before. Grass had thickened along the concrete edges, bending lazily in the breeze. The cracked pavement behind him still marked the end of the neighborhood, but it no longer felt like a forbidden boundary.

It felt familiar now.

He had come back more than once since that first summer day when he found the tree and the girl beneath it. Not every day. Not even every week. But often enough that the walk from the sidewalk to the ditch had started to feel like a quiet routine his body remembered before his thoughts did.

Rain earlier that morning had darkened the ground. Small puddles reflected pale pieces of sky between the weeds. The ditch smelled of wet concrete, moss, and loosened soil.

He stepped carefully across the flat stone in the middle.

The oak tree stood exactly where it always had.

But someone else was already there.`,


`*GIRL_NAME* sat on one of the exposed roots with her knees drawn up against her chest.

A stick rested across her lap. She dragged its tip slowly through the dirt, making lines that crossed and looped back over one another. The marks looked important even before they meant anything.

She looked up when she heard him getting closer.

"You came back," she said.

Her voice sounded more certain than surprised.

*BOY_NAME* shrugged a little.

"I was bored," he said.

That was not the whole reason.

But it was the easiest part to say.

The wind moved through the branches overhead. Water dripped somewhere deeper in the ditch.

For a moment neither of them spoke.

The silence between them didn't feel awkward. It felt like the kind of quiet that happens when two people already know the other one might stay.`,


`Then she pointed with the stick at the dirt beside her drawing.

"I made a map," she said.

*BOY_NAME* stepped closer and leaned down to see it better.

The map wasn't like the ones in books.

There were no straight roads. No names. No proper edges. The lines wandered, curved, doubled back. Small circles marked certain places, and one crooked line stretched from the oak tree toward the ditch as if the land itself had been translated into a secret only the two of them might eventually understand.

"What's that?" he asked, pointing at one of the circles.

"A treasure place," she said.

"Is there treasure?"

She shook her head.

"Not yet."

The answer should have made the whole thing feel pretend.

Instead it made the dirt drawing feel more real.

As if the treasure didn't have to exist yet for the place to already be waiting for it.`
]
},

{
id: "bond_02",
phase: "early_bond",
age: 6,
title: "Early Bond",
pages: [

`She moved the stick through the dirt again, adding another circle near the edge of the map.

"We could hide something," she said. "Then it would be real."

*BOY_NAME* looked around the ground beneath the tree.

There wasn't much there that seemed worthy of being called treasure. Only stones, bark, leaves, old acorn caps, and damp clumps of earth. Ordinary things. The kind adults stepped past without seeing.

Still, the idea made something open inside him.

Not excitement exactly.

Something quieter.

The feeling of making a place matter by deciding it did.

He crouched beside her and studied the map again, trying to imagine what kind of object should be important enough to bury.`

],
choices: [

{
text: "Suggest hiding a shiny rock.",
effects: { communication: +1 },
memoryAdd: ["bond_suggested_rock"],
goto: "bond_03"
},

{
text: "Suggest hiding a secret note.",
effects: { communication: +1 },
memoryAdd: ["bond_suggested_note"],
goto: "bond_03"
},

{
text: "Suggest hiding nothing — the map is the treasure.",
effects: { resilience: +1 },
memoryAdd: ["bond_map_is_treasure"],
goto: "bond_03"
},

{
text: "Ask her why she likes maps.",
effects: { communication: +1 },
memoryAdd: ["bond_asked_about_maps"],
goto: "bond_03"
}

]
},

{
id: "bond_03",
phase: "early_bond",
age: 6,
title: "Early Bond",
pages: [

`They searched the ground around the tree for something worthy of hiding.

Most of what they found looked too ordinary at first.

A snapped twig.
A flat piece of bark.
A stone too dull to matter.

But after a while, *BOY_NAME* found one that made both of them stop.

It was shaped almost like a triangle. One side carried a thin white line across the dark surface, like a tiny crack of lightning trapped inside the rock.

"That one," *GIRL_NAME* said immediately.

He turned it over in his fingers.

The stone felt cool from the wet ground. Smaller than treasure should have been, maybe. But heavier somehow, now that they had chosen it.

She brushed dirt aside with both hands and dug a small hole between two exposed roots. The soil beneath the surface was dark, soft, and cool.

Together they dropped the stone inside and covered it again carefully.

When the ground looked almost untouched, she tapped the spot lightly with the end of the stick.

"Treasure," she said.

Then she bent over the map and marked the place with a tiny X.

The X made it official in a way the stone alone had not.`

],
choices: [

{
text: "Ask if anyone else will find it.",
effects: { communication: +1 },
memoryAdd: ["bond_asked_if_found"],
goto: "bond_04"
},

{
text: "Suggest making more treasure spots.",
effects: { sharedHistory: +1 },
memoryAdd: ["bond_more_treasures"],
goto: "bond_04"
},

{
text: "Ask if the map needs a name.",
effects: { communication: +1 },
memoryAdd: ["bond_map_name"],
goto: "bond_04"
},

{
text: "Watch quietly as she finishes the map.",
effects: { resilience: +1 },
memoryAdd: ["bond_observed_map"],
goto: "bond_04"
}

]
},

{
id: "bond_04",
phase: "early_bond",
age: 6,
title: "Early Bond",
pages: [

`They sat beneath the oak for a long time after that.

The afternoon stretched slowly across the roots. Shadows from the branches shifted inch by inch over the dirt map. Somewhere beyond the ditch, a dog barked once and then went quiet again.

At some point *GIRL_NAME* lay back against the roots and looked up through the leaves.

The canopy spread above them in overlapping shapes of green and gold. Small patches of sky shone between the branches.

"The tree knows where the treasure is," she said.

*BOY_NAME* looked upward too.

The trunk rose so thick and steady that it did feel, for a moment, like something that might remember.

"Trees can't remember things," he said.

"They can," she replied.

"How?"

She kept looking upward.

"They stay in the same place."

He thought about that.

The answer didn't sound fully true.

But it didn't sound wrong either.

Under the oak, some ideas didn't have to be proven before they mattered.`

],
choices: [

{
text: "Tell her you think the tree will keep the secret.",
effects: { trust: +1 },
memoryAdd: ["bond_tree_secret"],
goto: "bond_05"
},

{
text: "Say the treasure should stay hidden forever.",
effects: { sharedHistory: +1 },
memoryAdd: ["bond_hidden_forever"],
goto: "bond_05"
},

{
text: "Ask if she comes here every day.",
effects: { communication: +1 },
memoryAdd: ["bond_asked_if_daily"],
goto: "bond_05"
},

{
text: "Say the map is the most important part.",
effects: { resilience: +1 },
memoryAdd: ["bond_map_most_important"],
goto: "bond_05"
}

]
},

{
id: "bond_05",
phase: "early_bond",
age: 6,
title: "Early Bond",
pages: [

`The wind shifted again.

From somewhere beyond the houses came the faint distant sound of a lawn mower. Ordinary life was still going on — driveways, dinners, open windows, voices calling children home.

But beneath the oak, the afternoon felt briefly separated from all of that.

*GIRL_NAME* folded the map in half, then again, pressing the creases flat with careful fingers.

"What if we forget where the treasure is?" she asked.

*BOY_NAME* looked at the patch of ground between the roots.

The dirt already looked almost the same as the rest.

He understood suddenly that she wasn't really asking about the stone.

She was asking about the day.

About whether a place could keep being important after you left it.

About whether something small could stay real once it belonged to memory instead of the afternoon.

The tree stood over them without moving.

The map rested between her hands.

And the answer — whatever it was — felt bigger than a buried rock.`

],
choices: [

{
text: "Tell her the tree will remember for them.",
effects: { trust: +2, sharedHistory: +2 },
memoryAdd: ["bond_tree_remembers"],
goto: "conflict_01"
},

{
text: "Say you'll remember the place.",
effects: { resilience: +1, sharedHistory: +1 },
memoryAdd: ["bond_i_remember"],
goto: "conflict_01"
},

{
text: "Tell her they should come back and check on it.",
effects: { affection: +1, sharedHistory: +1 },
memoryAdd: ["bond_return_later"],
goto: "conflict_01"
}

]
}

];

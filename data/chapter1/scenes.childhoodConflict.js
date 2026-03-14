// data/chapter1/scenes.childhoodConflict.js
// Chapter 1 — Childhood Conflict (Age 7–8)
// One meaningful choice + four personality shaping choices

window.CH1_CHILDHOOD_CONFLICT = [

{
id: "conflict_01",
phase: "childhood_conflict",
age: 7,
title: "Childhood Conflict",
pages: [

`Summer had returned to the oak tree.

The ditch sat lower now, its spring water long gone except for thin dark stains along the concrete where moisture had once collected. Cracks had widened in the channel walls, and weeds pushed through them with the stubbornness of things that grew best where nobody intended them to.

The neighborhood still ended where it always had. Pavement still gave way to loose dirt and tall grass. The houses behind him still held their afternoon sounds — lawn mowers starting, doors closing, dishes shifting somewhere inside kitchens.

But to *BOY_NAME*, the place no longer felt unfamiliar.

It felt mapped.

His shoes found the same stepping stone in the ditch without needing to search for it. His eyes went automatically to the same low branch, the same roots, the same patch of ground beneath the tree where the dirt rose slightly over what they had buried together.

Treasure.

At least, that was what they had called it.

The word still mattered here.

Under the oak, ordinary things had a way of becoming larger than themselves.`,


`*GIRL_NAME* was already there when he arrived.

She crouched beside the roots with a stick in her hand, digging slowly at the dirt. Small clumps of soil had been pushed aside around her knees. At first he thought she might just be drawing another map.

Then he saw the shallow hole.

The one between the two thick roots.

The treasure spot.

He stopped walking.

"What are you doing?" he asked.

She didn't look up right away.

"I'm checking it," she said.

The stick scraped through the soil again. Dry dirt gave way to darker earth underneath.

A small piece of stone appeared.

For a moment the whole place felt strangely wrong — not broken, not dangerous, just wrong in the way a room feels when someone has moved an object you were certain belonged exactly where it was.`,


`*BOY_NAME* felt something tighten in his chest.

The treasure wasn't supposed to be checked.

That wasn't how treasure worked.

The whole point of burying something was that it stayed buried. Hidden things mattered because they remained hidden. That was the rule they had made without ever saying it out loud.

"You weren't supposed to dig it up," he said.

She shrugged a little.

"What if it was gone?"

"It wouldn't be gone."

"You don't know that."

The stick scraped again. More dirt slid away from the stone.

For the first time since he had started coming back to the oak tree, something between them felt uneven.

Not like a fight.

More like a secret being handled too roughly.

The afternoon sounds from the neighborhood kept drifting toward them as if nothing unusual had happened at all.

But under the tree, the moment had changed shape.`
]
},

{
id: "conflict_02",
phase: "childhood_conflict",
age: 7,
title: "Childhood Conflict",
pages: [

`The stone was fully visible now.

The same small triangular one with the thin white line across it, like a tiny crack of lightning caught in the surface.

It looked smaller than he remembered.

That bothered him more than it should have.

*GIRL_NAME* brushed the remaining dirt away with her palm. Fine dust clung to the lines of her skin.

"See?" she said. "It's still here."

"Yeah," *BOY_NAME* said.

But the moment didn't feel the same.

The treasure had always been important because it was hidden. Because it existed under the ground where nobody else could see it. Because knowing where it was had felt like knowing something private and shared.

Now that it sat in the open air again, it looked ordinary.

Just a rock.

A good rock, maybe. A chosen rock. But still a rock.

And something in that felt disappointing in a way he didn't yet know how to explain.`,

`She noticed his face.

"What?" she asked.

He opened his mouth, then closed it again.

The feeling in his chest didn't have a clean name.

It wasn't anger exactly.

It wasn't sadness either.

It felt more like disappointment sharpened by something else — the uneasy sense that a thing could stop being magical if you looked at it the wrong way for too long.

The white line on the stone flashed once when she turned it in the light.

He stared at it and thought, irrationally, that it should have looked more important than this.

That if a secret was pulled into daylight, it ought to defend itself somehow.

But secrets, he was beginning to understand, often became smaller when opened.`

],

choices: [

{
text: "Tell her the treasure wasn't supposed to be dug up.",
effects: { communication: +1 },
memoryAdd: ["conflict_said_treasure_hidden"],
goto: "conflict_03"
},

{
text: "Ask why she wanted to check it.",
effects: { communication: +1 },
memoryAdd: ["conflict_asked_why_check"],
goto: "conflict_03"
},

{
text: "Laugh and say it looks smaller than before.",
effects: { resilience: +1 },
memoryAdd: ["conflict_joked_smaller"],
goto: "conflict_03"
},

{
text: "Stay quiet and watch what she does next.",
effects: { resilience: +1 },
memoryAdd: ["conflict_silent_observer"],
goto: "conflict_03"
}

]

},

{
id: "conflict_03",
phase: "childhood_conflict",
age: 7,
title: "Childhood Conflict",
pages: [

`She turned the stone over in her hand.

The white line caught the sunlight and disappeared again.

"I just wanted to make sure it was still ours," she said.

"Ours?"

"Yeah."

She said it like the answer should have been obvious.

And maybe it was.

But the word stayed in the air longer than either of them expected.

*BOY_NAME* had never really thought about ownership here before. The stone was something they had buried together. The tree was where they met. The spot between the roots belonged to both of them in the loose unquestioned way children decide things belong to them.

Still, it had never occurred to him that someone else might find the treasure.

Or take it.

"What if someone else digs here?" she asked.

"No one comes here," he said.

She glanced up at him.

"You didn't come here before either."

That was true.

Before meeting her, this had just been the edge of the neighborhood.

A place to pass.

Now it was a place that held part of them both.`,


`The stick lay abandoned beside her in the dirt.

She held the stone in both hands now, rubbing away the last of the soil with her thumb. The motion was careful. Thoughtful. But it still made him uneasy.

For a second, *BOY_NAME* wondered if she might keep it.

Not steal it.

Not put it in her pocket and run.

Just… not return it.

The possibility made something twist inside him.

Treasure wasn't supposed to move once it had been buried.

That was the rule they had made together, even if neither of them had spoken it aloud.

But rules between children were fragile things.

They weren't written anywhere.

They only existed if both people kept believing in them at the same time.

And suddenly he could feel how easy it would be for the same afternoon, the same tree, the same buried stone to mean slightly different things to each of them.`

],

choices: [

{
text: "Tell her the treasure should stay buried.",
effects: { trust: +1 },
memoryAdd: ["conflict_keep_buried"],
goto: "conflict_04"
},

{
text: "Suggest hiding it somewhere better.",
effects: { sharedHistory: +1 },
memoryAdd: ["conflict_new_hiding_spot"],
goto: "conflict_04"
},

{
text: "Ask if she thinks someone would really take it.",
effects: { communication: +1 },
memoryAdd: ["conflict_question_theft"],
goto: "conflict_04"
},

{
text: "Pick up the stick and redraw the treasure map.",
effects: { resilience: +1 },
memoryAdd: ["conflict_redraw_map"],
goto: "conflict_04"
}

]

},

{
id: "conflict_04",
phase: "childhood_conflict",
age: 8,
title: "Childhood Conflict",
pages: [

`The wind moved gently through the oak leaves.

Somewhere behind the houses, a lawn mower started up with a dull mechanical growl. Ordinary sounds from the neighborhood drifted toward the ditch and softened by the time they reached the tree, reminding them that the rest of the world still existed beyond their small territory.

*GIRL_NAME* looked down at the stone again.

Then she placed it carefully back into the hole.

For a moment neither of them spoke.

She pushed dirt over it with both hands, smoothing the surface slowly, pressing the earth flat until the ground looked nearly untouched.

Nearly.

The patch of soil was darker than the rest. Looser too.

Anyone paying close enough attention might have noticed.

"See?" she said.

"It's still hidden."

And it was.

But the moment did not feel exactly the same as before.

The secret had been opened.

Even if only for a minute, it had already changed by being seen again.`

],

choices: [

{
text: "Tell her the tree will protect it.",
effects: { trust: +1 },
memoryAdd: ["conflict_tree_protects"],
goto: "conflict_05"
},

{
text: "Say maybe treasure isn't supposed to stay forever.",
effects: { resilience: +1 },
memoryAdd: ["conflict_treasure_changes"],
goto: "conflict_05"
},

{
text: "Ask if she trusts you not to take it.",
effects: { communication: +1 },
memoryAdd: ["conflict_trust_question"],
goto: "conflict_05"
},

{
text: "Brush the dirt flat together so it looks perfect again.",
effects: { sharedHistory: +1 },
memoryAdd: ["conflict_fixed_ground_together"],
goto: "conflict_05"
}

]

},

{
id: "conflict_05",
phase: "childhood_conflict",
age: 8,
title: "Childhood Conflict",
pages: [

`They sat beneath the oak again.

The ground looked ordinary now — roots, dirt, a few scattered leaves, a patch of shade shifting slightly with the wind.

But *BOY_NAME* knew exactly where the stone was.

And now he knew something else too.

Secrets could change when you looked at them.

Not because they became false.

Because seeing them too directly could alter what they felt like.

*GIRL_NAME* rested her chin on her knees.

"Do you remember the first time you came here?" she asked.

He nodded.

"The stone," he said.

She shook her head a little.

"No. Before that."

She looked toward the ditch.

"When you didn't know me yet."`,

`The question stayed between them.

Not about the stone.

Not really even about the tree.

About the memory.

About that first afternoon, and what it had meant before either of them had language for why it mattered.

The wind moved again through the leaves overhead. The smell of warm dirt and cut grass drifted in from the neighborhood. Somewhere far off, a screen door slammed and a dog barked once, then stopped.

And suddenly the moment felt important again.

Not like treasure.

Like something more difficult than treasure.

Something that could become different depending on what he said next.

He looked at her, and for a second the hidden stone beneath the roots seemed less important than the answer waiting in his throat.`

],

choices: [

{
text: "Tell her the truth about the memory.",
effects: { trust: +2, sharedHistory: +2, affection: +1 },
memoryAdd: ["conflict_told_truth_memory"],
goto: "moment_01"
},

{
text: "Make a joke to defuse the moment.",
effects: { resilience: +2 },
memoryAdd: ["conflict_joked_memory"],
goto: "moment_01"
},

{
text: "Ask her a question instead.",
effects: { communication: +2 },
memoryAdd: ["conflict_asked_question_memory"],
goto: "moment_01"
},

{
text: "Stay quiet and observe.",
effects: { resilience: +1, sharedHistory: +1 },
memoryAdd: ["conflict_quiet_observe"],
goto: "moment_01"
},

{
text: "Change the subject.",
effects: { resilience: +1 },
memoryAdd: ["conflict_changed_subject"],
goto: "moment_01"
}

]

}

];

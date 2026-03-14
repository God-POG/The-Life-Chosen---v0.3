// data/chapter2/scenes.newEnvironment.js
// Chapter 2 — Scene 1: New Environment (Age 10)
// Realigned with Chapter 1 and with Familiar, Different:
// they already know each other well, already share school history,
// and this scene focuses on childhood familiarity becoming more public,
// visible, and slightly different inside school.

window.CH2_NEW_ENVIRONMENT = [

  {
    id: "ch2_01_new_environment",
    phase: "new_environment",
    age: 10,
    title: "New Environment",
    pages: [

`Fifth grade did not feel new in the simple way younger grades had.

The building was the same building. The hallways still smelled like floor wax, pencil shavings, damp jackets hung too close together after rain. The classroom doors still opened with the same stiff resistance, and the cafeteria still carried that mixed smell of warm trays, bleach, and milk cartons taken out too early.

But something about school had changed anyway.

It felt sharper now.

Not larger exactly. More observed.

Children who had spent years beside one another were starting to act as if they had been dropped into a place where everything suddenly counted more than it used to. Who you sat beside. Who you walked with. How long you stood talking before class. Whether you looked comfortable doing it.

At home, mornings still moved in their usual order. Breakfast. Shoes by the door. A reminder not to forget anything important. The house still held its shape around *BOY_NAME* with the same dependable rhythm it always had.

But school no longer felt like an extension of that rhythm.

It felt like a place where ordinary things could become noticeable before he had decided what they meant.`,


`He saw *GIRL_NAME* before she saw him.

She was standing near the classroom windows, reading a paper taped crookedly to the glass. One strap of her backpack had slipped down her shoulder. She pushed it back up without looking, then leaned in again with the same slight tilt of her head he had known for years.

That was what caught him every time now.

Not surprise.

Recognition.

Not just that he knew her, but that he knew the small ways she moved through space. The pause before she touched something. The way she shifted her weight when concentrating. The way familiarity could live in details too minor for anyone else to notice.

They had not stopped knowing each other after the oak tree.

That mattered.

The oak tree had not become a lost chapter or some distant childhood accident. It was part of the structure underneath things now, together with recesses, class lists, sidewalks home, and all the ordinary years in between. They had been in each other’s orbit long enough that seeing her at school should have felt normal.

Mostly, it did.

And yet it no longer felt simple.`,


`When she turned and noticed him, her face changed immediately.

Not surprise.
Not performance.
Just that quick, natural adjustment of someone seeing a person they already expect the day to contain.

"You got Mr. Bennett too?" she asked.

Her voice was easy. Familiar. The kind of voice that made it sound like there was nothing difficult about standing in a hallway and talking.

*BOY_NAME* nodded. "Yeah."

"I heard he gives a lot of group projects."

"My mom says that's supposed to be good," he said.

She made a face. "That sounds like something a mom would say."

He smiled before he meant to.

Students were still moving around them in loose streams. Someone laughed too loudly by the drinking fountain. A teacher passed carrying a stack of folders pressed against her hip. Locker doors banged farther down the hall.

Everything around them remained ordinary.

But the ordinary had started feeling more public than it used to.

That was the change.

Not in *GIRL_NAME* exactly.

In the world around them, and in the new awareness that came with being ten and no longer completely protected from what other people might notice.`

    ]
  },

  {
    id: "ch2_01_new_environment_02",
    phase: "new_environment",
    age: 10,
    title: "New Environment",
    pages: [

`At recess, the playground looked divided in the way places always do once children have spent enough days claiming parts of them.

Basketball near the far fence. Four square by the painted lines. A group trading cards beside the portable classrooms. Teachers stood at a distance with coffee cups and the expression adults wore when they wanted children to solve their own problems first.

*BOY_NAME* found *GIRL_NAME* near the edge of the blacktop where the chain-link fence looked out toward a patch of grass and a row of smaller trees.

Not the oak tree.

Nothing like the oak tree really.

But trees were enough to pull the memory close.

She was using the toe of her shoe to push gravel into a thin crooked line on the asphalt.

"This part's quieter," she said when he came over.

He nodded. It was.

The louder games stayed farther away. Over here, the noise blurred into something softer.

"Do you think fifth grade is worse?" she asked.

"Than fourth?"

"Yeah."

He considered this with the seriousness children still give questions that adults would dismiss too quickly.

"A little," he said. "Everyone's acting older on purpose."

She looked pleased in a way that made him think she had already been waiting for someone else to admit it.`

    ],
    choices: [
      {
        text: "Ask if she wants to walk to recess together later too.",
        effects: { communication: +1, sharedHistory: +1 },
        memoryAdd: ["ne_asked_walk_recess"],
        goto: "ch2_01_new_environment_03"
      },
      {
        text: "Admit school feels different this year.",
        effects: { trust: +1 },
        memoryAdd: ["ne_admitted_school_different"],
        goto: "ch2_01_new_environment_03"
      },
      {
        text: "Joke that everyone suddenly thinks they're seventeen.",
        effects: { resilience: +1 },
        memoryAdd: ["ne_joked_everyone_older"],
        goto: "ch2_01_new_environment_03"
      },
      {
        text: "Look through the fence and ask if she misses the oak tree too.",
        effects: { communication: +1, sharedHistory: +1 },
        memoryAdd: ["ne_asked_misses_oak"],
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

`A gust of wind lifted a few dry leaves across the blacktop. One scraped past his shoe with a brittle sound.

He looked through the fence instead of directly at her for a moment.

The grass beyond the school yard was thin and pale in places. The little trees moved easily in the wind. Nothing there carried the same shaded privacy as the ditch or the roots beneath the oak. There were no secrets here. No hidden stone. No corner of earth that belonged only to memory.

Maybe that was why school made everything feel different.

At the oak tree, there had only ever been the place itself and whatever the two of them chose to say inside it.

At school, there were always other eyes, even when no one was really paying attention.

There were hallway rules nobody explained. Who you stood beside. How long you stayed talking. Whether something looked normal or looked like it meant something.

He hated that he understood any of this.

He hated it even more because he was pretty sure she understood it too.`,


`By the end of the week, a pattern had already formed.

Not a dramatic one.

Just enough to notice.

Sometimes they reached class at the same time in the morning. Sometimes they ended up near each other at recess without planning it. Once, when the teacher told everyone to find partners for a local-history worksheet, neither of them moved very quickly, and somehow that was enough.

Patterns like that always looked accidental from the outside.

Maybe they were.

But repeated accidents begin to feel like choices.

On Friday, the teacher kept them a few extra minutes before lunch. By the time the class spilled into the hallway, the line for cafeteria trays had already curled back on itself.

Metal trays clattered. Shoes slid over tile. Children talked over one another because volume still felt like confidence at that age.

*GIRL_NAME* stood just ahead of him in line. She turned slightly, enough that he could hear her without anyone else needing to.

"Do you ever think," she said, "that school's just a place where everyone tries not to look weird at the same time?"

He stared at her, then laughed.

Not loudly. But enough.

"Yeah," he said.

She faced forward again. "Good."

The line moved.

He picked up a tray and found himself noticing that she chose apple slices over the brownie. It was a tiny detail. Too small to matter.

And still, it stayed with him.`

    ],
    choices: [
      {
        text: "Agree and tell her everyone suddenly feels fake.",
        effects: { communication: +1 },
        memoryAdd: ["ne_said_people_fake"],
        goto: "ch2_01_new_environment_04"
      },
      {
        text: "Say maybe being weird is better than pretending.",
        effects: { trust: +1 },
        memoryAdd: ["ne_weird_better"],
        goto: "ch2_01_new_environment_04"
      },
      {
        text: "Make a face at the cafeteria food instead.",
        effects: { resilience: +1 },
        memoryAdd: ["ne_mocked_cafeteria_food"],
        goto: "ch2_01_new_environment_04"
      },
      {
        text: "Ask what kind of weird she means.",
        effects: { communication: +1 },
        memoryAdd: ["ne_asked_what_weird"],
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

`After the last bell, they ended up walking the same stretch of sidewalk toward home.

The neighborhood looked the way it always did in early fall. Lawns clipped short. Mailboxes casting thin shadows. A dog barking from behind a fence two streets over. Ordinary life, steady and recognizable.

That steadiness should have made everything simple.

Instead, *BOY_NAME* kept thinking about how school and the oak tree seemed to belong to two different ways of knowing someone.

At school, there were desks, bells, lines, teachers, classmates, noise, and all the rules of being seen.

At the oak tree, there had only ever been shade, dirt, memory, and the feeling that whatever passed between them belonged first to the two of them before it belonged to the world.

He wondered which version mattered more.

Or whether one of them was already changing the other.`,


`They slowed near the corner where their routes usually separated.

*GIRL_NAME* looked down the street first, then back at him.

"It feels different now," she said.

He knew immediately that she wasn't talking about the sidewalk.

Not really.

She meant school.
She meant them inside school.
She meant growing older without saying growing older.

The moment was small enough that someone watching from a porch would have missed it entirely.

But small moments had always mattered most between them.

The oak tree had taught him that.

So had everything after it.

He could answer honestly.
He could make it lighter.
He could ask her something instead.
He could stay still and let the moment keep its shape without forcing words into it.
He could move the conversation somewhere safer.

The choice did not look large from the outside.

It did not feel small inside him.`

    ],
    choices: [
      {
        text: "Tell her the truth about the memory.",
        effects: { trust: +2, sharedHistory: +2, affection: +1 },
        memoryAdd: ["ne_told_truth_memory"],
        goto: "ch2_01_recognition"
      },
      {
        text: "Make a joke to defuse the moment.",
        effects: { resilience: +1 },
        memoryAdd: ["ne_joked_defuse"],
        goto: "ch2_01_recognition"
      },
      {
        text: "Ask her a question instead.",
        effects: { communication: +1 },
        memoryAdd: ["ne_asked_question_instead"],
        goto: "ch2_01_recognition"
      },
      {
        text: "Stay quiet and observe.",
        effects: { sharedHistory: +1 },
        memoryAdd: ["ne_stayed_quiet"],
        goto: "ch2_01_recognition"
      },
      {
        text: "Change the subject.",
        effects: { resilience: +1 },
        memoryAdd: ["ne_changed_subject"],
        goto: "ch2_01_recognition"
      }
    ]
  }

];

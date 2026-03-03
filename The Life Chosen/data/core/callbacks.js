// data/core/callbacks.js — conditional callback text blocks
// First matching variant is used; else defaultText.

window.GAME_CALLBACKS = {
  first_grass_touch: {
    variants: [
      {
        conditions: { hasFlag: "romantic" },
        text: "It becomes a story you tell yourself in the dark: not what happened, but what it could have meant."
      },
      {
        conditions: { hasMemory: "asked_name_childhood" },
        text: "Later, you won’t remember the words you almost said. You’ll remember only the brush of her fingers—warm, precise—like a bookmark placed in a page you haven’t read yet."
      },
      {
        conditions: { hasMemory: "offered_name_childhood" },
        text: "You offered something and the day refused to accept it. Still, her fingers brushed your skin as if to say: I saw you. I saw you anyway."
      },
      {
        conditions: { hasMemory: "didnt_exchange_names" },
        text: "You never learn her name. The touch becomes the closest thing to it—small, careful, and impossible to explain to anyone who wasn’t there."
      }
    ],
    defaultText: "For a while, it feels like something is still happening—quietly—long after it has ended."
  }
};
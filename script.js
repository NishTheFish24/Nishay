const moves = {
  serve: {
    emoji: "🎯",
    description:
      "A serve starts the point. Hit the ball over the net from behind the baseline.",
  },
  forehand: {
    emoji: "👉",
    description:
      "A forehand is a powerful shot on your dominant side, often used to control rallies.",
  },
  backhand: {
    emoji: "👈",
    description:
      "A backhand is hit on the non-dominant side. Can be one- or two-handed.",
  },
  volley: {
    emoji: "✋",
    description:
      "A volley is hit before the ball bounces, usually near the net.",
  },
  lob: {
    emoji: "🏹",
    description:
      "A lob is a high shot over your opponent, useful when they’re near the net.",
  },
  dropShot: {
    emoji: "🍩",
    description:
      "A drop shot barely clears the net and falls short, catching opponents off guard.",
  },
};

document.getElementById("moveSelect").addEventListener("change", function () {
  const move = this.value;
  const display = document.getElementById("moveInfo");
  if (moves[move]) {
    display.innerHTML = `${moves[move].emoji} <strong>${move}</strong>: ${moves[move].description}`;
  } else {
    display.innerHTML = "";
  }
});

function randomMove() {
  const keys = Object.keys(moves);
  const random = keys[Math.floor(Math.random() * keys.length)];
  document.getElementById("moveSelect").value = random;
  document.getElementById("moveSelect").dispatchEvent(new Event("change"));
}

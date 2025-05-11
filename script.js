const emojis = ["😀", "😎", "😴", "🤖", "🥳", "😡", "🧐", "😇", "💩", "👽", "🎃", "🐱‍👓", "🙌", "👀"];
const button = document.getElementById("emojiBtn");
const display = document.getElementById("emojiDisplay");

button.addEventListener("click", () => {
  const index = Math.floor(Math.random() * emojis.length);
  display.textContent = emojis[index];
});

window.addEventListener("keydown", playSound);

function playSound(e) {
  const key = e.key.toLowerCase();
  const sound = document.querySelector(`audio[data-key='${key}']`);
  const playingKey = document.querySelector(`div[data-key='${key}']`);
  if (!sound) return;
  playingKey.classList.add("playing");
  sound.currentTime = 0;
  sound.play();
}

const keys = document.querySelectorAll(".key");

keys.forEach(key => {
  key.addEventListener("transitionend", e => {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  });
});

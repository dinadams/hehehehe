const music = document.getElementById("bgMusic");
const playBtn = document.getElementById("playBtn");

// Try autoplay muted (some browsers block with sound)
music.volume = 0.6;
music.play().catch(() => {
  console.log("Autoplay blocked. Waiting for user action.");
});

playBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    playBtn.innerText = "⏸ dont pause me... js keep playin";
  } else {
    music.pause();
    playBtn.innerText = "▶ listen to some tunes brah";
  }
});
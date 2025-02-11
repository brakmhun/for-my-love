document.addEventListener("DOMContentLoaded", () => {
  let isPlaying = false;

  fetch("./vinyls.svg")
      .then((response) => response.text())
      .then((svg) => {
        console.log(svg);
        const playerContainer = document.getElementById("player-container");
        playerContainer.innerHTML = svg;
  
        const vinyls = document.querySelector("svg");
        console.log(vinyls);
        const playButton = document.getElementById("play-button");
        const audio = document.getElementById("love-song");
        console.log(audio.readyState);
  
        playButton.addEventListener("click", () => {
          if (!isPlaying) {
            vinyls.style.animation = "spin 2s linear infinite";

            audio.play();

            playButton.textContent = "Pause";
            isPlaying = true;
          } else {
            vinyls.style.animation = "";

            audio.pause();

            playButton.textContent = "Play";
            isPlaying = false;
          }
        });
      })
      .catch((err) => console.error("Error loading SVG:", err));
  });
  
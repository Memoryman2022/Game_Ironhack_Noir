window.onload = function () {
  const startButton = document.getElementById("start-btn");
  const restartButton = document.getElementById("restart-btn");
  const game = new Game();
  startButton.addEventListener("click", function () {
    startGame();
  });
  restartButton.addEventListener("click", () => {
    game.gameEndScreen.style.display = "none";
    game.gameScreen.style.display = "block";
  });
  //keyboard;
  document.addEventListener("keydown", (event) => {
    console.log(event.code);
    if (event.code === "ArrowRight") {
      game.player.directionX = -3;
    } else if (event.code === "ArrowLeft") {
      game.player.directionX = 3;
    }
  });

  //Key Released
  //   document.addEventListener("keyup", () => {
  //     game.player.directionX = 0;
  //     game.player.directionX = 0;
  //   });

  function startGame() {
    game.start();
  }
};

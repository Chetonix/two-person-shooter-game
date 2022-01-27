document.getElementById("btn-start").addEventListener("click", startGame);

var startGame = function () {
  gameStarted = true;

  while (gameStarted) {
    var player1Health = 100;
    var player2Health = 100;

    document.getElementById("shoot-1").addEventListener("click", function () {
      console.log(player1Health);
      player1Health -= Math.floor(Math.random() * 5) + 1;

      document.getElementById("player-1-health").textContent =
        "Health: " + player1Health;
    });

    document.getElementById("shoot-2").addEventListener("click", function () {
      console.log(player2Health);
      player2Health -= Math.floor(Math.random() * 5) + 1;

      document.getElementById("player-2-health").innerHTML =
        "Health: " + player2Health;
    });
  }
};

var player1Health = 100;
var player2Health = 100;
var gameStarted = false;
var wonMatchesPlayer1 = 0;
var wonMatchesPlayer2 = 0;

document.getElementById("btn-start").addEventListener("click", startGame);

var startGame = function () {
  gameStarted = true;
};

document.getElementById("shoot-1").addEventListener("click", function () {
  player1Health -= Math.floor(Math.random() * 5) + 1;

  document.getElementById("player-1-health").textContent =
    "Health: " + player1Health;

  if (player1Health <= 0) {
    resetGame();
  }
});

document.getElementById("shoot-2").addEventListener("click", function () {
  player2Health -= Math.floor(Math.random() * 5) + 1;

  document.getElementById("player-2-health").innerHTML =
    "Health: " + player2Health;

  if (player2Health <= 0) {
    resetGame();
  }
});

var resetGame = function () {
  wonMatchesPlayer2 += 1;
  document.getElementById("player-2-heading").textContent =
    "Player 2 - Won: " + wonMatchesPlayer2;

  wonMatchesPlayer1 += 1;
  document.getElementById("player-1-heading").textContent =
    "Player 1 - Won: " + wonMatchesPlayer1;

  player1Health = 100;
  player2Health = 100;
};

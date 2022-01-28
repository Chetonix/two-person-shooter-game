var player1Health = 10;
var player2Health = 10;
var gameStarted = false;
var wonMatchesPlayer1 = 0;
var wonMatchesPlayer2 = 0;
var activePlayer1 = true;
var activePlayer2 = false;
document.getElementById("btn-start").addEventListener("click", startGame);

var startGame = function () {
  gameStarted = true;
};

document.getElementById("shoot-1").addEventListener("click", function () {
  if (activePlayer1) {
    player1Health -= Math.floor(Math.random() * 5) + 1;

    document.getElementById("player-1-health").textContent =
      "Health: " + player1Health;
    activePlayer1 = false;
    activePlayer2 = true;
  }

  if (player1Health <= 0) {
    wonMatchesPlayer1 += 0;
    wonMatchesPlayer2 += 1;
    document.getElementById("player-1-heading").textContent =
      "Player 1 - Won: " + wonMatchesPlayer1;
    document.getElementById("player-2-heading").textContent =
      "Player 2 - Won: " + wonMatchesPlayer2;
    player1Health = 10;
    player2Health = 10;
    document.getElementById("player-1-health").textContent =
      "Health: " + player1Health;
    document.getElementById("player-2-health").innerHTML =
      "Health: " + player2Health;
    activePlayer1 = true;
    activePlayer2 = false;
  }
  if (wonMatchesPlayer1 === 3 || wonMatchesPlayer2 === 3) {
    if (wonMatchesPlayer1 === 3) {
      document.getElementById("player-1-heading").textContent =
        "Player 1 Wins the tournament!";
      activePlayer1 = false;
      activePlayer2 = false;
    }
    if (wonMatchesPlayer2 === 3) {
      document.getElementById("player-2-heading").textContent =
        "Player 2 Wins the tournament!";
      activePlayer1 = false;
      activePlayer2 = false;
    }
  }
});

document.getElementById("shoot-2").addEventListener("click", function () {
  if (activePlayer2) {
    player2Health -= Math.floor(Math.random() * 5) + 1;

    document.getElementById("player-2-health").innerHTML =
      "Health: " + player2Health;
    activePlayer2 = false;
    activePlayer1 = true;
  }

  if (player2Health <= 0) {
    wonMatchesPlayer1 += 1;
    wonMatchesPlayer2 += 0;
    document.getElementById("player-1-heading").textContent =
      "Player 1 - Won: " + wonMatchesPlayer1;
    document.getElementById("player-2-heading").textContent =
      "Player 2 - Won: " + wonMatchesPlayer2;
    player1Health = 10;
    player2Health = 10;
    document.getElementById("player-1-health").textContent =
      "Health: " + player1Health;
    document.getElementById("player-2-health").innerHTML =
      "Health: " + player2Health;
    activePlayer1 = true;
    activePlayer2 = false;
  }

  if (wonMatchesPlayer1 === 3 || wonMatchesPlayer2 === 3) {
    if (wonMatchesPlayer1 === 3) {
      document.getElementById("player-1-heading").textContent =
        "Player 1 Wins the tournament!";
      activePlayer1 = false;
      activePlayer2 = false;
    }
    if (wonMatchesPlayer2 === 3) {
      document.getElementById("player-2-heading").textContent =
        "Player 2 Wins the tournament!";
      activePlayer1 = false;
      activePlayer2 = false;
    }
  }
});

// var resetGame = function () {
//   wonMatchesPlayer2 += 1;
//   document.getElementById("player-2-heading").textContent =
//     "Player 2 - Won: " + wonMatchesPlayer2;

//   wonMatchesPlayer1 += 1;
//   document.getElementById("player-1-heading").textContent =
//     "Player 1 - Won: " + wonMatchesPlayer1;

//   player1Health = 100;
//   player2Health = 100;
// };

// if (wonMatchesPlayer1 === 3 || wonMatchesPlayer2 === 3) {
//   if (wonMatchesPlayer1 === 3) {
//     document.getElementById("player-1-heading").textContent =
//       "Player 1 Wins the tournament!";
//   }
//   if (wonMatchesPlayer2 === 3) {
//     document.getElementById("player-2-heading").textContent =
//       "Player 2 Wins the tournament!";
//   }
// }

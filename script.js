// Player objects

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.move = function (x, y) {
    console.clear();
    Gameboard[x][y] = marker;
    console.log(Gameboard);
  };
}

const playerOne = new Player("steve", "X");
const playerTwo = new Player("tony", "O");

//Gameboard object
const Gameboard = (function () {
  return [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
  ];
})();

console.table(Gameboard);

//Game object

const playGame = (function () {
  let g = Gameboard;
  const _7 = g[0][0];
  const _8 = g[0][1];
  const _9 = g[0][2];
  const _6 = g[1][0];
  const _5 = g[1][1];
  const _4 = g[1][2];
  const _3 = g[2][0];
  const _2 = g[2][1];
  const _1 = g[2][2];
  const hasWon = function () {
    let m = currentPlayer.marker;
    if (
      (_9 === m && _8 === m && _7 === m) ||
      (_6 === m && _5 === m && _4 === m) ||
      (_3 === m && _2 === m && _1 === m) ||
      (_9 === m && _6 === m && _3 === m) ||
      (_8 === m && _5 === m && _2 === m) ||
      (_7 === m && _4 === m && _1 === m) ||
      (_9 === m && _5 === m && _1 === m) ||
      (_7 === m && _5 === m && _3 === m)
    ) {
      alert(`${currentPlayer.name} has won!`);
      return true;
    } else {
      return false;
    }
  };

  const isDraw = function () {
    let m = currentPlayer.marker;
    if (
      (_2 === m && _4 === m && _6 === m && _7 === m && _9 === m) ||
      (_1 === m && _2 === m && _6 === m && _7 === m && _8 === m) ||
      (_1 === m && _3 === m && _4 === m && _6 === m && _8 === m) ||
      (_2 === m && _3 === m && _4 === m && _8 === m && _9 === m) ||
      (_1 === m && _3 === m && _6 === m && _7 === m && _8 === m) ||
      (_1 === m && _3 === m && _4 === m && _8 === m && _9 === m) ||
      (_2 === m && _3 === m && _4 === m && _7 === m && _9 === m) ||
      (_1 === m && _2 === m && _6 === m && _7 === m && _9 === m) ||
      (_1 === m && _3 === m && _4 === m && _5 === m && _8 === m) ||
      (_2 === m && _3 === m && _4 === m && _5 === m && _9 === m) ||
      (_2 === m && _4 === m && _5 === m && _7 === m && _9 === m) ||
      (_1 === m && _5 === m && _6 === m && _7 === m && _8 === m) ||
      (_2 === m && _4 === m && _5 === m && _7 === m && _9 === m) ||
      (_1 === m && _2 === m && _5 === m && _6 === m && _8 === m) ||
      (_1 === m && _3 === m && _5 === m && _6 === m && _8 === m) ||
      (_3 === m && _4 === m && _5 === m && _8 === m && _9 === m)
    ) {
      alert(`It's a draw!`);
      return true;
    } else {
      return false;
    }
  };
  let currentPlayer = playerOne;

  window.addEventListener("click", function () {
    currentPlayer.move(
      prompt(`${currentPlayer.name}, please select x`),
      prompt(`${currentPlayer.name}, please select y`),
    );
    console.log(Gameboard);
    if (hasWon()) {
      alert(hasWon());
    }
    if (isDraw()) {
      alert(isDraw());
    } else {
      if (currentPlayer == playerOne) {
        currentPlayer = playerTwo;
      } else {
        currentPlayer = playerOne;
      }
    }
  });
})();

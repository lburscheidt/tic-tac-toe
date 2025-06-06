//Global code
let board = document.querySelector(".board");

//Gameboard object
let Gameboard = (function () {
  let gameboard = [1,2,3,4,5,6,7,8,9];
  return gameboard;
})();

function screenBoard() {
  board.innerHTML = "";
  Gameboard.map((element) => {
    let square = document.createElement("div");
    square.textContent = element;
    square.id = element;
    board.appendChild(square);
  });
}

window.addEventListener("load", function () {
  console.table(Gameboard);
  screenBoard();
});

// Player objects
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.move = function (position) {
    console.clear();
    if (Gameboard[position - 1] !== "X" && Gameboard[position - 1] !== "O") {
      Gameboard[position - 1] = marker;
    }
    console.log(Gameboard);
    screenBoard();
  };
}

let startBtn = document.querySelector("#start");
startBtn.addEventListener("click", function () {
  Gameboard = [1,2,3,4,5,6,7,8,9];
  console.table(Gameboard);
  screenBoard();
});

const playGame = (function () {
  let playerOneBtn = document.querySelector("#player-one-btn");
  let playerTwoBtn = document.querySelector("#player-two-btn");

  playerOneBtn.addEventListener("click", function () {
    let input = document.querySelector("#player-one").value;
    localStorage.setItem("player-one", input);
    document.querySelector("#player-one").value = "";
    document.querySelector("#player-one-name").textContent = input;

  });

  playerTwoBtn.addEventListener("click", function () {
    let input = document.querySelector("#player-two").value;
    localStorage.setItem("player-two", input);
    document.querySelector("#player-two").value = "";
    document.querySelector("#player-two-name").textContent = input;

  });

  let playerOneName = localStorage.getItem("player-one");
  let playerTwoName = localStorage.getItem("player-two");


  const playerOne = new Player(playerOneName, "X");
  const playerTwo = new Player(playerTwoName, "O");


  const hasWon = function () {
    let g = Gameboard;
    let m = currentPlayer.marker;
    let _1 = g[0];
    let _2 = g[1];
    let _3 = g[2];
    let _4 = g[3];
    let _5 = g[4];
    let _6 = g[5];
    let _7 = g[6];
    let _8 = g[7];
    let _9 = g[8];

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
      return true;
    } else {
      return false;
    }
  };

  const isDraw = function () {
    let g = Gameboard;
    let m = currentPlayer.marker;
    let _1 = g[0];
    let _2 = g[1];
    let _3 = g[2];
    let _4 = g[3];
    let _5 = g[4];
    let _6 = g[5];
    let _7 = g[6];
    let _8 = g[7];
    let _9 = g[8];

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
      return true;
    } else {
      return false;
    }
  };
  function winAlert() {
console.log(`${currentPlayer.name}`);
    alert(`${currentPlayer.name} has won!`);
  }

  function drawAlert() {
    alert(`It's a draw.`);
  }

  let currentPlayer = playerOne;
  board.addEventListener("click", (e) => {
    currentPlayer.move(e.target.id);

    if (hasWon()) {
      setTimeout(winAlert, 200);
    } else if (isDraw()) {
      setTimeout(drawAlert, 500);
    } else {
      if (currentPlayer == playerOne) {
        currentPlayer = playerTwo;
      } else {
        currentPlayer = playerOne;
      }
    }
  });
})();

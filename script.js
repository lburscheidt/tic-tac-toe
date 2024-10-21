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
console.log(Gameboard);

//Game object

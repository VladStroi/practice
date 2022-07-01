const game = document.querySelector(".game");
const allResult = document.getElementsByClassName("place");

const winX = document.querySelector(".winX");
const winO = document.querySelector(".winO");
const draw = document.querySelector(".draw");
const message = document.querySelector(".message");
const restart = document.querySelector(".restart");

let paused = false;
let step = 0;

const winCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let value = "X";

game.addEventListener(
  "click",
  (gameProgress = (e) => {
    if (!paused) {
      if (e.target.innerHTML == "") {
        if (value == "X") {
          e.target.innerHTML = "X";
          value = "O";
        } else if (value == "O") {
          e.target.innerHTML = "O";
          value = "X";
        }
        step++;
      }
    }
    message.innerHTML = `goes ${value}`;
    checkWinner();
  })
);

const checkWinner = () => {
  if (!paused) {
    for (let i = 0; i < winCombo.length; i++) {
      if (
        allResult[winCombo[i][0]].innerHTML == "X" &&
        allResult[winCombo[i][1]].innerHTML == "X" &&
        allResult[winCombo[i][2]].innerHTML == "X"
      ) {
        winX.innerHTML = Number(winX.innerHTML) + 1;
        message.innerHTML = "win X";
        paused = true;
      } else if (
        allResult[winCombo[i][0]].innerHTML == "O" &&
        allResult[winCombo[i][1]].innerHTML == "O" &&
        allResult[winCombo[i][2]].innerHTML == "O"
      ) {
        winO.innerHTML = Number(winO.innerHTML) + 1;
        message.innerHTML = "win O";
        paused = true;
      }
    }
    // TODO  i need scrip for draw!
  }
};

restart.addEventListener(
  "click",
  (restartGame = () => {
    for (let i = 0; i < allResult.length; i++) {
      allResult[i].innerHTML = "";
    }
    paused = false;
  })
);

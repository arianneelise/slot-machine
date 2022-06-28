import { PlayGame } from "./PlayGame.js";

let player;
let game;

const show = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class Player {
  constructor(amt, name) {
    self.amt = amt;
    self.name = name;
  }

  displayPlayer() {
    document.getElementById("h2").innerHTML = `Welcome ${self.name}`;
    document.getElementById("money").innerHTML = ` $${self.amt}`;
  }

  startGame() {
    game = new PlayGame(self.amt);
  }

  stopGame() {
    document.getElementById("h2").innerHTML = `Goodbye sucka`;
    document.getElementById(
      "money"
    ).innerHTML = `You now have $${self.amt}, ${self.name}`;
  }

  updateAmt(update) {
    self.amt += update;
    this.displayPlayer();
  }
}

const getNameAmt = () => {
  const nameInput = prompt("What is your name?");
  let amtInput = prompt(
    `How much $ do you want to put in the pot, ${nameInput}?`
  );
  let flag = false;
  while (!flag) {
    if (parseInt(amtInput)) {
      amtInput = parseInt(amtInput);
      flag = true;
    } else {
      amtInput = prompt(`Sorry, ${nameInput}, you need to enter an integer.`);
    }
  }
  player = new Player(amtInput, nameInput);
  player.displayPlayer();
};

getNameAmt();

async function start() {
  player.startGame();
  game.spinMatch();
  document.getElementById("slot-2").style.background = "yellow";
  await show(500);
  game.spinSymbols();
  const win = game.checkWin();
  await game.updateAmt(win).then((res) => player.updateAmt(res));
}

function stop() {
  player.stopGame();
}

const startButton = document.getElementById("start");
startButton.addEventListener("click", start);

const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", stop);

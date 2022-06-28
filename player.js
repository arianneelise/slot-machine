export class Player {
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

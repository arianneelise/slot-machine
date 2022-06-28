const arr = ["$", "*", "!", "#"];

const show = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export class PlayGame {
  constructor(amt) {
    self.amt = amt;
    self.spinResult = null;
    self.spinToMatch = null;
    self.didWin = false;
    self.giveChance = [0, 1, 2, 3, 4];
  }

  async spinSymbols() {
    let result = "";
    let number = "";
    const chance =
      self.giveChance[Math.floor(Math.random() * self.giveChance.length)];
    if (chance != 1) {
      for (let i = 0; i < 15; i++) {
        await show(100);
        for (let n = 1; n < 7; n++) {
          document.getElementById(`window-${n}`).innerHTML =
            arr[Math.floor(Math.random() * arr.length)];
        }
        if (i === 14) {
          for (let n = 1; n < 7; n++) {
            number = Math.floor(Math.random() * arr.length);
            document.getElementById(`window-${n}`).innerHTML = arr[number];
            result += arr[number];
          }
        }
      }
      self.spinResult = result;
    } else {
      for (let i = 0; i < 15; i++) {
        await show(100);
        self.spinResult = self.spinToMatch + self.spinToMatch;
        for (let n = 1; n < 7; n++) {
          document.getElementById(`window-${n}`).innerHTML =
            arr[Math.floor(Math.random() * arr.length)];
        }
        if (i === 14) {
          for (let n = 1; n < 7; n++) {
            document.getElementById(`window-${n}`).innerHTML =
              self.spinResult[n - 1];
          }
        }
      }
    }
  }

  async spinMatch() {
    let match = "";
    let number = "";
    for (let m = 0; m < 5; m++) {
      await show(100);
      for (let t = 1; t < 4; t++) {
        document.getElementById(`match-${t}`).innerHTML =
          arr[Math.floor(Math.random() * arr.length)];
      }
      if (m === 4) {
        for (let n = 1; n < 4; n++) {
          number = Math.floor(Math.random() * arr.length);
          document.getElementById(`match-${n}`).innerHTML = arr[number];
          match += arr[number];
        }
      }
    }
    self.spinToMatch = match;
  }

  async updateAmt(win) {
    await show(2000);
    // const chance =
    //   self.giveChance[Math.floor(Math.random() * self.giveChance.length)];
    await win.then((res) => (self.didWin = res));
    // if (chance === 1 && !self.didWin) {
    //   self.didWin = true;
    // }
    if (self.didWin) {
      return 15;
    } else {
      return -5;
    }
  }

  async checkWin() {
    await show(2000);
    if (
      self.spinResult.slice(3) == self.spinToMatch ||
      self.spinResult.slice(0, 3) == self.spinToMatch
    ) {
      console.log("win");
      return true;
    } else {
      console.log("fail");
      return false;
    }
  }
}

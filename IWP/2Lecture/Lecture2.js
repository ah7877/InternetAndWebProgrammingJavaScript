let diceRoll = [1, 6, 6, 2, 3, 4, 6];

function get6s_v1(arrayOfSixSidedDiceRolls) {
  for (let i = 0; i < arrayOfSixSidedDiceRolls.length; i++) {
    if (arrayOfSixSidedDiceRolls[i] == 6) {
      console.log(i + ":" + arrayOfSixSidedDiceRolls[i]);
    }
  }
}

get6s_v1(diceRoll);
console.log();

function get6s_v2(arrayOfSixSidedDiceRolls) {
  for (let i = 0; i < arrayOfSixSidedDiceRolls.length; i++) {
    if (is6(arrayOfSixSidedDiceRolls[i])) {
      console.log(i + ":" + arrayOfSixSidedDiceRolls[i]);
    }
  }
}

function is6(v) {
  return v == 6;
}

get6s_v2(diceRoll);
console.log();

function get6s_v3(arrayOfSixSidedDiceRolls, compareFunc) {
  for (let i = 0; i < arrayOfSixSidedDiceRolls.length; i++) {
    if (compareFunc(arrayOfSixSidedDiceRolls[i])) {
      console.log(i + ":" + arrayOfSixSidedDiceRolls[i]);
    }
  }
}

get6s_v3(diceRoll, is6);
console.log();

function findDices_v1(arrayOfSixSidedDiceRolls, compareFunc) {
  for (let i = 0; i < arrayOfSixSidedDiceRolls.length; i++) {
    if (compareFunc(arrayOfSixSidedDiceRolls[i])) {
      console.log(i + ":" + arrayOfSixSidedDiceRolls[i]);
    }
  }
}

findDices_v1(diceRoll, (v) => v == 1);
console.log();

console.log(
  diceRoll.filter((dice) => dice == 6).reduce((sum, dice) => sum + dice, 0)
); //filter6 sum 6+6+6=18 reduce nerest .0 which gives 18

let msgBoard_v1 = {
  name: "IWPChat",
  msgHistory: [],
  putMessage(v) {
    this.msgHistory.push(v);
  },
  printMessages() {
    console.log("Messages History in board IWP Chat:");
    for (let i = 0; i < this.msgHistory.length; i++) {
      console.log(this.msgHistory[i]);
    }
  },
};

msgBoard_v1.putMessage("Hej, dette er en test");
msgBoard_v1.putMessage("Hej IWP");
msgBoard_v1.printMessages();
console.log();

function MsgBoard(name) {
  this.name = name;
  this.msgHistory = [];
  this.callBacks = [];
  this.putMessage = (message) => this.msgHistory.push(message);
  this.printMessages = function () {
    console.log('Messages History in board "' + this.name + '":');
    for (let i = 0; i < this.msgHistory.length; i++) {
      console.log(this.msgHistory[i]);
    }
  };
  this.register = (func) => this.callBacks.push(func);
  this.sendAndNotify = function (message) {
    this.msgHistory.push(message);
    this.callBacks.forEach((element) => {
      element(this.name, message);
    });
  };
}

let msgBoard = new MsgBoard("IWP Chat Rum");

function briansHandler(boardName, message) {
  console.log(`Brian! A message from ${boardName}: ${message}`);
}

msgBoard.register(briansHandler);

msgBoard.register((board, message) =>
  console.log(`Board ${board} says to Michele: ${message}`)
);

msgBoard.sendAndNotify("URGENT: Opgaveregning nu!");
console.log();

let board2 = new MsgBoard("Opgave Regning");
board2.putMessage("Hej, dette er en test");
board2.printMessages();
console.log();

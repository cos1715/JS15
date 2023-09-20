// ## Create arr method

const obj = {
  from: 1,
  to: 10,
};

function createArr() {
  const arr = [];

  for (let i = this.from; i < this.to; i++) {
    arr.push(i);
  }

  this.arr = arr;
}

obj.createArr = createArr;
obj.createArr();

const createArrBind = createArr.bind(obj);
createArrBind();

createArr.call(obj);
createArr.apply(obj);

console.log(obj);

// ## Calculator

const calculator = {
  result: 0,
  sum(num) {
    this.result += num;
    return this;
  },
  sub(num) {
    this.result -= num;
    return this;
  },
  mul(num) {
    this.result *= num;
    return this;
  },
  div(num) {
    this.result /= num;
    return this;
  },
};

calculator.sum(2).sum(2).mul(4).div(2);
console.log("🚀 calculator", calculator);

// ## Constructor Function

function Car(model, color, age, speed, gasTank, started) {
  const maxSpeed = 200;
  const maxGas = 20;

  function speedUp(newSpeed) {
    const started = this.started;
    const emptyGas = this.checkGasIsEmpty();

    if (started && !emptyGas) {
      const gasLevel = this.gasTank - 5;
      const speedCalc = this.speed + newSpeed;
      this.speed = speedCalc <= maxSpeed ? speedCalc : maxSpeed;
      this.gasTank = gasLevel < 0 ? 0 : gasLevel;
      gasLevel === 0 && this.stop();
    } else {
      this.stop();
    }

    return this;
  }
  function startEngine() {
    this.started = !this.checkGasIsEmpty();
    return this;
  }

  this.model = model;
  this.color = color;
  this.age = age;
  this.speed = speed;
  this.gasTank = gasTank;
  this.started = started;
  this.startEngine = startEngine;
  this.drive = function drive() {
    const started = this.started;
    const emptyGas = this.checkGasIsEmpty();
    if (started && !emptyGas) {
      this.speed = 30;
    }
    return this;
  };
  this.stop = function stop() {
    this.speed = 0;
    this.started = false;

    return this;
  };
  this.speedUp = speedUp;
  this.slowDown = function slowDown(newSpeed) {
    const started = this.started;
    const emptyGas = this.checkGasIsEmpty();

    if (started && !emptyGas) {
      const gasLevel = this.gasTank - 5;
      const speedCalc = this.speed - newSpeed;
      this.speed = speedCalc <= 0 ? 0 : speedCalc;
      this.gasTank = gasLevel < 0 ? 0 : gasLevel;
      gasLevel === 0 && this.stop();
    } else {
      this.stop();
    }

    return this;
  };
  this.addGas = function addGas(newLevel) {
    const gasLevel = this.gasTank + newLevel;
    this.gasTank = gasLevel > maxGas ? 20 : gasLevel;

    return this;
  };
  this.checkGasIsEmpty = function () {
    return this.gasTank === 0;
  };
}

const car = new Car("BMW", "White", 5, 0, 20, false);
console.log(car);

// ## Poker hand (optional)

const suits = ["D", "C", "H", "S"];
const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

function checkFlush() {
  const suitsCount = {};
  let flush = false;
  for (const card of this.hand) {
    const [, suit] = card.split(" ");
    suitsCount[suit] = (suitsCount[suit] || 0) + 1;
    if (suitsCount[suit] === 5) {
      flush = true;
    }
  }
  return flush;
}

function sortCards(arr) {
  return arr.sort((a, b) => {
    const [valueA] = a.split(" ");
    const [valueB] = b.split(" ");
    return values.indexOf(valueA) - values.indexOf(valueB);
  });
}

function checkSequence() {
  let sequence = true;
  const cards = sortCards(this.hand.slice(0));
  const [currentCardValue] = cards[0].split(" ");
  const index = values.indexOf(currentCardValue);
  for (let i = index, j = 0; i < index + 5; i++, j++) {
    const [cardValue] = cards[j].split(" ");
    if (values.indexOf(cardValue) !== i) {
      sequence = false;
      break;
    }
  }

  return sequence;
}

function Poker(...players) {
  this.players = [];
  this.createPlayers = function () {
    this.players = players.map((player) => ({
      name: player,
      hand: [],
      checkFlush,
      checkSequence,
    }));
    return this;
  };
  this.dealHands = function () {
    const usedCards = [];
    this.players.forEach((player) => {
      const hand = [];
      while (hand.length < 5) {
        const suitIndex = Math.floor(Math.random() * suits.length);
        const valueIndex = Math.floor(Math.random() * values.length);
        const card = `${values[valueIndex]} ${suits[suitIndex]}`;
        if (!usedCards.includes(card)) {
          hand.push(card);
          usedCards.push(card);
        }
      }
      player.hand = hand;
    });
    return this;
  };

  this.createPlayers();
  this.dealHands();
}

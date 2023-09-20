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

const result = calculator.sum(3).sub(1).mul(4).div(2).result;

// ## Constructor Function

function checkIsEmptyGasTask() {
  return this.gasTank === 0;
}

function startEngine() {
  this.started = !this.checkIsEmptyGasTask();

  return this;
}

function drive() {
  const isEmpty = this.checkIsEmptyGasTask();
  const isStarted = this.started;
  if (!isEmpty && isStarted) {
    this.speed = 30;
  }

  return this;
}

function stop() {
  this.started = false;
  this.speed = 0;

  return this;
}

function speedUp(newSpeed) {
  const isEmpty = this.checkIsEmptyGasTask();
  const isStarted = this.started;

  if (!isEmpty && isStarted) {
    const gasVolume = this.gasTank - 5;
    this.speed =
      this.speed + newSpeed > this.maxSpeed ? this.maxSpeed : newSpeed;
    this.gasTank = gasVolume < 0 ? 0 : gasVolume;
  } else {
    this.stop();
  }

  return this;
}

function addGas(gas) {
  const gasVolume = this.gasTank + gas;
  this.gasTank = gasVolume > this.maxGas ? this.maxGas : gasVolume;

  return this;
}

function Car(model, color, age, speed, gasTank, started) {
  this.model = model;
  this.color = color;
  this.age = age;
  this.speed = speed;
  this.maxSpeed = 200;
  this.gasTank = gasTank;
  this.maxGas = 20;
  this.started = started;
  this.checkIsEmptyGasTask = checkIsEmptyGasTask;
  this.startEngine = startEngine;
  this.drive = drive;
  this.stop = stop;
  this.speedUp = speedUp;
  this.slowDown = function (newSpeed) {
    this.speedUp(newSpeed);

    return this;
  };
  this.addGas = addGas;
}

const car = new Car("BMW", "white", 3, 0, 10, false);

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

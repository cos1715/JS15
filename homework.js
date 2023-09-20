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

function startEngine() {
  this.started = !this.checkGasIsEmpty();
  return this;
}

function drive() {
  const started = this.started;
  const emptyGas = this.checkGasIsEmpty();
  if (started && !emptyGas) {
    this.speed = 30;
  }
  return this;
}

function stop() {
  this.speed = 0;
  this.started = false;

  return this;
}

function speedUp(newSpeed) {
  const started = this.started;
  const emptyGas = this.checkGasIsEmpty();

  if (started && !emptyGas) {
    const gasLevel = this.gasTank - 5;
    const speedCalc = this.speed + newSpeed;
    this.speed = speedCalc <= this.maxSpeed ? speedCalc : this.maxSpeed;
    this.gasTank = gasLevel < 0 ? 0 : gasLevel;
    gasLevel === 0 && this.stop();
  } else {
    this.stop();
  }

  return this;
}

function slowDown(newSpeed) {
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
}

function addGas(newLevel) {
  const gasLevel = this.gasTank + newLevel;
  this.gasTank = gasLevel > this.maxGas ? 20 : gasLevel;

  return this;
}

function Car(model, color, age, speed, gasTank, started) {
  this.model = model;
  this.color = color;
  this.age = age;
  this.speed = speed;
  this.gasTank = gasTank;
  this.started = started;
  this.maxGas = 20;
  this.maxSpeed = 200;
  this.startEngine = startEngine;
  this.drive = drive;
  this.stop = stop;
  this.speedUp = speedUp;
  this.slowDown = slowDown;
  this.addGas = addGas;
  this.checkGasIsEmpty = function () {
    return this.gasTank === 0;
  };
}

const car = new Car("BMW", "White", 5, 0, 20, false);
console.log(car);

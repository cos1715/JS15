class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // name = "Taras";
  // age = 25;
  getName() {
    return this.name;
  }
  getArrowName = () => {
    return this.name;
  };
  get printInfo() {
    return this.name + " " + this.age;
  }
  set printInfo(arg) {
    const [name, age] = arg.split(" ");
    this.name = name;
    this.age = age;
  }
}

User.prototype.arrowFunc = () => {
  console.log(this);
  return "arrow";
};

const user = new User("Taras", 25);
const user2 = new User("Anton", 25);
user.getName();

const func = user.getArrowName;
console.log("🚀 func():", func());
user.arrowFunc();

// create class Pet
// add property ownerName, name
// add method getOwnerName
// add method getPetName
// add method setOwnerName that changes owners name
// add method setPetName that changes pets name
// add getter to get both pet and owner names
// add setter to change both pet and owner names

class Pet {
  constructor(ownerName, name) {
    this.ownerName = ownerName;
    this.name = name;
  }

  getOwnerName = () => {
    return this.ownerName;
  };
  setOwnerName = (ownerName) => {
    this.ownerName = ownerName;
  };

  getPetName = () => {
    return this.name;
  };
  setPetName = (name) => {
    this.ownerName = name;
  };

  get pet() {
    return `Owner: ${this.ownerName}, pet: ${this.name}`;
  }
  set pet(arg) {
    const [ownerName, name] = arg.split(" ");
    this.ownerName = ownerName;
    this.name = name;
  }
}

const pet = new Pet("Taras", "Dog");

class Dog {
  static animal = "dog";
  static bark() {
    return "woof woof";
  }
  constructor(name) {
    this.name = name;
  }
  legs = 4;
}

class Shape {
  constructor(color) {
    this.color = color;
    this._quantity = 1;
  }
  #size = 25;
  static figure = "shape";
  getColor() {
    return this.color;
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(arg) {
    this._quantity = arg;
  }
}

class Rectangular extends Shape {
  constructor(sideA, sideB, color) {
    super(color);
    this.sideA = sideA;
    this.sideB = sideB;
  }
  static figure = "rectangular";
  getArea = () => {
    return this.sideA * this.sideB;
  };
  getColor() {
    const color = super.getColor();
    return `Rectangular color is ${color}`;
  }
}

class Square extends Rectangular {
  constructor(side, color) {
    super(side, side, color);
  }
}

class Circle extends Shape {
  static figure = "circle";
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }
  getArea = () => {
    return Math.PI * this.radius ** 2;
  };
}

const square = new Square(3, "blue");

class Car {
  constructor(model, color, age, speed = 0, gas = 10, started = false) {
    this.model = model;
    this.color = color;
    this.age = age;
    this._speed = speed;
    this.gas = gas;
    this.started = started;
  }
  _maxSpeed = 200;
  #maxGas = 20;

  get maxSpeed() {
    return this._maxSpeed;
  }

  set maxSpeed(arg) {
    throw "You cannot change max speed";
  }

  #checkGasIsEmpty = () => {
    return this.gas === 0;
  };

  startEngine = () => {
    this.started = !this.#checkGasIsEmpty();
    return this;
  };

  drive = () => {
    const started = this.started;
    const emptyGas = this.#checkGasIsEmpty();
    if (started && !emptyGas) {
      this._speed = 30;
    }
    return this;
  };

  stop = () => {
    this._speed = 0;
    this.started = false;

    return this;
  };

  get speed() {
    return this._speed;
  }

  set speed(arg) {
    if (arg > this._speed) {
      this._speedUp(arg);
    } else {
      this._slowDown(arg);
    }
  }

  _speedUp = (newSpeed) => {
    const started = this.started;
    const emptyGas = this.#checkGasIsEmpty();

    if (started && !emptyGas) {
      const gasLevel = this.gas - 5;
      const speedCalc = this._speed + newSpeed;
      this._speed = speedCalc <= this._maxSpeed ? speedCalc : this._maxSpeed;
      this.gas = gasLevel < 0 ? 0 : gasLevel;
      gasLevel === 0 && this.stop();
    } else {
      this.stop();
    }

    return this;
  };

  _slowDown = (newSpeed) => {
    const started = this.started;
    const emptyGas = this.#checkGasIsEmpty();

    if (started && !emptyGas) {
      const gasLevel = this.gas - 5;
      const speedCalc = this._speed - newSpeed;
      this._speed = speedCalc <= 0 ? 0 : speedCalc;
      this.gas = gasLevel < 0 ? 0 : gasLevel;
      gasLevel === 0 && this.stop();
    } else {
      this.stop();
    }

    return this;
  };

  addGas = (newLevel) => {
    const gasLevel = this.gas + newLevel;
    this.gas = gasLevel > this.#maxGas ? 20 : gasLevel;

    return this;
  };
}

const car = new Car("BMW", "White", 5, 0, 20, false);
console.log(car);

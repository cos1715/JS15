// ## OOP

class Vehicle {
  constructor(power, gasTank, mass) {
    this.power = power;
    this.gasTank = gasTank;
    this.gasLevel = this.gasTank;
    this.mass = mass;
    this.maxSpeed = this.#calculateMaxSpeed();
    this.gasUsage = this.#calculateGasUsage();
  }
  started = false;
  speed = 0;
  #speedMultiplier = 0.84;

  #calculateMaxSpeed = () => {
    return (this.#speedMultiplier * this.power) / this.mass;
  };
  #calculateGasUsage = () => {
    return Math.round((this.maxSpeed / this.power) * 100);
  };

  calculateUsedGas = (distance) => {
    return (distance * this.gasUsage) / 100;
  };

  getGasUsage = () => {
    return this.gasUsage;
  };

  startEngine = () => {
    this.started = true;
  };

  stopEngine = () => {
    this.started = false;
  };

  drive = (speed, distance) => {
    if (this.started) {
      const usedGas = this.calculateUsedGas(distance);
      const gasDiff = this.gasLevel - usedGas;
      if (speed > this.maxSpeed) {
        this.speed = this.maxSpeed;
      } else if (speed === 0) {
        this.speed = 0;
      } else {
        this.speed = speed;
      }
      this.gasLevel = gasDiff < 0 ? 0 : gasDiff;
    } else {
      console.log("Please start a vehicle");
    }
  };

  addGas = (gas) => {
    const gasSum = this.gasLevel + gas;
    this.gasLevel = gasSum > this.gasTank ? this.gasTank : gasSum;
  };

  printInfo() {
    const info = {
      power: this.power,
      gasTank: this.gasTank,
      gasLevel: this.gasLevel,
      mass: this.mass,
      maxSpeed: this.maxSpeed,
      gasUsage: this.gasUsage,
      started: this.started,
      speed: this.speed,
    };
    console.log(info);
    return info;
  }
}

class Car extends Vehicle {
  constructor(power, gasTank, mass, type = "SEDAN", maxPassengerCount = 4) {
    super(power, gasTank, mass);
    this.type = type;
    this.maxPassengerCount = maxPassengerCount;
  }
  printInfo() {
    const info = super.printInfo();
    info.type = this.type;
    info.maxPassengerCount = this.maxPassengerCount;
    console.log(info);
    return info;
  }
}

class Bus extends Car {
  constructor(power, gasTank, mass, type = "BUS", maxPassengerCount = 20) {
    super(power, gasTank, mass, type, maxPassengerCount);
    this.type = type;
    this.maxPassengerCount = maxPassengerCount;
  }
  passengerCount = 0;

  updatePassengers = (passengers) => {
    const passengersDiff = this.passengerCount + passengers;

    if (passengersDiff > this.maxPassengerCount) {
      this.passengerCount = this.maxPassengerCount;
    } else if (passengersDiff < 0) {
      this.passengerCount = 0;
    } else {
      this.passengerCount = passengersDiff;
    }
  };

  printInfo() {
    const info = super.printInfo();
    info.passengerCount = this.passengerCount;
    console.log(info);
    return info;
  }
}

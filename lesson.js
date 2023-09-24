const person = {
  name: "",
  walks: true,
  eats: true,
  sleeps: false,
  printInfo() {
    return this.name;
  },
};
// const taras = { name: "Taras", age: 25 };

// taras.__proto__ = person;

// Object.setPrototypeOf(taras, person);

const taras = Object.create(person, {
  name: {
    value: "Taras",
    writable: false,
    enumerable: true,
    configurable: true,
  },
  age: { value: 25, enumerable: true },
});

const yaroslav = {
  name: "Yarolslav",
  __proto__: person,
};

console.log(taras);
console.log(yaroslav);

Object.defineProperty(taras, "name", { writable: true });

const obj = Object.create(null);

// ##address

// const country = {
//   country: "Ukraine",
//   getAddress() {
//     let address = "";
//     for (let key in this) {
//       address += `${key} ${this[key]} `;
//     }
//     return address;
//   },
// };
// Object.defineProperty(country, "getAddress", { enumerable: false });

const country = Object.create(Object, {
  country: { value: "Ukraine", enumerable: true },
  getAddress: {
    value() {
      let address = "";
      for (let key in this) {
        address += `${key} ${this[key]} `;
      }
      return address;
    },
  },
});

const city = Object.create(country, {
  city: { value: "Kyiv", enumerable: true },
});

const street = Object.create(city, {
  street: { value: "Shevchenka", enumerable: true },
});

const house = Object.create(street, {
  house: { value: "3", enumerable: true },
});

const flat = Object.create(house, {
  flat: { value: "3", enumerable: true },
});

// ##cityPlan
const cityPlan = {
  houses: [1, 2, 3, 4, 5, 6, 7],
  build(house) {
    // this.houses.push(house);
    this.houses = [...this.houses, house];
  },
};

const kyiv = Object.create(cityPlan);
const dnipro = Object.create(cityPlan);

// Constructor prototype
function Mayor(name) {
  this.name = name;
}

function Uzhorod(name) {
  Mayor.call(this, name);
  this.landMarks = ["Castle"];
}

Uzhorod.prototype = Mayor.prototype;
Uzhorod.prototype.constructor = Uzhorod;

function Odessa(name) {
  Mayor.call(this, name);
  this.landMarks = ["Opera house"];
}

Odessa.prototype = Mayor.prototype;
Odessa.prototype.constructor = Odessa;

Mayor.prototype.selectNewMajor = function (name) {
  this.name = name;
};

const uzhorod = new Uzhorod("Taras");
const odessa = new Odessa("Yana");

// Geometry

function Shape(color) {
  this.color = color;
}

Shape.prototype.getArea = function () {
  return "Call this function in correct child instance";
};

function Square(color, sideA) {
  Shape.call(this, color);
  this.sideA = sideA;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.getArea = function () {
  return this.sideA * this.sideA;
};

function Circle(color, radius) {
  Shape.call(this, color);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

const circle = new Circle("red", 4);
const square = new Square("blue", 5);

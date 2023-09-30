// ## Prototype inheritance

const university = {
  universityName: "Polytechnic",
};

const faculty = Object.create(university, {
  facultyName: {
    value: "Physics and mathematics",
    enumerable: true,
    writable: true,
    configurable: true,
  },
  groups: {
    value: [],
    enumerable: true,
    writable: true,
    configurable: true,
  },
});

function enlistStudent(...val) {
  if (this.groups.length < 12) {
    return this.groups.push(...val);
  }
}

faculty.universityName;
// Polytechnic

enlistStudent.apply(faculty, ["Taras", "Angela", "Serhii"]);

// ## Prototype constructor

function Animal(name) {
  this.name = name;
}
Animal.prototype.getInfo = function () {
  return `name: ${this.name}`;
};

function Mammal(name, live) {
  Animal.call(this, name);
  this.live = live;
}
Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.run = function () {
  return `${this.name} is running`;
};

function Bird(name, live) {
  Animal.call(this, name);
  this.live - live;
}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.fly = function () {
  return `${this.name} is flying`;
};

function Dog(name, live, breed) {
  Mammal.call(this, name, live);
  this.breed = breed;
}

Dog.prototype.whoIsGoodDog = function () {
  return `woof woof`;
};
function Penguin(name, live, species) {
  Bird.call(this, name, live);
  this.species = species;
}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.swim = function () {
  return `${this.name} is swimming`;
};
Penguin.prototype.fly = function () {
  return `penguin can't fly`;
};

# Lecture

## Doc

> [Closures](https://docs.google.com/document/d/12FMohaXqV7iow7UZR5hPgpKqIK4u6MEyE7U4NYLl8mU/edit?usp=sharing)

# JS Homework

Feel free to modify test data or add new data
It will help for better testing

## Prototype inheritance

Create a prototype chain
Inherit from university obj with universityName and dean properties  
Create faculty obj with facultyName and groups arr properties and method enlistStudent into groups  
Group can contain only 12 students

```javascript
const university = {
  // your code
};

const faculty = {
  // your code
};

faculty.universityName;
// Polytechnic

faculty.enlistStudent("Taras");
faculty.groups;
// [['Taras']]
```

## Prototype constructor

Create a basic Animal that has name property and a getInfo() method.  
getInfo method should return info about animal  
Create sub objects, Mammal and Bird, that inherit the properties and methods of the Animal.
They should receive info about where they live  
Mammal should have method run  
Bird should have method fly  
Create Dog from Mammal and add property breed  
Add method whoIsGoodDog, this method should return 'woof woof'  
Create Penguin from Bird and add property species  
Update method fly and print 'can't fly'  
Add method swim

```javascript
function Animal(name) {
  // your code
}

function Mammal(name, live) {
  // your code
}

function Bird(name, live) {
  // your code
}

function Dog(name, live, breed) {
  // your code
}

function Penguin(name, live, species) {
  // your code
}
```

# Lecture

## Doc

> [Prototype](https://docs.google.com/document/d/12FMohaXqV7iow7UZR5hPgpKqIK4u6MEyE7U4NYLl8mU/edit?usp=sharing)

# JS Homework

Feel free to modify test data or add new data
It will help for better testing

## Prototype inheritance

Create class BankAccount  
Add properties balance and accountHolder
Protect filed balance from direct change
Use getters, setters or methods

```javascript
class BankAccount {
  // your code
}
```

## Encapsulation

Create class BankAccount  
Add properties balance and accountHolder
Protect filed balance from direct change
Use getters, setters or methods

```javascript
class BankAccount {
  // your code
}
```

## Inheritance and Polymorphism

Create a basic class Animal that has name property and a getInfo() method.  
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
For each child class update getInfo method  
Use super for updating method

```javascript
class Animal {
  // your code
}
class Mammal {
  // your code
}
class Bird {
  // your code
}
class Dog {
  // your code
}
class Penguin {
  // your code
}
```

## OOP

Create class **Vehicle**  
Initialize class with properties **power**, **gasTank** and **mass** in tones
Calculate max speed by formula **0.84 \* power / mass**  
Create method **getMaxSpeed** that returns **maxSpeed**  
Calculate gas usage per km by formula **Math.round(maxSpeed / power \* 100)**  
Create method **getGasUsage** that returns **gasUsage**
Create method **startEngine** that sets property **started** to true
Create method **stopEngine** that sets property **started** to false
Create method **drive**. This method receives 2 arguments **speed** and **distance** in km  
You cannot **drive** if **started** is false  
You cannot set **speed** more then **maxSpeed** and less then 0  
Update **gas** property corresponding to **gasUsage**
Formula to calculate **gas** level is **distance** \* **gasUsage** / 100  
Create method **addGas** adds **gas** to car by arg  
Argument must be bigger then zero  
You cannot pour more **gas** then **gasTank**  
Create method **printInfo** that prints in console all available information

Create class **Car**  
**Car** should inherit from **Vehicle**  
Initialize **Car** with additional properties **type** and **maxPassengerCount**  
Examples of **type** SEDAN, MINIVAN, SPORTS CAR...  
Update method **printInfo** that prints in console all available information

Create class **Bus**  
**Bus** should inherit from **Car**
Create method **updatePassengers** that receives argument **passengers** and updates **passengerCount** to that number  
**passengerCount** cannot be more then **maxPassengerCount** and less then 0  
Update method **printInfo** that prints in console all available information

```javascript
class Vehicle {
  // your code
}

class Car {
  // your code
}

class Bus {
  // your code
}
```

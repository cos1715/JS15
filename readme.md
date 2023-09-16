# Lecture

## W3Schools

> [This](https://www.w3schools.com/js/js_this.asp)  
> [Constructor Function](https://www.w3schools.com/js/js_object_constructors.asp)

# JS Homework

Feel free to modify test data or add new data
It will help for better testing

## Create arr method

Create obj with property from and to  
Create function createArr that reads obj properties and  
Creates new sorted arr with range from and to  
Assign this arr as obj property

Create 3 solutions
Solution 1 without **bind**, **call** or **apply**  
Solution 2 with **bind**
Solution 3 with **call** or **apply**

```javascript
const obj = {
  from: 1,
  to: 10,
};

const createArr = () => {
  // your code
};

obj.arr;
// [1, 2, 3, 4, 5, 6, 7, 8, 9];
```

## Calculator

Create obj with property result  
Create methods that calculates +, -, \*, /  
Make possible to call one function after another

```javascript
const calculator = {
  result: 0,
  sum: () => {},
  sub: () => {},
  mul: () => {},
  div: () => {},
};

calculator.sum(2).sum(2).mul(4);

// 16
```

## Constructor Function

Create a constructor function that creates car obj  
Obj should have properties **model**, **color**, **age**, **speed**, **gasTank** and **started**
Obj should have methods **startEngine**, **drive**, **stop**, **speedUp**, **slowDown**, **addGas**
This methods should be chainable  
**startEngine** method checks if car has **gas** (you can create another method for checking **gas**)  
If **gas** is not empty set property **started** to true  
**drive** method should do smth only if property **started** is true and **gas** is not 0  
if **started** true increase **speed** to 30  
**stop** method sets property **started** to false and speed to 0  
**speedUp** method increases **speed** by arg. Max speed is 200  
Each **speedUp** method decreases **gas** by 5. Max gas is 20
If **gas** is empty **stop** car  
**gas** cannot be less then 0  
If **started** is false **stop** car  
speedUp(5) adds 5 to speed  
**slowDown** works like speedUp but decreases **speed**. Min speed is 0  
**addGas** method adds **gas** to car by arg  
addGas(5) adds 5 to gas

```javascript
function Car(model, color, age, speed, gasTank, started) {
  // your code
}
```

## Poker hand (optional)

Create a constructor function that receives number of players and their names  
Shuffle a card deck and give to user a set of 5 cards  
D-diamonds (♦), C-clubs (♣), H-hearts (♥) and S-spades (♠)  
1-10 and J-jack, Q-queen, K-king, A-ace
Create a separate function that checks if player has cards with same suit  
Create a separate function that checks if player has cards with a card sequence (1-5) or (10-A)

```javascript
const checkFlush = () => {};
const checkSequence = () => {};

function Poker(players, names) {
  // your code
}
```

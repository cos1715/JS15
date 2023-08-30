# Lecture

[Presentation](https://docs.google.com/presentation/d/1hZmZcOZVNn5RpSANqxS5YkYyWJ-iURfC5Gkeuj9aqkU/edit?usp=sharing)

# JS Homework

Feel free to modify test data or add new data
It will help for better testing

## Quadratic equation

Create a function that solves quadratic equation  
Use discriminant fot finding equation roots  
Return value of function should be obj **{x1, x2}**  
If there are no roots return **{x1:null, x2:null}**

```javascript
const calculate = (a, b, c) => {
  // your code
};

const roots = calculate(1, 5, 6);
// {
//   x1: -2,
//   x2: -3,
// };
```

## Factorial

Create a function that finds a factorial of a number

```javascript
const factorial = (num) => {
  // your code
};

const result = factorial(5);
// 120
```

## Calculator

Create a function that accepts a callback  
and infinite number of arguments  
Callbacks can be: addition, subtraction, multiplication, division

```javascript
const calculate = (callback, arg1, arg2, ...) => {
  // your code
};

const result = calculate(addition, 1, 1, 1, 1);
// 1 + 1 + 1 + 1 = 4
const result = calculate(subtraction, 20, 10, 5);
// 20 - 10 - 5 = 5
const result = calculate(multiplication, 2, 10, 2);
// 2 * 10 * 2 = 40
const result = calculate(division, 20, 10, 2);
// 20 / 10 / 2 = 1
```

## Fibonacci

Create a function that receives a value from user  
and prints list of fibonacci seq  
Seq starts from 1

```javascript
const fib = (n) => {
  // your code
};

const result = calculate(5);
// 1 1 2 3 5
```

## Pyramid

Create a function that receives a value from user  
and prints a pyramid with rows from received value  
Empty space fill with #
Pyramid fill with \*

```javascript
const printPyramid = (n) => {
  // your code
};

printPyramid(5);
// ####*####
// ###***###
// ##*****##
// #*******#
// *********
```

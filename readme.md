# Lecture

## Javascript.info

> [setTimeout setInterval](https://uk.javascript.info/settimeout-setinterval)  
> [Promise](https://uk.javascript.info/promise-basics)  
> [Promise chaining](https://uk.javascript.info/promise-chaining)  
> [Catch](https://uk.javascript.info/promise-error-handling)

# JS Homework

Feel free to modify test data or add new data  
It will help for better testing

## Timeout

Create a function printNumber  
printNumber should print numbers from 1 to 5  
Print each number every second  
Try using setTimeout and setInterval

```javascript
const printNumber = () => {
  // your code
};
// 1
// after 1s delay
// 2
// after 1s delay
// 3
// after 1s delay
// 4
// after 1s delay
// 5
```

## Delayed loop

Loop though from 1 to 5  
Print number with a 1s delay

```javascript
const delayedLoop = () => {
  for (let i = 1; i <= 5; i++) {
    // your code
  }
};
// 1
// after 1s delay
// 2
// after 1s delay
// 3
// after 1s delay
// 4
// after 1s delay
// 5
```

## Random

Create a function randomPromise  
randomPromise should return promise  
randomPromise should resolve promise if random number >= 0.5  
randomPromise should reject promise if random number < 0.5

```javascript
const getUserData = (id) => {
  // your code
};
// code for error
// throw Error("404 not found");
```

## Server

Create a function getUserData  
getUserData receives id as a param  
getUserData should return promise  
Find user by id  
If no users found throw Error  
Add delay for 1 second

```javascript
const users = [
  {
    id: 1,
    name: "Taras",
    age: 30,
    movies: [],
  },
  {
    id: 2,
    name: "Kate",
    age: 45,
    movies: ["Titanic", "Avatar"],
  },
];

const getUserData = (id) => {
  // your code
};
// code for error
// throw Error("404 not found");
```

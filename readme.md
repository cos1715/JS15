# Lecture

## Javascript.info

> [Promise api](https://uk.javascript.info/promise-api)  
> [Promisify](https://uk.javascript.info/promisify)  
> [Async/Await](https://uk.javascript.info/async-await)

# JS Homework

Feel free to modify test data or add new data  
It will help for better testing

## Random Resolve

Create a function randomResolve  
Create a random number from 1 to 5  
Delay promise for random seconds  
If number is even then resolve promise  
If number is odd then reject promise

```javascript
const randomResolve = () => {
  // your code
};
```

## Promise API

Create a function createPromiseArr  
Function receives length of arr  
Reuse randomResolve to get promises  
Use Promise.all  
If revolved then print '🥳 Yasss'  
If rejected then print '🫠🫡 ok'  
(Optional) play with Promise.race

```javascript
const createPromiseArr = (n) => {
  // your code
};
```

## Async/Await

Update prev task and use async/await  
Modify this func printResponse

```javascript
const printResponse = (n) => {
  // your code
};
```

## Casino (optional)

Create a function that resolves a promise  
Promise should be resolved after random seconds  
Return values **{value: 1, color: 'black'}**,  
**{value: 2, color: 'red'}**, **{value: 0, color: 'green'}**  
Odd number is black, even number is red

Create a function casino that receives arr of your stakes  
Stake values can be **red**, **black**, **even**, **odd**, **number(0, 1, 2...)**  
If one of your stakes is fulfilled print '💵'  
If all of your stakes are rejected print '🫣'

\* Feel free to updated stakes type  
Example from string **red** => **{value: 'red', color: true}**

```javascript
const casino = (n) => {
  // your code
};
```

# Lecture

## W3Schools

> [Closures](https://www.w3schools.com/js/js_function_closures.asp)  
> [Recursion](https://www.freecodecamp.org/news/recursion-in-javascript/)  
> [Recursion](https://www.programiz.com/javascript/recursion)

# JS Homework

Feel free to modify test data or add new data  
It will help for better testing

## Decorator

Create a decorator that caches function result  
decorator receives a function as param.  
If result in cache return value from cache  
Test this solution with different types of functions  
Code below is just an example you can modify it for your solution

```javascript
const cachesDecorator = (func) => {
  // your code
};

const obj = {
  num: 1,
  result: null,
  sum(num) {
    return this.num + num;
  },
};

const sum = (num) => {
  return this.num + num;
};

const decoratedSum = cachesDecorator(sum);
decoratedSum(2);
// 3

const decoratedSum = cachesDecorator(obj.sum);
decoratedSum(3);
// 4
```

## Factorial recursion

Count factorial by using recursion

```javascript
const factorial = (initialNumber) => {
  // your code
};

factorial(5);
// 120
```

## Fibonacci recursion

Show Fibonacci sequence by using recursion

```javascript
const fib = (length) => {
  // your code
};

fib(5);
// 1 1 2 3 5
```

## Read List

Print all list titles using recursion  
(optional) think about solution with loops

```javascript
const list = {
  title: "lesson-1",
  next: {
    title: "lesson-2",
    next: {
      title: "lesson-3",
      next: {
        title: "lesson-4",
        next: {
          title: "lesson-5",
          next: null,
        },
      },
    },
  },
};

const readList = (list) => {
  // your code
};

readList(list);
// lesson-1
// lesson-2
// lesson-3
// lesson-4
// lesson-5
```

## Deep Copy (optional)

Copy all elements of data structure

```javascript
const arr = [
  1,
  "string",
  null,
  undefined,
  { a: 15, b: 10, c: [1, 2, 3, { a: 4 }], d: undefined, e: true },
  true,
  false,
];

const deepCopy = (arr) => {
  // your code
};

deepCopy(arr);
// completely copied value
```

## DOM (optional)

Print dom tree in a console or via document.write

```javascript
const table = {
  tagName: "table",
  attrs: {
    border: "1",
  },
  children: [
    {
      tagName: "tr",
      children: [
        {
          tagName: "td",
          children: ["1x1"],
        },
        {
          tagName: "td",
          children: ["1x2"],
        },
      ],
    },
    {
      tagName: "tr",
      children: [
        {
          tagName: "td",
          children: ["2x1"],
        },
        {
          tagName: "td",
          children: ["2x2"],
        },
      ],
    },
  ],
};

const render = (dom) => {
  // your code
};

render(table);
<table border="1">
  <tr>
    <td>1x1</td>
    <td>1x2</td>
  </tr>
  <tr>
    <td>2x1</td>
    <td>2x2</td>
  </tr>
</table>;
```

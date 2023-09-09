# Lecture

## W3Schools

> [Array](https://www.w3schools.com/js/js_arrays.asp)  
> [Array Methods](https://www.w3schools.com/js/js_array_methods.asp)  
> [String Sort](https://www.w3schools.com/js/js_array_sort.asp)  
> [String Loop Methods](https://www.w3schools.com/js/js_array_iteration.asp)

## Doesitmutate

> [Doesitmutate](https://doesitmutate.xyz/)

## Javascript.info

> [Array](https://uk.javascript.info/array)  
> [Array Methods](https://uk.javascript.info/array-methods)

# JS Homework

Feel free to modify test data or add new data
It will help for better testing

## Filter arr

Return arr of numbers with values that are in range from 'from' param and to 'to' param

```javascript
filterRange(arr, from, to);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
filterRange(arr, 3, 7);
// 3,4,5,6,7
```

## Sort arr

Sort arr from least to biggest

```javascript
const arr = [324, 32423, -3242, 544, 0, 23, -454, 22, 4];
sortArr(arr);
// -3242, -454, 0, 4, 22, 23, 324, 544, 32423
```

## Sort arr str

Sort arr of strings from shortest to longest

```javascript
const arr = ["4534", "a", "bb", "sdfds", "", " ", "r4rdv-"];
sortArr(arr);
// '', 'a', ' ', 'bb', '4534', 'sdfds', 'r4rdv-'
```

## Calculate average age of users older then 17 and younger then 55

```javascript
const arr = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Taras", age: 25 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
];

averageAge(arr);
// 31.4
```

## Sort arr by name

Sort arr by name if 2 elements have same name sort by age

```javascript
const arr = [
  { name: "John", age: 25 },
  { name: "John", age: 5 },
  { name: "John", age: 2 },
  { name: "John", age: 45 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Mary", age: 2 },
  { name: "Taras", age: 25 },
  { name: "Taras", age: 19 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Alan", age: 32 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
  { name: "Elizabeth", age: 8 },
];

sortUsers(arr);
// [
//   { name: "Alan", age: 5 },
//   { name: "Alan", age: 32 },
//   { name: "Boris", age: 55 },
//   { name: "Chris", age: 14 },
//   { name: "Elizabeth", age: 8 },
//   { name: "Elizabeth", age: 48 },
//   { name: "John", age: 2 },
//   { name: "John", age: 5 },
//   { name: "John", age: 25 },
//   { name: "John", age: 45 },
//   { name: "Kate", age: 74 },
//   { name: "Mary", age: 2 },
//   { name: "Mary", age: 29 },
//   { name: "Pete", age: 30 },
//   { name: "Taras", age: 19 },
//   { name: "Taras", age: 25 },
// ];
```

## Find min and max

Find min and max and return obj {min, max}  
Use reduce method

```javascript
const arr = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Taras", age: 25 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
];

minMaxAge(arr);
// {min:5, max:74}
```

## Save only unique values

Save unique values from arr to uniqueArr

```javascript
const strings = [
  "HELLO",
  "World",
  "JS",
  "Js",
  "HI",
  "Hello",
  "HTML",
  "CSS",
  "js",
];

unique(strings);
// HELLO, World, JS, HI, HTML, CSS
```

## Find the Longest Consecutive Sequence

Write a function called findLongestConsecutive that takes an array of numbers  
and finds the longest consecutive subarray of consecutive integers in the given array.  
For example, for the array [1, 2, 3, 4, 5, 2, 3, 4, 5], the function should return [1, 2, 3, 4, 5].  
Sequence should start from 1

```javascript
function findLongestConsecutive(arr) {
  // Your code here
}

const numbers = [1, 2, 3, 4, 5, 2, 3, 4, 5];
const longestConsecutive = findLongestConsecutive(numbers);
// [1, 2, 3, 4, 5]
```

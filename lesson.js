const arr = [1, 2, 3, 4];

// arr.length; // 4

arr.push(5); // [1, 2, 3, 4, 5]
// arr.push(6, 7, 8, 9);

arr.pop();

console.log(arr);

arr.unshift(-1, 0);

console.log(arr);

arr.shift();

console.log(arr);

const subArray = [5, 6, 7, 8, 9];

// arr.push(...subArray);

// const concat = arr.concat(subArray);

const concatArr = [...arr, ...subArray];

console.log(concatArr);

const slicedArr = concatArr.slice(4, 6);

console.log(slicedArr);

// concatArr.splice(4);
concatArr.splice(4, 2);
// concatArr.splice();

const updatedArr = [];
const forEachCallback = (value, index, arr) => {
  console.log(value, index, arr);
  updatedArr[index] = value * 2;
};

concatArr.forEach(forEachCallback);
concatArr.forEach((value) => {
  console.log(value);
});

const mappedArr = concatArr.map((value) => value + 2);

console.log("concatArr==>>", concatArr);
console.log("mappedArr==>>", mappedArr);

const filteredArr = concatArr.filter((value) => value > 5);

console.log("filteredArr==>>", filteredArr);

const foundElem = concatArr.find((elem) => elem === 7);

console.log("foundElem==>>", foundElem);

const users = [{ name: "Taras" }, { name: "Julia" }];

const user = users.find((elem) => elem.name === "Taras");

console.log(user);

const index = concatArr.findIndex((elem) => elem === 7);

console.log(index);

const everyElem = concatArr.every((value) => value >= 0);

console.log(everyElem);

const someElem = concatArr.some((value) => value < 0);

console.log(someElem);

const reduced = concatArr.reduce((acc, value, index, arr) => {
  if (value > 5 && index % 2 === 0) {
    acc.push(value * 2);
  }
  return acc;
}, []);

const reducedRight = concatArr.reduceRight((acc, value, index, arr) => {
  if (value > 5 && index % 2 === 0) {
    acc.push(value * 2);
  }
  return acc;
}, []);

console.log("reduced==>>", reduced);
console.log("reducedRight==>>", reducedRight);

const strArr = ["Andrii", "Taras", "Julia", "Anna", "Serhii"];
const numberArr = [0, 9, 4, 6, -1, 15, 20, 45];

numberArr.sort((a, b) => {
  // return a - b;// >0 a,b
  // return a - b; // <0 b,a
  return a - b; // ===0 a,b || b,a
});
console.log("numberArr sorted==>", numberArr);

const sorted = strArr.sort((a, b) => a.length - b.length);
console.log("sorted==>>", sorted);

let sum = 0;
const sumArr = [1, 2, 3, 4, 5, 6, 7, 9];

sumArr.forEach((item) => (sum += item));

console.log("🚀 ~ file: lesson.js:111 ~ sum:", sum);
console.log("🚀 ~ file: lesson.js:111 ~ sum:", sum / sumArr.length);

const randomNumbers = [
  1, 4534, 3243244, 6654, 68574, 234, 987, 2342356673, 234234, 4665,
];

const biggestNumber = randomNumbers.reduce((acc, item) => {
  return acc < item ? item : acc;
}, -Infinity);

console.log(
  "🚀 ~ file: lesson.js:125 ~ biggestNumber ~ biggestNumber:",
  biggestNumber
);

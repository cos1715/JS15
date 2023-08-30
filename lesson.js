const obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
  console.log("key", key, "value", obj[key]);
}
const arr = [1, 2, 3];

for (let key in arr) {
  console.log("key", key, "value", arr[key]);
}

for (let value of arr) {
  console.log(value);
}

// don't work with objects
// for (let value of obj) {
//   console.log(value);
// }

const objKeys = Object.keys(obj);
console.log("🚀 ~ file: main.js:17 ~ objKeys:", objKeys);
// ["a", "b", "c"];
const objValues = Object.values(obj);
console.log("🚀 ~ file: main.js:19 ~ objValues:", objValues);
// [1, 2, 3];
const objEntries = Object.entries(obj);
console.log("🚀 ~ file: main.js:21 ~ objEntries:", objEntries);
// [
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
// ];
myFunc();

function myFunc() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

const myFuncExpression = function () {
  for (let i = 0; i < 10; i++) {
    console.log("myFuncExpression");
  }
};
myFuncExpression();

const str = "outside 1 key";
const arrowFunc = (value1, value2, value3) => {
  const str = "key";
  value3.d = 4;
  for (let key of objKeys) {
    console.log(str, key);
  }
};

arrowFunc(1, str, obj);
console.log(obj);

const arrowWith1Arg = value => {
  console.log(value);
};

arrowWith1Arg(12)

const multiply = (number, multiplier = 2) => {

  // if (number > 10) {
  //   return (number - 2) * multiplier
  // }
  return (number * multiplier);


  console.log("🚀 ~ file: main.js:72 ~ multiply ~ 'fgdfgdfg':", 'fgdfgdfg')
}

const result = multiply(4, 4)
console.log("🚀 ~ file: main.js:73 ~ result:", result)
console.log(multiply(3, 4));

const divider = (number, divided) => number / divided
console.log("🚀 ~ file: main.js:83 ~ divider:", divider(15, 3))

const complexFunc = age => age > 18 ?
  true :
  false;


console.log("🚀 ~ file: main.js:86 ~ complexFunc:", complexFunc(19))

const foo = (callback) => {
  const num = callback();
  return num * 2
}

const bazz = () => 2

console.log(foo(bazz));

const multiplierExtended = (...rest) => {
  let result = 1;
  for (let value of rest) {
    result *= value
  }

  return result
}

const mul = multiplierExtended(1, 2, 3, 4, 5, 6, 7, 8, 9)
console.log("🚀 ~ file: main.js:111 ~ mul:", mul)

const divide = (a, b) => a / b

const calc = (a, b, callback) => callback(a, b);

calc(4, 2, divide);



// const obj = { a: 1, b: 2, c: 3 };


const settings = { username: 'Taras' }

settings.username;
const { username } = settings;

const a = obj.a;
// const aa = obj.a
const { a: aa = 1, b, c, d, e = 5 } = obj;

const arrDesc = [1, 2]
// const objEntries = Object.entries(obj);

for (let entry of objEntries) {
  const [key, value] = entry;
}

const descFunc = ([el1, el2, ...rest]) => {
  debugger

}

descFunc(arr)
function declaration() {}
const expression = function () {};
const arrow = () => {};

const a = 1;
const foo = () => {
  // const a = 5;
  console.log(a);
};

const firstName = "Taras";
const age = 25;

function printInfo() {
  function bazz() {
    return firstName + " " + age;
  }
  console.log("info", bazz());
}

printInfo();

// ^
// |
function bar() {
  const b = 1;
  return a + b;
}

const aaa = bar;

function counter() {
  let count = 0;
  return function () {
    return count++;
  };
}

const counterInst = counter();

counterInst();
counterInst();
counterInst();
counterInst();
console.log("counterInst", counterInst());

const counterInst2 = counter();

counterInst2();
console.log("counterInst2", counterInst2());

const closure = (initial = 0) => {
  let count = initial;
  return (n = 1) => {
    count += n;
    return count;
  };
};

const improvedCounter = closure(10);
improvedCounter(5);
improvedCounter(5);
console.log(improvedCounter(5));

// const sum = (a) => {
//   return (b) => {
//     return a + b;
//   };
// };
const sum = (a) => (b) => a + b;

console.log(sum(1)(2)); // 3

const closeObj = {
  a: 5,
  foo() {
    return 1 + this.a;
  },
};

function thisClosure(func) {
  const a = 505;
  return function () {
    const result = func.call(this);
    return result;
  };
}

const thisBoo = thisClosure(closeObj.foo);
console.log("🚀 ~ file: lesson.js:91 ~ thisBoo():", thisBoo.call(closeObj));

const recursion = (from, to) => {
  if (from === to) {
    console.log("to", to);
    return to;
  } else {
    recursion(from, to - 1);
    console.log("to", to);
    return to;
  }
};

const sumRecursion = (from, to) => {
  if (from === to) {
    return from;
  } else {
    const result = sumRecursion(from, to - 1);
    return result + to;
  }
};

const cacheDecorator = () => {
  const cache = {};

  return function sumRecursion(from, to) {
    if (cache[`${from}-${to}`]) {
      console.log("🚀 ~ file: lesson.js:122 ~ sumRecursion ~ cache:", cache);
      return cache[`${from}-${to}`];
    }
    if (from === to) {
      cache[`${from}-${to}`] = from;
      return from;
    } else {
      const result = sumRecursion(from, to - 1);
      const sum = result + to;
      cache[`${from}-${to}`] = sum;
      return result + to;
    }
  };
};

const sumRecursionCached = cacheDecorator();
console.log(sumRecursionCached(1, 5000));
console.log(sumRecursionCached(1, 11000));

// for(let i=from;i<to;i++;)

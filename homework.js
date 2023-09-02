// ## Quadratic equation

const calculate = ({ a = 1, b = 1, c = 1 } = {}) => {
  const result = { x1: null, x2: null };
  if (a) {
    const d = b * b - 4 * a * c;

    if (d > 0) {
      result.x1 = (-b + Math.sqrt(d)) / (2 * a);
      result.x2 = (-b - Math.sqrt(d)) / (2 * a);
    } else {
      const roots = -b / (2 * a);
      result.x1 = roots;
      result.x2 = roots;
    }
  }
  return result;
};

calculate({ b: 5, c: 6 });

// ## Factorial

const num = +prompt();
const factorial = (num) => {
  let result = null;
  if (num >= 0) {
    result = num;
    for (let i = 1; i < num; i++) {
      result *= i;
    }
  }

  return result;
};

factorial(num);

// ## Calculator

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;
const calculator = (callback, ...rest) => {
  let result = rest[0];
  for (let i = 1; i < rest.length; i++) {
    result = callback(result, rest[i]);
  }

  return result;
};

calculator(addition, 1, 1, 1, 1);
calculator(subtraction, 20, 10, 5);
calculator(multiplication, 2, 10, 2);
calculator(division, 20, 10, 2);

// ## Fibonacci

const fibNum = +prompt();
const fib = (n) => {
  let firstNum = 0;
  let secondNum = 1;
  let nextNum = firstNum + secondNum;

  if (n > 0) {
    let fibSeq = ``;
    for (let i = 1; i <= n; i++) {
      nextNum = firstNum + secondNum;
      firstNum = secondNum;
      secondNum = nextNum;
      fibSeq = `${fibSeq} ${firstNum}`;
    }
    console.log(fibSeq);
  } else {
    console.log("Enter number bigger than 0");
  }
};

fib(fibNum);

// ## Pyramid

const rows = +prompt("Enter number of rows");
const printPyramid = (rows) => {
  let starLength = 1;
  let cageLength = rows - starLength;
  for (let i = 0; i < rows; i++) {
    let cages = "";
    let stars = "";

    for (let j = 0; j < starLength; j++) {
      stars = `${stars}*`;
    }
    for (let j = 0; j < cageLength; j++) {
      cages = `${cages}#`;
    }
    console.log(`${cages}${stars}${cages}`);
    cageLength--;
    starLength += 2;
  }
};

printPyramid(rows);

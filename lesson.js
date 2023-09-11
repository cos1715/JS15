const num = 12;

num.toFixed(2); // 12.00
(12.123).toFixed(2); // 12.12

console.log(0.1 + 0.2); // 0.3000004

Number.MAX_VALUE; // max value
Number.MIN_VALUE; // min value
Number.MAX_SAFE_INTEGER; // max value for safe calc
Number.MIN_SAFE_INTEGER; // min value for safe calc

console.log(Number.MAX_SAFE_INTEGER + 1000); // result is unpredictable

Number.isFinite(12); // true
Number.isFinite(Infinity); // false
Number.isInteger(12); // true
Number.isInteger("abc"); // false
Number.isSafeInteger(12); // true
isNaN(NaN); // true

parseInt("12"); // 12
parseInt("12.34"); // 12
parseInt("12asd"); // 12
parseInt("a12asd"); // NaN
parseFloat("12.34"); // 12.34

Math.ceil(12.1); // 12
Math.floor(12.9); // 12
Math.floor(-11.9); // -12
Math.round(12.4); // 12
Math.round(12.5); // 13
Math.trunc(12.5); // 12

Math.pow(2, 3); // 8 === 2**3
Math.sqrt(4); // 2

Math.max(1, 2, 7, 3); // 7
Math.min(9, 6, 3, 7); // 3

const randomize = (from, to) => {
  const random = Math.random();
  const range = random * (to - from + 1);
  const trunc = Math.trunc(range);
  const validRange = trunc + from;

  return validRange;
};

for (let i = 0; i < 100; i++) {
  console.log(randomize(5, 55));
}

// 21 % 10 === 1;
// Math.floor(21 / 10) === 2;

for (let i = 111; i <= 1000; i++) {
  const lastNumber = i % 10;
  let currentNumber = Math.floor(i / 10);
  let sameNumbers = true;

  while (currentNumber > 0) {
    const number = currentNumber % 10;
    if (number !== lastNumber) {
      sameNumbers = false;
      break;
    }
    currentNumber = Math.floor(currentNumber / 10);
  }
  if (sameNumbers) {
    console.log(i);
  }
}

// VERSION_1
for (let i1 = 1; i1 < 1000; i1++) {
  let result;
  if (i1 < 10) {
    result = i1 * 11;
  } else if (i1 >= 10 && i < 19) {
    result = (i1 - 9) * 111;
  } else {
    break;
  }
  document.write(result + " ");
}

// VERSION_2
let n2 = 1000;
let i2 = 1;
while (i2 < n2 / 10) {
  if (i2 < 10) {
    document.write(i2 * 11 + " ");
  } else if (i2 > 10 && i2 < 20) {
  }
}

// VERSION_3
let n3 = 1000;
let i3 = 1;
do {
  if (i3 < 10) {
    document.write(i3 * 11 + " ");
  } else if (i3 > 10 && i3 < 20) {
    document.write((i3 - 10) * 111 + " ");
  }
  i3++;
} while (i3 < n3 / 10);

let lastNum, secondNum, firstNum, interval;

for (let j = 0; j < 1000; j++) {
  lastNum = j % 10;
  interval = (j - lastNum) / 10;
  secondNum = interval % 10;
  interval = (interval - secondNum) / 10;
  firstNum = interval % 10;

  if (lastNum == secondNum && secondNum == firstNum) {
    console.log(j);
  } else if (firstNum == 0 && lastNum == secondNum) {
    console.log(j);
  }
}

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

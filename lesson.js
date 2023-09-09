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

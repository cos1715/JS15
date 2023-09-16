// ## Write a function to calculate date diff

const calcDateDiff = (startDate, endDate) => {
  let str = "";
  const start = new Date(startDate);
  const end = new Date(endDate);

  const msDiff = end - start;
  const secondsDiff = msDiff / 1000;
  const minutesDiff = Math.trunc(secondsDiff / 60);
  const hoursDiff = Math.trunc(minutesDiff / 60);
  const daysDiff = Math.trunc(hoursDiff / 24);
  const years = end.getFullYear() - start.getFullYear();

  if (years > 0) {
    str = `${years} years`;
  } else {
    const month = end.getMonth() - start.getMonth();
    if (month > 0) {
      str = `${month} months`;
    } else if (daysDiff > 0) {
      str = `${daysDiff} days`;
    } else if (hoursDiff > 0) {
      const restMinutes = minutesDiff % 60;
      str = `${hoursDiff} hours ${restMinutes} minutes`;
    } else if (minutesDiff > 0) {
      str = `${minutesDiff} minutes`;
    } else if (secondsDiff > 0) {
      str = `${secondsDiff} seconds`;
    }
  }

  return str;
};

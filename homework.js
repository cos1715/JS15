// ## Get days in year

const getDaysInYear = (year) => {
  return (year % 4 === 0 && year % 100 > 0) || year % 400 == 0 ? 366 : 365;
};

// const getDaysInYear = (year) => {
//   let days = 0;
//   for (let i = 0; i < 12; i++) {
//     const date = new Date(year, i, 0);
//     days += date.getDate();
//   }

//   return days;
// };

// ## Get day of a year

const getDayNumber = (date) => {
  const dates = new Date(date);
  const msDiff = Math.floor(dates - new Date(dates.getFullYear(), 0, 0));

  return msDiff / 1000 / 60 / 60 / 24;
};

// ## Get fiscal quarters

const monthsArr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const quarters = ["I", "II", "III", "IV"];

const getQuarters = (date) => {
  const dateObj = new Date(date);
  const month = monthsArr[dateObj.getMonth()];
  const day = dateObj.getDate();
  const quarter = quarters[Math.floor(dateObj.getMonth() / 3)];

  return `${month} ${day} is ${quarter} quarter`;
};

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

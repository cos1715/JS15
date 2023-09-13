const date = new Date();
console.log("🚀 ~ file: lesson.js:2 ~ date:", date);

// start Date Jan 1 1970

const dateFromMS = new Date(1000000);
const dateFromMSEarlierThen1970 = new Date(-10000000000); // Sun Sep 07 1969 09:13:20 GMT+0300 (Eastern European Summer Time)

new Date("2023/2/4 11:00");

new Date(2023, 8); // month starts from 0

new Date(2023, 8, 4); // month starts from 0
new Date(2023, 8, 4, 5); // month starts from 0
new Date(2023, 8, 4, 5, 11); // month starts from 0
new Date(2023, 8, 4, 5, 11, 23); // month starts from 0

const now = Date.now(); // ms from 1970

date.toDateString();
date.toISOString();
date.toUTCString();

date.getFullYear();
date.getMonth();
date.getDate();
date.getDay(); //0===sunday
date.getHours();
date.getMinutes();
date.getSeconds();
date.getMilliseconds();
date.getTime();
date.getTimezoneOffset();

// almost all get methods have utc variant

date.setFullYear();
date.setMonth();
date.setDate();
date.setHours();
date.setMinutes();
date.setSeconds();
date.setTime();

for (let i = 0; i < 100000; i++) {
  i++;
}

const afterCycle = Date.now();

const weekDays = ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

const getWeekDay = (date) => {
  return weekDays[date.getDay()];
};

const getTodaysMSeconds = () => {
  const date = new Date();
  const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  return date.getTime() - today.getTime();
};

const getTimeToDate = (date) => {
  const now = Date.now();
  return date.getTime() - now;
};

//YYYY/MM/DD 2023/09/13
//YYYY-MM-DD 2023-09-13
//MM-YYYY-DD 09-2023-13
//MM-DD-YYYY 09-13-2023
const formatDate = (formatter) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const formattedDate = [];
  const formatArr = formatter.split(/\W+/g);
  const [, separator] = formatter.split(/[a-zA-Z]+/g);

  formatArr.forEach((element, index) => {
    if (element.includes("Y")) {
      formattedDate.push(year);
    }
    if (element.includes("M")) {
      formattedDate.push(month);
    }
    if (element.includes("D")) {
      formattedDate.push(day);
    }
    if (index !== formatArr.length - 1) {
      formattedDate.push(separator);
    }
  });

  return formattedDate.join("");
};

formatDate("YYYY/MM/DD");

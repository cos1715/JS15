// ## Sort arr str

const arr = ["4534", "a", "bb", "sdfds", "", " ", "r4rdv-"];
const sortArr = (arr) => {
  return arr.sort((a, b) => {
    const lengthCheck = a.length - b.length;
    const alphaCheck = a > b ? 1 : -1;
    return lengthCheck === 0 ? alphaCheck : lengthCheck;
  });
};

const result = sortArr(arr);
// '', ' ', 'a', 'bb', '4534', 'sdfds', 'r4rdv-'

// ## Calculate average age of users older then 17 and younger then 55

const profilesArr = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Taras", age: 25 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
];

const averageAge = (arr) => {
  const filteredArr = arr.filter(
    (profile) => profile.age > 17 && profile.age < 55
  );
  const sum = filteredArr.reduce((acc, profile) => acc + profile.age, 0);

  return sum / filteredArr.length;
};

// ## Sort arr by name

const usersArr = [
  { name: "John", age: 25 },
  { name: "John", age: 5 },
  { name: "John", age: 2 },
  { name: "John", age: 45 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Mary", age: 2 },
  { name: "Taras", age: 25 },
  { name: "Taras", age: 19 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Alan", age: 32 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
  { name: "Elizabeth", age: 8 },
];

const sortUsers = (arr) => {
  return arr.sort((a, b) => {
    const transformedA = a.name.toLowerCase();
    const transformedB = b.name.toLowerCase();

    return transformedA < transformedB
      ? -1
      : transformedA > transformedB
      ? 1
      : a.age - b.age;
  });
};

console.log(sortUsers(usersArr));

// ## Find min and max

// Find min and max and return obj {min, max}
// Use reduce method

const students = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Taras", age: 25 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
];

const minMaxAge = (arr) => {
  return arr.reduce(
    (acc, student) => {
      if (student.age > acc.max) {
        acc.max = student.age;
      }
      if (student.age < acc.min) {
        acc.min = student.age;
      }
      return acc;
    },
    { min: Infinity, max: -Infinity }
  );
};

minMaxAge(students);

// ## Save only unique values

const strings = [
  "HELLO",
  "World",
  "JS",
  "Js",
  "HI",
  "Hello",
  "HTML",
  "CSS",
  "js",
];

const unique = (strings) => {
  const uniqueValues = [];
  strings.forEach((element) => {
    const transformedStr = element.toLowerCase();
    const foundStr = uniqueValues.find((str) => {
      return str.toLowerCase() === transformedStr;
    });

    if (!foundStr) {
      uniqueValues.push(element);
    }
  });

  return uniqueValues;
};

// ## Find the Longest Consecutive Sequence

const numbers = [1, 2, 3, 4, 5, 2, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5];

const findLongestConsecutive = (arr) => {
  const result = [];

  arr.reduce((acc, item) => {
    const elem = acc[acc.length - 1] || 0;
    if (elem + 1 === item) {
      acc.push(item);
    } else {
      acc = [];
    }

    if (result.length < acc.length) {
      result.length = 0;
      result.push(...acc);
    }

    return acc;
  }, []);

  return result;
};

const longestConsecutive = findLongestConsecutive(numbers);

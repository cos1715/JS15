const str = "12345   6789";
const username = "Taras";
const greeting = "Hello";

console.log("str.length==>>", str.length);

// slice
let slice1 = str.slice(); // all
let slice2 = str.slice(2); // from element 3 to end
let slice3 = str.slice(2, 5); // from element 3 to element 5
let slice4 = str.slice(-2); // from end element 8 to end

// substring
// doesn't work with negative numbers
let substring1 = str.substring(2); // from element 3 to end
let substring2 = str.substring(2, 5); // from element 3 to element 5

// substr
// doesn't work with negative numbers
let substr1 = str.substr(2); // from element 3 to end
let substr2 = str.substr(2, 3); // from element 3 with length 3

// concat
// concatenates strings together
const concat = greeting.concat(" ", username);

// replace
const replaced = username.replace("a", "t"); //replaces first 'a' with 't'
const replacedRegex = username.replace(/a/, "t"); //replaces first math of regex with 't'

// replaceAll
const replacedAll = username.replaceAll("a", "t"); //replaces all 'a' with 't'
const replacedAllRegex = username.replaceAll(/a/g, "t"); //replaces first math of regex with 't' g flag is mandatory

// toLowerCase or toLocaleLowerCase
const toLowerCase = username.toLowerCase(); // makes all letters small
const toLocaleLowerCase = username.toLocaleLowerCase(); // makes all letters small (works great with different languages)

// toUpperCase or toLocaleUpperCase
const toUpperCase = username.toUpperCase(); // makes all letters big
const toLocaleUpperCase = username.toLocaleUpperCase(); // makes all letters big (works great with different languages)

// trim
// deletes whitespace at the beginning and end
const whiteSpaces = "   aaa   ";
const trim = whiteSpaces.trim();
const trimStart = whiteSpaces.trimStart(); // cuts only whitespace at the beginning
const trimEnd = whiteSpaces.trimEnd(); // cuts only whitespace at the end

// padStart padEnd
// adds a symbols on start or end of str
const padStart1 = username.padStart(1, "="); // if length of a str is bigger then number in function then nothing is added
const padStart2 = whiteSpaces.padStart(10, "="); // if number in function is bigger then length of str then elements are added at the beginning
const padEnd1 = username.padEnd(1, "="); // if length of a str is bigger then number in function then nothing is added
const padEnd2 = whiteSpaces.padEnd(10, "="); // if number in function is bigger then length of str then elements are added at the end

// get letter
const letter1 = username[2];
const letter2 = username.charAt(2);
const letterCode = username.charCodeAt(2); // return code of a char, see ascii table

// split
// transforms string into array
const split = username.split(""); // splits every element as separate element in array

// search
username.indexOf("a"); // returns index of first found element or -1 if no element found
username.indexOf("a", 3); // returns index of first found element from position 3 or -1 if no element found
username.lastIndexOf("a"); // returns index of first found element nut from end or -1 if no element found
username.search("a"); // returns index of first found element or -1 if no element found
username.search(/a/); // returns index of first found element or -1 if no element found
username.match(/a/g); // returns arr of found elements or null if no element found
username.includes("a"); // return true or false
username.startsWith("T"); // return true or false
username.endsWith("s"); // return true or false

const printPyramid = (rows) => {
  let starsLength = 1;
  let cagesLength = rows - starsLength;

  for (let i = 0; i < rows; i++) {
    const cages = "".padStart(cagesLength, "#");
    const stars = "".padStart(starsLength, "*");
    starsLength += 2;
    cagesLength--;
    console.log(`${cages}${stars}${cages}`);
  }
};

const name = "taras";

const capitalize = (str) => {
  const arr = str.split("");
  let capitalized = "";
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      capitalized = arr[i].toUpperCase();
    } else {
      capitalized += arr[i];
    }
  }
  return capitalized;
};

const charTransform = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  return result;
};

charTransform("HeLlO");

const vowels = {
  a: "a",
  e: "e",
  o: "o",
  i: "i",
  u: "u",
};

const countVowels = (str) => {
  let count = 0;
  const lowercaseStr = str.toLowerCase();

  for (let i = 0; i < lowercaseStr.length; i++) {
    const char = lowercaseStr[i];
    if (vowels[char]) {
      count++;
    }
  }

  return count;
};

countVowels("HeLlO");

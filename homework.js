// Reverse str

const reverse = (str) => {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
};

const reversedString = reverse("hello");

// Count words
const countWords = (str) => {
  str = str.trim();
  return str.split(" ").length;
};

const sentence = "Hi my name is Taras";
const wordCount = countWords(sentence);

// Clear whitespace
const clearWhiteSpace = (str) => {
  const trimmedStr = str.trim();
  let stringWithoutSpaces = "";
  for (let i = 0; i < trimmedStr.length; i++) {
    if (trimmedStr[i] !== " ") {
      stringWithoutSpaces += trimmedStr[i];
    }
  }
  return stringWithoutSpaces;
};
const result = clearWhiteSpace("  1   2   ");

// Max length
const cutStr = (str, maxLength) => {
  return str.length <= maxLength ? str : str + "...";
};

// Palindrome
const palindrome = (str) => {
  const trimmedStr = str.trim();
  const reversedStr = reverse(trimmedStr.toLowerCase());
  const transformedStr = trimmedStr.toLowerCase();
  return transformedStr === reversedStr;
};

// ## Decorator

const obj = {
  num: 1,
  sum(num) {
    return this.num + num;
  },
};

const cachesDecorator = (func) => {
  const map = new Map();
  return function (num) {
    if (!map.has(num)) {
      const result = func.call(this, num);
      map.set(num, result);
    }
    return map.get(num);
  };
};

const sum = function (num) {
  return this.num + num;
};

const decoratedSum = cachesDecorator(sum);
console.log(decoratedSum.call(obj, 2));
console.log(decoratedSum.call(obj, 2));

const decoratedSum2 = cachesDecorator(obj.sum);
console.log(decoratedSum.call(obj, 3));
console.log(decoratedSum.call(obj, 3));
console.log(decoratedSum.call(obj, 33));

// ## Factorial recursion

const factorial = (initialNumber) => {
  return initialNumber === 1
    ? initialNumber
    : initialNumber * factorial(initialNumber - 1);
};

// ## Fibonacci recursion

const fib = (length) => {
  let result;
  if (length <= 1) {
    result = length;
  } else {
    result = fib(length - 1) + fib(length - 2);
  }
  return result;
};

const fibSeq = [];
for (let i = 1; i <= 8; i++) {
  fibSeq.push(fib(i));
}

console.log(fibSeq.join(" "));

// ## Read List

const list = {
  title: "lesson-1",
  next: {
    title: "lesson-2",
    next: {
      title: "lesson-3",
      next: {
        title: "lesson-4",
        next: {
          title: "lesson-5",
          next: null,
        },
      },
    },
  },
};

const readList = (list) => {
  if (list) {
    console.log(list.title);
    readList(list.next);
  }
};

readList(list);

// ## Deep Copy (optional)

const arr = [
  1,
  "string",
  null,
  undefined,
  { a: 15, b: 10, c: [1, 2, 3, { a: 4 }], d: undefined, e: true },
  true,
  false,
];

const deepCopy = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    const copyArray = [];
    for (let i = 0; i < obj.length; i++) {
      copyArray[i] = deepCopy(obj[i]);
    }
    return copyArray;
  } else {
    const copyObject = {};
    const entries = Object.entries(obj);
    for (entry of entries) {
      const [key, value] = entry;
      copyObject[key] = deepCopy(value);
    }
    return copyObject;
  }
};

const copiedArray = deepCopy(arr);
console.log(copiedArray);

// ## DOM (optional)

const table = {
  tagName: "table",
  attrs: {
    border: "1",
  },
  children: [
    {
      tagName: "tr",
      children: [
        {
          tagName: "td",
          children: ["1x1"],
        },
        {
          tagName: "td",
          children: ["1x2"],
        },
      ],
    },
    {
      tagName: "tr",
      children: [
        {
          tagName: "td",
          children: ["2x1"],
        },
        {
          tagName: "td",
          children: ["2x2"],
        },
      ],
    },
  ],
};

const render = (dom) => {
  const { tagName, attrs, children } = dom;

  let html = `<${tagName}`;
  for (const attr in attrs) {
    html += ` ${attr}="${attrs[attr]}"`;
  }
  html += ">";

  if (Array.isArray(children)) {
    for (const child of children) {
      if (child?.tagName) {
        html += render(child);
      } else if (typeof child === "string") {
        html += child;
      }
    }
  }

  html += `</${tagName}>`;

  return html;
};

const html = render(table);

document.write(html);

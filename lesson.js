// const span = document.createElement("span");
// span.innerText = "Element";
// const textNode = document.createTextNode("custom text");
// console.log("🚀 ~ file: lesson.js:4 ~ textNode:", textNode);
// console.dir(span);
// const container = document.querySelector(".w3-container");
// span.classList.add("sdasd");
// container.append(span);
// // container.prepend(span);
// // container.after(span);
// // container.before(span);
// container.insertAdjacentHTML("afterend", '<p class="dfds">abra</p>');
// document.body.append(textNode);

// const clone = container.cloneNode();
// const cloneDeep = container.cloneNode(true);
// console.log("🚀 ~ file: lesson.js:17 ~ clone:", clone);
// console.log("🚀 ~ file: lesson.js:17 ~ cloneDeep:", cloneDeep);

// container.after(cloneDeep);
// container.before(clone);
// const main = document.createElement("main");

// // container.replaceWith(main, textNode);

// // document.body.remove();
// const text = document.querySelector(
//   "body > div > div:nth-child(3) > p:nth-child(3)"
// );
// text.remove();
// container.classList.remove("w3-cell");
// document.body.insertAdjacentElement("afterbegin", text);

// const arr = [1, 2, 3, 4, 5];

// arr.forEach((elem) => {
//   const text = document.createElement("p");
//   text.classList.add("loading");
//   text.innerText = elem;

//   document.body.append(text);
// });

const createImg = (src, alt) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  document.body.append(img);
};

const loadImg = async () => {
  const url = new URL("https://api.nasa.gov/planetary/apod");
  url.searchParams.set("api_key", "MIDpdacjifSU395EcnZAHn79VQE9eBWwNLyGOHkV");
  url.searchParams.set("date", "2023-10-12");
  const resp = await fetch(url);
  const data = await resp.json();
  createImg(data.url, "Nasa image");
};

loadImg();

const tableArr = [
  { header: "Name", data: ["Taras", "Yana"] },
  { header: "Age", data: [25, 25] },
  { header: "Learn Js", data: [true, true] },
];

const createTable = () => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const headerRow = document.createElement("tr");
  const bodyRowLength = tableArr[0].data.length;
  table.style.border = "1px solid black";

  tableArr.forEach((element) => {
    const th = document.createElement("th");
    th.innerText = element.header;
    th.style.border = "1px solid black";
    headerRow.append(th);
  });
  thead.append(headerRow);
  for (let i = 0; i < bodyRowLength; i++) {
    const row = document.createElement("tr");

    tableArr.forEach((element) => {
      const td = document.createElement("td");
      td.innerText = element.data[i];
      td.style.border = "1px solid black";
      row.append(td);
    });
    tbody.append(row);
  }

  table.append(thead);
  table.append(tbody);
  document.body.append(table);
};

createTable();

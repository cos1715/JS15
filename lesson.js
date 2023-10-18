const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
// const button3 = document.getElementById("3");
const main = document.querySelector("main");
const header = document.querySelector("header");
const div = document.querySelector("div");
// const footer = document.querySelector("footer");
// const input = document.querySelector("input");
// const checkbox = document.getElementById("checkbox");

// const onClick = () => {
//   console.log("click 1");
// };

// document.addEventListener(
//   "click",
//   () => {
//     console.log("document click");
//   },
//   { once: true }
// );

// footer.addEventListener("click", () => {
//   console.log("footer click");
// });
// button1.addEventListener("click", onClick);
// button1.addEventListener("click", () => {
//   console.log("as");
// });
// button1.addEventListener("click", () => {
//   console.log("asasd");
// });
// button2.addEventListener("click", () => {
//   console.log("click 2");
// });
// button3.addEventListener("click", () => {
//   console.log("click 3");
// });

// main.addEventListener("click", (event) => {
//   console.log("main click", event);
// });

// const divClickHandler = () => {
//   console.log("div click");
// };

// div.addEventListener("click", divClickHandler);

// div.removeEventListener("click", divClickHandler);

// header.addEventListener("mousedown", () => {
//   console.log("header mousedown");
// });
// header.addEventListener("mouseup", () => {
//   console.log("header mouseup");
// });
// header.addEventListener("mouseenter", () => {
//   console.log("header mouseenter");
// });
// header.addEventListener("mouseover", () => {
//   console.log("header mouseover");
// });
// header.addEventListener("mouseleave", () => {
//   console.log("header mouseleave");
// });

// input.addEventListener("keydown", (e) => {
//   console.log("keydown", e);
// });
// input.addEventListener("keyup", (e) => {
//   if (e.key === "j") {
//     console.log("j  event");
//   }
//   console.log("keyup", e);
// });
// input.addEventListener("keypress", (e) => {
//   console.log("keypress", e);
// });

// document.addEventListener("keyup", (e) => {
//   console.log("keyup doc", e);
// });

// checkbox.addEventListener("change", (e) => {
//   console.log("change", e);
// });

// input.addEventListener("focus", (e) => {
//   console.log("focus", e);
// });
// input.addEventListener("blur", (e) => {
//   console.log("blur", e);
// });

button1.addEventListener("click", (e) => {
  e.target.innerText = "Clicked!";
  e.target.style.backgroundColor = "yellow";
  e.stopPropagation();
  console.log(
    "🚀 ~ file: lesson.js:100 ~ button1.addEventListener ~ stopPropagation:"
  );
});

const text = document.getElementById("collapse");

button2.addEventListener("click", (e) => {
  text.classList.toggle("show");
});

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
});

document.addEventListener("click", (e) => {
  console.log(e.target.nodeName + " click");
});

const table = document.querySelector("table");
table.addEventListener("click", (e) => {
  console.log("🚀 ~ file: lesson.js:125 ~ table.addEventListener ~ e:", e);
  if (e.target.nodeName === "TD") {
    console.log(e.target.innerText);
  }
});

const list = document.querySelector("ul");
const listChildren = list.children;
console.log("🚀 ~ file: lesson.js:131 ~ listChildren:", listChildren);
list.addEventListener("click", (e) => {
  if (e.target.nodeName === "LI") {
    if (!e.ctrlKey && !e.shiftKey) {
      const isHighlighted = e.target.classList.contains("highlight");
      for (let child of listChildren) {
        child.classList.remove("highlight");
      }
      if (!isHighlighted) {
        e.target.classList.add("highlight");
      }
    }
    if (e.ctrlKey) {
      e.target.classList.toggle("highlight");
    }
    if (e.shiftKey) {
      e.target.classList.add("highlight");
      let foundSelected = false;
      for (let child of listChildren) {
        const hasClass = child.classList.contains("highlight");
        if (foundSelected && hasClass) {
          // foundSelected = false;
        }
        if (foundSelected) {
          child.classList.add("highlight");
        }
        if (foundSelected && hasClass) {
          foundSelected = hasClass;
        }
      }
    }
  }
});

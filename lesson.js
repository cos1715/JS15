// // // const obj = {
// // //   a: 1,
// // //   b: 2,
// // //   calcSum: () => {},
// // //   calcSum() {},
// // //   calcSum: function () {},
// // // };

// // const obj = {
// //   a: 1,
// //   b: 2,
// //   calcSum() {
// //     debugger;
// //     return this.a + this.b;
// //   },
// // };

// // const foo = () => {
// //   console.log(this);
// // };

// // function bazz() {
// //   console.log(this);
// // }

// // foo();

// // bazz();

// // console.log(obj.calcSum());

// // const newValues = obj;
// // const newValues = { ...obj, a: 2 };

// // // newValues.a = 2;
// // newValues.calcSum();

// function printInfo(arg = "") {
//   return `${this.name} is ${this.age} ${arg}`;
// }

// const user = {
//   name: "Taras",
//   age: 25,
//   printInfo,
// };

// const arrow = () => {
//   console.log(this);
// };

// const admin = {
//   name: "admin",
//   age: Infinity,
//   role: "admin",
//   status: "super-admin",
//   printInfo: user.printInfo,
//   arrow,
//   getName: () => {
//     debugger;
//     return this.name;
//   },

//   get() {
//     const getName = () => {
//       return this.name;
//     };
//     arrow();
//     const name = getName();

//     return name;
//   },
// };

// const foobar = user.printInfo;

// foobar();

// const admin2 = { ...admin, name: "capitan" };
// admin2.get();

// const bindInfo = printInfo.bind(admin2);

// bindInfo("dfdsfsfds");

// // will not work
// const bindInfoUser = bindInfo.bind(user);

// bindInfoUser();
// // printInfo();

// console.log(printInfo.call(user, "dfdsfds"));
// console.log(printInfo.call(admin));
// console.log(printInfo.apply(user, ["sdfdsfdsf"]));
// console.log(printInfo.apply(admin));

// function User(name, age) {
//   const info = `${name} is ${age}`;

//   this.name = name;
//   this.age = age;
//   this.info = info;
//   this.printInfo = () => this.info;
//   this.printName = function () {
//     return this.name;
//   };
// }

// const userFromConstructor = new User("Taras", 25);
// console.log(
//   "🚀 ~ file: lesson.js:103 ~ userFromConstructor:",
//   userFromConstructor
// );

// const stolenInfo = userFromConstructor.printInfo;
// const stolenName = userFromConstructor.printName;

// console.log(
//   new User("Taras", 25),
//   new User("Adrii", 28),
//   new User("Julia", 22),
//   new User("Kate", 26)
// );

function printNumbers() {
  const start = this.from;
  const end = this.to;

  for (let i = start; i < end; i++) {
    console.log(i);
  }
}

const obj1 = {
  from: 1,
  to: 20,
  printNumbers,
};

const obj2 = { from: 15, to: 105 };

// console.log("🚀 printNumbers.call(obj2):", printNumbers.call(obj2));
// console.log("🚀 obj1.printNumbers:", obj1.printNumbers());

function Calculator(initialValue) {
  this.result = initialValue;

  this.sum = (a) => {
    this.result += a;
  };
  this.sub = (a) => {
    this.result -= a;
  };
}

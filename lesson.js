// console.log("start");

// setTimeout(() => {
//   for (let i = 0; i < 10000; i++) {
//     console.log("loop in timeout");
//   }
// }, 0);

// for (let i = 0; i < 1000; i++) {
//   console.log("loop");
// }

// console.log("end");

// const start = Date.now();

// setTimeout(() => {
//   const time = Date.now();
//   console.log("1 time-start time:0", time - start);
// }, 0);
// setTimeout(() => {
//   const time = Date.now();
//   console.log("2 time-start time:0", time - start);
// }, 0);
// setTimeout(() => {
//   const time = Date.now();
//   console.log("3 time-start time:3000", time - start);
// }, 3000);
// setTimeout(() => {
//   const time = Date.now();
//   console.log("4 time-start time:1000", time - start);
// }, 1000);
// setTimeout(() => {
//   const time = Date.now();
//   console.log("5 time-start time:1000", time - start);
// }, 1000);
// const timerId = setTimeout(() => {
//   const time = Date.now();
//   console.log("6 time-start time:2000", time - start);
// }, 2000);

// const end = Date.now();

// clearTimeout(timerId);

// for (let i = 0; i < 1000; i++) {
//   console.log("loop");
// }
// const intervalId = setInterval(() => {
//   const time = Date.now();
//   const timeDiff = time - start;
//   console.log("time-start time", time - start);
//   if (timeDiff > 10000) {
//     clearInterval(intervalId);
//   }
// }, 1000);

// setTimeout(() => {
//   for (let i = 0; i < 10000; i++) {
//     console.log("loop in timeout");
//   }
// }, 1000);

// setInterval(() => {
//   const date = new Date();
//   const hours = `${date.getHours()}`.padStart(2, 0);
//   const minutes = `${date.getMinutes()}`.padStart(2, 0);
//   const seconds = `${date.getSeconds()}`.padStart(2, 0);

//   console.log(`${hours}:${minutes}:${seconds}`);
// }, 1000);

// let timerId;

// const printTime = () => {
//   const date = new Date();
//   const hours = `${date.getHours()}`.padStart(2, 0);
//   const minutes = `${date.getMinutes()}`.padStart(2, 0);
//   const seconds = `${date.getSeconds()}`.padStart(2, 0);

//   console.log(`${hours}:${minutes}:${seconds}`);
//   if (seconds > 50) {
//     clearTimeout(timerId);
//   } else {
//     timerId = setTimeout(printTime, 1000);
//   }
// };

// timerId = setTimeout(printTime, 1000);

const promise = new Promise((resolve, reject) => {
  // resolve(10);
  reject("rejected because");
});
console.log("🚀 ~ file: lesson.js:95 ~ promise ~ promise:", promise);
console.log("🚀 ~ file: lesson.js:95 ~ promise ~ promise:", promise === 10);

// promise
//   .then(
//     (data) => {
//       console.log(data + 90);
//       throw Error("dfds");
//       return 100;
//     }
//     // (error) => {
//     //   console.log("in then onreject", error);
//     // }
//   )
//   .finally(() => {
//     console.log("after then");
//     return 1;
//   })
//   .catch((error) => {
//     console.log("catch", error);
//     return "error";
//   })
//   .then((data) => {
//     return new Promise((resolve, reject) => {
//       resolve("innerPromise" + " " + data);
//     });
//   })
//   .then(() => {})
//   .then(() => {})
//   .then(() => {})
//   .then(() => {})
//   .then(() => {})

//   .finally(() => {
//     console.log("finally");
//   });

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

delay(3000).then(() => {
  console.log("after 3000ms");
});

new Promise((re, reject) => {
  reject("error");
})
  .catch((e) => {
    console.log("catch rejected", e);
    throw Error("error from catch");
  })
  .then(
    () => {},
    (data) => {
      console.log("then 2 callback", data);
      throw Error("from then 2 callback");
    }
  )
  .then((data) => {
    console.log("then", data);
    return 1;
  })
  .catch((e) => {
    console.log("catch after then", e);
    return e;
  })
  .then((data) => {
    console.log("then after catch", data);
    throw Error("from then");
  })
  .finally(() => {
    console.log("finally");
  })
  .catch((e) => {
    console.log("last catch", e);
  });

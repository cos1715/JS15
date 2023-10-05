const users = [
  {
    id: 1,
    name: "Taras",
    age: 30,
    movies: [],
  },
  {
    id: 2,
    name: "Kate",
    age: 45,
    movies: ["Titanic", "Avatar"],
  },
];
const start = Date.now();
const getUserData = (id) => {
  const random = Math.floor(Math.random() * (5 - 1)) + 1;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((item) => item.id === id);
      if (user) {
        resolve(user);
      } else {
        reject("404 not found");
      }
    }, random * 1000);
  });
};

try {
  throw Error("404");
} catch (e) {
  console.error(e);
}

const resolved = Promise.resolve(1);
const rejected = Promise.reject(1);

const bazz = (id) => {
  return id > 5 ? Promise.resolve(1) : Promise.reject(1);
};
bazz(3)
  .then(() => {})
  .catch(() => {});

const promiseAllSuccess = Promise.all([
  getUserData(1),
  getUserData(2),
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 10000);
  }),
]);
promiseAllSuccess.then((data) => {
  const end = Date.now();
  console.log(end - start);
});
const promiseAllRejected = Promise.all([
  getUserData(1),
  getUserData(22),
  new Promise((resolve, reject) => {
    setTimeout(() => reject(2), 10000);
  }),
]);
promiseAllRejected
  .then((data) => {
    const end = Date.now();
    console.log(end - start);
  })
  .catch((e) => {
    const end = Date.now();
    console.log(end - start);
  });

const promiseAllSettled = Promise.allSettled([
  getUserData(1),
  getUserData(222),
]);

promiseAllSettled
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });

const p1 = getUserData(1);
const p2 = getUserData(2);
const resolvedRace = Promise.race([p1, p2]);
resolvedRace.then((data) => {
  console.log(data);
});
const resolvedRaceRejected = Promise.race([Promise.reject("1"), p1, p2]);
resolvedRace.then((data) => {
  console.log(data);
});
const resolvedRaceAllRejected = Promise.race([
  Promise.reject("1"),
  Promise.reject("2"),
  Promise.reject("3"),
]);
resolvedRaceAllRejected
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });

const resolvedAny = Promise.any([p1, p2]);
resolvedAny.then((data) => {
  console.log(data);
});
const resolvedAnyRejected = Promise.any([
  Promise.reject("reject"),
  Promise.resolve("resolve"),
]);
resolvedAnyRejected
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });
// const resolvedAnyRejected2 = Promise.any([p1, Promise.reject("1"), p2]);
// resolvedRace.then((data) => {
//   console.log(data);
// });
// const resolvedAnyAllRejected = Promise.any([
//   Promise.reject("1"),
//   Promise.reject("2"),
//   Promise.reject("3"),
// ]);
// resolvedRaceAllRejected
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

try {
  console.log("33242423");
  ddssd.dsdsfdss;
  console.log("after error");
} catch (e) {
  console.log("catch", e);
} finally {
  console.log("finally");
}

async function bar() {}

const foo = async () => {
  try {
    const p1 = await getUserData(1);
    const p2 = await getUserData(22);
    console.log(p1);
    console.log(p2);
  } catch (e) {
    console.log(e);
  }
};

foo();

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const readDelay = async () => {
  await delay(2000);
  console.log("after delay");
};
readDelay();

const readAllSettled = async () => {
  const resp = await Promise.allSettled([
    Promise.resolve("successful"),
    Promise.resolve("successful"),
    Promise.reject("reject"),
    Promise.reject("reject"),
    Promise.resolve("successful"),
    Promise.reject("reject"),
    Promise.resolve("successful"),
    Promise.reject("reject"),
    Promise.reject("reject"),
  ]);
  const successful = resp.filter((item) => item.status === "fulfilled");
  const rejected = resp.filter((item) => item.status === "rejected");

  return { successful, rejected };
};

const readData = readAllSettled();
readData.then((data) => {
  console.log("🚀 ~ file: lesson.js:232 ~ readData:", data);
});

const x = async () => {
  const readData = await readAllSettled();
};

x();

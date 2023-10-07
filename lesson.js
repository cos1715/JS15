// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 0);

// Promise.resolve().then(() => {
//   console.log(3);
// });

// Promise.resolve().then(() => {
//   setTimeout(() => {
//     console.log(4);
//   }, 0);
// });

// Promise.resolve().then(() => {
//   console.log(5);
// });

// setTimeout(() => {
//   console.log(6);
// }, 0);

// console.log(7);

// 1 7 3 5 2 6 4

// console.log(1);

// Promise.resolve().then(() => {
//   console.log(5);
// });

// Promise.resolve()
//   .then(() => {
//     console.log(2);
//     return Promise.resolve();
//   })
//   .then(() => {
//     console.log(3);
//   });

// console.log(4);

// 1 4 5 2 3

// console.log(1);

// async function bazz() {
//   console.log(2);
//   await new Promise((resolve) => {
//     console.log(3);
//     setTimeout(() => {
//       console.log(4);
//     }, 0);
//     console.log(5);
//     resolve();
//   });
//   console.log(6);
// }

// bazz();

// console.log(7);

// prev result
// 1 2 3 5 6 4

// 1 2 3 5 7 6 4

console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

setTimeout(() => {
  console.log(3);
}, 0);

const promise = Promise.resolve();

for (let i = 0; i < 3; i++) {
  promise
    .then(() => {
      setTimeout(() => {
        console.log(4);
        setTimeout(() => {
          console.log(5);
        }, 0);

        Promise.resolve().then(() => {
          console.log(6);
          promise.then(() => {
            console.log(7);
          });
        });
      }, 0);
    })
    .then(() => {
      console.log(8);
    });
}

console.log(9);

// 1 9 8 2 3 4 6 7 5

// 1 9 8 8 8 2 3 4 6 7 4 6 7 4 6 7 5 5 5

const url = new URL("https://dummyjson.com/users");

fetch(url)
  .then((resp) => resp.json())
  .then((data) => console.log(data))
  .catch((e) => {
    console.log(e);
  });

const getUser = async (id = 1) => {
  const reps = await fetch(`${url}/${id}`);
  const data = await reps.json();

  console.log(data);
};

getUser();

const getQueryUser = async () => {
  const params = new URLSearchParams();
  params.append("q", "John");
  const reps = await fetch(`${url}/search?${params}`);
  const data = await reps.json();

  console.log(data);
};

getQueryUser();

const createUser = async () => {
  const user = {
    email: "xlinster1d@bravesites.com",
    eyeColor: "Amber",
    firstName: "Johnathon",
    gender: "male",
  };
  const reps = await fetch(`${url}/add`, {
    method: "post",
    headers: {
      "Content-Type": "Application/json",
      "X-custom-header": "123213",
      token: "fdsfds",
      auth: "dfdsds",
    },
    body: JSON.stringify(user),
  });
  const data = await reps.json();

  console.log(data);
};

createUser();

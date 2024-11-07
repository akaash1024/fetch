// let userPromise = fetch("https://jsonplaceholder.typicode.com/todos")
let userPromise = fetch("https://jsonplaceholder.typicode.com/todos");

console.log(userPromise);

userPromise
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then(function (data) {
    console.log(data);
  });

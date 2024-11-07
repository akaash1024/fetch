
// let userPromise = fetch("https://jsonplaceholder.typicode.com/users");

//NOTE: above I was getting 100+ result so I gave q=leanne for first result only
// so I can spot in log. 
let userPromise = fetch("https://jsonplaceholder.typicode.com/users?q=leanne");


console.log(userPromise);

userPromise
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then(function (data) {
    console.log(data);
  });

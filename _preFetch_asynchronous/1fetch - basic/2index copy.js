
let todosPromise = fetch("https://jsonplaceholder.typicode.com/users?q=leanne")
console.log("fetching", todosPromise)

todosPromise
      .then(function(res){
       console.log("checking res", res)
  // store res.json() in a variable
  // return it from .then
      return res.json()
  }) .then(function(data){
      console.log("what is in data", data)
})

let todosPromise = fetch("https://jsonplaceholder.typicode.com/todos")
console.log(todosPromise)

todosPromise
      .then(function(res){
       console.log(res)
  // store res.json() in a variable
  // return it from .then
      return res.json()
  }) .then(function(data){
      console.log(data)
})

// chain another .then to resolve the promise that you get back from res.json()
// print the data




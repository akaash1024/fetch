// let photo = fetch ("https://jsonplaceholder.typicode.com/photos")
// console.log(photo);

// photo
//     .then(function(res){
//         console.log(res);
//         return res.json()
//     })
//     .then(function(data){
//         console.log(data);

//     })

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((res) => res.json())
  .then((data) => console.log(data));

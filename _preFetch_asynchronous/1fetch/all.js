//===================================================\\

//synchronous code:
function syncFunction() {
    console.log("Start");
    console.log("Doing something synchronously...");
    console.log("End");
  }
  
  syncFunction();
  

//Converted to asynchronous with a callback:

console.log("First");

setTimeout(() => {
  console.log("Second");
}, 1000);  // This will run after 1 second

console.log("Third");



//===================================================\\

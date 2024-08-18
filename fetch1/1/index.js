
const container = document.getElementById("container");

const displayProduct = (data) => {
    data.forEach((product) => {
        const div = document.createElement("div");

        const image = document.createElement("img");
        image.src = product.image;

        const title = document.createElement("p");
        title.innerText = product.title;

        const price = document.createElement("p");
        price.innerText = product.price

        div.append(image,title,price)
        container.append(div)
        
    });
}


//try &&& catch 
async function fetchProduct() {
    try{
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        console.log(data); //show data in browsers' console
        displayProduct(data)
    } catch(err){
        console.log("Error",err);
    }
}
fetchProduct()

// >>>>>>>>>>>>>//Method 2

// async function fetchProduct() {
//     const res = await fetch("https://fakestoreapi.com/products");
//     const data = await res.json();
//     // console.log({data}); //show data in browsers' console
//     displayProduct(data)
// }
// fetchProduct()


// >>>>>>>>>>>>>//Method 1
// >>>>>>>>>>>>>//Method 1
// >>>>>>>>>>>>>//Method 1

// fetch("https://fakestoreapi.com/products")
// .then(res => {
//     return res.json()
// }).then(res => {
//     displayProduct(res) //this will give in object and list 
// }).catch(err => {
//     console.log("Error",err); 
// })








////////////////////////////>>>>>>>>>>>>>>>> CRUD - POST

// const postUser = async () => {
//     const res = await fetch("https://reqres.in/api/users",{
//         method: "POST", 
//         body: JSON.stringify({
//             "name": "Akash",
//             "Job": "Software Developer"
//         })
//     })

//     const data = await res.json();
//     console.log(data, "data");
    
// }

// postUser()

// const login = async () => {
//     const res = await fetch("https://reqres.in/api/login",{
//         method: "POST", 
//         headers: {
//             "content-type": "application/json"
//         },
//         body: JSON.stringify({
//             "email": "eve.holt@reqres.in", //make changes and check in console, "GET user not found"
//             "password": "cityslicka"
//         })
//     })

//     const data = await res.json();
//     console.log(data, "data");
    
// }

// login()



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>PUT

// const login = async () => {
//     const res = await fetch("https://reqres.in/api/users/2",{
//         method: "PUT", 
//         headers: {
//             "content-type": "application/json"
//         },
//         body: JSON.stringify({
//             "name": "test put", 
//             "job": "test put job"
//         })
//     })

//     const data = await res.json();
//     console.log(data, "data");
    
// }

// login()

// >>Pending make delete in line 113 //NEED to check I am stop here because of getting delayy and need to post in GIT too, 
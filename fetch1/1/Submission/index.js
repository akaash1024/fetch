
const show = document.getElementById("show")
const category = document.getElementById("get-category-data").addEventListener("click",fetchCategory)
const ingredient = document.getElementById("get-ingredient-data").addEventListener("click",fetchIngredient)

const displayProduct = (data) => {
    show.innerHTML=""
    data.meals.forEach((product) => {

        const div = document.createElement("div");

        const image = document.createElement("img");
        image.src = product.strMealThumb;

        const title = document.createElement("p");
        title.innerText = product.strMeal;

        div.append(image,title)
        show.append(div)
        
    });
}


// #fetchCategory
async function fetchCategory() {
    try{
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
        const data = await res.json();
        console.log(data); //show data in browsers' console
        console.log("Giving the array");
        displayProduct(data)
        console.log("Giving the array2");
    } catch(err){
        console.log("Error",err);
    }
}
// fetchProduct()


// #fetchIngredient
async function fetchIngredient() {
    try{
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast");
        const data = await res.json();
        console.log(data);
        displayProduct(data)
    } catch(err){
        console.log("Error",err);
    }
}
// fetchIngredient()

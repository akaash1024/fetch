const productsContainer = document.querySelector('.productsContainer')
const filterByCategory = document.querySelector('#filterByCategory')
const sortByPrice = document.querySelector('#sortByPrice')


filterByCategory.addEventListener("change",(event)=>{
    // let filterQueries= event.target.value;
    // console.log(filterQueries);
    fetchingData(`?category=${encodeURIComponent(event.target.value)}`)
})

sortByPrice.addEventListener("change",()=>{
    let sortingQuery = event.target.value;

    switch (sortingQuery) {
        case "byLow":
            fetchingData(`?_sort=price`)
            break;
        case "byHigh":
            fetchingData(`?_sort=-price`)
            break
        case "asc":
            fetchingData(`?_sort=rating.rate`)
            break;
        case "desc":
            fetchingData(`?_sort=-rating.rate`)
        default:
            break;
    }
    
})

//display
const displayData = ((data)=>{
    productsContainer.innerHTML = "";

    data.forEach(element => {

        const card = document.createElement('div');
        card.classList.add('card-item');

        const cardTitle = document.createElement('h4');
        cardTitle.innerText = element.title;

        const cardImg = document.createElement('img');
        cardImg.classList.add("cardImage")
        cardImg.src = element.image;
        cardImg.alt = element.image;

        const cardPrice = document.createElement('p');
        cardPrice.innerText = `Price: ${element.price}`;

        const cardRating = document.createElement('p');
        // console.log(cardRating);
        cardRating.innerText = `Rating: ${element.rating.rate} (${element.rating.count} Reviews)`

        card.appendChild(cardTitle);
        card.appendChild(cardImg);
        card.appendChild(cardPrice);
        card.appendChild(cardRating);

        productsContainer.appendChild(card)
        
    });
})


//fetching 
async function fetchingData(filterQuery) {
    const apiURL = filterQuery ? `http://localhost:3000/products${filterQuery}` : `http://localhost:3000/products`;
    try {
        const res = await fetch(apiURL);
        const data = await res.json();
        // console.log(data); //successfullly get in console.
        displayData(data)
    } catch (error) {
        console.log("error",error);
    }
}

fetchingData()
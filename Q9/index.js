const displayContainer = document.querySelector('.displayContainer')




//display
const displayData = ((data)=>{
    displayContainer.innerHTML = "";

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

        displayContainer.appendChild(card)
        
    });
})










//fetching 

async function fetchingData() {
    try {
        const res = await fetch('http://localhost:3000/products');
        const data = await res.json();
        // console.log(data); //successfullly get in console.
        displayData(data)

        
    } catch (error) {
        console.log("error",error);
        
    }
}

fetchingData()
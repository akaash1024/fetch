const mainContainer = document.querySelector('#mainContainer')


//display
const displayData = ((data)=>{
    mainContainer.innerHTML="";
    
    data.forEach(element => {
        const div = document.createElement('div')
        div.classList.add(`user-card`)

        const fullName = document.createElement('h2');
        fullName.innerText = element.name;

        const userName = document.createElement('h4');
        userName.innerText = element.username;

        const email = document.createElement('p');
        email.innerText = element.email;

        
        div.appendChild(fullName);
        div.appendChild(userName);
        div.appendChild(email);

        mainContainer.appendChild(div)

    });
})



//fetch
async function fetchingJSONData() {
    try {
        const res = await fetch('http://localhost:3000/user');
        const data = await res.json();
        console.log(data)
        displayData(data)
    } catch (error) {
        console.log("Error", error);   
    }
}
fetchingJSONData()
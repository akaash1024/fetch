const show = document.getElementById("show")
const fetchUsers = document.getElementById("fetchUsers").addEventListener("click",fetchUsersData)

const distplayUserData = (data) => {
    show.innerHTML="";
    data.forEach((user) => {
        
        const div = document.createElement("div")

        const email = document.createElement("h3")
        email.innerText = user.email

        const avatar = document.createElement("img")
        avatar.src = user.avatar

        const fullName = document.createElement("h1");
        fullName.innerText = `${user.first_name} ${user.last_name}`;

        div.append(avatar,fullName,email)
        show.append(div)
    })
}



async function fetchUsersData(){
    try{
        const res = await fetch("https://reqres.in/api/users?page=2");
        const data = await res.json();
        x=data["data"]
        // console.log(x); 
        distplayUserData(x)
    } catch(err){
        console.log("Error",err);
    }
}

const todosContainer = document.querySelector(".todos")

let id=10; //taking by default for learning purpose

const displayTodos = (todos) => {
    todos.forEach(element => {
        const div = document.createElement("div")
        div.innerText = element.text;

        todosContainer.appendChild(div)
    }) 
}



const input = document.querySelector("input")
const button = document.getElementById("add-todo").addEventListener("click",addTodo)
// button.addEventListener("click",addTodo)
async function addTodo(){
    const todo = input.value;

    if (!todo) {
        show.innerHTML = `<p>Please enter a To-Do!</p>`;
        return;
    }
    try{
        const res = await fetch("http://localhost:3000/todos",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    "id":String(id),
                    "text":todo,
                    "status":false
                },  
            )
        })
        id++; 
        fetchTodos()
    } catch(err){
        console.log("Error",err);
    }
    
}



async function fetchTodos(){
    try{
        const res = await fetch("http://localhost:3000/todos");
        const data = await res.json()
        console.log(data);
        displayTodos(data)
    } catch(err){
        console.log("Error",err);
    }
}
fetchTodos()


// const fetchTodos = async () => {
//     const res = await fetch("http://localhost:3000/todos");
//     const data = await res.json()
//     console.log(data);

// }
// fetchTodos()
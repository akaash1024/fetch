const input = document.querySelector("input");
const button = document.getElementById("add-todo")

let sortButton = document.querySelector("#sortButton");
let filterButton = document.querySelector("#filterButton");

const paginationContainer = document.querySelector(".pagination");
const todosContainer = document.querySelector(".todos");

// let id = 10; //taking by default for learning purpose
let currentPage = 1;
const perPage = 5;

const createPagination = (totalPages) => {
  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const PageButton = document.createElement("button");
    PageButton.innerText = i;

    PageButton.addEventListener("click", () => {
      currentPage = i;
      fetchTodos();
    });

    paginationContainer.appendChild(PageButton);
  }
};

const displayTodos = (todos) => {
  todosContainer.innerHTML = "";
  todos.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("todo-item");

    const todoItem = document.createElement("p");
    todoItem.innerHTML = element.text;

    const subDiv = document.createElement("div");

    const status = document.createElement("p");
    status.innerText = element.status ? "Done" : "To be done";

    const toggleButton = document.createElement("button");
    toggleButton.classList.add("toggle-btn");
    toggleButton.textContent = "Done?! Toggle";

    toggleButton.addEventListener("click", async () => {
      await fetch(`http://localhost:3000/todos/${element.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          status: !element.status,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchTodos();
    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", async () => {
      await fetch(`http://localhost:3000/todos/${element.id}`, {
        method: "DELETE",
      });
      fetchTodos();
    });

    subDiv.append(status, toggleButton, deleteButton);

    div.append(todoItem, subDiv);

    todosContainer.appendChild(div);
  });
};


// const button = document.getElementById("add-todo").addEventListener("click",addTodo)
button.addEventListener("click", () => {
    addTodo(); //in case, want to pass param,and also want to give more functionality or operation
  });

async function addTodo() {
  const todo = input.value;

  if (!todo) {
    show.innerHTML = `<p>Please enter a To-Do!</p>`;
    return;
  }
  try {
    const res = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // "id":String(id), //json gives itself //no longer needed for now.
        text: todo,
        status: false,
      }),
    });
    // id++; //no longer needed
    input.value = "";
    fetchTodos();
  } catch (err) {
    console.log("Error", err);
  }
}

sortButton.addEventListener("click", () => {
  fetchTodos("status=false");
});

filterButton.addEventListener("click", () => {
  fetchTodos("_sort=text");
});

async function fetchTodos(filterQuery) {
  const apiURL = filterQuery ? `http://localhost:3000/todos?_page=${currentPage}&_per_page=${perPage}&${filterQuery}` : `http://localhost:3000/todos?_page=${currentPage}&_per_page=${perPage}`;
  try {
    const res = await fetch(apiURL);
    const data = await res.json();
    console.log(data);
    displayTodos(data.data);
    createPagination(data.pages);
  } catch (err) {
    console.log("Error", err);
  }
}

fetchTodos();

// Load todos from localStorage, or start with an empty array if none exist
let todos = JSON.parse(localStorage.getItem("todos")) || [];
console.log(todos);


// Function to render the to-do list
function renderTodos() {
  const todoList = document.querySelector(".todo-list");
  todoList.innerHTML = ""; // Clear the list before rendering

  todos.forEach((todo) => {
    // Create a div for each todo item
    const todoItem = document.createElement("div");
    todoItem.className = `todo-item ${todo.isDone ? "done" : ""}`;
    todoItem.setAttribute("data-id", todo.id);

    // Create a span to display the todo item text
    const todoText = document.createElement("span");
    todoText.textContent = todo.item;

    // Create a checkbox to mark the todo as done
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.isDone;
    checkbox.addEventListener("change", (event) => {
      toggleTodoDone(todo.id);
    });

    // Create a delete button to remove the todo
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteTodo(todo.id));

    // Append the elements to the todo item
    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteButton);

    // Append the todo item to the list
    todoList.appendChild(todoItem);
  });
}

// Function to toggle the 'isDone' status of a todo
function toggleTodoDone(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      todo.isDone = !todo.isDone;
    }
    return todo;
  });
  saveTodos();
  renderTodos();
}

// Function to delete a todo
function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  saveTodos();
  renderTodos();
}

// Function to add a new todo
function addTodo(item) {
  const newTodo = {
    id: Date.now(), // Unique ID based on timestamp
    item: item,
    isDone: false
  };
  todos.push(newTodo);
  saveTodos();
  renderTodos();
}

// Function to save todos to localStorage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Add event listener to the "Add Task" button
document.getElementById("add-todo").addEventListener("click", () => {
  const todoInput = document.getElementById("todo-input");
  const todoText = todoInput.value.trim();
  if (todoText) {
    addTodo(todoText);
    todoInput.value = ""; // Clear the input field
  }
});

// Initial render of the todos
renderTodos();

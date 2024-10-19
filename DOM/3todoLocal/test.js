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
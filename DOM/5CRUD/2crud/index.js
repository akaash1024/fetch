// Constants
let mainSection = document.getElementById("data-list-wrapper");
let loadDataButton = document.getElementById("load-data");
let saveButton = document.getElementById("save-btn");
let deleteButton = document.getElementById("delete-btn");
let userIdInput = document.getElementById("user-id");
let userNameInput = document.getElementById("user-name");
let userEmailInput = document.getElementById("user-email");
let url = "https://reqres.in/api/users";

// Event listeners
loadDataButton.addEventListener("click", fetchAndRenderUsers);
saveButton.addEventListener("click", saveUser);
deleteButton.addEventListener("click", deleteUser);

function fetchUsers() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let firstUser = data.data[1];
      console.log(firstUser);
      let card = getCard(
        firstUser.id,
        firstUser.first_name,
        firstUser.email,
        firstUser.avatar
      );
      mainSection.append(card);
    });
}

// Fetch & render users
function fetchAndRenderUsers() {
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data); // Check if data is correctly fetched
      mainSection.innerHTML = ""; // Clear the section before appending new cards
      let cardList = getCardList(data.data); // Pass only the `data` array, fix here
      mainSection.append(cardList);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}


function getCardList(users) {
  const cardList = document.createElement("div");
  cardList.classList.add("card-list");

  users.forEach((user) => {
    let card = getCard(
      user.id,
      `${user.first_name} ${user.last_name}`,
      user.email,
      user.avatar
    );
    cardList.append(card);
  });

  return cardList;
}

function getCard(userId, fullName, email, imageUrl) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-id", userId);

  const cardImage = document.createElement("div");
  cardImage.classList.add("card-image");
  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = "user avatar";
  cardImage.append(img);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card-item", "card-title");
  cardTitle.innerText = fullName;

  const cardDescription = document.createElement("div");
  cardDescription.classList.add("card-item", "card-description");
  cardDescription.innerText = email;

  const cardEdit = document.createElement("a");
  cardEdit.href = "#";
  cardEdit.classList.add("card-item", "card-link");
  cardEdit.innerText = "EDIT";
  cardEdit.addEventListener("click", () =>
    populateForm(userId, fullName, email)
  );

  card.append(cardImage, cardTitle, cardDescription, cardEdit);
  return card;
}

// Populate form when 'Edit' is clicked
function populateForm(id, name, email) {
  userIdInput.value = id;
  userNameInput.value = name;
  userEmailInput.value = email;
}

// Save user (create or update)
function saveUser() {
  const userId = userIdInput.value;
  const userName = userNameInput.value;
  const userEmail = userEmailInput.value;

  if (userId) {
    // Update existing user
    fetch(`${url}/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: userName, email: userEmail })
    })
      .then((res) => res.json())
      .then(() => {
        alert("User updated successfully!");
        fetchAndRenderUsers();
      });
  } else {
    // Create new user
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: userName, email: userEmail })
    })
      .then((res) => res.json())
      .then(() => {
        alert("User created successfully!");
        fetchAndRenderUsers();
      });
  }
}

// Delete user
function deleteUser() {
  const userId = userIdInput.value;

  if (userId) {
    fetch(`${url}/${userId}`, {
      method: "DELETE"
    }).then(() => {
      alert("User deleted successfully!");
      clearForm();
      fetchAndRenderUsers();
    });
  } else {
    alert("Please select a user to delete.");
  }
}

// Clear form after delete
function clearForm() {
  userIdInput.value = "";
  userNameInput.value = "";
  userEmailInput.value = "";
}

// Constants
let mainSection = document.getElementById("data-list-wrapper");
let loadDataButton = document.getElementById("load-data");
let saveButton = document.getElementById("save-btn");
let deleteButton = document.getElementById("delete-btn");
let userIdInput = document.getElementById("user-id");
let userNameInput = document.getElementById("user-name");
let userEmailInput = document.getElementById("user-email");

//need to chekck  below line
const paginationContainer = document.querySelector(".pagination");

let curretnPage = 1;
let perPage = 10;

let apiURL = "https://640f55c04ed25579dc4c7a34.mockapi.io/employees";

const createPagination = (totalPages) => {
  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const PageButton = document.createElement("button");
    PageButton.innerText = i;

    PageButton.addEventListener("click", () => {
      currentPage = i;
      // fetchTodos();
    });

    paginationContainer.appendChild(PageButton);
  }
};

const fetchAndRenderUsers = async () => {
  try {
    let response = await fetch(apiURL);
    let users = await response.json();
    mainSection.innerHTML = "";
    console.log(users);
    createPagination(Math.ceil(users.length));
    let cardList = getCardList(users);
    mainSection.append(cardList);
  } catch (error) {
    console.log("Error fetching users:", error);
  }
};

// Event listeners
loadDataButton.addEventListener("click", fetchAndRenderUsers);
saveButton.addEventListener("click", saveUser);
deleteButton.addEventListener("click", deleteUser);

// Fetch & render users - using above async function
// function fetchAndRenderUsers() {
//   fetch(apiURL)
//     .then((response) => response.json())
//     .then((users) => {
//       mainSection.innerHTML = "";
//       console.log(users)
//       let cardList = getCardList(users);
//       mainSection.append(cardList);
//     })
//     .catch((error) => console.error("Error fetching users:", error));
// }

// Create card list
function getCardList(users) {
  const cardList = document.createElement("div");
  cardList.classList.add("card-list");

  users.forEach((user) => {
    let card = createCard(user.id, user.name, user.email);
    cardList.append(card);
  });

  return cardList;
}

// Create individual card
function createCard(userId, fullName, email) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardTitle = document.createElement("h5");
  cardTitle.innerText = fullName;

  const cardEmail = document.createElement("p");
  cardEmail.innerText = email;

  const cardEdit = document.createElement("button");
  cardEdit.innerText = "Edit";
  cardEdit.classList.add("button");
  cardEdit.addEventListener("click", () =>
    populateForm(userId, fullName, email)
  );

  card.append(cardTitle, cardEmail, cardEdit);

  return card;
}

// --- make sure that you understand everything until this point ---

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
    // Update user
    fetch(`${apiURL}/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        email: userEmail,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        alert("User updated successfully!");
        fetchAndRenderUsers();
      });
  } else {
    // Create new user
    fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: userName, email: userEmail }),
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
    fetch(`${apiURL}/${userId}`, {
      method: "DELETE",
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

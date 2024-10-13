// Load users data from local storage if it exists
const storedUsers = localStorage.getItem("users");
if (storedUsers) {
  users = JSON.parse(storedUsers); // Parse and load the users from local storage
  console.log(users, "Akash found it");
} else {
  //in other app wee coulld put emptu arr in such case
  console.log("Aakash, not found");
}



// Function to create and return a card element
function createCard(user) {
  // Create a div element for the card
  // Add a class "card" to the div
  let card = document.createElement("div");
  card.className = "card";

  // Set data-id and data-name attributes for the card
  card.setAttribute("data-id", user.id);
  card.setAttribute("data-name", user.name);

  // Create an h3 element for the card title (user name)
  let cardTitle = document.createElement("h3");

  // Create a p element for the card content (user description)
  let cardContent = document.createElement("p");

  // Create a small element for the user ID
  let userId = document.createElement("small");

  // Create a link element for "say hello"
  let helloLink = document.createElement("a");

  // Create a checkbox for the 'isActive' status
  let isActiveLabel = document.createElement("label");
  let isActiveCheckbox = document.createElement("input");

  // Set the text for the title, content, and user ID
  cardTitle.textContent = user.name;
  cardContent.textContent = user.description;
  userId.textContent = `ID: ${user.id}`;

  // Set the link text and href attribute
  helloLink.textContent = "say hello";
  helloLink.href = "#"; // Prevents page from refreshing

  // Add an event listener to the link to log a custom message when clicked
  helloLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior (no page refresh)
    const cardElement = event.target.closest(".card");
    const name = cardElement.getAttribute("data-name");
    const id = cardElement.getAttribute("data-id");
    console.log(`Hello from ${name} (ID: ${id})`); // Log the custom message
  });

  // Configure the checkbox for 'isActive'
  isActiveCheckbox.type = "checkbox";
  isActiveCheckbox.checked = user.isActive; // Set the checkbox based on the user's 'isActive' status
  isActiveCheckbox.classList.add("is-active-checkbox"); // Add a class to style later if needed
  isActiveCheckbox.addEventListener("change", function () {
    user.isActive = isActiveCheckbox.checked; // Update the user object when checkbox state changes
  });
  isActiveLabel.textContent = "Active: "; // Label for the checkbox
  isActiveLabel.appendChild(isActiveCheckbox);

  // Append the title, content, user ID, link, and checkbox to the card
  card.appendChild(cardTitle);
  card.appendChild(cardContent);
  card.appendChild(userId);
  card.appendChild(helloLink);
  card.appendChild(isActiveLabel); // Append the checkbox

  // Return the card element
  return card;
}

// Create an array of user objects, each having an id, name, description, and isActive status
let users = [
  {
    id: 1,
    name: "John Doe",
    description: "Loves hiking and outdoor adventures.",
    isActive: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    description: "Enjoys painting and reading.",
    isActive: false,
  },
  {
    id: 3,
    name: "Sam Wilson",
    description: "Avid traveler and coffee enthusiast.",
    isActive: true,
  },
];

// Select the .card-list div where the cards will be appended
let cardList = document.querySelector(".card-list");

// Loop through the users array and render a card for each user
users.forEach((user) => {
  let userCard = createCard(user); // Create a card for each user
  cardList.appendChild(userCard); // Append each card to the .card-list div
});





// Create a 'Save' button
let saveButton = document.createElement("button");
saveButton.textContent = "Save";

// Add a class to style the button with a minimal blue look
saveButton.classList.add("save-button");

// Add an event listener to the button to log and save the current state of users when clicked
saveButton.addEventListener("click", function () {
  // Save the updated users array to local storage
  localStorage.setItem("users", JSON.stringify(users));
  console.log(users); // Log the array of user objects with the current 'isActive' status
});

// Append the save button below the card list
document.body.appendChild(saveButton);

///Adding dark mode
let body = document.querySelector("body");
const darkModeBtn = document.createElement("button");
darkModeBtn.innerText = "Dark Mode";
darkModeBtn.addEventListener("click", () => {
  console.log("enable dark mode");
  body.style.backgroundColor = "#232323";
});
document.body.appendChild(darkModeBtn);

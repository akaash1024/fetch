//Sol 1

//Build a simple web application that allows users to enter their name in a text box and save it. When the user revisits the page, the application should display the previously saved name.

// ### Requirements

// 1. **Text Box**: A text box for users to enter their name.
// 2. **Submit Button**: A button to save the name to `localStorage`.
// 3. **Load Saved Name**: On page load, if a name is saved in `localStorage`, it should be displayed in the text box.
// 4. **Update Name**: Allow the user to update the saved name by entering a new name and clicking the submit button.

// document.addEventListener("DOMContentLoaded", function () {
//   const userNameInput = document.getElementById("userNameInput");
//   const submitBtn = document.getElementById("submitBtn");

//   // Load the username from localStorage and set it as the input's value
//   userNameInput.value = localStorage.getItem("userName") || "";

//   // Update localStorage when the submit button is clicked
//   submitBtn.addEventListener("click", function () {
//     localStorage.setItem("userName", userNameInput.value);
//     alert("Username saved!");
//   });
// });






//sol2 -----------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  const userNameInput = document.getElementById('userNameInput');
  const submitBtn = document.getElementById('submitBtn');

  // Function to get the user list array from localStorage
  function getUserList() {
      const userList = localStorage.getItem('userList');
      return userList ? JSON.parse(userList) : [];
  }

  // Set the last username from the user list array as the input's value
  const userList = getUserList();
  if (userList.length > 0) {
      userNameInput.value = userList[userList.length - 1];
  }

  // Update localStorage when the submit button is clicked
  submitBtn.addEventListener('click', function() {
      const newUser = userNameInput.value;
      const updatedUserList = getUserList();
      updatedUserList.push(newUser);
      localStorage.setItem('userList', JSON.stringify(updatedUserList));
      alert('Username added to list!');
  });
});

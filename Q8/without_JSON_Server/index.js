let users = [
    { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz" },
    { id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv" },
    { id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net" },
    { id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org" },
    { id: 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca" },
    { id: 6, name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info" },
    { id: 7, name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz" },
    { id: 8, name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me" },
    { id: 9, name: "Glenna Reichert", username: "Delphine", email: "Chaim_McDermott@dana.io" },
    { id: 10, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz" },
  ];

  function displayUserCard(user) {
    let card = document.createElement("div");
    card.classList.add("user-card");
 
    let name = document.createElement("h3")
    name.textContent = user.name;

    let userName = document.createElement("p");
    userName.textContent = user.username;

    let email = document.createElement("p")
    email.textContent = user.email;

   card.append(name,userName,email)
    return card;
  }

  function displayUserCards(users) {
    const container = document.getElementById("user-cards-container");
    container.innerHTML = ""; // Clear existing content

    users.forEach(user => {
      const card = displayUserCard(user);
      container.appendChild(card);
    });
  }

  displayUserCards(users);



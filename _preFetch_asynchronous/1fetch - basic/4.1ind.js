// Fetch the list of users
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    // Get the first user
    // console.log(users);
    const firstUser = users[0];
    // console.log("First User:", firstUser);

    // Fetch posts of the first user
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${firstUser.id}`);
  })
  .then((response) => response.json())
  .then((posts) => {
    // console.log("First User's Posts:", posts);
    // get the first post
    const firstPost = posts[0];
    console.log(firstPost);
    

    // console.log the first post
    // console.log(firstPost);

    // fetch the comments of the first post
    // https://jsonplaceholder.typicode.com/comments?postId=91


    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${firstPost.id}`);
    // return that promise
  })
  .then(res => res.json())
  .then(comments => {
    console.log(comments)
  })

  // chain .then and resolve and log all of the comments

  

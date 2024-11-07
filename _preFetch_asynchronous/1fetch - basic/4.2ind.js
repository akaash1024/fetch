// const usersData = fetch ('https://jsonplaceholder.typicode.com/users').then((res)=>res.json()).then((data)=>console.log(data[0]))

const usersData = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) => {
    const firstUser = users[0];

    return fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${firstUser.id}`
    );
  });

const postData = usersData
  .then((res) => res.json())
  .then((posts) => {
    const firstPost = posts[0];

    return fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${firstPost.id}`
    );
  });

const commentData = postData
  .then((res) => res.json())
  .then((comments) => console.log(comments));

console.log("from here", commentData);


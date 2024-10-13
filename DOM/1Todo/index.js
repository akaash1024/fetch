let todoData =  [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      userId: 1,
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false,
    },
    {
      userId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      userId: 1,
      id: 8,
      title: "quo adipisci enim quam ut ab",
      completed: true,
    },
    {
      userId: 1,
      id: 9,
      title: "molestiae perspiciatis ipsa",
      completed: false,
    },
    {
      userId: 1,
      id: 10,
      title: "illo est ratione doloremque quia maiores aut",
      completed: true,
    },
    {
      userId: 1,
      id: 11,
      title: "vero rerum temporibus dolor",
      completed: true,
    },
    {
      userId: 1,
      id: 12,
      title: "ipsa repellendus fugit nisi",
      completed: true,
    },
    {
      userId: 1,
      id: 13,
      title: "et doloremque nulla",
      completed: false,
    },
    {
      userId: 1,
      id: 14,
      title: "repellendus sunt dolores architecto voluptatum",
      completed: true,
    },
    {
      userId: 1,
      id: 15,
      title: "ab voluptatum amet voluptas",
      completed: true,
    },
    {
      userId: 1,
      id: 16,
      title: "accusamus eos facilis sint et aut voluptatem",
      completed: true,
    },
    {
      userId: 1,
      id: 17,
      title: "quo laboriosam deleniti aut qui",
      completed: true,
    },
    {
      userId: 1,
      id: 18,
      title: "dolorum est consequatur ea mollitia in culpa",
      completed: false,
    },
    {
      userId: 1,
      id: 19,
      title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
      completed: true,
    },
    {
      userId: 1,
      id: 20,
      title: "ullam nobis libero sapiente ad optio sint",
      completed: true,
    },
  ];
  
  // your solution here.
  
  let todoContainer = document.getElementById('todoContainer');
  
  function createEachTodo (eachTodoData){
    var testDiv = document.createElement('div');
    testDiv.classList.add('todoItem');
    
    let checkBtn = document.createElement('input');
    checkBtn.type = 'checkbox';
    
    checkBtn.checked = eachTodoData.completed;
    // checkBtn.checked = true;
    
    
    checkBtn.addEventListener("change",()=>{
      eachTodoData.completed = checkBtn.checked;
      if(eachTodoData.completed){
        testDiv.classList.add('completed');
      }
      else{
        testDiv.classList.remove('completed');
      }
    })
    
    
    
    let task = document.createElement('h3');
    task.innerText = eachTodoData.title;
    
    testDiv.append(checkBtn,task);
    return testDiv;
    
  }
  
  
  function processigTodos(todoData){
    
    todoData.forEach((e)=>{
      
      // let eachTodo = createEachTodo(e)
      todoContainer.append(createEachTodo(e))
    });
  };
  
  processigTodos(todoData);
  






  // let checkBtn = document.getElementsByTagName('input');
  
  // // Loop through each input element in the HTMLCollection
  // for (let i = 0; i < checkBtn.length; i++) {
  //   // Add an event listener to each checkbox
  //   checkBtn[i].addEventListener("change", function(e) {
  //     if (checkBtn[i].checked){
  //       checkBtn[i].parentElement.classList.add('completed');
  //     }
  //     else{
  //       checkBtn[i].parentElement.classList.remove('completed');
  //     }
  //   });
  // }
  
  
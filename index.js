const newTodo = () => {
  let tag = $('#tag').val();
  let note = $('#note').val();

  fetch("https://ba2w3lgnm5.execute-api.us-west-1.amazonaws.com/prod/todos", {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({"note": `${note}`, "tag": `${tag}`})
  }).then(response => getTodos())
  .then(todos => $('#note').val(''));
}

const getTodos = () => {
  $(".todo-list").empty();
  fetch("https://ba2w3lgnm5.execute-api.us-west-1.amazonaws.com/prod/todos")
    .then(response => response.json())
    .then(todos => listTodos(todos))
    .catch(error => console.error({error}));
};

const listTodos = (todos) => {
  todos = todos["Items"].sort((a,b) => (b.created_at) - (a.created_at));
  todos.forEach(todo => {
    $('.todo-list').append(`
      <div class='todos'>
        <div>${todo.note}</div>
        <div>${todo.tag}</div>
        <div>${new Date(todo.created_at * 1000).toLocaleDateString()} ${new Date(todo.created_at * 1000).toLocaleTimeString()}</div>
      </div>
      <br>
      `);
  });
};



getTodos()

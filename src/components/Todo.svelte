<script>
  import { getClient, query, mutate } from "svelte-apollo";
  import {GETTODO, ADDTODO, DELETETODO, CHECKTODO, UNCHECKTODO } from "./../utils/index.js"

  let todoEdit = "";
  const client = getClient();
  const todoOp = query(client, { query: GETTODO });

  function addTodo() {
    const todoAdd = mutate(client, {
      mutation: ADDTODO,
      variables: {
        todoEdit
      }
    })
      .then(data => {
        todoEdit = "";
        todoOp.refetch();
      })
      .catch(e => {
        console.error("error: ", e);
      });
  }
  function deleteTodo(id){
    mutate(client, {mutation: DELETETODO, 
      variables: {
        id
      }
    })
    .then(data => {
        todoEdit = "";
        todoOp.refetch();
      })
      .catch(e => {
        console.error("error: ", e);
      });
  }
  function checkTodo(id, hasDone){
    const checkTodoCommand = !hasDone ? CHECKTODO : UNCHECKTODO; 
    mutate(client, {mutation: checkTodoCommand, 
      variables: {
        id, 
        hasDone
      }
    })
    .then(data => {
        todoEdit = "";
        todoOp.refetch();
      })
      .catch(e => {
        console.error("error: ", e);
      });

  }
//リストのボタンをクリックでリスト削除/リストアップを操作できる
</script>

<div class="todos-container">
  <h2>Todos</h2>
  <form on:submit|preventDefault={addTodo}>
    <input placeholder="new todo" bind:value={todoEdit} />
    <button method="submit">Submit</button>
  </form>

  {#await $todoOp}
    <p>.. loading</p>
  {:then data}

    {#each data.data['allTodos']['nodes'] as todo, i}
    <div class="todo-container">
      <input type="checkbox" id={i} name={i} on:click={()=>{checkTodo(todo.id, todo.done)}}/>
      <label for={i} >
        <p class:done={todo.done}>{todo.title}</p>
      </label>
      <button on:click={()=> {deleteTodo(todo.id)}}>delete</button>
    </div>
    {/each}
  {:catch e}
    {e}
  {/await}
</div>

<style>
  button{
    cursor: pointer;
  }
  .todos-container{
    text-align: center;
  }
  .todos-container > form {
    margin-bottom: 30px;
  }
  .todos-container > .todo-container {
    display: flex;
    gap: 10px;
    justify-content: center;
  }
  .done {
    text-decoration: line-through;
  }
</style>


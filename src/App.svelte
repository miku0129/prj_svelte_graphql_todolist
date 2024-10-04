<script>
  import ApolloClient from "apollo-boost";
  import { setClient } from "svelte-apollo";
  import Todo from "./components/Todo.svelte";

  export let appTitle;

  const client = new ApolloClient({
    uri: "http://localhost:5050/graphql",

    onError: ({ networkError, graphQLErrors }) => {
      console.log("graphQLErrors", graphQLErrors);
      console.log("networkError", networkError);
    }
  });

  setClient(client);
</script>


<h5>{appTitle}</h5>
<div class="centrify">
  <Todo />
</div>

  <style>
    .centrify {
      text-align: center;
    }
  </style>

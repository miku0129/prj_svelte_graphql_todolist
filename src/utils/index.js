import { gql } from "apollo-boost";

export const GETTODO = gql`
{
  allTodos {
    nodes {
      id
      title
      done
    }
  }
}
`;

export const ADDTODO = gql`
mutation($todoEdit: String!) {
  createTodo(input: { todo: { title: $todoEdit, done: false } }) {
    todo {
      title
      done
    }
  }
}
`;

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
  mutation ($todoEdit: String!) {
    createTodo(input: { todo: { title: $todoEdit, done: false } }) {
      todo {
        title
        done
      }
    }
  }
`;

export const CHECKTODO = gql`
  mutation ($id: Int!) {
    updateTodoById(input: { id: $id, todoPatch: { done: true } }) {
      todo {
        id
        title
        done
      }
    }
  }
`;
export const UNCHECKTODO = gql`
  mutation ($id: Int!) {
    updateTodoById(input: { id: $id, todoPatch: { done: false } }) {
      todo {
        id
        title
        done
      }
    }
  }
`;


export const DELETETODO = gql`
  mutation ($id: Int!) {
    deleteTodoById(input: { id: $id }) {
      deletedTodoId
    }
  }
`;

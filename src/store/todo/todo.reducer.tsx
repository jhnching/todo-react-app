import { LOAD_TODOS_COMPLETE, TodoActions } from "./todo.actions";
import { Todo } from "./types/todo.type";

export type TodoState = {
  todos: Todo[]
}

const initialState: TodoState = {
  todos: []
}

export const todoReducer = (state = initialState, action: TodoActions) => {
  switch(action.type) {
    case LOAD_TODOS_COMPLETE:
      return {
        ...state,
        todos: action.payload
      }
    default:
      return state;
  }
}
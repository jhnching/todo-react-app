import { combineReducers } from "redux";

import { todoReducer, TodoState } from "./todo/todo.reducer";

export type AppState = {
  todo: TodoState
}

export const rootReducer = combineReducers({ todo: todoReducer });
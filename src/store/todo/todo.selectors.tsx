import { AppState } from "../root.reducer";

export const todoState = (state: AppState) => state.todo;
export const todos = (state: AppState) => todoState(state).todos;
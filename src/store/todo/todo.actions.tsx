import { action, ActionType } from 'typesafe-actions';

import { Todo } from './types/todo.type';

export const LOAD_TODOS = 'LOAD_TODOS';
export const LOAD_TODOS_COMPLETE = 'LOAD_TODOS_COMPLETE';

export const loadTodos = () => action(LOAD_TODOS);

export const loadTodosComplete = (todos: Todo[]) => action(LOAD_TODOS_COMPLETE, todos);

export type TodoActions = ActionType<typeof loadTodos | typeof loadTodosComplete>
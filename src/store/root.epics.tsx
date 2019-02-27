import { combineEpics } from 'redux-observable';

import { todoEpic } from './todo/todo.epics';

export const rootEpic = combineEpics(todoEpic);
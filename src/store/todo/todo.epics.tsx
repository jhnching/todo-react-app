import { Action } from 'redux';
import { ofType, ActionsObservable } from 'redux-observable';
import { map, delay, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import { LOAD_TODOS } from './todo.actions';
import { loadTodosComplete } from './todo.actions';

export const todoEpic = (action$: ActionsObservable<Action>) => action$.pipe(
  ofType(LOAD_TODOS),
  delay(2000),
  switchMap(() => ajax.get('https://jsonplaceholder.typicode.com/todos')),
  map(ajaxResponse => ajaxResponse.response),
  map(todos => loadTodosComplete(todos))
)
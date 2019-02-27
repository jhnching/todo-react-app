import React, { Component } from 'react';
import { connect } from 'react-redux';

import { todos } from './store/todo/todo.selectors';
import { loadTodos } from './store/todo/todo.actions';
import { AppState } from './store/root.reducer';
import { Todo } from './store/todo/types/todo.type';

type Props = {
  loadTodos: Function,
  todos: Todo[]
}

class App extends Component<Props> {
  componentDidMount() {
    this.props.loadTodos();
  }

  render() {
    return (
      <div className="App">
        <ul>
          {
            this.props.todos.map(todo => (<li key={todo.id}>
              {todo.title}
            </li>))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  todos: todos(state)
});

const mapDispatchToProps = {
  loadTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

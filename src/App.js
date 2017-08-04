import React, { Component } from 'react';
import User from './actions/User';
import UsersWrapper from './components/users-wrapper';
import TodoList from './components/todo-list';
import AddTodo from './components/add-todo';

class App extends Component {
    render() {
        return (
            <div>
                <UsersWrapper />
                <AddTodo />
                <TodoList />
            </div>
        );
    }
}

export default App
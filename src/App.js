import React, { Component } from 'react';
import User from './actions/User';
import UsersWrapper from './components/users-wrapper';
import TodoList from './components/todo-list';
import AddTodo from './components/add-todo';
import TestComponent from './components/test-component';

class App extends Component {
    render() {
        return (
            <div>
                <UsersWrapper />
                <AddTodo />
                <TodoList />
                <TestComponent />
            </div>
        );
    }
}

export default App
import React, { Component } from 'react';
import User from './actions/User';
import UsersWrapper from './components/users-wrapper';

class App extends Component {
    render() {
        return (
            <div>
                <UsersWrapper />
            </div>
        );
    }
}

export default App
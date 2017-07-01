import React, { Component } from 'react';
import { connect } from 'react-redux';

class UsersList extends Component {
    render() {
        const users = this.props.users.map(user => {
            return (
                <li key={user._id} onClick={() => this.props.onUserClick(user)}>
                    {user.name}        
                </li>
            )
        })

        return (
            <ul>{users}</ul>
        )
    }
}

class App extends Component {
    render() {
        const { users, currentUser } = this.props;
        let UserComponent;

        if(users.length === 0) {
            //данные еще не загрузились
            UserComponent = <div>Loading...</div>
        } else {
            UserComponent = (
                <UsersList users={users}
                 onUserClick={user => this.props.setCurrentUser(user)} />
            )    
        }
        
        return (
            <div>
                { UserComponent }
                { currentUser ? <UserDetails user={currentUser} /> : null }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function mapActionsToProps(dispatch) {
    return {
        setCurrentUser(user) {
            dispatch({
                type: 'SET_CURRENT_USER_ID',
                payload: user._id
            });
        }
    }
}

export default connect(mapStateToProps, mapActionsToProps)(App);
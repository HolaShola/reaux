import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './actions/User'

class UserDetails extends Component {
    render() {
        return (
            <div>
                <div>{this.props.user.name}</div>
                <div>{this.props.user.age}</div>
                <div>{this.props.user.company}</div>
            </div>
        )
    }
}

class UsersList extends Component {
    render() {
        const users = this.props.users.map(user => {
            return (
                <li
                    key = {user._id}
                    onClick = {
                        () => {
                            console.log('click on user');
                            this.props.onUserClick(user)
                        }
                    }
                >
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
        users: state.users,
        currentUser: state.users.find(user => user._id == state.currentUserId)
    }
}

function mapActionsToProps(dispatch) {
    return {
        // setCurrentUser : (user) =>  dispatch(User.getActionCurrent(user))
        setCurrentUser(user) {
            dispatch({
                type: 'SET_CURRENT_USER_ID',
                payload: user._id
            });
        }
    }
}

export default connect(mapStateToProps, mapActionsToProps)(App);
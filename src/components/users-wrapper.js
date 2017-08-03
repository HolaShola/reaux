import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserDetails from './user-details';
import UsersList from './users-list';

class UsersWrapper extends Component {
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

export default UsersWrapper = connect(mapStateToProps, mapActionsToProps)(UsersWrapper);

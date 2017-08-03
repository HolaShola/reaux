import React, { Component } from 'react';

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

export default UsersList
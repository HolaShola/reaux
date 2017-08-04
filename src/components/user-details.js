import React, { Component } from 'react';

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

export default UserDetails
import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return (
            <div className='todoItem'>
                <div>{this.props.name}</div>
                <button onClick={() => this.props.onClick()}>delete</button>
                <button>color</button>
            </div>
        )
    }
}

export default TodoItem
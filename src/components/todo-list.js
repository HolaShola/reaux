import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from './todo-item';

/*<ul>
    {
        this.props.todoList.map(item => <li>{item}</li>)
    }
</ul>*/

class TodoList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.todoList.map(item => <TodoItem name={item} onClick={() => this.props.add(item)} />)
                }
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        todoList: state.todoList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        add(item) {
            dispatch({ type: 'DELETE', payload: item })
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddTodo extends Component {
    render() {
        let input;
        return (
           <div>
                <form onSubmit={e => {
                    e.preventDefault()
                    this.props.addTodo(input.value)
                    input.value = ''
                }}>
                    <input 
                        ref={inputValue => {input = inputValue}}
                    />
                    <button>add</button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo(val) {
            dispatch({ type: 'ADD_TODO', payload: val})
        }
    };
}

export default connect(null, mapDispatchToProps)(AddTodo)
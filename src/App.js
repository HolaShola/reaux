import React, { Component } from 'react';

export default class App extends Component {
    render() {
        return (
            <div>
                <div>{ this.props.counter }</div>
                <button>+</button>
                <button>-</button>
                <button>redux-second branch</button>
                <p>second_branch</p>
            </div>
        );
    }
}

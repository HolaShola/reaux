import React, { Component } from 'react';
import InnerComponent from './inner-component';

class TestComponent extends Component {
    constructor(props) {
        super(props);
    }

    func_1 = () => console.log('hello');

    func_11 = (x) => console.log(x); 

    func_2 = (x) => this.func_1();

    render() {
        return (
            <div className='test_component'>
                <div>
                    <p>Test component</p>
                </div>
                <InnerComponent
                    func_1={this.func_1}
                    func_11={this.func_11}
                    func_2={this.func_2}
                />
            </div>
        )
    }
}

export default TestComponent
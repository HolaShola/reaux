import React, { Component } from 'react';
import { Map, List, toJS } from 'immutable';

class InnerComponent extends Component {
    constructor(props) {
        super(props);
    }

    func_1 = () => this.func_11();

    func_2 = (x) => this.func_22();

    render() {
        let x = new List([11, 12, 13]);
        let y = new Map({
          1: {},
          2: {}  
        })
        let units = new Map({
            0: 'zero',
            1: 'one',
            2: 'two'
        })
        const defaultStore = new Map({
            accountStructure: new Map({
              relations: new Map({
                2: {
                  1: {},
                  2: {}
                },
                0: {}
              }),
              units: new List([
                {0: 5},
                {1: {}},
                {2: {}}
              ]),
              settings: new Map({
                moveInID: 17,
                focusedUnit: 11,
                unitRoles: [1, 2, 3]
              })
            })
          });

//        console.log(defaultStore.get('accountStructure').getIn(['settings', 'unitRoles']));
        console.log(defaultStore.get('accountStructure').getIn(['settings', 'unitRoles']));
        return (
            <div>
                <div>
                    <p>Innerr component</p>
                </div>
            </div>
        )
    }
}

export default InnerComponent
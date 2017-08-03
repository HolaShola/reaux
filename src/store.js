import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import data from './data.json';
import appReducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(appReducer, composeEnhancers(
    applyMiddleware(logger,dataLoadingMiddleware)
));

function logger ({ getState }) {
    return function (next) {
        return function (action) {
            console.log('will dispatch', action)

            const state = next(action);

            console.log('state after dispatch', getState())

            return state;
        }
    }
}

function dataLoadingMiddleware({ getState, dispatch }) {
    return function (next) {
        return function (action) {
            if (action.type === 'LOAD_DATA') {
                loadData().then(data => {
                    dispatch({ type: 'RECEIVE_DATA', payload: data })
                });
            }

            return next(action);
        }
    }
}

window.store = store;

function loadData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(data), 3000)
    });
}

// dispatch ASYNC_ACTION -> middleware -> doAsync().then(data => dispatch()) -> reducer

export default store;
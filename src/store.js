import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import appReducer from './reducer';
import logger from './logger/logger';
import dataLoadingMiddleware from './logger/data-load-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(appReducer, composeEnhancers(
    applyMiddleware(logger,dataLoadingMiddleware)
));

window.store = store;

// dispatch ASYNC_ACTION -> middleware -> doAsync().then(data => dispatch()) -> reducer

export default store;
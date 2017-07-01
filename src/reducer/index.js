import { combineReducers } from 'redux';
import usersReducer from './users-reducer';
import CurrentUserReducer from './current-user-reducer.js';

const appReducer = combineReducers({
    users: usersReducer,
    currentUserId: CurrentUserReducer,         
});

export default appReducer;
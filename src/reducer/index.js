import { combineReducers } from 'redux';
import usersReducer from './users-reducer';
import CurrentUserReducer from './current-user-reducer';
import TodoListReducer from './todo-list-reducer';

const appReducer = combineReducers({
    users: usersReducer,
    currentUserId: CurrentUserReducer,
    todoList: TodoListReducer,        
});

export default appReducer;
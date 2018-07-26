import { combineReducers } from 'redux';
import SettingsReducer from './SettingsReducer';
import MyReducer from './MyReducer';

const appReducer = combineReducers({
  settings: SettingsReducer,
  myData: MyReducer,
});

export default appReducer;

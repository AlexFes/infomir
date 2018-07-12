import { combineReducers } from 'redux';
import { onclickReducer } from './reducers';

export default combineReducers({ onclick: onclickReducer });
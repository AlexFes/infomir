import { combineReducers } from 'redux';
import * as reducers from './reducers';

export default combineReducers({
    onclick: reducers.onclickReducer,
    store: reducers.storeReducer,
    newsfeed: reducers.newsReducer,
    auth: reducers.authReducer
});
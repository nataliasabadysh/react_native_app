

import { createStore, combineReducers } from 'redux';
import { counterReducer, userList, amimationReduce } from './reducers/rootReducer';
const root =  combineReducers({
    animation: amimationReduce,
    counter: counterReducer,
    user: userList
});

export const store = createStore(root);
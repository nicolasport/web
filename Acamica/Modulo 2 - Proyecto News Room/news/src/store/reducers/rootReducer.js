import { ADD_NEWS, CLEAR_NEWS } from '../actionsTypes'
import { combineReducers } from 'redux';

// reducers.js
export const repos = (state = [], action) => {
    switch (action.type) {
        case ADD_NEWS:
            return action.repos;
        case CLEAR_NEWS:
            return [];
        default:
            return state;
    }
};

export const reducers = combineReducers({ repos });
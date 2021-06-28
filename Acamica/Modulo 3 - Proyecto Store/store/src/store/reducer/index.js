import { productsReducer } from './productReducer';
import { userReducer } from './userReducer';
import { combineReducers } from 'redux';

export const reducers = combineReducers({ 
    productsReducer, 
    userReducer });
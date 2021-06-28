import {
    GET_PRODUCTS,
    REDEEM_PRODUCT,
    GET_CATEGORIES,
    CLEAR_PRODUCTS
} from '../actions/types'

export const productsReducer = (state = [], action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                productsList: action.productsList};
        case REDEEM_PRODUCT:
            return {
                ...state,
                successBuy: action.successBuy};
        case GET_CATEGORIES:
            return action.productsReducer;
        case CLEAR_PRODUCTS:
            return [];
        default:
            return state;
    }
};
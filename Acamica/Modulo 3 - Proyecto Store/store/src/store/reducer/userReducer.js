import {
    GET_USER_INFO,
    GET_REDEEM_HISTORY
} from '../actions/types'


export const userReducer = (state = [], action) => {
    switch (action.type) {
        case GET_USER_INFO:
            return {
                ...state,
                userInfo: action.userInfo};
        case GET_REDEEM_HISTORY:
            return {
                ...state,
                redeemHistory: action.redeemHistory};
        default:
            return state;
    }
};
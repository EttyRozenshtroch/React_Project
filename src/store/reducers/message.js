import * as actionTypes from "../ActionTypes";
const initialState = {
    message: null
}
export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        case actionTypes.REMOVE_MESSAGE:
            return {
                ...state,
                message: null
            }

    }
    return state;
}
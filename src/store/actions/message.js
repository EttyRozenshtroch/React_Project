import * as actionTypes from "../ActionTypes";

export const setMessage = (message) => {
    return {
        type: actionTypes.SET_MESSAGE,
        payload: message
    }
}
export const removeMessage = () => {
    return {
        type: actionTypes.REMOVE_MESSAGE,
    }
}
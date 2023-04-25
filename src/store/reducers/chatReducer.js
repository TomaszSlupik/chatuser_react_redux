import {
    SET_USERNAME
} from '../consts'


const initstate = {
    username: "Default",
}

export const chatReducer = (state=initstate, action) => {
    switch (action.type) {
        case SET_USERNAME:
            return {
                ...state, 
                username: action.payload.username
            }
        case "":
            return {
                ...state, 
            }
            default:
                return state
    }
}
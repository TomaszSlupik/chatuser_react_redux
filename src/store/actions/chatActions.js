import { SET_USERNAME } from "../consts";

export const setUserName = (username) => {
    return {
        type: SET_USERNAME,
        payload: {
            username
        }
    }
}

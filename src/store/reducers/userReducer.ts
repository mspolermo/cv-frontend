import { userInit } from "../../types/IUser"
import { UserAction, UserState, UserActionTypes } from "../../types/userStore"

const initialState: UserState = {
    user: userInit,
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER :
            return {loading: true, error: null, user: initialState.user }
        case UserActionTypes.FETCH_USER_SUCCESS :
            return {loading: false, error: null, user: action.payload}
        case UserActionTypes.FETCH_USER_ERROR :
            return {loading: false, error: action.payload, user: initialState.user }
        default:
            return state
    }
}
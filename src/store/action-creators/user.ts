import { Dispatch } from "redux"
import { UserAction, UserActionTypes } from "../../types/userStore"
import type {} from 'redux-thunk/extend-redux'
import axios from "axios"

export const fetchUser = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch( {type: UserActionTypes.FETCH_USER})
            const response = await axios.get('about.json')
            setTimeout( () => {
                dispatch({type: UserActionTypes.FETCH_USER_SUCCESS, payload: response.data})    
            }, 500)
        } catch (e) {
            dispatch( {type: UserActionTypes.FETCH_USER_ERROR, payload: 'Произошла ошибка'} )
        }
    }
}
import { Dispatch } from "redux"
import type {} from 'redux-thunk/extend-redux'
import axios from "axios"
import { MainAction, MainActionTypes } from "../../types/mainStore"

export const fetchMain = () => {
    return async (dispatch: Dispatch<MainAction>) => {
        try {
            dispatch( {type: MainActionTypes.FETCH_MAIN})
            const response = await axios.get('about.json')
            setTimeout( () => {
                dispatch({type: MainActionTypes.FETCH_MAIN_SUCCESS, payload: response.data})    
            }, 500)
        } catch (e) {
            dispatch( {type: MainActionTypes.FETCH_MAIN_ERROR, payload: `${e}` } )
        }
    }
}
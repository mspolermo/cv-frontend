import { userInit } from "../../types/IUser"
import { MainAction, MainActionTypes, MainState } from "../../types/mainStore"

const initialState: MainState = {
    mainData: userInit,
    mainLoading: false,
    mainError: null
}

export const mainReducer = (state = initialState, action: MainAction): MainState => {
    switch (action.type) {
        case MainActionTypes.FETCH_MAIN :
            return {mainLoading: true, mainError: null, mainData: initialState.mainData }
        case MainActionTypes.FETCH_MAIN_SUCCESS :
            return {mainLoading: false, mainError: null, mainData: action.payload}
        case MainActionTypes.FETCH_MAIN_ERROR :
            return {mainLoading: false, mainError: action.payload, mainData: initialState.mainData }
        default:
            return state
    }
}
import { IUser } from "./IUser";

export enum MainActionTypes {
    FETCH_MAIN = 'FETCH_MAIN',
    FETCH_MAIN_SUCCESS = 'FETCH_MAIN_SUCCESS',
    FETCH_MAIN_ERROR = 'FETCH_MAINERROR'
}

export interface MainState {
    mainData: IUser;
    mainLoading: boolean;
    mainError: null | string;
}
interface FetchMainAction {
    type: MainActionTypes.FETCH_MAIN;
}
interface FetchMainSuccessAction {
    type: MainActionTypes.FETCH_MAIN_SUCCESS;
    payload: IUser
}
interface FetchMainErrorAction {
    type: MainActionTypes.FETCH_MAIN_ERROR;
    payload: string;
}

export type MainAction = FetchMainAction | FetchMainSuccessAction | FetchMainErrorAction;
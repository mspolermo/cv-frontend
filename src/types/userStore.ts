import { IUser } from "./IUser";

export enum UserActionTypes {
    FETCH_USER = 'FETCH_USER',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USER_ERROR = 'FETCH_USER_ERROR'
}

export interface UserState {
    user: IUser;
    loading: boolean;
    error: null | string;
}
interface FetchUsersAction {
    type: UserActionTypes.FETCH_USER;
}
interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USER_SUCCESS;
    payload: IUser
}
interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USER_ERROR;
    payload: string;
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction;



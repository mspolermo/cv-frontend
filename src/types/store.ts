interface IUser {
    "name": string,
    "photo": string,
    "summary" : string,
    "contacts": 
        {
            "type": "tel" | "mailto" | "any",
            "value": string
        }[],
    "skills": {
        "hard" : [string],
        "soft": [string] 
    },
    "projects" : 
        {
            "id": number,
            "name": string,
            "link": string,
            "tech": [string]
        }[],
    "works" : 
        {
            "title": string,
            "company": string,
            "start": string,
            "finish": string,
            "descriptionShort": [string],
            "descriptionFull": [string]
        }[],
    "education" : 
        {
            "title": string,
            "info": string,
            "start": string,
            "finish": string,
            "rank": string 
        } [],
    "about" : [
        string | {
            "head" : string,
            "value": [string]
        }
    ]
}

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


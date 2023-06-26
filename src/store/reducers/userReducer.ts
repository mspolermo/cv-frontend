import { UserAction, UserState, UserActionTypes } from "../../types/store"

const initialState: UserState = {
    user: {
        "name": "",
        "photo": "",
        "summary" : "",
        "contacts": 
            [{
                "type": "tel",
                "value": ""
            }],
        "skills": {
            "hard" : [""],
            "soft": [""] 
        },
        "projects" : 
            [{
                "id": 0,
                "name": "",
                "link": "",
                "tech": [""]
            }],
        "works" : 
            [{
                "title": "",
                "company": "",
                "start": "",
                "finish": "",
                "descriptionShort": [""],
                "descriptionFull": [""]
            }],
        "education" : 
            [{
                "title": "",
                "info": "",
                "start": "",
                "finish": "",
                "rank": "" 
            } ],
        "about" : [""]
    },
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
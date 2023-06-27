import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { mainReducer } from "./mainReducer";
import menuStatusReducer from "./menuStatusReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    main: mainReducer,
    menuStatus: menuStatusReducer
})

export type RootState = ReturnType<typeof rootReducer>
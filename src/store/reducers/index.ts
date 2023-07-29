import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { mainReducer } from "./mainReducer";
import menuStatusReducer from "./menuStatusReducer";
import themeReducer from "./themeReducer"


export const rootReducer = combineReducers({
    user: userReducer,
    main: mainReducer,
    menuStatus: menuStatusReducer,
    themeStyle: themeReducer
})

export type RootState = ReturnType<typeof rootReducer>
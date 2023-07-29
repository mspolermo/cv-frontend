import {createSlice} from "@reduxjs/toolkit"

export const themeReducer = createSlice({
name:'themeStyle',
initialState: {
    themeDark: false
},
reducers: {
    themeReducerDarkTrue: state => {
        state.themeDark = true
    },
    themeReducerDarkFalse: state => {
        state.themeDark = false
    }
}
})

export const {themeReducerDarkTrue, themeReducerDarkFalse} = themeReducer.actions

export default themeReducer.reducer
import {createSlice} from "@reduxjs/toolkit"

export const menuStatusSlice = createSlice({
name:'menuStatus',
initialState: {
    menuStatus: false
},
reducers: {
    menuStatusTrue: state => {
        state.menuStatus = true
    },
    menuStatusFalse: state => {
        state.menuStatus = false
    }
}
})

export const {menuStatusTrue, menuStatusFalse} = menuStatusSlice.actions

export default menuStatusSlice.reducer
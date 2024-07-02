import { createSlice } from "@reduxjs/toolkit";

const isColorSlice=createSlice({
    name:'isColor',
    initialState:false,
    reducers:{
        changeColor:(state,action)=>{
            return action.payload
        }
    }
})

export const {changeColor} = isColorSlice.actions;
export default isColorSlice.reducer
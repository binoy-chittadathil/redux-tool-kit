import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countReducer";
import isColorReducer from "./isColorReducer";

const store = configureStore({
    reducer:{
        count:countReducer,
        isColor:isColorReducer
    }
})

export default store
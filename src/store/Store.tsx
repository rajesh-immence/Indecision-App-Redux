import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../counter/counterSlice";
const store = configureStore({
    reducer: {
        counter : appSlice
    },
})

export default store;


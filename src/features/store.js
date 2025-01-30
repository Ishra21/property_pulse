import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice"
import message from "./message/messageSlice"
const store = configureStore({
    reducer :{
        auth ,message
    }
})
export default store;
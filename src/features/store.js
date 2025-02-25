import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice"
import message from "./message/messageSlice"
import propertyReducer from "../features/property/propertySlice"; // Import propertySlice

const store = configureStore({
    reducer :{
        auth ,message,
        property: propertyReducer,
    }
})
export default store;
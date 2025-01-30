import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name : "message",
    initialState :{
        inbox : [],
    isLoading : false,
    isError : false,
    isSuccess : false,
    errorMessage : ""
    },
    reducers : {},
    extraReducers : (builder) =>{

    }
})

export default messageSlice.reducer;


// get message 

export const getMessages = createAsyncThunk("FETCH/MSGS", async() =>{
console.log("Fetching messages")
})



// send message

export const sendMessage = createAsyncThunk("ADD/MSGS", async(formData)=>{
    console.log(formData)
})

// /

export const addProperty = createAsyncThunk("ADD/PROPERTY", async(formData) =>{
    console.log(formData)
})

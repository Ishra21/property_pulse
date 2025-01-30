import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./aurhService";


const userExist = JSON.parse(localStorage.getItem("user"))

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user : userExist || null,
    isLoading : false,
    isError : false,
    isSuccess : false,
    message : "",
  },
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(registerUser.pending, (state,action) =>{
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
    })
    .addCase(registerUser.fulfilled, (state,action) =>{
      state.isLoading = false
      state.isError = false
      state.isSuccess = true
      state.user = action.payload;
    })

    .addCase(registerUser.rejected, (state,action) =>{
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.isSuccess = false
    })
    .addCase(loginUser.pending, (state,action) =>{
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
    })
    .addCase(loginUser.fulfilled, (state,action) =>{
      state.isLoading = false
      state.isError = false
      state.isSuccess = true
      state.user = action.payload;
    })

    .addCase(loginUser.rejected, (state,action) =>{
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.isSuccess = false
    })

    .addCase(logOutUser.fulfilled, (state,action) =>{
      state.isLoading = false
      state.isError = false
      state.message = ""
      state.isSuccess = false
      state.user = null
    })

  },
});


export default authSlice.reducer;


// register user
export const registerUser = createAsyncThunk("AUTH/REGISTER", async(formData, thunkAPI) =>{
    // console.log(formData)
    try {
        return await authService.register(formData)
    } catch (error) {
        // console.log(error)
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})


// login user

export const loginUser = createAsyncThunk("AUTH/LOGIN", async(formData, thunkAPI) =>{
    // console.log(formData)
    try {
      return await authService.login(formData)
  } catch (error) {
      // console.log(error)
      const message = error.response.data.message
      return thunkAPI.rejectWithValue(message)
  }
})


// logout user

export const logOutUser = createAsyncThunk("AUTH/LOGOUT", async(formData) =>{
    // console.log("User Logged Out")
    localStorage.removeItem("user")
})
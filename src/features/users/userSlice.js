import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
    status:'idle',
    currentUser:null
}

export const loginWithEmail=createAsyncThunk(
    'users/loginWithEmail',
    async(values,thunkAPI)=>{
        const response=await axios.get(`http://localhost:4000/user/${values.email}`);
        return response.data;
    }
)

export const addUser=createAsyncThunk(
    'product/addProduct',
    async(item,thunkAPI)=>{
        const response=await axios.post("http://localhost:4000/user/",item);
        return response.data;
    }
)

const userSlice=createSlice({
    name:"usersInSlice",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(addUser.fulfilled,
                (state,action)=>{
                    state.currentUser=action.payload;
                }).addCase(loginWithEmail.fulfilled,
                    (state,action)=>{
                        state.currentUser=action.payload;
                    })
    }
})

export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
    currentUser:null,
}

export const loginWithEmail=createAsyncThunk(
    'users/loginWithEmail',
    async(values,thunkAPI)=>{
        const response=await axios.get(`http://localhost:4000/user/${values.email}`);
        return response.data;
    }
)

export const addUser=createAsyncThunk(
    'users/addUser',
    async(item,thunkAPI)=>{
        item.roll=2;
        const response=await axios.post("http://localhost:4000/user/",item);
        console.log("response------------------------------------",response);
        return response.data;
    }
)

const userSlice=createSlice({
    name:"usersInSlice",
    initialState,
    reducers:{
        logOut:{
            reducer:(state,action)=>{
                state.currentUser=null;
                state.roll=1;
                localStorage.clear();
            }
        },
        reloadUser:{
            reducer:(state,action)=>{
                state.currentUser=JSON.parse(localStorage.getItem("currUser"));
            }
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(addUser.fulfilled,
                (state,action)=>{
                    state.currentUser=action.payload;
                    state.roll=action.payload.roll;
                    localStorage.setItem("currUser", JSON.stringify(action.payload))
                }).addCase(loginWithEmail.fulfilled,
                    (state,action)=>{
                        state.currentUser=action.payload;
                        state.roll=action.payload.roll;
                        console.log(action.payload);
                        localStorage.setItem("currUser", JSON.stringify(action.payload))
                    }).addCase(addUser.rejected,
                        (state,action)=>{
                            console.log(action.error.message);
                            alert("email is already exist");
                        })
    }
})

export const {logOut,reloadUser}= userSlice.actions;
export default userSlice.reducer;
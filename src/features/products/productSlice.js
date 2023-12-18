import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState={
    status:'idle',
    Message:undefined,
    productsArr: [
        { id: 1, title: "product 1" },
        { id: 2, title: "product 2" },
        { id: 3, title: "product 3" },
    ]
}

export const fatchAllProducts=createAsyncThunk(
    'products/fetchAllProducts',async (thunkAPI) => {
    const response = await axios.get("http://localhost:4000/product/")
    return response.data
  }
)
export const addProductToServer=createAsyncThunk(
    'product/addProduct',
    async(item,thunkAPI)=>{
        const response=await axios.post("http://localhost:4000/product/",item);
        console.log(response);
        return response.data;
    }
)
export const updateProduct=createAsyncThunk(
    'product/updateProduct',
    async(item,thunkAPI)=>{
        const response=await axios.post(`http://localhost:4000/product/${item}`);
        console.log(response);
        return response.data;
    }
)
export const deleteProduct=createAsyncThunk(
    'product/deleteProduct',
    async(item,thunkAPI)=>{
        const response = await axios.delete(`http://localhost:4000/product/${item}`)
    }
)
const productSlice=createSlice({
    name:"productInSlice",
    initialState,
    reducers:{
        addProduct:{
            
            reducer:(state,action)=>{
                let i=state.productsArr[state.productsArr.length-1].id;
                action.payload.id=++i;
                state.productsArr.push(action.payload);
            }
        },
        deleteProduct:{},
        // updateProduct:{},
    },
    extraReducers:(builder)=>{
        builder.addCase(fatchAllProducts.fulfilled,
            (state,action)=>{
                state.productsArr=action.payload;
                state.status="fulfilled";
        }).addCase(
            fatchAllProducts.rejected,
            (state,action)=>{
                state.status="rejected";
                state.Message=action.payload.Message;
            }).addCase(fatchAllProducts.pending,
                (state,action)=>{
                    state.status="pending";
                }).addCase(
                    addProductToServer.fulfilled,
                    (state,action)=>{
                        state.productsArr.push(action.payload);
                    }
                )
    }
})

export const{addProduct}=productSlice.actions;
export default productSlice.reducer;
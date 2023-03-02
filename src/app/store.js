import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "../features/orders/orderSlice";
import productSlice from "../features/products/productSlice";
import userSlice from "../features/users/userSlice";

export const store =configureStore({
    reducer:{
        products:productSlice,
        order:orderSlice,
        users:userSlice
    }
})
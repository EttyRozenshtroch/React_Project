import { createSlice } from "@reduxjs/toolkit"

const initialState={
    details:null,
    productsInCart:[]
}

const orderSlice=createSlice({
    name:"ordersInSlice",
    initialState,
    reducers:{
        addToCart:{
            reducer:(state,action)=>{
            let p=state.productsInCart.filter(product=>product.id===action.payload.id);
            console.log(p);
            if(p.length==0){
                // action.payload.qty=1;
                state.productsInCart.push({...action.payload,qty:1})
            }else{
                state.productsInCart.map((item)=>{
                    if(item.id===action.payload.id){
                        item.qty++};})
            }
        }
        },
        removeFromCart:{
            reducer:(state,action)=>{
                state.productsInCart=state.productsInCart.filter(item=>item.id!==action.payload.id)
            }
        },

        removeOneCart:{
            reducer:(state,action)=>{
                // let p=state.productsInCart.filter(product=>product.id===action.payload.id);
                // if(p[0].qty>1){
                //     state.productsInCart.map((item)=>{
                //         if(item.id===action.payload.id){
                //             item.qty--};})
                // }
                // else{
                //     this.removeFromCart(item);
                // }

                state.productsInCart.map((item)=>{
                    if(item.id===action.payload.id){
                        if(item.qty>1){
                            item.qty--;
                        }
                        else{
                            state.productsInCart=state.productsInCart.filter(item=>item.id!==action.payload.id);
                        }
                    }
                        
                })
            }
        }

       
        // addToCart:{
        //     reducer: (state, action) => {
        //     state.productsInCart.push(action.payload)
        //   },
        //   prepare: (item) => {
        //     let p=state.productsInCart.filter(product=>product.id===item.id);
        //     if (p)
        //         p.qty=p.qty+1;
        //     else
        //         p={...item,qty:1}
        //     return { payload: {item} }
        //   }},
    },
})

export default orderSlice.reducer;
export const {addToCart,removeFromCart,removeOneCart} = orderSlice.actions;
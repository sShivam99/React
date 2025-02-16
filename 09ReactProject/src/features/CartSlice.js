import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems:[]
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addProduct:(state,action)=>{
            const item=state.cartItems.find((p)=>p.id===action.payload.id);
            if( item ){
                item.quantity +=1;
            }
            else{
                state.cartItems.push({...action.payload,quantity:1});
            }    
        },
        removeProduct:(state,action)=>{
            state=state.cartItems.filter((p)=>p.id!==action.payload.id);
        },
        clearCart:(state,action)=>{
            state.cartItems=[];
        }
    }
})

export default cartSlice.reducer;
export const { addProduct, removeProduct, clearCart } = cartSlice.actions;

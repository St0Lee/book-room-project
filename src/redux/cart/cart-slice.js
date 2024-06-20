import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart:[],
    },
    reducers: {
        setToCart:(state, {payload}) => {
            state.cart.push(payload)
        },
        // getFromCart:() => {}, 
    }
});

export const {setToCart} = cartSlice.actions;

export const getCarts = (state) => state.cart.cart;
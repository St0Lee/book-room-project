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
        removeFromCart:(state, {payload}) => {
            state.cart = state.cart.filter(item => item.id !== payload) 
        },
        changeCountCart: (state, {payload:{id, quantity}}) => {
            state.cart = state.cart.map(item => item.id === id ? {...item, count: quantity} : item);
        }
    }
});

export const {setToCart, removeFromCart, changeCountCart} = cartSlice.actions;

export const getCarts = (state) => state.cart.cart;
import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState: {
        favorite: [],
    },
    reducers: {
        setToFavorite:(state, payload) => {
            state.favorite.push(payload)
        },
        removeFromFavorite:(state, payload) => {
            state.favorite = state.cart.filter(item => item !== payload)
        }
        //кількість обраних книжок
    }
})
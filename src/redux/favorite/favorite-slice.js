import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState: {
        favorite: [],
    },
    reducers: {
        setToFavorite:(state, {payload}) => {
            state.favorite.push(payload)
        },
        removeFromFavorite:(state, {payload}) => {
            state.favorite = state.favorite.filter(item => item.id !== payload)
        }
        //кількість обраних книжок
    }
})


export const {setToFavorite,  removeFromFavorite} = favoriteSlice.actions;

export const getFavorite = (state) => state.favorite.favorite;
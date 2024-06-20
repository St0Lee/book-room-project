import { configureStore } from "@reduxjs/toolkit"; 
import { cartSlice } from "./cart/cart-slice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";

const cartPersistConfig = {
    key: "cart",
    storage,
    whitelist: ["cart"],
  };

export const store = configureStore({
    reducer: {
        [cartSlice.name]: persistReducer(cartPersistConfig, cartSlice.reducer),
    }
});
import { configureStore } from "@reduxjs/toolkit"; 
import { cartSlice } from "./cart/cart-slice";
import { favoriteSlice } from "./favorite/favorite-slice";
import { booksAPI } from "./bookOperations/bookOperations";

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

const favoritePersistConfig = {
  key: "favorite",
  storage,
  whitelist: ["favorite"],
}

const middleware = getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    booksAPI.middleware
];

export const store = configureStore({
    reducer: {
        [cartSlice.name]: persistReducer(cartPersistConfig, cartSlice.reducer),
        [favoriteSlice.name]: persistReducer(favoritePersistConfig, favoriteSlice.reducer),
        [booksAPI.reducerPath]: booksAPI.reducer,
      },
    middleware
});

export const persistor = persistStore(store);
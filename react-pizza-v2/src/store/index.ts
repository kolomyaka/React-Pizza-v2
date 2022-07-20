import { pizzasApi } from './../api/getPizzas';
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [pizzasApi.reducerPath]: pizzasApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pizzasApi.middleware),
})
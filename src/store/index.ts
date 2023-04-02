import {configureStore} from "@reduxjs/toolkit";

import {pizzasApi} from '../api/getPizzas';
import filterSliceReducer from './slices/filterSlice'
import cartSliceReducer from './slices/cartSlice'

export const store = configureStore({
    reducer: {
        [pizzasApi.reducerPath]: pizzasApi.reducer,
        filters: filterSliceReducer,
        cart: cartSliceReducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pizzasApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
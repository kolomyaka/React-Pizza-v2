import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { pizzasApi } from './../api/getPizzas';
import filterSliceReducer from './slices/filter'

export const store = configureStore({
    reducer: {
        [pizzasApi.reducerPath]: pizzasApi.reducer,
        filters: filterSliceReducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pizzasApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
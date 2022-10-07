import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    categoryId: 0,
    sort: {
        name: 'Popular',
        sortProperty: 'rating'
    }
}

export const filterSlice = createSlice({
    name: 'filterReducer',
    initialState, 
    reducers: {
        setCategoryId: (state, action) => {
            state.categoryId = action.payload
        },
        setSortValue: (state, action) => {
            state.sort.name = action.payload.name
            state.sort.sortProperty = action.payload.sortProperty
        }
    }
})

export const { setCategoryId,setSortValue } = filterSlice.actions
export default filterSlice.reducer
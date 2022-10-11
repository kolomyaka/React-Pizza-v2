import { createSlice } from "@reduxjs/toolkit"
import { sortType } from "../../types/types"

export type filterInitialState = {
    categoryId: number | null
    sort: {
        name: string
        sortProperty: string
        order: string
    }
    searchValue: string
}

const initialState = {
    categoryId: null,
    sort: {
        name: 'Popular',
        sortProperty: 'rating',
        order: 'asc'
    },
    searchValue: '',
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
            state.sort.order = action.payload.order
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        }
    }
})

export const { setCategoryId, setSortValue, setSearchValue } = filterSlice.actions
export default filterSlice.reducer
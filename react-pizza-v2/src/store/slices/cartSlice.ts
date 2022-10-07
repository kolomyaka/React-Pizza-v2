import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pizzas: []
}


export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addPizzaToCart(state, action) {

        }
    }
})

export const {} = cartSlice.actions
export default cartSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

type cartPizza = {
    id: number
    size: number
    category: string
    price: number
    title: string
    count: number
}

type state = {
    pizzas: cartPizza[]
}

const initialState: state = {
    pizzas: []
}


export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addPizzaToCart(state, action) {
            if (state.pizzas.length !== 0) {
               const existingPizza = state.pizzas.find(pizza => pizza.id === action.payload.id && 
                pizza.size === action.payload.size && 
                pizza.category === action.payload.category)
                if (existingPizza) {
                    existingPizza.count++
                } else {
                    action.payload.count = 1
                    state.pizzas.push(action.payload)
                }
                
            } else {
                action.payload.count = 1
                state.pizzas.push(action.payload)
            }

        }
    }
})

export const { addPizzaToCart } = cartSlice.actions
export default cartSlice.reducer
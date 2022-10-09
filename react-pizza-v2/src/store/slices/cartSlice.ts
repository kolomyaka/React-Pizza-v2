import { createSlice } from "@reduxjs/toolkit";

type cartPizza = {
    id: number
    size: number
    price: number
    count: number
    category: string
    title: string
    imageUrl: string
}

export type cartInitialState = {
    pizzas: cartPizza[]
    totalPrice: number
    totalCount: number
}

const initialState: cartInitialState = {
    pizzas: [],
    totalPrice: 0,
    totalCount: 0,
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
        },
        setTotalPrice(state, action) {
            state.totalPrice += action.payload
        },
        setTotalCartSize(state) {
            state.totalCount = 0
            state.pizzas.forEach((pizza) => {
                state.totalCount += pizza.count
            })
        },
        clearCart(state) {
            state.pizzas = []
        }
    }
})

export const { addPizzaToCart,setTotalPrice,setTotalCartSize, clearCart } = cartSlice.actions
export default cartSlice.reducer
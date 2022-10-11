import { createSlice } from "@reduxjs/toolkit";

export type cartPizza = {
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

const findCurrentPizza = (pizza: any, action: any) => {
    return pizza.id === action.payload.id && pizza.size === action.payload.size && pizza.category === action.payload.category
}


export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addPizzaToCart(state, action) {
            if (state.pizzas.length !== 0) {
               const existingPizza = state.pizzas.find((pizza) => findCurrentPizza(pizza, action))
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
            state.totalCount = 0
            state.totalPrice = 0
        },
        plusCount(state, action) {
            const addCountForPizza = state.pizzas.find((pizza) => findCurrentPizza(pizza, action))
            if (addCountForPizza) {
                addCountForPizza.count++
            }
        },
        minusCount(state, action) {
            const minusCountForPizza = state.pizzas.find(pizza => findCurrentPizza(pizza, action))
            if (minusCountForPizza) {
                minusCountForPizza.count--;
            }
        },
        removePizzaFromCart(state, action) {
            state.pizzas = state.pizzas.filter(pizza => {
                if (pizza.id !== action.payload.id) return true
                if (pizza.size !== action.payload.size) return true
                if (pizza.category !== action.payload.category) return true 
                return false               
            })
        }
    }
})

export const { addPizzaToCart,setTotalPrice,setTotalCartSize, clearCart, plusCount, minusCount,removePizzaFromCart } = cartSlice.actions
export default cartSlice.reducer
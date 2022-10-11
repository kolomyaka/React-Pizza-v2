
import { cartPizza } from "../store/slices/cartSlice";

// Function for get total cart size
export const getCartSize = (pizzas: cartPizza[]) => {
    return pizzas.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.count;
    }, 0);
};

// Function for get total cart price
export const getCartPrice = (pizzas: cartPizza[]) => {
    return pizzas.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price * currentValue.count;
    }, 0);
};
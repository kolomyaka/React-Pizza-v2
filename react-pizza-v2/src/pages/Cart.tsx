import React from 'react';
import emptyCard from '../assets/img/empty-cart.png';

type Props = {};

export const Cart = (props: Props) => {
    return (
        <>
            <div className="content">
                <div className="container container--cart">
                    <div className="cart cart--empty">
                        <h2>Your cart is empty 😕</h2>
                        <p>Add pizzas in your cart</p>
                        <img src={emptyCard} alt="Empty cart" />
                        <a href="/" className="button button--black">
                            <span>Go back</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPizzaToCart } from '../../store/slices/cartSlice';

type Props = {
    id: number;
    imageUrl: string;
    title: string;
    price: number;
    rating: number;
    category: number;
    types: number[];
    sizes: number[];
};

const availableTypes = ['Тонкое', 'Традиционное'];

export const PizzaBlock = ({
    title,
    price,
    imageUrl,
    category,
    rating,
    sizes,
    types,
    id,
}: Props) => {
    const dispatch = useDispatch();

    const [pizzaCount, setPizzaCount] = useState(0);
    const [sizeIndex, setSizeIndex] = useState(0);
    const [typeIndex, setTypeIndex] = useState(0);

    const addPizzaHandler = () => {
        setPizzaCount(pizzaCount + 1);
        dispatch(
            addPizzaToCart({
                id,
                size: sizes[sizeIndex],
                category: availableTypes[typeIndex],
                title,
                price,
            }),
        );
    };

    return (
        <>
            <div className="pizza-block">
                <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
                <h4 className="pizza-block__title">{title}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        {availableTypes.map((item, index) => {
                            return (
                                <li
                                    onClick={() => setTypeIndex(index)}
                                    key={item}
                                    className={`
                                    ${types.includes(index) ? '' : 'disabled'} 
                                    ${index === types[typeIndex] ? 'active' : ''}`}>
                                    {item}
                                </li>
                            );
                        })}
                    </ul>
                    <ul>
                        {sizes.map((size, index) => {
                            return (
                                <li
                                    key={size}
                                    onClick={() => setSizeIndex(index)}
                                    className={`${index === sizeIndex ? 'active' : ''}`}>
                                    {size}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от {price} ₽</div>
                    <button
                        onClick={addPizzaHandler}
                        className="button button--outline button--add">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        <i>{pizzaCount}</i>
                    </button>
                </div>
            </div>
        </>
    );
};

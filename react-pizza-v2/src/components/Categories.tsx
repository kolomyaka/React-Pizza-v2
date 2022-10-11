import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryId } from '../store/slices/filterSlice';

type Props = {
    activeCategory: number | null;
    setActiveCategoryType: (item: string) => void;
};

const categories = ['All', 'Vegetarian', 'Meat', 'Grill', 'Spicy', 'Closed'];

export const Categories = ({ activeCategory, setActiveCategoryType }: Props) => {
    const dispatch = useDispatch();

    const onCategoryHandler = (index: number, category: string) => {
        dispatch(setCategoryId(index));
        setActiveCategoryType(category);
    };

    return (
        <>
            <div className="categories">
                <ul>
                    {categories.map((category, index) => {
                        return (
                            <li
                                key={category}
                                className={
                                    activeCategory === index ||
                                    (activeCategory === null && index === 0)
                                        ? 'active'
                                        : ''
                                }
                                onClick={() => onCategoryHandler(index, category)}>
                                {category}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryId } from '../store/slices/filter';

type Props = {
    activeCategory: number;
    activeCategoryType: string;
    setActiveCategoryType: (item: string) => void;
};

const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];

export const Categories = ({
    activeCategory,
    activeCategoryType,
    setActiveCategoryType,
}: Props) => {
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
                                className={activeCategory === index ? 'active' : ''}
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

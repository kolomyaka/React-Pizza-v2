import React, { useState } from 'react';

type Props = {
    activeCategory: number;
    activeCategoryType: string;
    setActiveCategoryType: (item: string) => void;
    setActiveCategory: (index: number) => void;
};

const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];

export const Categories = ({
    activeCategory,
    setActiveCategory,
    activeCategoryType,
    setActiveCategoryType,
}: Props) => {
    const onCategoryHandler = (index: number, category: string) => {
        setActiveCategory(index);
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

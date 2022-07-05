import React, { useState } from 'react';

type Props = {};

export const Categories = (props: Props) => {
    const [activeCategory, setActiveCategory] = useState(0);
    const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];
    const onCategoryHandler = (index: number) => {
        setActiveCategory(index);
    };

    return (
        <>
            <div className="categories">
                <ul>
                    {categories.map((item, index) => {
                        return (
                            <li
                                className={activeCategory === index ? 'active' : ''}
                                onClick={() => onCategoryHandler(index)}>
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

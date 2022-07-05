import React, { useState } from 'react';

type Props = {
    setActiveCategoryType: (category: string) => void;
};

export const Categories = ({ setActiveCategoryType }: Props) => {
    const [activeCategory, setActiveCategory] = useState(0);
    const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];
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

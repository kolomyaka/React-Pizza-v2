import React from 'react';
import {useDispatch} from 'react-redux';
import {setCategoryId} from '../store/slices/filterSlice';

type Props = {
    activeCategory: number | null;
    setActiveCategoryType: (item: string) => void;
};

const categories = ['Vegetarian', 'Meat', 'Grill', 'Spicy', 'Closed'];

export const Categories = ({ activeCategory, setActiveCategoryType }: Props) => {
    const dispatch = useDispatch();

    const onCategoryHandler = (index: number | null, category: string) => {
        dispatch(setCategoryId(index));
        setActiveCategoryType(category);
    };

    return (
        <>
            <div className="categories">
                <ul>
                    <li
                        className={`${activeCategory === null ? 'active' : ''}`}
                        onClick={() => onCategoryHandler(null, 'All')}>
                        All
                    </li>
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

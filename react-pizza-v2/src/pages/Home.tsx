import React, { useEffect, useState } from 'react';

import { Categories } from '../components/Categories';
import '../scss/app.scss';
import { Sort } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import { PizzaType } from '../types/PizzaType';
import { SkeletonPizzaBlock } from '../components/PizzaBlock/SkeletonPizzaBlock';
import { useGetAllPizzasQuery, useGetFiltersPizzasQuery } from '../api/getPizzas';
import { serverResponseType, sortType } from '../types/types';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { filterInitialState } from '../store/slices/filterSlice';

type Props = {};

type pizzasResponse = {
    data: PizzaType[];
    error: serverResponseType;
    isLoading: boolean;
};

type filterState = {
    activeCategory: number;
};

export const Home = (props: Props) => {
    // Categories state
    const [activeCategoryType, setActiveCategoryType] = useState<string>('All');

    const {
        categoryId: activeCategory,
        sort,
        searchValue,
    } = useSelector<RootState, filterInitialState>((state) => state.filters);

    // Request to server
    const {
        data,
        error,
        isFetching: isLoading,
    } = useGetFiltersPizzasQuery({
        category: activeCategory,
        sort: sort.sortProperty,
        order: sort.order,
        name: searchValue,
    });

    return (
        <>
            <div className="container">
                <div className="content__top">
                    <Categories
                        activeCategory={activeCategory}
                        setActiveCategoryType={setActiveCategoryType}
                    />
                    <Sort activeSortType={sort} />
                </div>
                <h2 className="content__title">{activeCategoryType}</h2>
                <div className="content__items">
                    {isLoading ? (
                        Array(10)
                            .fill('')
                            .map((_, index) => <SkeletonPizzaBlock key={index} />)
                    ) : (
                        <>
                            {data && data.length > 0
                                ? data.map((item: PizzaType) => (
                                      <PizzaBlock
                                          key={item.name}
                                          id={item.id}
                                          title={item.name}
                                          price={item.price}
                                          rating={item.rating}
                                          category={item.category}
                                          sizes={item.sizes}
                                          imageUrl={item.imageUrl}
                                          types={item.types}
                                      />
                                  ))
                                : null}
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

import React, { useEffect, useState } from 'react';

import { Categories } from '../components/Categories';
import '../scss/app.scss';
import { Sort } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import { PizzaType } from '../types/PizzaType';
import { SkeletonPizzaBlock } from '../components/PizzaBlock/SkeletonPizzaBlock';
import { useGetAllPizzasQuery, useGetFiltersPizzasQuery } from '../api/getPizzas';
import { serverResponseType } from '../types/types';
import { skipToken } from '@reduxjs/toolkit/dist/query';

type Props = {};

type pizzasResponse = {
    data: PizzaType[];
    error: serverResponseType;
    isLoading: boolean;
};

export const Home = (props: Props) => {
    // Categories state
    const [activeCategory, setActiveCategory] = useState<any>(0);
    const [activeCategoryType, setActiveCategoryType] = useState<string>('All');

    // Sort state
    const [activeSortType, setActiveSortType] = useState({
        text: 'Popular',
        value: 'rating',
    });
    // Request to server

    const { data, error, isLoading } = useGetFiltersPizzasQuery({
        category: activeCategory,
        sort: activeSortType.value,
    });

    return (
        <>
            <div className="container">
                <div className="content__top">
                    <Categories
                        setActiveCategory={setActiveCategory}
                        activeCategory={activeCategory}
                        activeCategoryType={activeCategoryType}
                        setActiveCategoryType={setActiveCategoryType}
                    />
                    <Sort activeSortType={activeSortType} setActiveSortType={setActiveSortType} />
                </div>
                <h2 className="content__title">{activeCategoryType}</h2>
                <div className="content__items">
                    {isLoading
                        ? Array(10)
                              .fill('')
                              .map((_, index) => <SkeletonPizzaBlock key={index} />)
                        : data &&
                          data.map((item: PizzaType) => (
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
                          ))}
                </div>
            </div>
        </>
    );
};

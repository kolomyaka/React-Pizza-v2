import React, { useEffect, useState } from 'react';

import { Categories } from '../components/Categories';
import '../scss/app.scss';
import { Sort } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import { PizzaType } from '../types/PizzaType';
import { SkeletonPizzaBlock } from '../components/PizzaBlock/SkeletonPizzaBlock';
import { useGetAllPizzasQuery } from '../api/getPizzas';
import { serverResponseType } from '../types/types';

type Props = {};

type pizzasResponse = {
    data: PizzaType[];
    error: serverResponseType;
    isLoading: boolean;
};

export const Home = (props: Props) => {
    const [activeCategoryType, setActiveCategoryType] = useState('All');
    const [pizzas, setPizzas] = useState<any[]>([]);
    const { data, error, isLoading } = useGetAllPizzasQuery<pizzasResponse>();

    return (
        <>
            <div className="container">
                <div className="content__top">
                    <Categories setActiveCategoryType={setActiveCategoryType} />
                    <Sort />
                </div>
                <h2 className="content__title">Все пиццы</h2>
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

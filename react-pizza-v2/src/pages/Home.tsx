import React, { useEffect, useState } from 'react';

import { Categories } from '../components/Categories';
import '../scss/app.scss';
import { Sort } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import { PizzaType } from '../types/PizzaType';
import { SkeletonPizzaBlock } from '../components/PizzaBlock/SkeletonPizzaBlock';

type Props = {};

export const Home = (props: Props) => {
    const [activeCategoryType, setActiveCategoryType] = useState('All');
    const [pizzas, setPizzas] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try {
            fetch('https://62c992c74795d2d81f7e9935.mockapi.io/items')
                .then((res) => {
                    if (res.status === 200) {
                        return res.json();
                    }
                })
                .then((data) => {
                    setPizzas(data);
                    setIsLoading(false);
                });
        } catch (error) {
            console.log(error);
        }
    }, []);
    return (
        <>
            <div className="content__top">
                <Categories setActiveCategoryType={setActiveCategoryType} />
                <Sort />
            </div>
            <h2 className="content__title">{activeCategoryType} pizzas</h2>
            <div className="content__items">
                {isLoading
                    ? Array(10)
                          .fill('')
                          .map((_, index) => <SkeletonPizzaBlock key={index} />)
                    : pizzas.map((item: PizzaType) => (
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
        </>
    );
};

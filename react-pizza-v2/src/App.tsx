import React from 'react';
import { Header } from './components/Header';
import { Categories } from './components/Categories';
import './scss/app.scss';
import { Sort } from './components/Sort';
import { PizzaBlock } from './components/PizzaBlock';
import pizzas from './pizzas.json';
import { PizzaType } from './types/PizzaType';

function App() {
    return (
        <>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            <Categories />
                            <Sort />
                        </div>
                        <h2 className="content__title">Все пиццы</h2>
                        <div className="content__items">
                            {pizzas.map((item: PizzaType) => {
                                return (
                                    <>
                                        <PizzaBlock
                                            title={item.name}
                                            price={item.price}
                                            imageUrl={item.imageUrl}
                                            category={item.category}
                                            rating={item.rating}
                                            sizes={item.sizes}
                                            id={item.id}
                                            types={item.types}
                                        />
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;

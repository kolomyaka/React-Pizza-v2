import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PizzaType } from '../types/PizzaType';

export const pizzasApi = createApi({
    reducerPath: 'pizzasApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://62c992c74795d2d81f7e9935.mockapi.io/'}),
    endpoints: builder => ({
        getAllPizzas: builder.query<PizzaType[], void>({
            query: () => `items`
        }),
        getFiltersPizzas: builder.query<PizzaType[], any>({
            query: ({sort, category, name, order}) =>  `items?${name ? `name=${name}&` : ''}sortBy=${sort}&order=${order}${category != null ? `&category=${category}` : ''}`
        }),
        getSearchPizzas: builder.query<PizzaType[], any>({
            query: (string) => `items?name=${string}`
        })
        
    })
})

export const { useGetAllPizzasQuery, useGetFiltersPizzasQuery, useGetSearchPizzasQuery } = pizzasApi
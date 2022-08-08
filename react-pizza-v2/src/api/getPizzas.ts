import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PizzaType } from '../types/PizzaType';

type filtersValue = {
    category: number;
    sort: string
}


export const pizzasApi = createApi({
    reducerPath: 'pizzasApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://62c992c74795d2d81f7e9935.mockapi.io/'}),
    endpoints: builder => ({
        getAllPizzas: builder.query<PizzaType[], void>({
            query: () => `items`
        }),
        getFiltersPizzas: builder.query<PizzaType[], any>({
            query: ({sort, category}) =>  `items?sortBy=${sort}&order=desc&category=${category}`
            
        })
        
    })
})

export const { useGetAllPizzasQuery, useGetFiltersPizzasQuery } = pizzasApi
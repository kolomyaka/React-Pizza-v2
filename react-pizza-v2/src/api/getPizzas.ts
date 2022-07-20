import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pizzasApi = createApi({
    reducerPath: 'pizzasApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://62c992c74795d2d81f7e9935.mockapi.io/'}),
    endpoints: builder => ({
        getAllPizzas: builder.query<null, void>({
            query: () => `items`
        })
    })
})

export const { useGetAllPizzasQuery } = pizzasApi
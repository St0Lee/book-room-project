import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const orderAPI = createApi({
    reducerPath: "orderAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:4000/orders"}),
    tagTypes: ["orderAPI"],
    endpoints: builder => ({
        addOrder: builder.mutation({
            query: (order) => ({
                method: "POST",
                url: "/",
                body: order
            }),
                invalidatesTags: ["orderAPI"], 
        }),
    }),
})

export const {useAddOrderMutation} = orderAPI;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const novaPostAPI = createApi({
    reducerPath: "novaPostAPI",
    baseQuery: fetchBaseQuery({baseUrl: "https://api.novaposhta.ua/v2.0/json/"}),
    tagTypes: ["novaPostAPI"],
    endpoints: builder => ({
        getByCityName: builder.mutation({
            query: (cityName) => ({
                method: "POST",
                url: "/",
                body: 
                {
                    apiKey: "42bd5979093263382a203101c2299487",
                    modelName: "AddressGeneral",
                    calledMethod: "getCities",
                    methodProperties: {    
                        FindByString : cityName,
                   }
                }
            }),
                invalidatesTags: ["novaPostAPI"], 
        }),
    }),
})

export const {useGetByCityNameMutation} = novaPostAPI;
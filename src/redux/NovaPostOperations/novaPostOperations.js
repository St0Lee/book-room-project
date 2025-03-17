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
        getWarehouses: builder.mutation({
            query: ({cityName, warehouseAddress}) => ({
                method: "POST",
                url: "/",
                body:
                    {
                       apiKey: "42bd5979093263382a203101c2299487",
                       modelName: "AddressGeneral",
                       calledMethod: "getWarehouses",
                       methodProperties: {    
                            CityName : cityName,
                            FindByString : warehouseAddress,
                            // Page : "1",
                            // Limit : "50",
                            Language : "UA"
                       }     
                }
            }),
                invalidatesTags: ["novaPostAPI"], 
        })
    }),
})

export const {useGetByCityNameMutation, useGetWarehousesMutation } = novaPostAPI;
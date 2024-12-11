import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const booksAPI = createApi({
    reducerPath: "books",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:4000/books"}),
    tagTypes: ["books"],
    endpoints: builder => ({
        getBooks: builder.query({
            query: () => ({
                method: "GET",
                url: "/",
            }),
            providesTags: ["books"], 
        }),
        getBookById: builder.query({
            query: (id) => ({
                method: "GET",
                url: `/${id}`,
            }),
            providesTags: ["books"], 
        }),
        // getBookByName: builder.query({
        //     query: (title, id) => ({
        //         method: "GET",
        //         url: `/${id}`,
        //     }),
        //     providesTags: ["books"], 
        // }),
        // updateBook: builder.mutation({
        //     query: () => ({
        //         method: "PATCH",
        //         url: "/",
        //     }),
        //     invalidatesTags: ["books"], 
        // })
        // for all the methods except "GET"
        // useUpdateBookMutation
    }) 
});

export const {useGetBooksQuery, useGetBookByIdQuery} = booksAPI;
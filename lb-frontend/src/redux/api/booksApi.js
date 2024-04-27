import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
  //create endpoint
  endpoints: (builder) => ({
    //this is our first endpoint
    getBooks: builder.query({
      query: (params) => '/books', //fetch from books endpoint
    }),
    getBook: builder.query({
      query: (id) => `/books/${id}`, //fetch from books endpoint
    }),
  }),
})

//{useGetBooksQuery}
//-- is hook that give us all product
//-- including Loading, Success, Error
export const { useGetBooksQuery, useGetBookQuery } = booksApi

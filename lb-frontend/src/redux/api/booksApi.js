import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
  //create endpoint
  endpoints: (builder) => ({
    //this is our first endpoint
    getBooks: builder.query({
      query: (params) => ({
        url: '/books',
        params: { page: params?.page, keyword: params?.keyword },
      }), //fetch from books endpoint
    }),
    getBookDeatils: builder.query({
      query: (id) => `/books/${id}`,
    }),
  }),
})

export const {
  useGetBooksQuery,
  useGetBookDeatilsQuery,
  useGetBooksByTitleQuery,
} = booksApi

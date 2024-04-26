import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
  //create endpoint
  endpoints: (builder) => ({
    //this is our first endpoint
    getBooks: builder.query({
      query: (params) => ({
        url: '/books', //fetch from books endpoint
      }),
    }),
  }),
})

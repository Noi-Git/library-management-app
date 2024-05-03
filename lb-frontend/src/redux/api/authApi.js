import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query(body) {
        return {
          url: '/auths/login',
          method: 'POST',
          body,
        }
      },
    }),
  }),
})

export const { useLoginMutation } = authApi

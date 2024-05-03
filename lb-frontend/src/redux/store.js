import { configureStore } from '@reduxjs/toolkit'
import { booksApi } from './api/booksApi'
import { authApi } from './api/authApi'

// import rootReducer from './reducers'

export const store = configureStore({
  reducer: {
    //register books api
    [booksApi.reducerPath]: booksApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([booksApi.middleware, authApi.middleware]),
})

import { configureStore } from '@reduxjs/toolkit'
import { booksApi } from './api/booksApi'

// import rootReducer from './reducers'

export const store = configureStore({
  reducer: {
    //register books api
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([booksApi.middleware]),
})

import { configureStore } from '@reduxjs/toolkit'
import { bookApi } from './api/bookApi'

// import rootReducer from './reducers'

export const store = configureStore({
  reducer: {
    //register books api
    [bookApi.reducerPath]: bookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
})

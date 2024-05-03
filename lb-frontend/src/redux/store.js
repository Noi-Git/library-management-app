import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './features/cartSlice'

import { booksApi } from './api/booksApi'
import { authApi } from './api/authApi'

// import rootReducer from './reducers'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    //register books api
    [booksApi.reducerPath]: booksApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([booksApi.middleware, authApi.middleware]),
})

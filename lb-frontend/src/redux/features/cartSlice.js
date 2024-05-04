import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
}

export const cartSlice = createSlice({
  initialState,
  name: 'cartSlice',
  reducers: {
    setCartItem: (state, action) => {
      const item = action.payload

      const isItemExist = state.cartItems.find((i) => i.bookId === item.bookId)

      if (!isItemExist) {
        state.cartItems = [...state.cartItems, item]
      } else {
        return
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
  },
})

export default cartSlice.reducer

export const { setCartItem } = cartSlice.actions

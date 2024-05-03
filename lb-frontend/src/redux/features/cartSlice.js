import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
}

export const cartSlice = createSlice({
  initialState,
  name: 'cartSlice',
  reducers: {
    setCartItem: (state, action) => {
      const item = action.payload
    },
  },
})

export default cartSlice.reducer

export const { setCartItem } = cartSlice.actions

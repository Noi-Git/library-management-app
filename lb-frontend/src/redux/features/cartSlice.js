import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
}
// const initialState = {
//   cartItems: [],
// }

export const cartSlice = createSlice({
  initialState,
  name: 'cartSlice',
  reducers: {
    setCartItem: (state, action) => {
      // state.cartItems += action.payload
      const item = action.payload

      const isItemExist = state.cartItems.find(
        (i) => i?.bookTitle === item?.bookTitle
      )

      if (isItemExist) {
        console.log(`Message: you already have ${item.book_title} in your cart`)
      } else {
        state.cartItems = [...state.cartItems, item]
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
  },
})

export default cartSlice.reducer

export const { setCartItem } = cartSlice.actions

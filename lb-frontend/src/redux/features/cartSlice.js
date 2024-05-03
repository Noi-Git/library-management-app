import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  // cartItems: localStorage.getItem('cartItems')
  //   ? JSON.parse(localStorage.getItem('cartItems'))
  //   : [],
}

export const cartSlice = createSlice({
  initialState,
  name: 'cartSlice',
  reducers: {
    setCartItem: (state, action) => {
      const item = action.payload
      console.log('item--', item)
      state.cartItems = [...state.cartItems, item]

      // selectedItem = is what we call it in the BookDeatils when dispatching the data -- this is what we get in the payload
      // i stand for oneSingleItem
      // const isItemExist = state.cartItems.find(
      //   (i) => i.bookById === item.bookById
      // )

      // if (!isItemExist) {
      //   state.cartItems = [...state.cartItems, item]
      //   console.log('show message to user: This book is already in you cart')
      //   // state.cartItems = state.cartItems.map(i => i.selectedItem === isItemExist.selectedItem ? item : i)
      // } else {
      //   //add the book or item to the cart if it is not already in
      //   console.log('show message to user: This book is already in you cart')
      // }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
  },
})

export default cartSlice.reducer

export const { setCartItem } = cartSlice.actions

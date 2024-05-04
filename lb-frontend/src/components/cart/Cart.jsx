import React from 'react'
import Metadata from '../layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { FaTrashAlt } from 'react-icons/fa'
import cart from '../../assets/images/shopping_cart.png'
import { removeCartItem } from '../../redux/features/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()

  const removeCartItemHandler = (id) => {
    dispatch(removeCartItem(id))
  }
  // console.log('removeCartItemHandler---', removeCartItemHandler(1))

  const { cartItems } = useSelector((state) => state.cart)
  console.log('cartItems--', cartItems)

  return (
    <>
      <Metadata title={'Your Cart'} />
      <div className='container'>
        <div className='d-flex flex-column '>
          <div className='d-flex flex-column mb-5 '>
            {cartItems?.length === 0 ? (
              <h2 className='align-self-center mx-3'>Your Cart is Empty</h2>
            ) : (
              <>
                <div className='d-flex flex-row mt-3 mx-auto '>
                  <img src={cart} alt='Laptop' className='cart-image' />

                  <h2 className='align-self-center mx-3'>
                    Your Cart has: <b>{cartItems?.length}</b>{' '}
                    {cartItems?.length > 1 ? 'items' : 'item'}
                  </h2>
                </div>
              </>
            )}
          </div>
          <div className='d-flex flex-column'>
            {cartItems.map((item) => (
              <>
                <div
                  className='cart-item'
                  data-key='product1'
                  key={item.bookId}
                >
                  <div className='row' key={item.bookId}>
                    <div className='col-2 col-lg-2'>
                      <img
                        src={item.bookImage}
                        alt={item.bookTitle}
                        className='cart-item-image'
                      />
                      <p className='cart-item-genre'>{item.genre}</p>
                    </div>
                    <div className='col-3 col-lg-2 mt-4 mt-lg-0'>
                      <p className='card_item_author'>
                        {item.authorFirstName} {item.authorMiddleName}{' '}
                        {item.authorLastName}
                      </p>
                    </div>
                    <div className='col'>
                      <a href='/products/product1'> {item.bookTitle} </a>
                    </div>

                    <div className='col-1 col-lg-1 mt-4 mt-lg-0'>
                      <FaTrashAlt
                        id='delete_cart_item'
                        className='bi bi-trash btn delete_cart_item'
                        onClick={() => {
                          removeCartItemHandler(item?.bookId)
                        }}
                      />
                    </div>
                  </div>
                </div>
                <hr />
              </>
            ))}
          </div>

          <div className='d-flex flex-column'>
            <div id='order_summary'>
              <button id='checkout_btn' className='btn btn-primary w-100'>
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart

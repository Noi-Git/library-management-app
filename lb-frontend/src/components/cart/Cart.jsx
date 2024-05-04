import React from 'react'
import Metadata from '../layout/MetaData'
import { useSelector } from 'react-redux'
import cart from '../../assets/images/shopping_cart.png'

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart)
  console.log('cartItems--', cartItems)

  return (
    <>
      <Metadata title={'Your Cart'} />

      <div className='d-flex flex-column '>
        <div className='d-flex flex-column mb-5 '>
          {cartItems?.length === 0 ? (
            <h2 className='mt-1'>Your Cart is Empty</h2>
          ) : (
            <>
              <div className='d-flex flex-row mt-3 mx-auto '>
                <img src={cart} alt='Laptop' height='60' width='90' />

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
              <hr />
              <div className='cart-item' data-key='product1' key={item.bookId}>
                <div className='row'>
                  <div className='col-2 col-lg-3'>
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
                      {item.authorFirstName}
                    </p>
                  </div>
                  <div className='col-6 col-lg-3'>
                    <a href='/products/product1'> {item.bookTitle} </a>
                  </div>

                  <div className='col-1 col-lg-1 mt-4 mt-lg-0'>
                    <i
                      id='delete_cart_item'
                      className='fa fa-trash btn btn-danger'
                    ></i>
                  </div>
                </div>
              </div>
              <hr />
            </>
          ))}
        </div>

        <div className='d-flex flex-column'>
          <div id='order_summary'>
            <h4>Order Summary</h4>
            <hr />
            <p>
              Subtotal: <span className='order-summary-values'>8 (Units)</span>
            </p>
            <p>
              Est. total: <span className='order-summary-values'>$1499.97</span>
            </p>
            <hr />
            <button id='checkout_btn' className='btn btn-primary w-100'>
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart

import React from 'react'
import Metadata from '../layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { FaTrashAlt } from 'react-icons/fa'
import cart from '../../assets/images/shopping_cart.png'
import { removeCartItem } from '../../redux/features/cartSlice'
import { Link, useNavigate } from 'react-router-dom'

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const removeCartItemHandler = (id) => {
    dispatch(removeCartItem(id))
  }
  // console.log('removeCartItemHandler---', removeCartItemHandler(1))

  const { cartItems } = useSelector((state) => state.cart)
  console.log('cartItems--', cartItems)

  const backToHomePage = () => navigate(`/`)

  return (
    <>
      <Metadata title={'Your Cart'} />
      {/* <div className='container'> */}
      <div className='d-flex flex-column '>
        <div className='d-flex flex-column mb-5 '>
          {cartItems?.length === 0 ? (
            <>
              <div className='d-flex flex-column bd-highlight my-5 cart-empty'>
                <h2>Your Cart is Empty</h2>
              </div>
            </>
          ) : (
            <>
              <div className='d-flex flex-row mt-3 mx-auto '>
                <img src={cart} alt='cart' className='cart-image' />

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
              <div className='cart-item' data-key='product1' key={item.bookId}>
                <div className='row'>
                  <div className='col-2 col-lg-2'>
                    <Link to={`/book/${item.bookId}`}>
                      <img
                        src={item.bookImage}
                        alt={item.bookTitle}
                        className='cart-item-image'
                      />
                    </Link>
                    <p className='cart-item-genre'>{item.genre}</p>
                  </div>
                  <div className='col-3 col-lg-2 mt-4 mt-lg-0'>
                    <p className='card_item_author'>
                      {item.authorFirstName} {item.authorMiddleName}{' '}
                      {item.authorLastName}
                    </p>
                  </div>
                  <div className='col'>
                    <Link to={`/book/${item.bookId}`}> {item?.bookTitle} </Link>
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

        {cartItems?.length > 0 ? (
          <div className='d-flex flex-column'>
            <div id='order_summary'>
              <button id='checkout_btn' className='btn btn-primary w-100'>
                Check Out
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* <div className='d-flex flex-column bd-highlight my-5 cart-empty'> */}
            <button
              type='button'
              className='btn btn-primary cart-empty-button'
              disabled=''
              onClick={() => backToHomePage()}
            >
              Back
            </button>
            {/* </div> */}
          </>
        )}
      </div>
      {/* </div> */}
    </>
  )
}

export default Cart

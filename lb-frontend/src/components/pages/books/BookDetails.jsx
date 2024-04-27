import React from 'react'
import { useGetBookDetailsQuery } from '../../../redux/api/booksApi'

const BookDetails = () => {
  //use the useGetBookDetailsQuery() to import data
  const { data } = useGetBookDetailsQuery()
  return (
    <div className='row d-flex justify-content-around'>
      <div className='col-12 col-lg-5 img-fluid' id='product_image'>
        <div className='p-3'>
          <img
            className='d-block w-100'
            src='./images//default_product.png'
            alt=''
            width='340'
            height='390'
          />
        </div>
        <div className='row justify-content-start mt-5'>
          <div className='col-2 ms-4 mt-2'>
            <a role='button'>
              <img
                className='d-block border rounded p-3 cursor-pointer'
                height='100'
                width='100'
                src='./images//default_product.png'
                alt=''
              />
            </a>
          </div>
        </div>
      </div>

      <div className='col-12 col-lg-5 mt-5'>
        <h3>Lorem Ipsum</h3>
        <p id='product_id'>Product # w43453456456756786</p>

        <hr />

        <div className='d-flex'>
          <div className='star-ratings'>
            <i className='fa fa-star star-active'></i>
            <i className='fa fa-star star-active'></i>
            <i className='fa fa-star star-active'></i>
            <i className='fa fa-star star-active'></i>
            <i className='fa fa-star star-active'></i>
          </div>
          <span id='no-of-reviews' className='pt-1 ps-2'>
            {' '}
            (1 Reviews){' '}
          </span>
        </div>
        <hr />

        <p id='product_price'>$23</p>
        <div className='stockCounter d-inline'>
          <span className='btn btn-danger minus'>-</span>
          <input
            type='number'
            className='form-control count d-inline'
            value='1'
            readonly
          />
          <span className='btn btn-primary plus'>+</span>
        </div>
        <button
          type='button'
          id='cart_btn'
          className='btn btn-primary d-inline ms-4'
          disabled=''
        >
          Add to Cart
        </button>

        <hr />

        <p>
          Status:{' '}
          <span id='stock_status' className='greenColor'>
            In Stock
          </span>
        </p>

        <hr />

        <h4 className='mt-2'>Description:</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <hr />
        <p id='product_seller mb-3'>
          Sold by: <strong>Tech</strong>
        </p>

        <div className='alert alert-danger my-5' type='alert'>
          Login to post your review.
        </div>
      </div>
    </div>
  )
}

export default BookDetails

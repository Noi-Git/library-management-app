import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetBookQuery } from '../../../redux/api/booksApi'

const BookDetails = () => {
  const params = useParams()

  const { data } = useGetBookQuery(params?.id)
  console.log(useGetBookQuery(params?.id))
  const { book_id, book_title, book_description, book_image_url, book_genre } =
    data

  return (
    <>
      <div className='row d-flex justify-content-around'>
        <div className='col-12 col-lg-5 img-fluid' id='product_image'>
          <div className='p-3'>
            <img
              className='d-block w-100'
              src={book_image_url}
              alt=''
              width='340'
              height='390'
            />
          </div>
          <p className='genre text-center'>book_genre</p>
        </div>

        <div className='col-12 col-lg-5 mt-5'>
          <h3>{book_title}</h3>

          <p className='author-name'>author name</p>
          <hr />

          <h4 className='mt-2'>Description:</h4>
          <p>{book_description}</p>
          <hr />
          <p id='product_seller mb-3'>
            Available copy: <strong>10</strong>
          </p>
          <button
            type='button'
            id='cart_btn'
            className='btn btn-primary d-inline ms-4'
            disabled=''
          >
            Add to Cart
          </button>

          <div className='alert alert-danger my-5' type='alert'>
            Login to checkout.
          </div>
        </div>
      </div>
    </>
  )
}

export default BookDetails

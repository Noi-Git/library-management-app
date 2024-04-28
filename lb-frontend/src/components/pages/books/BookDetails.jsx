import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetBookQuery } from '../../../redux/api/booksApi'
import useErrorMessage from '../../hooks/useErrorMessage'

const BookDetails = () => {
  const params = useParams()
  const { data: singleBookData } = useErrorMessage(useGetBookQuery(params?.id))
  console.log('data--- array:', singleBookData)

  const {
    book_image_url,
    book_title,
    book_description,
    author_firstname,
    author_lastname,
    author_middlename,
    genre_name,
    total_copies,
  } = singleBookData

  return (
    <>
      <div className='row d-flex justify-content-around'>
        <div className='col-12 col-lg-5 img-fluid' id='product_image'>
          <div className='p-3'>
            <img
              className='d-block w-100 '
              src={book_image_url}
              alt={book_title}
              width='340'
              height='480'
            />
          </div>
          <p className='genre text-center'>{genre_name}</p>
        </div>
        <div className='col-12 col-lg-5 mt-5'>
          <h3>{book_title}</h3>

          <p className='author-name'>
            {author_firstname} {author_middlename} {author_lastname}
          </p>
          <hr />

          <h4 className='mt-2'>Description:</h4>
          <p>{book_description}</p>
          <hr />
          <p
            id='stock_status'
            className={total_copies > 0 ? 'greenColor' : 'red'}
          >
            Available copy: <strong>{total_copies}</strong>
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

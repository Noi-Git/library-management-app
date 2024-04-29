import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetBookQuery } from '../../../redux/api/booksApi'
import toast from 'react-hot-toast'
import Loader from '../../layout/Loader'

const BookDetails = () => {
  const params = useParams()
  const { data, isLoading, error, isError } = useGetBookQuery(params?.id)
  console.log('---from book details ---', data)
  const book = data

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message)
    }
  }, [error?.data?.message, isError])

  if (isLoading) return <Loader />

  return (
    <>
      {book?.map((b) => (
        <div className='row d-flex justify-content-around' key={b?.book_id}>
          <div className='col-12 col-lg-5 img-fluid' id='product_image'>
            <div className='p-3'>
              <img
                className='d-block w-100 '
                src={b?.book_image_url}
                alt={b?.book_title}
                width='340'
                height='480'
              />
            </div>
            <p className='genre text-center'>{b?.genre_name}</p>
          </div>
          <div className='col-12 col-lg-5 mt-5'>
            <h3>{b?.book_title}</h3>

            <p className='author-name'>
              {b?.author_firstname} {b?.author_middlename} {b?.author_lastname}
            </p>
            <hr />

            <h4 className='mt-2'>Description:</h4>
            <p>{b?.book_description}</p>
            <hr />
            <p
              id='stock_status'
              className={b?.total_copies > 0 ? 'greenColor' : 'red'}
            >
              Available copy: <strong>{b?.total_copies}</strong>
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
      ))}
    </>
  )
}

export default BookDetails

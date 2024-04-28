import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetBookQuery } from '../../../redux/api/booksApi'
import toast from 'react-hot-toast'
import Loader from '../../layout/Loader'
// import useErrorMessage from '../../hooks/useErrorMessage'

const BookDetails = () => {
  const params = useParams()
  const { data, isLoading, error, isError } = useGetBookQuery(params?.id)
  console.log('---from book details ---', data)

  if (isLoading) return <Loader />
  if (isError) return toast.error(error?.data?.message)

  return (
    <>
      <div className='row d-flex justify-content-around'>
        <div className='col-12 col-lg-5 img-fluid' id='product_image'>
          <div className='p-3'>
            <img
              className='d-block w-100 '
              src={data?.book_image_url}
              alt={data?.book_title}
              width='340'
              height='480'
            />
          </div>
          <p className='genre text-center'>{data?.genre_name}</p>
        </div>
        <div className='col-12 col-lg-5 mt-5'>
          <h3>{data?.book_title}</h3>

          <p className='author-name'>
            {data?.author_firstname} {data?.author_middlename}{' '}
            {data?.author_lastname}
          </p>
          <hr />

          <h4 className='mt-2'>Description:</h4>
          <p>{data?.book_description}</p>
          <hr />
          <p
            id='stock_status'
            className={data?.total_copies > 0 ? 'greenColor' : 'red'}
          >
            Available copy: <strong>{data?.total_copies}</strong>
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

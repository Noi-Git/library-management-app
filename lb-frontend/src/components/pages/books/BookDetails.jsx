import { useParams } from 'react-router-dom'
import { useGetBookDeatilsQuery } from '../../../redux/api/booksApi'

const BookDetails = () => {
  const params = useParams()
  const { data } = useGetBookDeatilsQuery(params?.id)
  const bookById = data?.results
  console.log('book result data---:', bookById)

  const setItemToCart = () => {
    const cartItem = {
      bookId: bookById?.book_id,
      bookTitle: bookById?.book_title,
      bookGenre: bookById?.genre?.genre_name,
      bookAuthorFirstName: bookById?.author_firstname,
      bookAuthorMiddleName: bookById?.author_middlename,
      bookAuthorLastName: bookById?.author_lastname,
    }
  }

  return (
    <>
      {bookById?.map((book) => (
        <div key={book?.book_id}>
          <div className='row d-flex justify-content-around'>
            <div className='col-12 col-lg-5 img-fluid' id='product_image'>
              <div className='p-3'>
                <img
                  className='d-block mx-auto'
                  src={book?.book_image_url}
                  alt=''
                  width='340'
                  height='390'
                />
              </div>
              <p id='product_seller mb-3' className='text-center'>
                {book?.genre_name}
              </p>
            </div>

            <div className='col-12 col-lg-5 mt-5'>
              <h3>{book?.book_title}</h3>
              <p id='product_id'>
                {book?.author_firstname} {book?.author_middlename}{' '}
                {book?.author_lastname}{' '}
              </p>

              <hr />

              <h4 className='mt-2'>Description:</h4>
              <p>{book?.book_description}</p>
              <hr />
              <p>
                Available copy:{' '}
                <span id='stock_status' className='greenColor'>
                  {book?.total_copies}
                </span>
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
                Login to post your review.
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default BookDetails

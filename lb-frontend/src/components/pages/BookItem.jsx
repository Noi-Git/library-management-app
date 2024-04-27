import { Link } from 'react-router-dom'
// import default_product from '../../assets/images/default_product.png'

const BookItem = ({ children, book }) => {
  const { book_id, book_title, book_description, author_id, book_image_url } =
    book
  const elipsis = 60

  return (
    <>
      <div class='col-sm-12 col-md-6 col-lg-3 my-3' key={book_id}>
        <div class='card p-3 rounded'>
          <img class='card-img-top mx-auto' src={book_image_url} alt='' />
          <div class='card-body d-flex flex-column'>
            <h5 class='card-title'>
              {book_title.slice(0, elipsis)}
              {book_title.length > elipsis ? '...' : ''}
            </h5>
          </div>
          {/* <p class='card-text'>
            {book_description.slice(0, 100)}
            <span className='read-more'> Read more...</span>
          </p> */}
          <span id='no_of_reviews' class='pt-2 ps-2'>
            {author_id}
          </span>
          <Link to='' id='view_btn' class='btn btn-block'>
            View Details
          </Link>
        </div>
      </div>
    </>
  )
}

export default BookItem

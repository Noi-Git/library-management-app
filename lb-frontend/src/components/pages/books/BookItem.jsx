import { Link } from 'react-router-dom'

const BookItem = ({ children, book, columnSize }) => {
  const {
    book_id,
    book_title,
    book_image_url,
    author_firstname,
    author_lastname,
    author_middlename,
    genre_name,
  } = book
  const elipsis = 60

  return (
    <>
      <div
        className={`col-sm-12 col-md-6 col-lg-${columnSize} my-3`}
        key={book_id}
      >
        <div className='card p-3 rounded'>
          <img
            className='card-img-main-card mx-auto'
            src={book_image_url}
            alt={book?.book_title}
          />
          <span className='text-center'>{genre_name}</span>
          <div className='card-body d-flex flex-column'>
            <h5 className='card-title'>
              <Link to={`/book/${book?.book_id}`}>
                {book?.book_title.slice(0, elipsis)}
                {book_title.length > elipsis ? '...' : ''}
              </Link>
            </h5>
          </div>
          <span className='pb-2'>
            {author_firstname} {author_middlename} {author_lastname}
          </span>
          <Link
            to={`/book/${book?.book_id}`}
            id='view_btn'
            className='btn btn-block'
          >
            View Details
          </Link>
        </div>
      </div>
    </>
  )
}

export default BookItem

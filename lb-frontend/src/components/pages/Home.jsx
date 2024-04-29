import MetaData from '../layout/MetaData'
import { useGetBooksQuery } from '../../redux/api/booksApi'
import BookItem from './books/BookItem'
import useErrorMessage from '../hooks/useErrorMessage'

const Home = () => {
  const { data } = useErrorMessage(useGetBooksQuery())
  // console.log('data home page--', data)

  return (
    <>
      <MetaData title={'Home page'} />
      <div className='row'>
        <div className='col-12 col-sm-6 col-md-12'>
          <h1 id='books_heading' className='text-secondary'>
            New Books
          </h1>

          <section id='products' className='mt-5'>
            <div className='row'>
              {data?.map((book) => (
                <BookItem book={book} key={book?.book_id} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Home

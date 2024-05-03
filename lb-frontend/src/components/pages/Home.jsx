import MetaData from '../layout/MetaData'
import {
  useGetBooksQuery,
  // useGetBooksByTitleQuery,
} from '../../redux/api/booksApi'
import BookItem from './books/BookItem'
import useErrorMessage from '../hooks/useErrorMessage'
import { useSearchParams } from 'react-router-dom'
import CustomPagination from '../layout/CustomPagination'

const Home = () => {
  let [searchParams] = useSearchParams()
  const page = searchParams.get('page') || 1
  const keyword = searchParams.get('keyword') || ''

  const params = { page, keyword }

  const { data } = useErrorMessage(useGetBooksQuery(params))
  // const { search } = useErrorMessage(useGetBooksByTitleQuery(params))

  const columnSize = keyword ? 4 : 3

  return (
    <>
      <MetaData title={'Home page'} />
      <div className='row'>
        {keyword && (
          <div className='col-6 col-md-3 mt-5'>
            <p>FILTERS</p>
          </div>
        )}
        <div
          className={keyword ? 'col-6 col-md-9' : 'col-12 col-sm-6 col-md-12'}
        >
          <h1 id='books_heading' className='text-secondary'>
            {keyword
              ? `${data?.length} Book found with keyword: ${keyword}`
              : 'Latest Products'}
            {/* New Books */}
          </h1>

          <section id='products' className='mt-5'>
            <div className='row'>
              {data?.map((book) => (
                <BookItem
                  book={book}
                  key={book?.book_id}
                  columnSize={columnSize}
                />
              ))}
            </div>
          </section>
          <CustomPagination resPerPage={4} filteredProductsCount={6} />
        </div>
      </div>
    </>
  )
}

export default Home

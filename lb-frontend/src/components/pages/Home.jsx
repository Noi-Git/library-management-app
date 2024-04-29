import MetaData from '../layout/MetaData'
import {
  useGetBooksQuery,
  // useGetSearchBookTitileQuery,
} from '../../redux/api/booksApi'
import BookItem from './books/BookItem'
import useErrorMessage from '../hooks/useErrorMessage'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
  let [searchParams] = useSearchParams()
  const keyword = searchParams.get('keyword') || ''

  const params = { keyword }

  const { data } = useErrorMessage(useGetBooksQuery(params))
  // const { search } = useErrorMessage(useGetSearchBookTitileQuery(params))
  // console.log('data home page--', data)

  return (
    <>
      <MetaData title={'Home page'} />
      <div className='row'>
        <div className='col-12 col-sm-6 col-md-12'>
          <h1 id='books_heading' className='text-secondary'>
            {/* {keyword
              ? `${searchTitle?.books?.length} Book found with keyword: ${keyword}`
              : 'Latest Products'} */}
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

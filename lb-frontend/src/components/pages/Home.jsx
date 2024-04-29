import MetaData from '../layout/MetaData'
import { useGetBooksQuery } from '../../redux/api/booksApi'
import BookItem from './books/BookItem'
import Loader from '../layout/Loader'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
// import CustomPagination from '../layout/CustomPagination'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
  let [searchParams] = useSearchParams()
  const page = searchParams.get('page') || 1

  const params = { page } // will pass this to backend

  const { data, isLoading, error, isError } = useGetBooksQuery(params)
  // console.log('from home---', data)
  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message)
    }
  }, [error?.data?.message, isError])

  if (isLoading) return <Loader />

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
          {/* <CustomPagination
            resPerPage={data?.resPerPage}
            filteredBooksCount={data?.filteredBooksCount}
          /> */}
        </div>
      </div>
    </>
  )
}

export default Home

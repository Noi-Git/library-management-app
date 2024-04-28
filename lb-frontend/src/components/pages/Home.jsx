import MetaData from '../layout/MetaData'
import { useGetBooksQuery } from '../../redux/api/booksApi'
import BookItem from './books/BookItem'
import Loader from '../layout/Loader'
import toast from 'react-hot-toast'
import CustomPagination from '../layout/CustomPagination'

const Home = () => {
  const { data, isLoading, error, isError } = useGetBooksQuery()
  console.log('from home---', data)

  if (isLoading) return <Loader />
  if (isError) return toast.error(error?.data?.message)

  return (
    <>
      <MetaData title={'Home page'} />
      <div className='row'>
        <div className='col-12 col-sm-6 col-md-12'>
          <h1 id='books_heading' className='text-secondary'>
            New Books
          </h1>

          <section id='products' class='mt-5'>
            <div class='row'>
              {data?.map((book) => (
                <BookItem book={book} />
              ))}
            </div>
          </section>
        </div>
        <CustomPagination
          resPerPage={data?.resPerPage}
          filteredBooksCount={data?.filteredBooksCount}
        />
      </div>
    </>
  )
}

export default Home

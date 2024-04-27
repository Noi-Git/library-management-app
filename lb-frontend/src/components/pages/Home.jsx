import MetaData from '../layout/MetaData'
import { useGetBooksQuery } from '../../redux/api/booksApi'
import BookItem from './books/BookItem'
// import Loader from '../layout/Loader'
// import { useEffect } from 'react'
// import toast from 'react-hot-toast'
import useErrorMessage from '../hooks/useErrorMessage'

const Home = () => {
  const { data } = useErrorMessage(useGetBooksQuery())
  // const { data, isLoading, error, isError } = useGetBooksQuery()

  // useEffect(() => {
  //   if (isError) {
  //     toast.error(error?.data?.message)
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isError])

  // if (isLoading) return <Loader />

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
      </div>
    </>
  )
}

export default Home

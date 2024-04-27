import MetaData from '../layout/MetaData'
import { useGetBooksQuery } from '../../redux/api/booksApi'
import BookItem from './BookItem'
import Card from 'react-bootstrap/Card'

const Home = () => {
  const { data, isLoading } = useGetBooksQuery()
  console.log(data, isLoading)

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

import default_product from '../../../assets/images/default_product.png'
import MetaData from '../../layout/MetaData'
import { useGetBooksQuery } from '../../../redux/api/booksApi'

const Home = () => {
  const { data } = useGetBooksQuery()
  console.log(data)

  return (
    <>
      <MetaData title={'Home page'} />
      <div className='row'>
        <div className='col-12 col-sm-6 col-md-12'>
          <h1 id='products_heading' className='text-secondary'>
            New Books
          </h1>

          <section id='products' className='mt-5'>
            <div className='row'>
              {/* <!-- Product Item 1 --> */}
              <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                  <img
                    className='card-img-top mx-auto'
                    src={default_product}
                    alt=''
                  />
                  <div className='card-body ps-3 d-flex justify-content-center flex-column'>
                    <h5 className='card-title'>
                      <a href=''>Book Title</a>
                    </h5>
                    <div className='ratings mt-auto d-flex'>
                      <div className='star-ratings'>
                        <i className='fa fa-star star-active'></i>
                        <i className='fa fa-star star-active'></i>
                        <i className='fa fa-star star-active'></i>
                        <i className='fa fa-star star-active'></i>
                        <i className='fa fa-star star-active'></i>
                      </div>
                      <span id='no_of_reviews' className='pt-2 ps-2'>
                        Author name
                      </span>
                    </div>
                    <p className='card-text mt-2'>Book description</p>
                    <a href='' id='view_btn' className='btn btn-block'>
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End Product Item 1 --> */}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Home

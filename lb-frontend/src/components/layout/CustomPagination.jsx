import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Pagination from 'react-js-pagination'

const CustomPagination = ({ resPerPage, filteredBooksCount }) => {
  const [currentPage, setCurrentPage] = useState()
  let [searchParams] = useSearchParams()

  const page = Number(searchParams.get('page')) || 1 //get page number from query

  useEffect(() => {
    setCurrentPage(page)
  }, [page])

  const setCurrentPageNumber = (pageNumber) => {
    setCurrentPage(pageNumber)

    if (searchParams.has('page')) {
      searchParams.set('page', pageNumber)
    } else {
      searchParams.append('page', pageNumber)
    }

    const path = window.location.pathname + '?' + searchParams.toString()
    alert(path)

    return (
      <div className='d-flex justify-conten-center my-5'>
        {filteredBooksCount > resPerPage && (
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={resPerPage}
            totalItemsCount={filteredBooksCount}
            onChange={setCurrentPageNumber}
            nextPageText={'Next'}
            prevPageText={'Prev'}
            firstPageText={'First'}
            lastPageText={'Last'}
            itemClass='page-item'
            linkClass='page-link'
          />
        )}
      </div>
    )
  }
}

export default CustomPagination

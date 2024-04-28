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

  const setCurrentPageNumber = () => {}

  return (
    <>
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
        />
      )}
    </>
  )
}

export default CustomPagination

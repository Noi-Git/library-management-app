import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Pagination from 'react-js-pagination'

const CustomPagination = ({ resPerPage, filteredProductsCount }) => {
  const [currentPage, setCurrentPage] = useState()
  let [searchParams] = useSearchParams()

  //get page number from the query
  const page = Number(searchParams.get('page')) || 1

  useEffect(() => {
    setCurrentPage(page)
  }, [page])

  const setCurrentPageNumber = () => {}

  return (
    <div>
      {filteredProductsCount > resPerPage && (
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={resPerPage}
          totalItemsCount={filteredProductsCount}
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

export default CustomPagination

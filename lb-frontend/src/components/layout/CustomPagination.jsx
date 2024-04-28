import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Pagination from 'react-js-pagination'

const CustomPagination = ({ resPerPage, filteredBooksCount }) => {
  const [currentPage, setCurrentPage] = useState()
  let [searchParams] = useSearchParams()

  const page = Number(searchParams.get('page')) || 1

  return <>{filteredBooksCount > resPerPage && <Pagination />}</>
}

export default CustomPagination

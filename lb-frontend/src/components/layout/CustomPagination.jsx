import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const CustomPagination = ({ resPerPage, filteredProductsCount }) => {
  const [currentPage, setCurrentPage] = useState()
  let [searchParams] = useSearchParams()

  //get page number from the query
  const page = Number(searchParams.get('page')) || 1
  return <div>CustomPagination</div>
}

export default CustomPagination

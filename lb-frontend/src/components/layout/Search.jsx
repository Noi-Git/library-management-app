import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()

    if (keyword?.trim()) {
      navigate(`/?keyword=${keyword}`)
    } else {
      navigate(`/`)
    }
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className='input-group'>
          <input
            type='text'
            id='search_field'
            aria-describedby='search_btn'
            className='form-control'
            placeholder='Search books ...'
            name='keyword'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button id='search_btn' className='btn' type='submit'>
            <FaSearch aria-hidden='true' />
          </button>
        </div>
      </form>
    </>
  )
}

export default Search

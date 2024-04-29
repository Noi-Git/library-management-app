import { useEffect } from 'react'
// import { useGetBooksQuery } from '../../redux/api/booksApi'
import toast from 'react-hot-toast'
import Loader from '../layout/Loader'

const useErrorMessage = (apiEndpoint) => {
  const { data, isLoading, error, isError } = apiEndpoint

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isError])

  if (isLoading) return <Loader />

  return { data, isLoading, error, isError }
}

export default useErrorMessage

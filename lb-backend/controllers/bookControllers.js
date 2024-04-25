export const getBooks = async (req, res) => {
  res.status(200).json({
    message: 'All books',
  })
}

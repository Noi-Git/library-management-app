import { db } from '../app.js'

export const getBooks = (req, res) => {
  const q = req.query.genre_id
    ? 'SELECT * FROM books WHERE genre_id=?'
    : 'SELECT * FROM books'

  db.query(q, [req.query.genre_id], (err, data) => {
    if (err) return res.send(err)

    return res.status(200).json(data)
  })
}

export const getBook = (req, res) => {
  res.json('from book controller')
  // const q =
  //   'SELECT `user_firstname`, `user_lastname`, `book_title`, `book_description`, `book_image_url`, FROM users u JOIN books b ON u.user_id = b.book_id WHERE b.book_id = ?'
  const q = 'SELECT * FROM books WHERE book_id = ?'

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.json(err)

    return res.status(200).json(data[0])
  })
}

export const addBook = (req, res) => {
  res.json('from book controller')
}

export const deleteBook = (req, res) => {
  res.json('from book controller')
}

export const updateBook = (req, res) => {
  res.json('from book controller')
}

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

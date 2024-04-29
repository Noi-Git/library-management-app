import { db } from '../app.js'
import jwt from 'jsonwebtoken'

export const getBooks = (req, res) => {
  // const q = req.query.genre_id
  //   ? 'SELECT * FROM books WHERE genre_id=?'
  //   : 'SELECT * FROM books'
  const q = req.query.genre_id
    ? 'SELECT * FROM books WHERE genre_id=?'
    : 'SELECT book_id, book_title, book_description, book_image_url, total_copies, author_firstname, author_lastname, author_middlename, genre_name FROM books INNER JOIN authors ON books.author_id = authors.author_id INNER JOIN genre ON books.genre_id = genre.genre_id'

  db.query(q, [req.query.genre_id], (err, data) => {
    if (err) return res.status(500).send(err)

    return res.status(200).json(data)
  })
}

export const getBookById = (req, res) => {
  const q =
    'SELECT book_id, book_title, book_description, book_image_url, total_copies, author_firstname, author_lastname, author_middlename, genre_name FROM books INNER JOIN authors ON books.author_id = authors.author_id INNER JOIN genre ON books.genre_id = genre.genre_id WHERE book_id=?'

  const book = db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err)
    const book = res.send({
      _sql: q,
      _values: req.params.id,
      results: data,
    })

    return book
  })
}

export const addBook = (req, res) => {
  const token = req.cookies.access_token
  if (!token) return res.status(401).json('Not authenticated!')

  jwt.verify(token, 'jwtkey', (err, userInfo) => {
    if (err) return res.status(403).json('Token is not valid!')

    const q =
      'INSERT INTO books(`book_title`, `book_description`, `book_image_url`, `genre`, `author_name`, `total_copies`, `date`) VALUES (?)'

    const values = [
      req.body.book_title,
      req.body.book_description,
      req.body.book_image_url,
      req.body.genre,
      req.body.author_name,
      req.body.date,
      userInfo.user_id,
    ]

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err)
      return resjson('Book has been created')
    })
  })
}

export const deleteBook = (req, res) => {
  const token = req.cookies.access_token

  if (!token) return res.status(401).json('Not authenticated!')

  //verify json web token - id: data[0].user_id -
  //it comes form authControllers when we are login
  // -- const token = jwt.sign({ id: data[0].user_id }, 'jwtkey') --
  jwt.verify(token, 'jwtkey', (err, userInfo) => {
    if (err) return res.status(403).json('Token is not valid!')

    //if the token valid - delete the item
    const bookId = req.params.id
    //`user_id` -- comes from userInfo
    const q = 'DELETE FROM books WHERE `book_id` = ? AND `user_id` = ?'

    db.query(q, [bookId, userInfo.user_id], (err, data) => {
      //this doesn't block you from deleting the book
      if (err) return res.status(403).json('You can delete only your post!')

      return res.json('Post has been deleted!')
    })
  })
}

export const updateBook = (req, res) => {
  const token = req.cookies.access_token
  if (!token) return res.status(401).json('Not authenticated!')

  jwt.verify(token, 'jwtkey', (err, userInfo) => {
    if (err) return res.status(403).json('Token is not valid!')

    const bookId = req.param.book_id
    const q =
      'UPDATE books SET `book_title`=?, `book_description`=?, `book_image_url`=?, `genre`=?, `author_name`=?, `total_copies`=? WHERE `book_id`=? AND user_id=?'

    const values = [
      req.body.book_title,
      req.body.book_description,
      req.body.book_image_url,
      req.body.genre,
      req.body.author_name,
    ]

    db.query(q, [...values, bookId, userInfo.user_id], (err, data) => {
      if (err) return res.status(500).json(err)
      return resjson('Book has been updated')
    })
  })
}

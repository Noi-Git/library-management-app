import { db } from '../app.js'

export const searchTitle = (req, res) => {
  let search_query = req.query.search_query
  const sql = `SELECT book_title FROM books
  WHERE book_title LIKE '%${search_query}%'
  LIMIT 10`

  db.query(sql, (err, data) => {
    if (err) res.status(404).json(err)

    res.status(200).json(data)
  })
}

export const searchDescription = (req, res) => {
  let search_query = req.query.search_query
  const sql = `SELECT book_description FROM books
  WHERE book_description LIKE '%${search_query}%'
  LIMIT 10`

  db.query(sql, (err, data) => {
    if (err) res.status(404).json(err)

    res.status(200).json(data)
  })
}

export const searchAuthorFirstname = (req, res) => {
  let search_query = req.query.search_query
  const sql = `SELECT author_firstname FROM authors
  WHERE author_firstname LIKE '%${search_query}%'
  LIMIT 10`

  db.query(sql, (err, data) => {
    if (err) res.status(404).json(err)

    res.status(200).json(data)
  })
}

export const searchAuthorlastname = (req, res) => {
  let search_query = req.query.search_query
  const sql = `SELECT author_lastname FROM authors
  WHERE author_lastname LIKE '%${search_query}%'
  LIMIT 10`

  db.query(sql, (err, data) => {
    if (err) res.status(404).json(err)

    res.status(200).json(data)
  })
}

export const searchGenre = (req, res) => {
  let search_query = req.query.search_query
  const sql = `SELECT genre_name FROM genre
  WHERE genre_name LIKE '%${search_query}%'
  LIMIT 10`

  db.query(sql, (err, data) => {
    if (err) res.status(404).json(err)

    res.status(200).json(data)
  })
}

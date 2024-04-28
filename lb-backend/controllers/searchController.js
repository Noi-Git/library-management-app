import { db } from '../app.js'

export const searchByTitle = (req, res) => {
  let search_query = req.query.search_query
  const sql = `SELECT book_title FROM books
  WHERE book_title LIKE '%${search_query}%'
  LIMIT 10`

  db.query(sql, (err, data) => {
    if (err) res.status(404).json(err)

    res.status(200).json(data)
  })
}

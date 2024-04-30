import { db } from '../app.js'

export const searchTitle = (req, res) => {
  let search_query = req.query.search_query
  const q = `SELECT book_title FROM books
  WHERE book_title LIKE '%${search_query}%'
  LIMIT 10`

  db.query(q, [req.query.search_query], (err, search) => {
    if (err) res.status(500).json(err)

    res.send({
      _sql: q,
      _values: req.query.search_query,
      result: search,
    })
    console.log('search---', search)
  })
}

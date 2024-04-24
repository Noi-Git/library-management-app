const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config({ path: `${__dirname}/config.env` })

const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
})

app.get('/', (req, res) => {
  return res.json('From backend Side')
})

app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users;'
  db.query(sql, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})

app.get('/books', (req, res) => {
  const sql = 'SELECT * FROM books;'
  db.query(sql, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})

// const PORT = process.env.PORT || 3307

app.listen(3307, () => {
  console.log('Server is Listing')
})

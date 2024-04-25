import express from 'express'
import { getGlobals } from 'common-es'
import mysql from 'mysql2'
import cors from 'cors'
import dotenv from 'dotenv'

const { __dirname } = getGlobals(import.meta.url)

dotenv.config({ path: `${__dirname}/config/config.env` })

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

app.listen(process.env.PORT, () => {
  console.log(
    `Server is Listing on port: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  )
})

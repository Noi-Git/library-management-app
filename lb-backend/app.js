import express from 'express'
const app = express()
import { getGlobals } from 'common-es'
import mysql from 'mysql2'
import cors from 'cors'
import dotenv from 'dotenv'

const { __dirname } = getGlobals(import.meta.url)

dotenv.config({ path: `${__dirname}/config/config.env` })

app.use(express.json())
app.use(cors())

export const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
})

//=== import all routes ===
import authRoutes from './routes/auths.js'
import bookRoutes from './routes/books.js'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

//register route created in books.js
// app.use('/api/v1', bookRoutes)
app.use('/api/v1/auths', authRoutes)
app.use('/api/v1/books', bookRoutes)
app.use('/api/v1/posts', postRoutes)
app.use('/api/v1/users', userRoutes)

// app.get('/', (req, res) => {
//   return res.json('From backend Side')
// })

// app.get('/users', (req, res) => {
//   const sql = 'SELECT * FROM users;'
//   db.query(sql, (err, data) => {
//     if (err) return res.json(err)
//     return res.json(data)
//   })
// })

// app.get('/books', (req, res) => {
//   const sql = 'SELECT * FROM books;'
//   db.query(sql, (err, data) => {
//     if (err) return res.json(err)
//     return res.json(data)
//   })
// })

app.listen(process.env.PORT, () => {
  console.log(
    `Server is Listing on port: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  )
})

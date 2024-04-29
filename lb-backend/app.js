import express from 'express'
import { getGlobals } from 'common-es'
import mysql from 'mysql2'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

// //=== import all routes ===
import authRouter from './routes/auths.js'
import bookRouter from './routes/books.js'
import userRouter from './routes/users.js'
import searchRouter from './routes/search.js'

const app = express()
const { __dirname } = getGlobals(import.meta.url)
dotenv.config({ path: `${__dirname}/config/config.env` })

app.use(express.json())
app.use(cookieParser())
app.use(cors())

export const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
})

//register route
app.use('/api/v1/auths', authRouter)
app.use('/api/v1/books', bookRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/search', searchRouter)

app.listen(process.env.PORT, () => {
  console.log(
    `Server is Listing on port: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  )
})

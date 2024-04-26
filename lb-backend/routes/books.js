import express from 'express'
import {
  addBook,
  deleteBook,
  getBook,
  getBooks,
  updateBook,
} from '../controllers/bookController.js'

const bookRouter = express.Router()

bookRouter.get('/', getBooks)
bookRouter.get('/:id', getBook)
bookRouter.post('/', addBook)
bookRouter.delete('/:id', deleteBook)
bookRouter.put('/:id', updateBook)

export default bookRouter

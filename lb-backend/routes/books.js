import express from 'express'
import {
  addBook,
  deleteBook,
  getBookById,
  getBooks,
  updateBook,
} from '../controllers/bookController.js'

const bookRouter = express.Router()

bookRouter.get('/', getBooks)
bookRouter.get('/:id', getBookById)
bookRouter.post('/', addBook)
bookRouter.delete('/:id', deleteBook)
bookRouter.put('/:id', updateBook)

export default bookRouter

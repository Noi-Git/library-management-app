import express from 'express'
import {
  addBook,
  deleteBook,
  getBook,
  getBooks,
  updateBook,
} from '../controllers/bookController'

const router = express.Router()

router.get('/', getBooks)
router.get('/:id', getBook)
router.post('/', addBook)
router.delete('/:id', deleteBook)
router.update('/:id', updateBook)

export default router

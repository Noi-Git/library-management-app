import express from 'express'

const router = express.Router()

router.route('/books').get(getBooks)

export default router

import express from 'express'
import { searchTitle } from '../controllers/searchController.js'

const searchRouter = express.Router()

searchRouter.get('/title', searchTitle)

export default searchRouter

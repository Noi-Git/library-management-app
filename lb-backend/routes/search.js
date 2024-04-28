import express from 'express'
import { searchByTitle } from '../controllers/searchController.js'

const searchRouter = express.Router()

searchRouter.get('/title', searchByTitle)

export default searchRouter

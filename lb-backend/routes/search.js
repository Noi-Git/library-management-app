import express from 'express'
import {
  searchAuthorFirstname,
  searchAuthorlastname,
  searchDescription,
  searchGenre,
  searchTitle,
} from '../controllers/searchController.js'

const searchRouter = express.Router()

searchRouter.get('/title', searchTitle)
searchRouter.get('/description', searchDescription)
searchRouter.get('/author_firstname', searchAuthorFirstname)
searchRouter.get('/author_lastname', searchAuthorlastname)
searchRouter.get('/genre', searchGenre)

export default searchRouter

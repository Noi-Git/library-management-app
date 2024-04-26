import express from 'express'
import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from '../controllers/userController.js'

const router = express.Router()

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', addUser)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)

export default router

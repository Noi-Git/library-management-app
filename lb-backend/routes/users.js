import express from 'express'
import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.get('/', getUsers)
userRouter.get('/:id', getUser)
userRouter.post('/', addUser)
userRouter.delete('/:id', deleteUser)
userRouter.put('/:id', updateUser)

export default userRouter

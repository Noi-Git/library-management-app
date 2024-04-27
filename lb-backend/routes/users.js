import express from 'express'
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.get('/', getUsers)
userRouter.get('/:id', getUser)
userRouter.delete('/:id', deleteUser)
userRouter.put('/:id', updateUser)

export default userRouter

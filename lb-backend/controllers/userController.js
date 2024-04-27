import { db } from '../app.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const getUsers = (req, res) => {
  const q = 'SELECT * FROM users'

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err)

    return res.status(200).json(data)
  })
}

export const getUser = (req, res) => {
  const q = 'SELECT * FROM users WHERE user_id = ?'

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err)

    return res.status(200).json(data[0])
  })
}

export const deleteUser = (req, res) => {
  const q = 'DELETE FROM users WHERE user_id = ?'

  const userId = req.params.user_id

  db.query(q, [userId], (err, data) => {
    if (err) return res.status(500).json(err)

    return res.status(200).json('User has been deleted!')
  })
}

export const updateUser = (req, res) => {
  const userId = req.params.user_id

  //encrypt password using Bcypt to Hash the password and create user
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(req.body.password, salt)

  const q =
    'UPDATE users SET `user_firstname`=?, `user_lasname`=?, `email`=?, `user_password`=? WHERE user_id = ?'

  const values = [
    req.body.user_firstname,
    req.body.user_lastname,
    req.body.email,
    req.body.user_password,
    hash,
  ]

  db.query(q, [...values, userId], (err, data) => {
    if (err) return res.status(500).json(err)

    return res.status(200).json('Book has been updated successfully.')
  })
}

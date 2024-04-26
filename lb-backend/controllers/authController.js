import { db } from '../app.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = (req, res) => {
  // check existing user
  const q = 'SELECT * FROM users WHERE email = ? OR username = ?'

  db.query(sql, [req.body.email, req.body.name], (err, data) => {
    if (err) return res.json(err)
    //if user already exist - this will not allow to create a new one
    if (data.length) return res.status(409).json('User already exists')

    //encrypt password using Bcypt to Hash the password and create user
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)

    const q = 'INSERT INTO users(`username`,`email`,`password`) VALUES (?)'
    const values = [req.body.username, req.body.email, hash]

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err)

      return res.status(200).json('User has been created')
    })
  })
}

export const login = (req, res) => {
  //check user if user exist
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req, body, username], (err, data) => {
    //if err
    if (err) return res.json(err)
    //show errow message if user does not exist
    if (data.length === 0) return.statu(404).json("User not found!")

    //if user exist -- check password
    //-- by default "data" - give us an array
    //-- we only need the data[0] -- which is user
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password)

    if(!isPasswordCorrect) return res.status(400).json("Wrong username or password")
  })

}

export const logout = (req, res) => {}

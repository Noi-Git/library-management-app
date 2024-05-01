import { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { Row, Col } from 'react-bootstrap'
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth'
import book from '../../assets/images/book1x.png'
// import axios from 'axios'
import MetaData from '../layout/MetaData'
import { auth } from '../firebase/firebase'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const EmailPasswordRegister = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('----+', email, password)
    await createUserWithEmailAndPassword(auth, email, password).then(
      async (userCredential) => {
        const user = userCredential.user

        await sendEmailVerification(user)
        console.log('Success!')
      }
    )
    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration`
    )
    window.localStorage.setItem('emailForRegistration', email)
    setEmail('')
    setPassword('')
  }

  useEffect(() => {
    auth.onAuthStateChanged((userCredential) => {
      // console.log(userCredential)
      const { email, emailVerified } = userCredential
      // console.log(email,emailVerified)
      setUser({ email, emailVerified })
    })
  }, [])

  return (
    <>
      <MetaData title={'Register with Email and Password page'} />
      <ToastContainer />
      <Row className='my-5'>
        <Col>
          <h2 className='welcome-title'>Register for an account</h2>
        </Col>
        <Col xs='5'>
          <img
            className='welcome-img'
            src={book}
            alt='open book a beautiful book'
          />
        </Col>
      </Row>
      <Row className=' form-width'>
        <Col>
          <div className='container'>
            <input
              type='email'
              value={email}
              placeholder='your email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              value={password}
              placeholder='your password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='button' onClick={handleSubmit}>
              Sing Up
            </button>
          </div>
          <div>
            <p>{user?.email}</p>
            <p>{user?.emailVerified ? 'email verify: true' : 'false'}</p>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default EmailPasswordRegister

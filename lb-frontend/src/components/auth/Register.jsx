import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { Row, Col } from 'react-bootstrap'
import { sendSignInLinkToEmail } from 'firebase/auth'
import book from '../../assets/images/book1x.png'
// import axios from 'axios'
import MetaData from '../layout/MetaData'
import { auth } from '../firebase/firebase'
import { toast } from 'react-toastify'

const Register = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    // console.log('register page---', email)
    e.preventDefault()
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    }
    console.log('config---', config)
    await sendSignInLinkToEmail(auth, email, config)
    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration.`
    )
    // save user email in local storage
    window.localStorage.setItem('emailForRegistration', email)
    // clear stat
    setEmail('')
  }

  return (
    <>
      <MetaData title={'Register page'} />

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
          <label>Email address</label>
          <input
            type='email'
            value={email}
            name={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubmit}>Register</button>
        </Col>
      </Row>
    </>
  )
}

export default Register

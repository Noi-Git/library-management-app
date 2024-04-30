import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { Button, Form, Row, Col } from 'react-bootstrap'
import {
  getAuth,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from 'firebase/auth'
import book from '../../assets/images/book1x.png'
// import axios from 'axios'
import MetaData from '../layout/MetaData'
import { auth } from '../firebase/firebase'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Confirm the link is a sign-in with email link.
    const auth = getAuth()
    if (isSignInWithEmailLink(auth, window.location.href)) {
      // Additional state parameters can also be passed via URL.
      // This can be used to continue the user's intended action before triggering
      // the sign-in operation.
      // Get the email if available. This should be available if the user completes
      // the flow on the same device where they started it.
      let email = window.localStorage.getItem('emailForSignIn')
      if (!email) {
        // User opened the link on a different device. To prevent session fixation
        // attacks, ask the user to provide the associated email again. For example:
        email = window.prompt('Please provide your email for confirmation')
      }
      // The client SDK will parse the code from the link for you.
      signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          // Clear email from storage.
          window.localStorage.removeItem('emailForSignIn')
          // You can access the new user via result.user
          // Additional user info profile not available via:
          // result.additionalUserInfo.profile == null
          // You can check if the user is new or existing:
          // result.additionalUserInfo.isNewUser
        })
        .catch((error) => {
          // Some error occurred, you can inspect the code: error.code
          // Common errors could be invalid email and invalid or expired OTPs.
        })
    }

    // const config = {
    //   url: 'http://localhost:3000/register/complete',
    //   handleCodeInApp: true,
    // }

    // await auth.signInWithEmailLink(email, config)
    // toast.success(
    //   `Email is sent to ${email}. Click the link to complete your registration`
    // )

    // window.localStorage.setItem('emailForRgistration', email)
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
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Button
              className='buttons'
              variant='primary'
              type='submit'
              onClick={handleSubmit}
            >
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default Register

import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Container, Button, Form, Row, Col } from 'react-bootstrap'
import reading from '../../assets/images/reading.png'
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from '../firebase/auth'
import { useAuth } from '../contexts/authContext'

const Login = () => {
  const { userLoggedIn } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    if (!isSigningIn) {
      setIsSigningIn(true)
      await doSignInWithEmailAndPassword(email, password)
    }
  }

  const onGoogleSignIn = async (e) => {
    e.preventDefault()

    if (!isSigningIn) {
      setIsSigningIn(true)
      doSignInWithGoogle().catch((err) => {
        setIsSigningIn(false)
      })
    }
  }

  return (
    <>
      {userLoggedIn && <Navigate to={'/'} replace={true} />}
      <Container>
        <Row className='my-5'>
          <Col>
            <h2 className='welcome-title'>Welcome to Library</h2>
          </Col>
          <Col xs='5'>
            <img
              className='welcome-img'
              src={reading}
              alt='Gnome reading a book'
            />
          </Col>
        </Row>

        <Row className=' form-width'>
          <Col>
            <Form onSubmit>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Submit
              </Button>

              <Form.Group className='mt-3'>
                <Form.Label>Don't have an account .. register ..</Form.Label>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login

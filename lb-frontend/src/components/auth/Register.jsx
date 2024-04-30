import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Row, Col } from 'react-bootstrap'
import book from '../../assets/images/book1x.png'
import axios from 'axios'
import MetaData from '../layout/MetaData'

const Register = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleChange = async (e) => {
    // setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  // console.log(inputs)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // await axios.post('/api/v1/auth/register', inputs)
      // navigate('/login')
    } catch (err) {
      // console.log(err)
      // setError(error.response.data)
    }
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
            {error && <p>{error}</p>}
            <Form.Group className='mt-3'>
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default Register

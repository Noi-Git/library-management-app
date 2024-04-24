import { Container, Button, Form, Row, Col } from 'react-bootstrap'
import reading from '../../assets/images/reading.png'

const Login = () => {
  return (
    <>
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
            <Form>
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

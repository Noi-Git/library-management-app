import { Container, Button, Form, Row, Col } from 'react-bootstrap'
import book from '../../assets/images/book.png'

const Register = () => {
  return (
    <>
      <Container>
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
            <Form>
              <Form.Group className='mb-3' controlId='formBasicFirstname'>
                <Form.Label>First name:</Form.Label>
                <Form.Control
                  type='first-name'
                  placeholder='Enter first name'
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicLastname'>
                <Form.Label>Last name</Form.Label>
                <Form.Control type='last-name' placeholder='Enter last name' />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>

              <Button variant='primary' type='submit'>
                Submit
              </Button>
              <Form.Group className='mt-3'>
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Register

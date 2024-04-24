import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import book from '../../assets/images/book.png'

const Register = () => {
  return (
    <>
      <div className='login-container'>
        <h2 className='welcome'>Register for an account</h2>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>First name:</Form.Label>
            <Form.Control type='first-name' placeholder='Enter first name' />

            <Form.Label>Last name</Form.Label>
            <Form.Control type='last-name' placeholder='Enter last name' />

            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>

          {/* <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />

            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='confirm-password'
              placeholder='Confirm Password'
            />
          </Form.Group> */}

          <Button variant='primary' type='submit'>
            Submit
          </Button>
          <div>
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </div>
        </Form>
        <img className='welcome-img' src={book} alt='' />
      </div>
    </>
  )
}

export default Register

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import reading from '../../assets/images/reading.png'

const Login = () => {
  return (
    <>
      <div className='login-container'>
        <h2 className='welcome'>Welcome to Library</h2>
        <div className='wrapper'>
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
            <Form.Group className='mt-3' controlId='formBasicCheckbox'>
              <Form.Label>Don't have an account .. register ..</Form.Label>
            </Form.Group>
          </Form>
        </div>

        <img className='welcome-img' src={reading} alt='' />
      </div>
    </>
  )
}

export default Login

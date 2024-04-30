import { auth, provider } from '../firebase/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Container, Button, Form, Row, Col } from 'react-bootstrap'
import reading from '../../assets/images/reading1x.png'
import MetaData from '../layout/MetaData'

const Login = () => {
  const navigate = useNavigate()

  const singInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider)
    console.log(results)
    const authInfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth: true,
    }
    localStorage.setItem('auth', JSON.stringify(authInfo))
    navigate('/')
  }

  return (
    <>
      <MetaData title={'Login page'} />
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

        <Row className=' form-width d-flex justify-content-center'>
          <Col>
            <Form>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Sign In With Google to Continue</Form.Label>
              </Form.Group>
            </Form>
            <Button
              variant='primary'
              type='submit'
              className='buttons'
              onClick={singInWithGoogle}
            >
              Sign In With Google Account
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login

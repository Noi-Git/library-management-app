import { Link } from 'react-router-dom'
import { auth, provider } from '../firebase/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'
import { FaGoogle } from 'react-icons/fa'
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
        <div className='d-flex flex-column mb-3 justify-content-center mx-auto'>
          <h2 className='welcome-title'>Welcome to Library</h2>
          <img
            className='welcome-img'
            src={reading}
            alt='Gnome reading a book'
          />
          <Button
            data-testid='google-sign-in'
            variant='primary'
            type='submit'
            className='google-login-button'
            onClick={singInWithGoogle}
          >
            <FaGoogle /> Sign In With Google Account
          </Button>
          <p className='login-register-text'>
            Don't have an account? {/* <span> */}
          </p>
          <Link to={'/register'} className='login-register'>
            Register
          </Link>
          {/* </span> */}
        </div>
      </Container>
    </>
  )
}

export default Login

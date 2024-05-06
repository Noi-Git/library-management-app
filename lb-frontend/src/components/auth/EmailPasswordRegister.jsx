import { useEffect, useState } from 'react'
import { auth, provider } from '../firebase/firebase'
import { signInWithPopup } from 'firebase/auth'
import { Button } from 'react-bootstrap'
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
// import book from '../../assets/images/book1x.png'
import MetaData from '../layout/MetaData'
// import { toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
import toast from 'react-hot-toast'
import '../../custom.scss'

const EmailPasswordRegister = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('----+', email, password)

    //validation
    if (!email || !password) {
      toast.error('Email and password is required')
      return
    }
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters')
      return
    }
    await createUserWithEmailAndPassword(auth, email, password).then(
      async (userCredential) => {
        const user = userCredential.user

        await sendEmailVerification(user)
        console.log('Success!')
      }
    )
    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration`
    )
    window.localStorage.setItem('emailForRegistration', email)
    setEmail('')
    setPassword('')
    // navigate('/')
  }

  useEffect(() => {
    auth.onAuthStateChanged((userCredential) => {
      // console.log(userCredential)
      const { email, emailVerified } = userCredential
      // console.log(email,emailVerified)
      setUser({ email, emailVerified })
    })
  }, [])

  return (
    <div className='container'>
      <MetaData title={'Register with Email and Password page'} />
      {/* <ToastContainer /> */}

      <div className='login-register'>
        <h4 className='welcome-title'>Register width email and password</h4>

        <input
          className='input register-input'
          type='email'
          value={email}
          placeholder='your email'
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className='input register-input'
          type='password'
          value={password}
          placeholder='your password'
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className='signup-btn' type='button' onClick={handleSubmit}>
          Sing Up
        </button>

        <Button
          variant='primary'
          type='submit'
          className='google-register-button'
          onClick={singInWithGoogle}
        >
          <FaGoogle /> <div>Sign In/Sign Up With Google Account</div>
        </Button>

        {/* <div>
          <p>{user?.email}</p>
          <p>{user?.emailVerified ? 'email verify: true' : 'false'}</p>
        </div> */}
      </div>
    </div>
  )
}

export default EmailPasswordRegister

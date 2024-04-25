import { auth } from './firebase'
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'

//create new user with email and password
export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

//sign-in with email and password
export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider(auth)
  //popup will open and allow for sign-in with Gmail
  const result = await signInWithPopup(auth, provider)

  //you can return user and save user information to file store
  //result.user
  return result
}

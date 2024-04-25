import { auth } from './firebase'
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updatePassword,
} from 'firebase/auth'

//create new user with email and password
export const doSignInWithEmailAndPassword = async (email, password) => {
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

export const doSignOut = () => {
  return auth.signOut()
}

export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email)
}

export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password)
}

export const doSendEmailVerification = () => {
  return doSendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  })
}

import { useEffect, useState } from 'react'
import { auth } from '../../firebase/firebase'

const AuthContext = React.createContext()

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  // subscribe to the auth state change event -- when user login or logout --
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser)
    return unsubscribe
  }, [])

  async function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user })
      setUserLoggedIn(true)
    } else {
      setCurrentUser(null)
      setUserLoggedIn(false)
    }
    setLoading(false)
  }
  const value = {
    currentUser,
    userLoggedIn,
    loading,
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

// === setup firebase auth provider ===
//https://www.youtube.com/watch?v=WpIDez53SK4

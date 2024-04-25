import { Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navigation from './components/nav/Navigation'
import Home from './components/pages/home/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

function App() {
  return (
    <div className='app-bg'>
      <Navigation />
      <Container>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Container>
    </div>
  )
}

export default App

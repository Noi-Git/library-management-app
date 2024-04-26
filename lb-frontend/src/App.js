import { Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Home from './components/pages/home/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className='app-bg'>
      <Header />
      <Container>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Home from './components/pages/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import './test.scss'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Container className='container'>
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

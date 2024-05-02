import { Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './components/pages/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
// import { Toaster } from 'react-hot-toast'
import './custom.scss'
import './App.css'
import BookDetails from './components/pages/books/BookDetails'
import AddBook from './components/pages/admin/AddBook'
import Genre from './components/pages/admin/Genre'
import EmailPasswordRegister from './components/auth/EmailPasswordRegister'

function App() {
  return (
    <div className='app-bg'>
      <ToastContainer />
      <Header />
      <Container className='container'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/book/:id' element={<BookDetails />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<EmailPasswordRegister />} />
          {/* <Route path='/register' element={<Register />} /> */}
          <Route path='/add-book' element={<AddBook />} />
          <Route path='/add-genre' element={<Genre />} />
          <Route
            path='/email-password-register'
            element={<EmailPasswordRegister />}
          />
        </Routes>
      </Container>
      <Footer />
    </div>
  )
}

export default App

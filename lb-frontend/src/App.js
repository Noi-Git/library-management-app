import { Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navigation from './components/nav/Navigation'
import Home from './components/pages/home/Home'

function App() {
  return (
    <div className='app-bg'>
      <Navigation />
      <Container>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Container>
    </div>
  )
}

export default App

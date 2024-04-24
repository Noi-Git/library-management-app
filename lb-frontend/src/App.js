import { Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navigation from './components/nav/Navigation'

function App() {
  return (
    <div className='app-bg'>
      <Navigation />
      <Container>
        <Routes></Routes>
      </Container>
    </div>
  )
}

export default App

import { Link } from 'react-router-dom'
import { Container, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
  return (
    <Navbar expand='lg' className='nav-bg'>
      <Container>
        <Navbar.Brand href='#home'>
          <h1 className='logo'> Noi's Library</h1>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
          </Nav>

          <Navbar.Collapse className='justify-content-end'>
            <Nav className='justify-content-between'>
              <Link className='nav-link' to='/login'>
                Login
              </Link>
              <Link className='nav-link' to='/register'>
                Register
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
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
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
          </Nav>

          <Navbar.Collapse className='justify-content-end'>
            <Nav className='justify-content-between'>
              <Nav.Link href='#login'>Login</Nav.Link>
              <Nav.Link href='#register'>Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation

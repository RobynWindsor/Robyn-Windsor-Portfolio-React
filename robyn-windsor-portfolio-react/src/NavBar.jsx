import react from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';

function NavBar() {
  return (
    <div>
      <Navbar expand="lg" className="">
        <Container>
          <Navbar.Brand id="home" href="#home">
            RW
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link id="about" href="#about">
                About
              </Nav.Link>
              <Nav.Link id="projects" href="#projects">
                Projects
              </Nav.Link>
              <Nav.Link id="contact" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavBar;

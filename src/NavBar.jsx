import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Home.css';
import './NavBar.css';

function NavBar() {
  return (
    <div>
      <Navbar expand="lg" className="">
        <Container>
          <Navbar.Brand as={NavLink} to="/home" id="home">
            RW
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/about" id="about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/projects" id="projects">
                Projects
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" id="contact">
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

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
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
              <Nav.Link as={NavLink} to="/about" id="about" href="#about">
                About
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/projects"
                id="projects"
                href="#projects"
              >
                Projects
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" id="contact" href="#contact">
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

import react from 'react';
import NavBar from './NavBar';
import './Home.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Home() {
  return (
    <div>
      <NavBar />
      <h1>Robyn Windsor</h1>
      <h2 className="subHeader">FRONTEND ENGINEER</h2>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image
              src="src/assets/rw_photo_edited.jpg"
              roundedCircle
              width="170"
              height="180s"
            />
          </Col>
        </Row>
      </Container>
      <section className="introduction">
        As a passionate frontend developer with a particular focus on climate
        tech solutions, I am driven by the opportunity to merge my coding
        expertise with my commitment to addressing environmental challenges
        head-on.
      </section>
    </div>
  );
}

export default Home;

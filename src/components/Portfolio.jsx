import React from 'react';
import Title from './Title';
import DeveloperProjects from './DeveloperProjects';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const Portfolio = () => {
  return (
    <>
      <Container fluid='lg'>
        <Row>
          <section className='section services' id="services">
            <Col> <Title title='featured' subtitle='projects' mantra='Turning Visions into Reality, One Pixel at a Time.' />
              <DeveloperProjects />
            </Col>
          </section>
        </Row>
      </Container >
    </>
  )
}

export default Portfolio

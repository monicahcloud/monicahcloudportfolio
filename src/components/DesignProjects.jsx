import React from "react";
import { projects } from '../data';
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container'

function DesignProjects() {
  return (
    <>
      <Container fluid='md' >
        <Row >
          {projects.map((project) => {
            const { id, title, image, link } = project;
            return (
              <Col xs={6} md={4} >
                <article className="project-card" key={id}>
                  <div id='' className='project'></div>
                  <div className=''>
                    <Link to={link} target={"blank"} rel='noreferrer'>
                      <div className="">
                        <img src={image} className="project-img" alt={title} />

                        <p className="project-title ">{title}</p>
                      </div>
                    </Link>
                  </div>

                </article >
              </Col>
            )
          })}
        </Row>
      </Container>
    </>

  );
}

export default DesignProjects;

import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { education } from '../data';


const Education = () => {
  return (
    <Container fluid=''  >
      <Row>
        <div className='container section' >
          <Col>
            <div className='project'>
              <div><h3 className='title' style={{ textAlign: 'center' }}> Education / <span style={{ color: '#2CAEBA' }}>Training</span></h3>
             
                  {education.map((skill) => {
                    return (
                      <section style={{ lineHeight: '1.25rem' }} key={skill.id}>
                        <h5>{skill.degree}</h5>
                        <Row>
                          <Col><h4>{skill.school}</h4></Col>
                          <Col style={{ textAlign: 'right' }}><h6>{skill.gradMonth} {skill.gradYear}</h6></Col>
                        </Row>
                      </section>
                    )
                  })}
              </div>
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  )
}

export default Education

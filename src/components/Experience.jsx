import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { experiences } from '../data';


const Experience = () => {
  return (
    <Container fluid='md' style={{ background: '' }} >
      <Row>
        <div className='container section' >
          <Col>
            <div className='project-title'>
              <div><h3 className='title' style={{ textAlign: 'center' }}> Professional <span style={{ color: '#2CAEBA' }}>Experience</span></h3>
                <div style={{}}>
                  {experiences.map((skill) => {
                    return (
                      <section style={{ lineHeight: '1.25rem' }} key={skill.id}>
                        <h5>{skill.position}</h5>
                        <Row>
                          <Col><h4><i>{skill.company}</i></h4></Col>
                          <Col style={{ textAlign: 'right' }}><h6>{skill.startMonth} {skill.startYear} - {skill.endMonth} {skill.endYear}</h6></Col>
                        </Row>
                        <ul>
                          <li className="animated-bullet">{skill.point1}</li>
                          <li className="animated-bullet">{skill.point2}</li>
                          <li className="animated-bullet">{skill.point3}</li>
                          <li className="animated-bullet">{skill.point4}</li>
                        </ul>
                      </section>
                    )
                  })}
                </div>
              </div>
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  )
}

export default Experience

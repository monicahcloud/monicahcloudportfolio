import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'


const ProfessionalSummary = () => {
  return (
    <Container fluid='' >
      <Row>
        <div className='container section' >
          <Col>
            <div className='project-title'>
            <div><h3 className='title' style={{ textAlign: 'center' }}>Professional <span style={{ color: '#2CAEBA' }}>Summary</span></h3>
              {/* <p> placeholder text for now </p> */}
              <div style={{}}>
                <blockquote><p>Innovative and results-oriented Front End Engineer with over two years of hands-on experience designing and
                  developing user-centric, responsive web applications. Proficient in HTML, CSS, JavaScript, and modern web
                  development frameworks such as React. Expertise in UX design, translating business requirements into intuitive and
                  visually appealing designs that enhance user engagement and satisfaction. Adept at using command-line
                  development tools on Linux, managing APIs and RESTful services, and facilitating seamless communication within
                  cross-functional teams. Recognized for a growth mindset, proactive approach, and professional communication
                  skills. Highly organized and efficient, a flexible and versatile team player who works hard and excels in any
                  environment.</p>
                </blockquote>
              </div></div>
            </div>
          </Col>   </div>
      </Row>
    </Container>
  )
}

export default ProfessionalSummary

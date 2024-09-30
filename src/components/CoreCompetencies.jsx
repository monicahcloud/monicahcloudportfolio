import React from 'react'
import { techicalSkills } from '../data'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const CoreCompetencies = () => {
  return (
    <>
      <Container fluid='' >
        <Row>
          <div className='container section' >
            <div className=''>
              <div>
                <h3 className='title' style={{ textAlign: 'center' }}>core <span style={{ color: '#2CAEBA' }}>Competencies</span></h3>
              </div>
              <Col  >
                <table>
                  {techicalSkills.map((skills) => {
                    const { id, subtitle, list } = skills;
                    return (
                      <tr key={id}>
                        <td><b>{subtitle}:</b></td>
                        <td style={{ textAlign: 'right' }}>{list}</td>
                      </tr>
                    )})}
                </table>
              </Col>
            </div>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default CoreCompetencies

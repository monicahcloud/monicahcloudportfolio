import React from 'react'
import ResumeLinks from './ResumeLinks';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { socialLinks, techicalSkills, experiences, education , certs } from '../data';



const PDF_FILE_URL = 'C:/Users/monic/OneDrive/Desktop/reactProjects/monicahPortfolio/monicah_portfolio/public/MonicahCloud_Resume.pdf'

const Resume = () => {

  const downloadTxtFile = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob)
        const fileName = url.split('/').pop()
        const aTag = document.createElement('a')
        aTag.href = blobURL;
        aTag.setAttribute('download', fileName)
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        console.log("file was downloaded")
      });
  };
  return (
    <>
      <Container fluid='' >
        <section class="section" >
          <Row>
            <div className=' section-center' >
              <Col>
                <div className='services' style={{ textAlign: 'center' }}>
                  <div><h3 className='' >CV / <span style={{ color: '#2CAEBA' }}>Resume</span></h3>
                    <p> Driven by purpose, guided by passion. </p>
                    <div style={{}}>
                      <ul class="nav-icons" style={{ justifyContent: 'center' }}>
                        {socialLinks.map((link) => {
                          return (
                            <li key={link.id}>
                              <a href={link.href} target="_blank" rel='noreferrer' class="nav-icon"
                              ><i class={link.icon}></i>
                              </a>
                            </li>
                          )
                        })}
                      </ul>
                    </div></div>
                </div>
              </Col>   </div>
          </Row>
          <ResumeLinks />
          <Row><hr /><div className='container section-center'>
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
            </Col>
          </div>
          </Row>
          <Row> <hr /> 
          <div className='section-center'>
            <h3 className='title' style={{ textAlign: 'center' }}>core <span style={{ color: '#2CAEBA' }}>Competencies</span></h3>
          
            <Col  >
              <table>
                {techicalSkills.map((skills) => {
                  const { id, subtitle, list } = skills;
                  return (
                    <tr key={id}>
                      <td><b>{subtitle}:</b></td>
                      <td style={{ textAlign: 'right' }}>{list}</td>
                    </tr>
                  )
                })}
              </table>
            </Col></div></Row>
          <Row><hr /> 
          <div className='container section-center' >
          <Col>
            <div className='project'>
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
        </div></Row>
          <Row><hr /> <div className='container section-center' >
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
        </div></Row>
          <Row><hr />  <div>
      <h3 className='title' style={{ textAlign: 'center' }}> Certifications <span style={{ color: '#2CAEBA' }}></span></h3>
      <section class="section services" id="services">
        <div class="section-center services-center">
          {certs.map((cert) => {
            return (
              <article class="service">

                <div class="service-info">
                  <span class="certificatesImg"><i >{cert.icon}</i></span>
                  <h4 class="service-title">{cert.name} </h4>
                  <p class="">
                    {cert.school}
                  </p>
                </div>
              </article>

            )
          })}
        </div>
      </section>
    </div></Row>
          <div >
            <div style={{ textAlign: 'center' }} >
              <button className='btn'
                id="downloadBtn"
                value="download"
                onClick={() => { downloadTxtFile(PDF_FILE_URL) }}>download resume</button>
            </div>

          </div>
        </section>
      </Container>
    </>
  )
}

export default Resume

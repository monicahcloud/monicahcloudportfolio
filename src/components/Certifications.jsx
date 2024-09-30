import React from 'react'
import { certs } from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Certifications = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };
  return (
    <div className='section'>
      <Row>
        <Col sm={4} style={{ textAlign: 'center', color:'teal' }}><button onClick={handleGoBack}> <IoMdArrowRoundBack /> </button> </Col>
        <Col sm={12} style={{ textAlign: 'center' }}> <h3 className='title' style={{ textAlign: 'center', color: '#2CAEBA' }}> Certifications </h3></Col>
      </Row>

      <section className="section services" id="services">
        <div className="section-center services-center">
          {certs.map((cert) => {
            return (
              <article className="service">

                <div className="service-info">
                  <span className="certificatesImg"><i >{cert.icon}</i></span>
                  <h4 className="service-title">{cert.name} </h4>
                  <p className="">
                    {cert.school}
                  </p>
                </div>
              </article>

            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Certifications

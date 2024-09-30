import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { testmonials } from '../data'
import Slider from 'react-slick'

const AboutFooter = () => {

    const settings = {
        dots: false,
        infinite:true,
        autoplaySpeed:5000,
        slideToShow:3,
        slidesToScroll:1,
        autoplay:true
    }
    return (
        <>
            <Container >
                <section className="" id="projects">
                    <Row className="section-center">
                        <Col xs={12} md={12}>
                            <div className='section-center project-card '>
                                <div className='' style={{textAlign: 'center'}}>
                                    <div ><h4>Testimonial</h4></div>
                                <Slider {...settings}>
                                        {testmonials.map((test) => (
                                            <>
                                            <div key={test.id}>
                                                
                                                    <blockquote className=''  ><i>
                                                        "{test.description}"
                                                    </i> </blockquote></div>
                                                <p className= 'text-xl font semibold'>{test.author}</p>
                                            </>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
            </Container>

        </>
    )
}

export default AboutFooter

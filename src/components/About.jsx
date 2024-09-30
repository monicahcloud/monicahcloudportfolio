import React from 'react';
import placeholderpic from '../images/placeholderpic.jpg';
import Title from './Title';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const PDF_FILE_URL = 'monicahPortfolio/monicah_portfolio/public/ICF-Code-of-Ethics-1.pdf'

const About = () => {

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
            <section className="section" id="services">
                <Container fluid='lg'>    <Title title='meet' subtitle='monicah'  mantra='Designing with Heart, Developing with Purpose, and Always Innovating' /> 
                   
                    <Row> 
                        <Col>
                            <article className='' >
                                <img className='about-photo' src={placeholderpic} id='' alt="logo" />
                                <br />
                                <h4 style={{ textAlign: 'center',marginRight:'100px' }}  >Favorite Quote</h4>
                                <blockquote className='' style={{ textAlign: 'center' , marginRight:'100px'}} >
                                    <i>
                                        “Kind words are like honey - sweet to the soul and healthy for the body.” <br/>― Prov. 16:24
                                    </i>
                                </blockquote>
                            </article>
                            </Col>
                        <Col>
                            <article className="about-info">

                                <h3 style={{}}>beyond the resume</h3><br />
                                <p>
                                    In my personal life, I value growth, balance and meaningful connections. I enjoy staying active, exploring new experiences and finding ways to continuously learn and improve. Whether it's through fitness, hobbies, or spending time with loved ones, I strive to live with intention and purpose.
                                </p>
                                <p>
                                    As a web developer and designer, my strengths lie in creating user-friendly, visually engaging applications that are both functional and responsive. I excel at translating complex ideas into clean, intuitive designs, ensuring a seamless user experience. With strong attention to detail and a passion for innovation, I deliver high-quality solutions that meet both client needs and industry standards.
                                </p>

                                <div style={{ textAlign: 'center' }} >
                                    <button className='btn' 
                                    id="downloadBtn" 
                                    value="download" 
                                    onClick={() => { downloadTxtFile(PDF_FILE_URL) }}>full bio</button>
                                </div>

                            </article>
                        </Col>
                    </Row>
                </Container>
              
            </section > 
        </>
    )
}

export default About

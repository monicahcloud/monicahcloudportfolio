import React from 'react'
import { coder, portfolioCover } from '../data';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container'
import Title from '../components/Title'
import DeveloperProjects from './DeveloperProjects';

const Project = () => {
    return (
        <>
            <section className='section services' id="services">
                <Title title='project' subtitle='stats' mantra='Creating Fun and Functional Web Experiences' />
        
            <Container fluid='lg'>
                <Row>
                    <Col>
                        <div id="wrapper-viz" className="containerGrid">
                            {/* <svg viewBox="0 0 3 2" /> */}
                            <div id="content">
                                <div className="vizbox-container">
                                    <h2>Featured projects</h2>
                                    <div className="vizbox">
                                        <div className="viz selected">
                                            <div className="container selected">
                                                <a href="aliens.html">
                                                    <img src="images/alieninvasion.jpg" alt="Close encounters of the third kind movie poster" className="image" style={{ width: '100%' }} />
                                                    <div className="middle">
                                                        <div className="link_text">
                                                        <DeveloperProjects />
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div></div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="home-content">
                            <div className="projectstats">
                                <h3><b>Project:</b> UFO sightings database</h3>
                                <p>
                                    Searchable JavaScript-driven database listing alien sightings over a three-year period.
                                </p>
                                <p>
                                    <b>Features:</b> D3.js data join, D3.json API endpoint, client-side form &amp; pagination, dynamic filters,
                                    responsive layout
                                </p>
                                <b>Tech stack:</b>
                                <ul>
                                    <li>JavaScript</li>
                                    <li>CSS3 / Bootstrap</li>
                                    <li><a target="_blank" href="http://d3js.org">D3.js</a> (d3.json, data joins)</li>
                                    <li><a target="_blank" href="http://flask.pocoo.org/docs/0.12/quickstart/">Flask</a></li>
                                </ul>
                                <p>
                                    <a className="viewmore" href="https://shrouded-beyond-22642.herokuapp.com/static/index.html" target="_blank">
                                        <i className="fa fa-laptop icon_color"></i>
                                        &nbsp;View hosted app
                                    </a>
                                    <br />
                                    <a className="viewmore" href="https://github.com/sschadt/d3-alieninvasion" target="_blank">
                                        <i className="fa fa-github icon_color"></i>
                                        &nbsp;&nbsp;View on Github
                                    </a>
                                </p>
                            </div>
                        </div>
                    </Col >
                </Row >
            </Container >
            </section>
        </>
    )
}

export default Project

{/* <section className="section1 services" id="services">
<div className="section-center services-center">
    {developerProjects.map((project) => {
        const { id, title, image, link, description, subtitle } = project;
        return (
            <article className="service" key={id}>
                <Link to={link} target={"blank"} rel='noreferrer'>
                    <span className=""><img src={image} className="" /></span>
                    <div className="service-info">
                        <h4 className="service-title">{title}</h4>
                        <h6 className="service-text">
                            {description}
                        </h6>
                    </div>
                </Link>
            </article>
        )
    })}
</div>
</section > */}

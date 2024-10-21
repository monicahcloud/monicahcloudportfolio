import resume from '../assets/MonicahCloudResume.pdf'

const About = () => {
  return (
    <>
    <div id="about"></div>
      <div className="aboutContainer" >
        <div className="aboutMeHeading" >
          <h1>
            Bringing your vision to life
            <span>
              <br />
              One Website at a time.
            </span>
          </h1>
        </div>
        <article>
          <div className="aboutTitle">
            <h1>
              Monicah <span> Cloud</span>
            </h1>
            <h3>Web Designer and Developer</h3>
          </div>
          <p className="aboutInfo">
            I design and develop websites that focus on user <br />
            experience and functionality.
          </p>

          <div className="aboutBtn">
            <a href={resume} download="Monicah Cloud Resume">
              <button className="btnGlowHover ">Download Resume</button>
            </a>
          </div>
        </article>
      </div>
    </>
  )
}
export default About

import resume from '../../public/MonicahCloudResume.pdf'

const About = () => {
  return (
    <>
      <div className="aboutContainer">
        <div className="aboutMeHeading" id="about">
          <h1>
            Bringing your vision to life
            <span>
              <br />
              One Website at a time.
            </span>
          </h1>

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
            <a href={resume} download="Resume">
              <button className="btnGlowHover">Download Resume</button>
            </a>
          </article>
        </div>
      </div>
    </>
  )
}
export default About

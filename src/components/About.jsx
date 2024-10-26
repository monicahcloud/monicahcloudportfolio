import resume from '../assets/MonicahCloudResume.pdf'

const About = () => {
  return (
    <>
      <section id="about" className="aboutSection">
        <header className="aboutHeading">
          <h1>
            Bringing your vision to life
            <span>
              <br />
              One Website at a time.
            </span>
          </h1>
        </header>

        <article className="aboutContent">
          <div className="aboutTitle">
            <h1>
              Monicah <span>Cloud</span>
            </h1>
            <h3>Web Designer and Developer</h3>
          </div>

          <p className="aboutDescription">
            Creating solutions that bring your ideas to life.
          </p>

          <div className="aboutButton">
            <a
              href={resume}
              download="Monicah_Cloud_Resume"
              className="btnGlowHover"
            >
              Download Resume
            </a>
          </div>
        </article>
      </section>
    </>
  )
}

export default About

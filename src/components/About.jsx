import resume from '../assets/WEBSITEANDECOMMERCEPACKAGES.pdf'

const About = () => {
  return (
    <>
      <section id="about" className="aboutSection">
        <header className="aboutHeading">
          <h1>
            Your Personal
            <span>
              <br />
             Designer and Developer
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
              download="WEBSITE DESIGN PACKAGE"
              className="btnGlowHover"
            >
              DOWNLOAD PACKAGE AND POLICY
            </a>
          </div>
        </article>
      </section>
    </>
  )
}

export default About

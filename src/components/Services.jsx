import placeholder from '../images/placholder.png'
import design from '../images/design.svg'

const Services = () => {
  return (
    <div>
      <div className=" " id="services">
        <div className="">
          <h2>
            my <span>services</span>
          </h2>
        </div>
        <div className="">
          <img src={design} alt="design" />
          <h4 className="">web design</h4>
          <p className="">
            As a designer, I create visually appealing, user-friendly websites
            that align with your goals and brand identity.
          </p>

          {/* <article className="service">
            <span className="service-icon">
              <i className="fas fa-tree fa-fw"></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">web developer</h4>
              <p className="service-text">
                As a developer, I develop efficient, responsive websites,
                focusing on functionality and seamless user experiences.
              </p>
            </div>
          </article>

          <article className="service">
            <span className="service-icon">
              <i className="fas fa-socks fa-fw"></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">graphic design</h4>
              <p className="service-text">
                As a graphic designer, I designs captivating visuals that
                communicate brand messages and enhance user engagement.
              </p>
            </div>
          </article> */}
        </div>
      </div>

      <h1
        style={{
          color: '#fff',
          textAlign: 'center',
          marginTop: '1rem',
          fontSize: '3.3rem',
          textDecoration: 'none',
          paddingRight: '10rem',
        }}
      >
        My
        <span> Skills</span>
      </h1>
      <img src={placeholder} alt="my skills" className="skillsImg" />
    </div>
  )
}

export default Services

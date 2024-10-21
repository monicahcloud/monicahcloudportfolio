import { GiAtomicSlashes, GiBowlSpiral, GiCharm } from 'react-icons/gi'

const Services = () => {
  return (
    <div id='services'>
      <div className="">
        <div className="service-section">
          <h1
            style={{
              color: '#fff',
              textAlign: 'right',
              marginTop: '1rem',
              marginBottom: '1.5rem',
              fontSize: '3.3rem',
              textDecoration: 'none',
            }}
          >
            My
            <span> services</span>
          </h1>
          <p id="paragraph">
            As a versatile designer and developer, I catch the vision and make
            it reality. Lets collaborate to bring your vision to life!
          </p>
          <div className="cards">
            <div className="card">
              <i className="">
                <GiAtomicSlashes />
              </i>
              <div className="content">
                <h3>Web Designer</h3>
                <p>
                  As a web designer, I focus on creating visually appealing and
                  intuitive layouts that enhance user engagement. 
                </p>
              </div>
            </div>
            <div className="card">
              <i className="">
                <GiBowlSpiral />
              </i>
              <div className="content">
                <h3>Web Developer</h3>
                <p>
                  As a web developer, I specialize in building robust and
                  efficient websites that deliver exceptional user experiences.
                 
                </p>
              </div>
            </div>
            <div className="card">
              <i className="">
                <GiCharm />
              </i>
              <div className="content">
                <h3>App Development</h3>
                <p>
                  As a graphic designer, I bring ideas to life through
                  compelling visuals and creative storytelling. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Services

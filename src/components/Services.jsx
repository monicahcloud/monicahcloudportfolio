import { GiAtomicSlashes, GiBowlSpiral, GiCharm } from 'react-icons/gi'

const Services = () => {
  return (
    <div>
      <div className="servicesContainer">
        <div className="service-section">
          <h1
            style={{
              color: '#fff',
              textAlign: 'center',
              marginTop: '2rem',
              fontSize: '3.3rem',
              textDecoration: 'none',
            }}
          >
            My
            <span> services</span>
          </h1>
          <p id="paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            excepturi sed illum nostrum reiciendis rem corporis dolor? Molestias
            pariatur ab, at, quod quae ad totam eos tempore quisquam odit ipsum!
          </p>
          <div className="cards">
            <div className="card">
              <i className="">
                <GiAtomicSlashes />
              </i>
              <div className="content">
                <h3>Web Designer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis dolorem autem facilis
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  iure veniam, voluptatibus rerum dolorem dolor cum. Asperiores
                  eveniet, recusandae perspiciatis, sint molestias quibusdam
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis dolorem autem facilis
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  iure veniam, voluptatibus rerum dolorem dolor cum. Asperiores
                  eveniet, recusandae perspiciatis, sint molestias quibusdam
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis dolorem autem facilis
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  iure veniam, voluptatibus rerum dolorem dolor cum. Asperiores
                  eveniet, recusandae perspiciatis, sint molestias quibusdam
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

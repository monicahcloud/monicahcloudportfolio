

const Services = () => {
  return (
    <div>
      <div className=" " id="services">
        <h1
          style={{
            color: '#fff',
            textAlign: 'right',
            marginTop: '2rem',
            fontSize: '3.3rem',
            textDecoration: 'none',
            paddingRight: '10rem',
          }}
        >
          My <span> Services</span>
        </h1>
        <div className="">
          <section className="section services" >
           
            <div className="section-center services-center">
              <article className="service">
                <span className="service-icon">
                  <i className="fas fa-wallet fa-fw"></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">saving money</h4>
                  <p className="service-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores, officia.
                  </p>
                </div>
              </article>

              <article className="service">
                <span className="service-icon">
                  <i className="fas fa-tree fa-fw"></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">endless hiking</h4>
                  <p className="service-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores, officia.
                  </p>
                </div>
              </article>

              <article className="service">
                <span className="service-icon">
                  <i className="fas fa-socks fa-fw"></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">amazing comfort</h4>
                  <p className="service-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores, officia.
                  </p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Services

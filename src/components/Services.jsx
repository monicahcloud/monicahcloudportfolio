import { MdOutlineDesignServices } from 'react-icons/md'
import { services } from '../data'

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
          <section className="section services">
            <div className="section-center services-center">
              {services.map((service) => {
                const { id, title, icon, desc } = service

                return (
                  <div key={id}>
                    <article className="service">
                      <span className="service-icon">{icon}</span>

                      <div className="service-info">
                        <h4 className="service-title">{title}</h4>
                        <p className="service-text">
                        {desc}
                        </p>
                      </div>
                    </article>
                  </div>
                )
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Services

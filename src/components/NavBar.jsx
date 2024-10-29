import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from '../data'
import mono2 from '../assets/images/mono5.png'
import { Link } from 'react-scroll'

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false)

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={mono2} alt="monogram" className="logo" />

            <button className="nav-toggle" onClick={toggleLinks}>
              <FaBars />
            </button>
          </div>

          {/* Add dynamic class to show or hide links */}
          <div className={`links-container ${showLinks ? 'show' : ''}`}>
            <ul className="links">
              {links.map((link) => {
                const { id, url, text } = link
                return (
                  <li key={id}>
                    <Link
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-130}
                      duration={500}
                      to={url}
                    >
                      {text}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <ul className="social-icons">
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon
              return (
                <li key={id}>
                  <a href={url} target="_blank" rel="noreferrer">
                    {icon}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}
export default NavBar

import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from '../data'
import mono2 from '../images/mono5.png'

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(true)

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={mono2} alt="monogram" className='logo'/>

            <button className="nav-toggle" onClick={toggleLinks}>
              <FaBars />
            </button>
          </div>

          {showLinks && (
            <div className="links-container">
              <ul className="links">
                {links.map((link) => {
                  const { id, url, text } = link
                  return (
                    <li key={id}>
                      <a href={url}>{text}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          <ul className="social-icons">
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
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


import { social } from '../data'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <p>Creative Solutions, Tailored Design, and Seamless Development </p>

        <ul className="social-icons footer-icons ">
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
        <p className="copyright">
          <span id="date">
            {' '}
            copyright &copy; {new Date().getFullYear()}
          </span>{' '}
         <br/> <span>
            all rights reserved | Designed and Created by Monicah Cloud
          </span>
        </p>
      </footer>
    </>
  )
}

export default Footer

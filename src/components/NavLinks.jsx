import React from 'react';
import { pageLinks } from '../data';
import { Link } from 'react-router-dom';

const NavLinks = () => {
  return (
    <>
      <ul className="nav-links" id="nav-links">
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <Link to={link.path} className="nav-link"> {link.text} | </Link>
            </li>
          )
        })}
      </ul>
         </>
  )
}

export default NavLinks

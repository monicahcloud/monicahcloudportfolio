import React from 'react'
import { Link } from 'react-router-dom';
import { resumeLinks } from '../data';

const ResumeLinks = () => {
  return (
    <>
       <ul className="nav-links" id="nav-links" style={{ justifyContent: 'center' }}>

{resumeLinks.map((link) => {
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

export default ResumeLinks

import React from 'react'
import { socialLinks } from '../data'

const SocialMedia = () => {
  return (
    <>
      <ul className="nav-icons">
      {socialLinks.map((link) => {
          return (
            <li key={link.id}>
               <a href={link.href} target="_blank" className="nav-icon" rel='noreferrer'
              ><i className={link.icon}></i
              ></a>
            </li>
          )
        })}
           
          </ul>

    </>
  )
}

export default SocialMedia

import React from 'react'
import { pageLinks, socialLinks } from '../data';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer class="section1 footer">
        <p>
          Creative Solutions, Tailored Design, and Seamless Development </p>
        <ul class="footer-links">
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.path} rel='noreferrer' className="footer-link"> {link.text} </Link>
              </li>
            )
          })}
        </ul>
        <ul class="footer-icons">
          {socialLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} target="_blank" rel='noreferrer' class="footer-icon"
                ><i class={link.icon}></i
                ></a>
              </li>
            )
          })}
        </ul>
        <p class="copyright">
          <span id="date"> copyright  &copy;  {new Date().getFullYear()} by Monicah Cloud </span> <span>| all rights reserved Designed and Created by Monicah Cloud</span>
        </p>
      </footer>
    </>
  )
}

export default Footer

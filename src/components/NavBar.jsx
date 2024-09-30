import React from 'react'
import NavLinks from './NavLinks';
import LogoImage from './LogoImage';

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <LogoImage />
            <div className='nav-title'><h3 >monicah <span style={{ color: '#2CAEBA' }}>cloud</span></h3>
              <h6>Web Designer and Developer</h6> </div>
            <NavLinks />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          
        </div>
      </nav>
    </>
  )
}

export default NavBar

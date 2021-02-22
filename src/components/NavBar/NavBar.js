import {React, useState } from 'react'
import {NavLink } from 'react-router-dom'
import './NavBar.css'
import ViewPort from "../modules/ViewPort"

export const NavBar = () => {
  const [showSideMenu, setShowMenu] = useState(false)
  const widthBreakpoint = 800;
  
  let viewport = ViewPort()
  if(showSideMenu && (viewport.width > widthBreakpoint)){
    setShowMenu(false)
  }
  
  const SideMenu = () => (
    <div className="side-bar">
      <ul>
        <li className="material-icons" onClick={handleMenu}>close</li>
        <li className="link">
          <NavLink 
            to="/"
            onClick={() => setShowMenu(false)}>
            Home
          </NavLink>
        </li>
        <li className="link">
          <NavLink 
            to="/services" 
            onClick={() => setShowMenu(false)}>
            Services
          </NavLink>
        </li>
        <li className="link">
          <NavLink 
            to="/about-us" 
            onClick={() => setShowMenu(false)}>
            About Us
          </NavLink>
        </li>
        <li className="link">
          <NavLink 
            to="/contact-us" 
            onClick={() => setShowMenu(false)}>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  )
  const SideMenuMask = () => (
    <div className="side-bar-mask" onClick={handleMenu}>
    </div>
  )

  const handleMenu = () => {
    setShowMenu(!showSideMenu)
  }

  const handleLogo = () => {
    window.location.href = "/"
  }

  return (
    <div className="menu-nav-bar">
      <nav className="row">
        <div className="logo-div">
          <div>
            <img src="/images/logo_32.png" alt="Company logo" onClick={handleLogo}></img>
          </div>
        </div>
        <div className="menu-link">
          <div>
            <ul id="menu-ul" className="menu-list">
              <li className="link">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="link">
                <NavLink to="/services">Services</NavLink>
              </li>
              <li className="link">
                <NavLink to="/about-us">About Us</NavLink>
              </li>
              <li className="link">
                <NavLink to="/contact-us">Contact Us</NavLink>
              </li>
            </ul>
            <div id="menu-button" className="hidden" onClick={handleMenu}>
              <span className="material-icons">menu_open</span>
            </div>
            {showSideMenu && <SideMenuMask />}
            {showSideMenu && <SideMenu />}
          </div>
        </div>
      </nav>
    </div>
  )
}
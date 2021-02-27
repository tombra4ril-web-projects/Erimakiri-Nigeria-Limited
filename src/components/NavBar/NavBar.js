import {React, useState } from 'react'
import {NavLink, useHistory} from 'react-router-dom'
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
        <li>
          <div className="logo-div">
              <img src="/images/logo_32.png" alt="Company logo" onClick={handleLogo} />
          </div>
          <div className="material-icons close-button" onClick={handleMenu}>
            close
          </div>
        </li>
        <li className="link">
          <NavLink 
            to="/"
            exact
            onClick={() => setShowMenu(false)}>
            Home
          </NavLink>
        </li>
        <li className="link">
          <NavLink 
            to="/services"
            exact
            onClick={() => setShowMenu(false)}>
            Services
          </NavLink>
        </li>
        <li className="link">
          <NavLink 
            to="/about-us"
            exact
            onClick={() => setShowMenu(false)}>
            About Us
          </NavLink>
        </li>
        <li className="link">
          <NavLink 
            to="/contact-us"
            exact 
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

  const history = useHistory()
  const handleLogo = () => {
    setShowMenu(false)
    history.push("/")
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
                <NavLink to="/" exact>Home</NavLink>
              </li>
              <li className="link">
                <NavLink to="/services" exact>Services</NavLink>
              </li>
              <li className="link">
                <NavLink to="/about-us" exact>About Us</NavLink>
              </li>
              <li className="link">
                <NavLink to="/contact-us" exact>Contact Us</NavLink>
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
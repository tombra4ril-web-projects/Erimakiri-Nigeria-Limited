import {React, useState, useEffect} from 'react'
// import {NavLink, useHistory} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {NavHashLink as NavLink} from "react-router-hash-link"
import './NavBar.css'
import ViewPort from "../modules/ViewPort"

export const NavBar = () => {
  const [showSideMenu, setShowMenu] = useState(false)
  const widthBreakpoint = 800;
  
  const width = ViewPort()
  useEffect(() => {
    if(width >= widthBreakpoint){
      setShowMenu(false)
    }
  }, [width, showSideMenu])
  
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
            to="/#"
            activeClassName="active"
            smooth
            onClick={() => setShowMenu(false)}>
            Home
          </NavLink>
        </li>
        <li className="link">
          <NavLink 
            to="/services/#"
            activeClassName="active"
            smooth
            onClick={() => setShowMenu(false)}>
            Services
          </NavLink>
        </li>
        <li className="link">
          <NavLink 
            to="/about-us/#"
            activeClassName="active"
            smooth
            onClick={() => setShowMenu(false)}>
            About Us
          </NavLink>
        </li>
        <li className="link">
          <NavLink 
            to="/contact-us/#"
            activeClassName="active"
            smooth 
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
                <NavLink smooth to="/#" activeClassName="active">Home</NavLink>
              </li>
              <li className="link">
                <NavLink smooth to="/services/#" activeClassName="active">Services</NavLink>
              </li>
              <li className="link">
                <NavLink smooth to="/about-us/#" activeClassName="active">About Us</NavLink>
              </li>
              <li className="link">
                <NavLink smooth to="/contact-us/#" activeClassName="active">Contact Us</NavLink>
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
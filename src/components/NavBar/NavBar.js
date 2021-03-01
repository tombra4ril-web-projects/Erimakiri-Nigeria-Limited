import {React, useState, useEffect} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
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
            to={{
              pathname: "/",
              scrollTop: true
            }}
            exact
            activeClassName="active"
            smooth
            onClick={() => setShowMenu(false)}>
              Home
          </NavLink>
        </li>
        <li className="link">
          <NavLink 
            to={{
              pathname: "/services",
              scrollTop: true
            }}
            exact
            activeClassName="active"
            smooth
            onClick={() => setShowMenu(false)}>
              Services
          </NavLink>
        </li>
        <li className="link">
          <NavLink 
            to={{
              pathname: "/about-us",
              scrollTop: true
            }}
            exact
            activeClassName="active"
            smooth
            onClick={() => setShowMenu(false)}>
              About Us
          </NavLink>
        </li>
        <li className="link">
          <NavLink 
            to={{
              pathname: "/contact-us",
              scrollTop: true
            }}
            exact
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
                <NavLink 
                  to={{
                    pathname: "/",
                    scrollTop: true
                  }}  
                  exact 
                  activeClassName="active">
                    Home
                </NavLink>
              </li>
              <li className="link">
                <NavLink 
                  to={{
                    pathname: "/services",
                    scrollTop: true
                  }} 
                  exact 
                  activeClassName="active">
                    Services
                </NavLink>
              </li>
              <li className="link">
                <NavLink 
                  to={{
                    pathname: "/about-us",
                    scrollTop: true
                  }} 
                  exact 
                  activeClassName="active">
                    About Us
                </NavLink>
              </li>
              <li className="link">
                <NavLink 
                  to={{
                    pathname: "/contact-us",
                    scrollTop: true
                  }} 
                  exact  
                  activeClassName="active">
                    Contact Us
                </NavLink>
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
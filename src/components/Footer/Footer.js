import React from 'react'
import './Footer.css'
import {HashLink as Link} from "react-router-hash-link"

export const Footer = () => {
  return (
    <div>
      <footer>
        <div>
          <div className="footer-about-us">
            <h5>About Us</h5>
            <p className="footer-dull-colour">We are who we are</p>
          </div>
          <div className="footer-services">
            <h5>Services</h5>
            <ul className="footer-dull-colour">
              <li><Link to="/services#trans_cool_veh">Transport cooling vehicle</Link></li>
              <li><Link to="/services#res_rec_veh">Residential and recreational vehicles air-condition</Link></li>
              <li><Link to="/services#cold_room">Cold room/Refrigeration</Link></li>
            </ul>
          </div>
          <div className="footer-quick-links">
            <h5>Quick Links</h5>
            <ul className="footer-dull-colour">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-contact-us">
            <h5>Contact Us</h5>
            <ul className="footer-dull-colour">
              <div>
                <a href="tel:+2348105912717">
                  <li className="material-icons">phone</li>
                  <span>+2347049597113</span> <span className="tel-num">|</span>
                  <span>+447459556166</span>
                </a>
              </div>
              <div>
                <a href="mailto:erimark28@yahoo.com">
                  <li className="material-icons">email</li>
                  <span>erimark28@yahoo.com</span>
                </a>
              </div>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <hr/>
          <p>copyright &copy; 2020 All rights reserved.</p>
          <p>Designed and Developed by TombraIncorp</p>
        </div>
      </footer>
    </div>
  )
}

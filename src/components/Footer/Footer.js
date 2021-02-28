import React from 'react'
import './Footer.css'
import {HashLink} from "react-router-hash-link"

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
              <li><HashLink smooth to="/services#trans_cool_veh">Transport cooling vehicle</HashLink></li>
              <li><HashLink smooth to="/services#res_rec_veh">Residential and recreational vehicles air-condition</HashLink></li>
              <li><HashLink smooth to="/services#cold_room">Cold room/Refrigeration</HashLink></li>
            </ul>
          </div>
          <div className="footer-quick-links">
            <h5>Quick Links</h5>
            <ul className="footer-dull-colour">
              <li><HashLink smooth to="/#">Home</HashLink></li>
              <li><HashLink smooth to="/services/#">Services</HashLink></li>
              <li><HashLink smooth to="/about-us/#">About Us</HashLink></li>
              <li><HashLink smooth to="/contact-us/#">Contact Us</HashLink></li>
            </ul>
          </div>
          <div className="footer-contact-us">
            <h5>Contact Us</h5>
            <ul className="footer-dull-colour">
              <div>
                {/* <a href="tel:+2348105912717">
                  <li className="material-icons">phone</li>
                  <span>+2347049597113</span> <span className="tel-num">|</span>
                  <span>+447459556166</span>
                </a> */}
                <span className="material-icons contact-icon">phone</span>
                <a href="tel:+2347049597113">
                  <span>+2347049597113</span>
                </a>
                <span className="tel-num">|</span>
                <a href="tel:+447459556166">
                  <span>+447459556166</span>
                </a>
              </div>
              <div>
                <span className="material-icons contact-icon">email</span>
                <a href="mailto:erimakirinigerialimited@gmail.com">
                  <span>erimakirinigerialimited@gmail.com</span>
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

import React from 'react'
import "./section.css"
import ScrollAnimation from "react-animate-on-scroll"

const AboutSection = () => {
  return (
    <div className="services-items">
      <div id="about">
        <ScrollAnimation animateIn="fadeIn" className="about-item">
          <div className="about-title">
            <h3>About Us</h3>
          </div>
          <div className="about-text">
            <p>Erimakiri Nigeria Limited was founded in 2020 by Engr. Amakiri Eridei.</p>
            <p>We use our cutting edge technology (vapour absorption systems) driven by waste heat to provide cooling for air-conditioning and refrigeration</p>
          </div>
        </ScrollAnimation>
      </div>
      <div id="mission">
        <ScrollAnimation animateIn="fadeIn" className="about-item">
          <div className="about-text">
            <p>Our mission is to provide cheap and environmental friendly cooling systems for Nigerians. </p>
          </div>
          <div className="about-title">
            <h3>Mission Statement</h3>
          </div>
        </ScrollAnimation>
      </div>
      <div id="vision">
        <ScrollAnimation animateIn="fadeIn" className="about-item">
          <div className="about-title">
            <h3>Vision Statement</h3>
          </div>
          <div className="about-text">
            <p>Our vision is to provide for all african countries, environmental friendly cold production systems in the near future</p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default AboutSection

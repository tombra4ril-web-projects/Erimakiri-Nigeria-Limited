import React from 'react'
import "./partners.css"
import {useHistory} from "react-router-dom"
import ScrollAnimation from "react-animate-on-scroll"

const Partners = () => {
  const history = useHistory()

  const handleClick = (event) => {
    let teamId = event.currentTarget.getAttribute("data-id")
    history.push("/about-us#team" + teamId)
  }
  return (
    <ScrollAnimation animateIn="flipInY" className="partners-div">
        <div className="title-head">
          <h1><span>OUR TEAM</span></h1>
        </div>
        <div className="partner-div">
          <div className="partners" title="View Profile">
            <div className="partners-img" onClick={handleClick} data-id="1">
              <img src="/images/profile_1.jpeg" alt="Heat oven" />
            </div>
            <div className="partners-text">
              <h3>CEO</h3>
            </div>
          </div>
          <div className="partners" title="View Profile">
            <div className="partners-img" onClick={handleClick} data-id="2">
              <img src="/images/profile_2.jpeg" alt="Heat oven" />
            </div>
            <div className="partners-text">
              <h3>Chief Engr.</h3>
            </div>
          </div>
          <div className="partners" title="View Profile">
            <div className="partners-img" onClick={handleClick} data-id="3">
              <img src="/images/profile_3.jpeg" alt="Heat oven" />
            </div>
            <div className="partners-text">
              <h3>R&D Engr.</h3>
            </div>
          </div>
          <div className="partners" title="View Profile">
            <div className="partners-img" onClick={handleClick} data-id="4">
              <img src="/images/profile_4.jpeg" alt="Heat oven" />
            </div>
            <div className="partners-text">
              <h3>Servicing Engr.</h3>
            </div>
          </div>
          <div className="partners" title="View Profile">
            <div className="partners-img" onClick={handleClick} data-id="5">
              <img src="/images/profile_5.jpeg" alt="Heat oven" />
            </div>
            <div className="partners-text">
              <h3>Technical Admin</h3>
            </div>
          </div>
        </div>
      </ScrollAnimation>
  )
}

export default Partners

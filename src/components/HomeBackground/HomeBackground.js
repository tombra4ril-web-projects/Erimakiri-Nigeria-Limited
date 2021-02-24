import React from 'react'
import './HomeBackground.css'
import {useHistory} from "react-router-dom"

export const HomeBackground = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push("/services")
  }

  return (
    <div>
      <div className="nav-background" style={{backgroundImage: "url(/images/home.jpeg)"}}>
        <div className="welcome-text">
          <div>
            <p>WELCOME</p>
            <p>Find out what you need and we will provide the best of services</p>
          </div>
          <span onClick={handleClick} className="quick-link">View our Services</span>
        </div>
      </div>
    </div>
  )
}

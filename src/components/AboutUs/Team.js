import React, {useEffect, useState} from 'react'
import {useLocation} from "react-router-dom"
import './team.css'
import Popup from "../modules/Popup"

export const Team = () => {
  const elementId = useLocation().idName
  useEffect(() => {
    if(elementId){
      const element = document.getElementById(elementId)
      element.scrollIntoView({
        behavior: "smooth"
      })
    }
  }, [elementId])

  const [popup, showPopup] = useState(false)
  const [src, setSrc] = useState("")
  const body = document.querySelector("body")
  const handleClick = (event) =>{
    event.preventDefault()
    const target = event.currentTarget
    setSrc(target.getAttribute("src"))
    body.style.overflow = "hidden";
    showPopup(true)
  }
  const closepopup = () =>{
    body.style.overflow = "auto";
    showPopup(false)
  }



  return (
    <div id="teams" className="sections">
      <div className="title-head row">
        <h1><span>OUR TEAM</span></h1>
      </div>
      <div id="team1" className="section-div-cards">
        <div className="section-div-card">
          <img src="/images/profile_1.jpeg" alt="..." onClick={handleClick}/>
          <div className="section-div-card-body">
            <h5>Dr. Amakiri Eridei</h5>
            <div className="team-link">
              <p>Visit to know more...</p>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><span className="tw-icon fab fa-twitter"></span></a>
              <a href="https://www.linkedin.com/in/eridei-amakiri/" target="_blank" rel="noopener noreferrer"><span className="ld-icon fab fa-linkedin-in"></span></a>
            </div>
          </div>
        </div>
        <div id="team2" className="section-div-card">
          <img src="/images/profile_2.jpeg" alt="..." onClick={handleClick}/>
          <div className="section-div-card-body">
            <h5>Engr. Dennis Egberi</h5>
            <div className="team-link">
              <p>Visit to know more...</p>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><span className="tw-icon fab fa-twitter"></span></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><span className="ld-icon fab fa-linkedin-in"></span></a>
            </div>
          </div>
        </div>
        <div id="team3" className="section-div-card">
          <img src="/images/profile_3.jpeg" alt="..." onClick={handleClick}/>
          <div className="section-div-card-body">
            <h5>Dr. Chandrasekhar Pradhan</h5>
            <div className="team-link">
              <p>Visit to know more...</p>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><span className="tw-icon fab fa-twitter"></span></a>
              <a href="https://www.linkedin.com/in/chandrasekhar-pradhani-94137327/" target="_blank" rel="noopener noreferrer"><span className="ld-icon fab fa-linkedin-in"></span></a>
            </div>
          </div>
        </div>
        <div id="team4" className="section-div-card">
          <img src="/images/profile_4.jpeg" alt="..." onClick={handleClick}/>
          <div className="section-div-card-body">
            <h5>Engr. Endurance Nwadoziokwu</h5>
            <div className="team-link">
              <p>Visit to know more...</p>
              <a href="https://twitter.com/emmaendurance1" target="_blank" rel="noopener noreferrer"><span className="tw-icon fab fa-twitter"></span></a>
              <a href="https://www.linkedin.com/in/endurance-nwadoziokwu-6397a0105/" target="_blank" rel="noopener noreferrer"><span className="ld-icon fab fa-linkedin-in"></span></a>
            </div>
          </div>
        </div>
        <div id="team5" className="section-div-card">
          <img src="/images/profile_5.jpeg" alt="..." onClick={handleClick}/>
          <div className="section-div-card-body">
            <h5>Engr. Aremieye Tamaratombra</h5>
            <div className="team-link">
              <p>Visit to know more...</p>
              <a href="https://twitter.com/aremieyeT" target="_blank" rel="noopener noreferrer"><span className="tw-icon fab fa-twitter"></span></a>
              <a href="https://www.linkedin.com/in/tamaratombra-aremieye/" target="_blank" rel="noopener noreferrer"><span className="ld-icon fab fa-linkedin-in"></span></a>
            </div>
          </div>
        </div>
        <div id="team6" className="section-div-card">
          <img src="/images/profile_6.jpeg" alt="..." onClick={handleClick}/>
          <div className="section-div-card-body">
            <h5>Engr. Sawari Daumiebi Nelly</h5>
            <div className="team-link">
            </div>
          </div>
        </div>
      </div>

      {popup && <Popup close={closepopup} src={src} />}
    </div>
  )
}
import React from 'react'
import './team.css'

export const Team = () => {
  return (
    <div id="teams" className="sections">
      <div className="title-head row">
        <h1><span>OUR TEAM</span></h1>
      </div>
      <div id="team1" className="section-div-cards">
        <div className="section-div-card">
          <img src="images/profile_1.jpeg" alt="..." />
          <div className="section-div-card-body">
            <h5>Dr. Amakiri Eridei</h5>
            <p>CEO of ERIMAKIRI NIGERIA LIMITED | B.Eng. Mech. Engr. | MSc. Thermal Power | PhD. Chemical Engr. | Thermal Engr. | Innovator | Entrepreneur. <br />
            Specialist in refrigeration and air conditioning, absorption systems. Fuel cell technology, renewable energy, heat and mass transfer, and thermodynamics.</p>
            <div className="team-link">
              <p>Visit to know more...</p>
              <a href="mailto:erimark28@yahoo.com"><span className="fb-icon far fa-envelope"></span></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><span className="tw-icon fab fa-twitter"></span></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><span className="ld-icon fab fa-linkedin-in"></span></a>
            </div>
          </div>
        </div>
        <div id="team2" className="section-div-card">
          <img src="images/profile_2.jpeg" alt="..." />
          <div className="section-div-card-body">
            <h5>Engr. Dennis Egberi</h5>
            <p>B.Eng. Mech. Engr. | MSc. Mech. Engr. | Specialist in Energy and fuel cell technology</p>
            <div className="team-link">
              <p>Visit to know more...</p>
              <a href="mailto:erimark28@yahoo.com"><span className="fb-icon far fa-envelope"></span></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><span className="tw-icon fab fa-twitter"></span></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><span className="ld-icon fab fa-linkedin-in"></span></a>
            </div>
          </div>
        </div>
        <div id="team3" className="section-div-card">
          <img src="images/profile_3.jpeg" alt="..." />
          <div className="section-div-card-body">
            <h5>Dr. Chandrasekhar Pradhan</h5>
            <p>Doctoral Researcher in Microwave Engineering (THz Applications) | Associate Fellow of Higher Education Academy-UK</p>
            <div className="team-link">
              <p>Visit to know more...</p>
              <a href="mailto:erimark28@yahoo.com"><span className="fb-icon far fa-envelope"></span></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><span className="tw-icon fab fa-twitter"></span></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><span className="ld-icon fab fa-linkedin-in"></span></a>
            </div>
          </div>
        </div>
        <div id="team4" className="section-div-card">
          <img src="images/profile_4.jpeg" alt="..." />
          <div className="section-div-card-body">
            <h5>Engr. Endurance Nwadoziokwu</h5>
            <p>B.Eng Elect/Elect Engr. | M.Sc Elect/Elect Engr. | Software Developer | Big Data Engineer Intern | Web Developer</p>
            <div className="team-link">
              <p>Visit to know more...</p>
              <a href="mailto:erimark28@yahoo.com"><span className="fb-icon far fa-envelope"></span></a>
              <a href="https://twitter.com/emmaendurance1" target="_blank" rel="noopener noreferrer"><span className="tw-icon fab fa-twitter"></span></a>
              <a href="https://www.linkedin.com/in/endurance-nwadoziokwu-6397a0105/" target="_blank" rel="noopener noreferrer"><span className="ld-icon fab fa-linkedin-in"></span></a>
            </div>
          </div>
        </div>
        <div id="team5" className="section-div-card">
          <img src="images/profile_5.jpeg" alt="..." />
          <div className="section-div-card-body">
            <h5>Engr. Aremieye Tamaratombra</h5>
            <p>B.Eng. Electrical Engineer | HVAC Engr. | Software Developer | AI/ML Engineer | Web Developer</p>
            <div className="team-link">
              <p>Visit to know more...</p>
              <a href="mailto:tombra4ril@gmail.com"><span className="fb-icon far fa-envelope"></span></a>
              <a href="https://twitter.com/aremieyeT" target="_blank" rel="noopener noreferrer"><span className="tw-icon fab fa-twitter"></span></a>
              <a href="https://www.linkedin.com/in/tamaratombra-aremieye/" target="_blank" rel="noopener noreferrer"><span className="ld-icon fab fa-linkedin-in"></span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
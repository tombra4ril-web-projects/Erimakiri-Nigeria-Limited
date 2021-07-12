import React from 'react'
import "./video.css"

export const Video = () => {
  return (
    <div className="video-div sections">
      <video autoPlay controls loop>
        <source src="/assets/landing video.mp4" type="video/mp4"/>
        Your browser does not support the video format!!!
      </video>
    </div>
  )
}
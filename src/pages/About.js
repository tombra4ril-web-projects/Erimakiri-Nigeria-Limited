import React from 'react'
import { Team } from '../components/AboutUs/Team'
import AboutSection from '../components/AboutUs/section'
import ScrollAnimation from "react-animate-on-scroll"

export const About = () => {
  return (
    <ScrollAnimation animateIn="fadeIn" duration="2">
      <AboutSection />
      <Team />
    </ScrollAnimation>
  )
}

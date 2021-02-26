import React from 'react'
import ServiceSection from '../components/Services/ServiceSection'
import ScrollAnimation from "react-animate-on-scroll"

export const Services = () => {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <ServiceSection />
    </ScrollAnimation>
  )
}

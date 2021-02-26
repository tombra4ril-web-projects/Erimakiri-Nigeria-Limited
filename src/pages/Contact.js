import React from 'react'
import ContactSection from '../components/contact/contact'
import ScrollAnimation from "react-animate-on-scroll"

export const Contact = () => {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <ContactSection />
    </ScrollAnimation>
  )
}

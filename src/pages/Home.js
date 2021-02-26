import React from 'react';
import {HomeBackground} from "../components/HomeBackground/HomeBackground";
import {Services} from "../components/section/Services";
import {Video} from "../components/section/Video";
import Partners from '../components/section/partners';
import ScrollAnimation from "react-animate-on-scroll"

export const Home = () => {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <HomeBackground />
      <Video />
      <Services />
      <Partners />
    </ScrollAnimation>
  )
}
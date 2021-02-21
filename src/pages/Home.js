import React from 'react';
import {HomeBackground} from "../components/HomeBackground/HomeBackground";
import {Services} from "../components/section/Services";
import {Video} from "../components/section/Video";
import Partners from '../components/section/partners';

export const Home = () => {
  return (
    <div>
      <HomeBackground />
      <Video />
      <Services />
      <Partners />
    </div>
  )
}
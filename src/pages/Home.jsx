import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import Hero from '../components/home/Hero'
import Solutions from './Solutions'
import Navbar from '../components/Navbar'
import Overview from '../components/Overview'
import Features from '../components/Features'
import ComingSoon from '../components/ComingSoon'
const Home = () => {
  return (
    <div>
     <Navbar/>
    <Hero/>
    {/* <Hero/> */}
   {/* <Overview/> */}
   {/* <Features/> */}
   <ComingSoon/>
    </div>
  )
}

export default Home

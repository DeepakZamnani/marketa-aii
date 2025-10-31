import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import Hero from '../components/home/Hero'
import Solutions from './Solutions'
import Navbar from '../components/Navbar'
import Overview from '../components/Overview'
const Home = () => {
  return (
    <div>
     <Navbar/>
    <Hero/>
    {/* <Hero/> */}
   <Overview/>
    </div>
  )
}

export default Home

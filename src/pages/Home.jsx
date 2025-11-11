import React, { useState } from 'react'
import Hero from '../components/home/Hero'
import Navbar from '../components/Navbar'
import Overview from '../components/Overview'
import Features from '../components/Features'
import LogoIntro from '../components/LogoIntro'
import ComingSoon from '../components/ComingSoon'
const Home = () => {
  const [showIntro, setShowIntro] = useState(true)
  const [startMainAnimation, setStartMainAnimation] = useState(false)

  const handleIntroComplete = () => {
    setShowIntro(false)
    setStartMainAnimation(true)
  }

  return (
    <div className="relative">
      {showIntro && <LogoIntro onComplete={handleIntroComplete} />}
      
      <div className={`transition-opacity duration-1000 ${startMainAnimation ? 'opacity-100' : 'opacity-0'}`}>
        {/* <Navbar/> */}
        <Hero/>
        {/* <Overview/> */}
        <Features/>
        {/* <ComingSoon/> */}
      </div>
    </div>
  )
}

export default Home
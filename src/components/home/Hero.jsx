import React from 'react'
import Video from './Video'
import HomeHeroText from './HomeHeroText'

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video Background – NOW IN FLOW */}
      <div className="absolute inset-0 z-0 blur-sm">
        <Video />
      </div>

      {/* Optional: Blur overlay */}
      <div className="absolute inset-0 bg-black/20 blur-sm z-0"></div>

      {/* Hero Text – On Top */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <HomeHeroText />
      </div>
    </section>
  )
}

export default Hero
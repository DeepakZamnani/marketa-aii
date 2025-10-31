import React, { useEffect, useRef } from 'react'
import vid1 from '../../assets/vid1.mp4'

const Video = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    // Force play the video (helps with autoplay issues)
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay prevented:', error)
        // If autoplay fails, try playing on user interaction
        const playOnInteraction = () => {
          videoRef.current?.play()
          document.removeEventListener('click', playOnInteraction)
          document.removeEventListener('touchstart', playOnInteraction)
        }
        document.addEventListener('click', playOnInteraction)
        document.addEventListener('touchstart', playOnInteraction)
      })
    }
  }, [])

  return (
    <div className="w-full h-screen overflow-hidden fixed top-0 left-0 -z-10">
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
        src={vid1}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Video
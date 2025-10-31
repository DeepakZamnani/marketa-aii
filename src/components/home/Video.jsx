import React from 'react'
import vid1 from '../../assets/vid1.mp4'
const Video = () => {
  return (
    <div>
      <video autoPlay muted loop src={vid1}></video>
    </div>
  )
}

export default Video

import React from 'react'

import './hero.scss'

export const Hero = () => {
  return (
    <section className='hero'>
      <div className='bg-shade' />
      <video
        src='https://res.cloudinary.com/jameswalker-work/video/upload/f_auto,q_80/v1634634670/Roots/video/Smoothie-Bowls--crop_j1mctn.mp4'
        className='bg-video'
        autoPlay
        muted
        loop
      />
      <h2 className='tag-line'>
        <div className='color'>
          DISC
          <br />
          OVER
        </div>
        <div className='white'>
          DELIC
          <br />
          IOUS
        </div>
      </h2>
    </section>
  )
}

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import debounce from 'just-debounce-it'

import './nav-menu.scss'
import { Arrow } from '../svg/arrow'

const menuOptions = [
  {
    title: 'Smoothie Bowls',
    vidUrlFrag: 'Smoothie-Bowls--crop_j1mctn',
  },
  {
    title: 'Breakfast',
    vidUrlFrag: 'cutting-beets_s5nbl7.mp4',
  },
  {
    title: 'Burgers',
    vidUrlFrag: 'juices_yrgjsj.mp4',
  },
  {
    title: 'Buddha Bowls',
    vidUrlFrag: 'cutting-beets_s5nbl7.mp4',
  },
  {
    title: 'Coldpressed Juice',
    vidUrlFrag: 'juices_yrgjsj.mp4',
  },
]

export const NavMenu = () => {
  const [currentOption, setCurrentOption] = useState(
    menuOptions[0]
  )
  const [hoveredOption, setHoveredOption] = useState(null)
  const [vidCovered, setVidCovered] = useState(true)

  const handleItemHover = debounce((idx) => {
    setCurrentOption(menuOptions[idx])
    setHoveredOption(menuOptions[idx])
    setVidCovered(false)
  }, 100)

  const handleHoverEnd = debounce((params) => {
    setHoveredOption(null)
    setVidCovered(true)
  }, 100)

  return (
    <motion.nav
      initial={{ x: '-100vw' }}
      animate={{
        x: 0,
        transition: {
          duration: 0.4,
          ease: [0.6, 0.05, -0.01, 0.9],
        },
      }}
      exit={{
        x: '-100vw',
        transition: {
          duration: 0.4,
          ease: [0.6, 0.05, -0.01, 0.9],
        },
      }}
      className='nav-menu'
    >
      <div className='menu'>
        <ul className='menu__options'>
          <div className='menu__label'>Menu</div>
          {menuOptions.map(({ title }, idx) => {
            return (
              <li
                className={`option ${
                  hoveredOption?.title === title
                    ? 'hovered'
                    : ''
                }`}
                key={title}
                onMouseOver={() => handleItemHover(idx)}
                onMouseLeave={handleHoverEnd}
              >
                <span className='arrow-wrap'>
                  <Arrow />
                </span>
                {title}
              </li>
            )
          })}
        </ul>
      </div>
      <div className='displayed'>
        <div
          className='video-shade'
          style={{
            background: `${
              vidCovered
                ? 'var(--primary)'
                : 'var(--black-fade-40)'
            }`,
          }}
        />
        <video
          src={`https://res.cloudinary.com/jameswalker-work/video/upload/f_auto,q_60/v1634719147/Roots/video/${currentOption.vidUrlFrag}`}
          className='bg-video'
          autoPlay
          muted
          loop
        />
      </div>
      <div className='menu-footer'>
        <div className='footer-content'>
          <div className='number'>+84.865.528.252</div>
          <div className='hours'>
            Mon - Sun • 8:00 - 23:00
          </div>
          <div className='social'>
            <span>FB</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>IG</span>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

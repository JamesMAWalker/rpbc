import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import debounce from 'just-debounce-it'

import './nav-menu.scss'
import { Arrow } from '../svg/arrow'
import { Facebook } from '../svg/facebook'
import { Instagram } from '../svg/instagram'
import { categories as menuOptions } from '../../mock-API/category-data.json'

// Animations
const slideAnimation = {
  visible: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  hidden: {
    x: '-100vw',
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
}

const containerAnimation = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.75,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4,
      staggerChildren: 0.12,
    },
  },
}

const cascadeAnimation = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}


export const NavMenu = ({ closeMenu }) => {
  // current & selected options are necessary for decoupling video load from item hover state.
  const [currentOption, setCurrentOption] = useState(
    menuOptions[0]
  )
  const [selectedOption, setSelectedOption] = useState(null)
  const [vidCovered, setVidCovered] = useState(true)

  const handleItemHover = debounce((idx) => {
    setCurrentOption(menuOptions[idx])
    setSelectedOption(menuOptions[idx])
    setVidCovered(false)
  }, 100)

  const handleHoverEnd = debounce(() => {
    setSelectedOption(null)
    setVidCovered(true)
  }, 100)

  return (
    <motion.nav
      className='nav-menu'
      variants={slideAnimation}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <div className='menu'>
        <AnimatePresence>
          <motion.ul
            className='menu__options'
            variants={containerAnimation}
            initial='hidden'
            animate='visible'
            exit='hidden'
          >
            <motion.div
              className='menu__label'
              variants={cascadeAnimation}
            >
              Menu
            </motion.div>
            {menuOptions.map(({ title, id: slug }, idx) => {
              return (
                <motion.li
                  className={`option ${
                    selectedOption?.title === title
                      ? 'selected'
                      : ''
                  }`}
                  key={title}
                  onMouseOver={() => handleItemHover(idx)}
                  onMouseLeave={handleHoverEnd}
                  variants={cascadeAnimation}
                  onClick={closeMenu}
                >
                  <span className='arrow-wrap'>
                    <Arrow />
                  </span>
                  <Link to={`/menu/${slug}`}>{title}</Link>
                </motion.li>
              )
            })}
          </motion.ul>
        </AnimatePresence>
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
            <span>Mon - Sun</span>&nbsp;
            <span className='div-dot'>???</span>&nbsp;
            <span>8:00 - 23:00</span>
          </div>
          <div className='social'>
            <span>
              <Facebook />
            </span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>
              <Instagram />
            </span>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

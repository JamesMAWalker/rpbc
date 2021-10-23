import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { Logo } from '../svg/logo'
import { MenuIcon } from '../svg/menu-icon'
import { CloseBtn } from '../svg/close-button'

import './header.scss'

const switchAnimation = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: -100,
    transition: {
      delay: 0.5,
    },
  },
}

export const Header = ({ toggleMenu, menuOpen }) => {
  return (
    <nav className='header-nav'>
      <div className='logo'>
        <Logo />
      </div>
      <div className='menu-button' onClick={toggleMenu}>
        {menuOpen && (
          <AnimatePresence>
            <motion.div
              className='icon-wrap'
              variants={switchAnimation}
              initial='hidden'
              animate='visible'
              exit='hidden'
            >
              <CloseBtn />
              <span className='menu-text'>
                Close
              </span>
            </motion.div>
          </AnimatePresence>
        )}{' '}
        {!menuOpen && (
          <AnimatePresence>
            <motion.div
              className='icon-wrap'
              variants={switchAnimation}
              initial='hidden'
              animate='visible'
              exit='hidden'
            >
              <MenuIcon />
              <span className='menu-text'>
                Menu
              </span>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </nav>
  )
}

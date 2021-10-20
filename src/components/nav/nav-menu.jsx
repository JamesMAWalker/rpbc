import React from 'react'
import { motion } from 'framer-motion'

import './nav-menu.scss'

export const NavMenu = () => {
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
      Menu Options
    </motion.nav>
  )
}

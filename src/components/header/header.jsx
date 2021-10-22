import React from 'react'
import { Logo } from '../svg/logo'
import { MenuIcon } from '../svg/menu-icon'

import './header.scss'

export const Header = ({ toggleMenu }) => {
  return (
    <nav className='header-nav'>
      <div className='logo'><Logo /></div>
      <div className='menu-button' onClick={toggleMenu}>
        <span className='menu-text'>Menu</span>
        <MenuIcon />
      </div>
    </nav>
  )
}

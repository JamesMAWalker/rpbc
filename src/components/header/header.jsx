import React from 'react'

import './header.scss'

export const Header = ({ toggleMenu }) => {
  return (
    <nav className="header-nav">
      <div className="logo">LOGO</div>
      <div className="menu-button" onClick={toggleMenu}>MENU</div>
    </nav>
  )
}

import React from 'react'

import './footer.scss'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-info'>
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
      <div className='name'>
        ROOTS <span>Plant Based Café</span>
      </div>
    </footer>
  )
}

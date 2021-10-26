import React from 'react'
import { Facebook } from '../svg/facebook'
import { Instagram } from '../svg/instagram'

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
          <span><Facebook /></span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span><Instagram /></span>
        </div>
      </div>
      <div className='name'>
        ROOTS <span>Plant Based Café</span>
      </div>
    </footer>
  )
}

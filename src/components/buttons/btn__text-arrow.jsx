import React from 'react'

import { Arrow } from '../svg/arrow'

import './btns.scss'

export const BtnTextArrow = ({ children, direction }) => {
  const left = direction === 'left' ? 'rotate(180deg)' : 'rotate(0deg)'
  
  return (
    <button className='btn__text-arrow' style={{ transform: left }}>
      { children }{' '}
      <span className='arrow-wrap'>
        <Arrow />
      </span>
    </button>
  )
}

import React from 'react'

import { Arrow } from '../svg/arrow'

import './btns.scss'

export const BtnTextArrow = ({ children }) => {
  return (
    <button className='btn__text-arrow'>
      { children }{' '}
      <span className='arrow-wrap'>
        <Arrow />
      </span>
    </button>
  )
}

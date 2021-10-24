import React from 'react'
import { BtnTextArrow } from '../../../components/buttons/btn__text-arrow'

import './friend.scss'

export const Friend = ({ imgUrlFrag, blurb }) => {
  return (
    <div className='friend'>
      <div className='friend__logo'>
        <img
          src={`https://res.cloudinary.com/jameswalker-work/image/upload/f_auto/v1634991719/Roots/friend-logos/${imgUrlFrag}`}
          alt=''
        />
      </div>
      <p className='friend__blurb'>{blurb}</p>
      <div className='friend__visit'>
        <BtnTextArrow>visit</BtnTextArrow>
      </div>
    </div>
  )
}

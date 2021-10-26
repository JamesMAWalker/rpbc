import React from 'react'
import { v4 as uuid }from 'uuid'
import { BtnTextArrow } from '../../../components/buttons/btn__text-arrow'

import { ShortArrow } from '../../../components/svg/arrow--short'

import './menu-item.scss'

export const MenuItem = ({
  name,
  imgUrlFrag,
  ingredients,
  notes,
  price,
}) => {
  
  return (
    <div className='menu-item'>
      <img
        src={`https://res.cloudinary.com/jameswalker-work/image/upload/f_auto,q_auto:best/v1635174836/Roots/menu-image/buddha/${imgUrlFrag}.png`}
        alt={name}
        className='item-img'
      />
      <h4 className='item-title'>{name}</h4>
      <p className='item-ingredients'>{ingredients}</p>
      <div className='item-notes'>
        {notes.map((note) => (
          <span className='note-icon' key={uuid()} >{note}</span>
        ))}
      </div>
      <div className='item-buy'>
        <p className='price'>{price}K₫</p>
        <button className="add">
          add to order <BtnTextArrow />
        </button>
      </div>
    </div>
  )
}

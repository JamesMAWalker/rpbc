import React from 'react'

import { TrashIcon } from '../svg/trash'

import './checkout-item.scss'

export const CheckoutItem = ({ qty, name, price }) => {
  return (
    <div className='item'>
      <div className='item__info'>
        <div className='item__info-left'>
          <span className='item__qty'>{qty}</span>
          <span>&nbsp;&times;&nbsp;</span>
          <span className='item__name'>{name}</span>
        </div>
        <div className='item__info-right'>
          <span className='item__price'>
            {new Intl.NumberFormat('vi-VN', {
              currency: 'VND',
            }).format(price * 1000)}
          </span>
        </div>
      </div>
      <div className='item__actions'>
        <div className='item__qty-adj'>
          <button className='qty-sub'>-</button>
          <span className='item__adj-qty'>{qty}</span>
          <button className='qty-sub'>+</button>
        </div>
        <div className='item__delete'>
          <TrashIcon />
        </div>
      </div>
    </div>
  )
}

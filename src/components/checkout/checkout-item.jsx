import { useContext, useEffect, useState } from 'react'

import { OrderContext } from '../../contexts/order-context'

import { numToVndNoSymb } from '../../utils/currency-format'

import { TrashIcon } from '../svg/trash'

import './checkout-item.scss'

export const CheckoutItem = ({ qty, name, price }) => {
  /*
    TODO: 
    - Add a "remove this item?" slide out when delete button is clicked
    - Add a max qty notifier if user reaches 10 of a given item
  */

  const {
    adjustItemQty,
    checkout,
    removeItemFromCheckout,
  } = useContext(OrderContext)

  const [qtySubDisabled, setQtySubDisabled] = useState(false)

  useEffect(() => {
    checkout
    if (qty <= 1) {
      setQtySubDisabled(true)
    }
  }, [qty])

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
            {numToVndNoSymb(price * 1000)}
          </span>
        </div>
      </div>
      <div className='item__actions'>
        <div className='item__qty-adj'>
          <button
            disabled={qtySubDisabled}
            className='qty-sub'
            onClick={() => adjustItemQty(name, -1)}
          >
            -
          </button>
          <span className='item__adj-qty'>{qty}</span>
          <button
            className='qty-add'
            onClick={() => adjustItemQty(name, 1)}
          >
            +
          </button>
        </div>
        <div
          className='item__delete'
          onClick={() => removeItemFromCheckout(name)}
        >
          <TrashIcon />
        </div>
      </div>
    </div>
  )
}

import { useState, useEffect } from 'react'
import { useWindowSize } from 'react-use'

import { BagIcon } from '../svg/bag-icon'

import { numToVnd } from '../../utils/currency-format'

import './checkout-btn.scss'

export const CheckoutBtn = ({ items, openCheckout }) => {
  const { width } = useWindowSize()
  const isMobile = width < 1024

  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQty, setTotalQty] = useState(0)

  useEffect(() => {
    const getTotal = (items) => {
      const prices = items.map(({ price, qty}) => price * qty)
      return prices.reduce((acc, cv) => acc + cv)
    }

    const getQty = (items) => {
      const currQty = items.map(({ qty }) => qty)
      return currQty.reduce((acc, cv) => acc + cv)
    }

    setTotalPrice(getTotal(items))
    setTotalQty(getQty(items))
  }, [items])

  return (
    <button
      className='checkout-button'
      onClick={openCheckout}
    >
      <BagIcon />
      <div className='num-items'>
        <span className='number'>{totalQty}</span>&nbsp;
        {!isMobile && <span>items</span>}
      </div>
      {!isMobile && (
        <span className='total'>
          {numToVnd(totalPrice * 1000)}
        </span>
      )}
    </button>
  )
}

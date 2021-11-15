import { useState, useEffect } from 'react'
import { useWindowSize } from 'react-use'

import { BagIcon } from '../svg/bag-icon'

import './checkout-btn.scss'

export const CheckoutBtn = ({ items, openCheckout }) => {
  const { width } = useWindowSize()
  const isMobile = width < 1024

  const [total, setTotal] = useState(0)

  useEffect(() => {
    const getTotal = (items) => {
      const prices = items.map((item) => item.price)
      return prices.reduce((acc, cv) => acc + cv)
    }

    setTotal(getTotal(items))
  }, [items])

  return (
    <button className='checkout-button'
     onClick={openCheckout}
    >
      <BagIcon />
      <div className='num-items'>
        <span className='number'>{items.length}</span>&nbsp;
        {!isMobile && <span>items</span>}
      </div>
      {!isMobile && <span className='total'>{total},000₫</span>}
    </button>
  )
}

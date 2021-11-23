import { useState, useEffect } from 'react'
import { useWindowSize } from 'react-use'
import { motion } from 'framer-motion'

import { BagIcon } from '../svg/bag-icon'

import { numToVnd } from '../../utils/currency-format'

import './checkout-btn.scss'

const fadeSlideAnimation = {
  visible: {
    opacity: 1,
    x: 0,
    
  },
  hidden: {
    opacity: 0,
    x: "25vw",
    
  },
}

export const CheckoutBtn = ({ items, openCheckout }) => {
  const { width } = useWindowSize()
  const isMobile = width < 1024

  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQty, setTotalQty] = useState(0)

  useEffect(() => {
    if (items.length < 1) return

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
    <motion.button
      className='checkout-button'
      onClick={openCheckout}
      variants={fadeSlideAnimation}
      initial='hidden'
      animate='visible'
      exit='hidden'
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
    </motion.button>
  )
}

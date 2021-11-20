import { useEffect, useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { v4 as uuid } from 'uuid'

import { CloseBtn } from '../svg/close-button'
import { CheckoutItem } from './checkout-item'
import { Arrow } from '../svg/arrow'

import { OrderContext } from '../../contexts/order-context'
import {
  numToVnd,
  numToVndNoSymb,
} from '../../utils/currency-format'

import './checkout-slide.scss'
import './checkout-item.scss'

const slideAnimation = {
  visible: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  hidden: {
    x: '100vw',
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
}

const testItems = [
  {
    name: 'Full English Breakfast',
    price: 110,
    qty: 1,
  },
  {
    name: 'Mediterranean Falafel',
    price: 50,
    qty: 1,
  },
  {
    name: 'All Things Green Bowl',
    price: 25,
    qty: 1,
  },
  {
    name: 'Mediterranean Falafel',
    price: 50,
    qty: 1,
  },
  {
    name: 'All Things Green Bowl',
    price: 25,
    qty: 1,
  },
]

export const CheckoutSlide = ({
  closeCheckout,
  checkoutOpen,
}) => {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        closeCheckout()
      }
    }
    window.addEventListener('keydown', close)
    return () =>
      window.removeEventListener('keydown', close)
  }, [checkoutOpen])

  const { checkout } = useContext(OrderContext)

  const [totalPrice, setTotalPrice] = useState(0)
  const [discount, setDiscount] = useState(0)

  useEffect(() => {
    const getTotal = (items) => {
      const prices = checkout.map(
        ({ price, qty }) => price * qty
      )
      return prices.reduce((acc, cv) => acc + cv)
    }

    setTotalPrice(getTotal(checkout))
  }, [checkout])

  return (
    <motion.div
      className='checkout checkout-slide'
      variants={slideAnimation}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <div
        className='checkout__close-btn'
        onClick={closeCheckout}
      >
        <CloseBtn />
      </div>
      <h3 className='checkout__header'>Your Order</h3>
      <div className='checkout__items'>
        {checkout.map(({ qty, name, price }) => (
          <CheckoutItem
            key={uuid()}
            qty={qty}
            name={name}
            price={price}
          />
        ))}
      </div>
      <div className='checkout__summary'>
        <div className='subtotal'>
          <span className='label'>subtotal</span>
          <span className='value'>
            {numToVndNoSymb(totalPrice * 1000)}
          </span>
        </div>
        <div className='promo-wrap'>
          <input
            type='text'
            className='promo'
            placeholder='enter promo code'
          />
          <Arrow />
        </div>
        <div className='grandtotal'>
          <span className='label'>grandtotal</span>
          <span className='value'>
            {numToVnd((totalPrice - discount) * 1000)}
          </span>
        </div>
        <button className='complete-btn'>
          <div className='arrow-wrap'>
            <Arrow />
          </div>
          <span className='btn-text'>Checkout</span>
        </button>
      </div>
    </motion.div>
  )
}

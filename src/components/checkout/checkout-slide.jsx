import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { CloseBtn } from '../svg/close-button'

import './checkout-slide.scss'

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

export const CheckoutSlide = ({ closeCheckout, checkoutOpen }) => {

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
      <div className='items'>
        <span className='item'>Item</span>
        <span className='item'>Item</span>
        <span className='item'>Item</span>
        <span className='item'>Item</span>
      </div>
    </motion.div>
  )
}

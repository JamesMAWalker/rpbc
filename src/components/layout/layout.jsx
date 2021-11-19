import {
  useContext, 
  useEffect,
  useRef,
  useState,
} from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import { OrderContext } from '../../contexts/order-context'

import { Header } from '../header/header'
import { Footer } from '../footer/footer'
import { NavMenu } from '../nav/nav-menu'
import { CheckoutSlide } from '../checkout/checkout-slide'
import { CheckoutBtn } from '../checkout/checkout-btn'

import './layout.scss'

export const Layout = ({ children }) => {
  const layoutRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const { checkout } = useContext(OrderContext)

  // progress bar logic
  useEffect(() => {
    const totalHeight = layoutRef.current.clientHeight
    const maxScroll = totalHeight - window.innerHeight

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY

      setScrollProgress((currentScroll / maxScroll) * 100.1)
    })
    return () => {
      window.removeEventListener('scroll', () => {})
    }
  }, [])

  // scroll page to top on transition
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // close menu on escape key
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', close)
    return () =>
      window.removeEventListener('keydown', close)
  }, [menuOpen])

  return (
    <main className='layout' ref={layoutRef}>
      <AnimatePresence>
        {checkoutOpen && (
        <CheckoutSlide 
          closeCheckout={() => setCheckoutOpen(false)} 
          checkoutOpen={checkoutOpen}
        />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {menuOpen && (
          <NavMenu
            menuOpen={menuOpen}
            closeMenu={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
      <Header
        menuOpen={menuOpen}
        toggleMenu={setMenuOpen}
        />
      {children}
      <div
        className='scroll-progress'
        style={{ width: `${scrollProgress}vw` }}
        />
        <AnimatePresence>
          {checkout.length > 0 && (
            <CheckoutBtn items={checkout} openCheckout={() => setCheckoutOpen(true)} />
          )}
        </AnimatePresence>
      <Footer />
    </main>
  )
}

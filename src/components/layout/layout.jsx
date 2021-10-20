import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Header } from '../header/header'
import { Footer } from '../footer/footer'

import './layout.scss'
import { NavMenu } from '../nav/nav-menu'

export const Layout = ({ children }) => {
  const layoutRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  console.log('menuOpen: ', menuOpen)

  useEffect(() => {
    const totalHeight = layoutRef.current.clientHeight
    const maxScroll = totalHeight - window.innerHeight

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY

      setScrollProgress((currentScroll / maxScroll) * 100.1)
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])

  return (
    <main className='layout' ref={layoutRef}>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{
              x: 0,
              transition: {
                duration: 0.4,
                ease: [0.6, 0.05, -0.01, 0.9],
              },
            }}
            exit={{
              x: '-100vw',
              transition: {
                duration: 0.4,
                ease: [0.6, 0.05, -0.01, 0.9],
              },
            }}
            className='menu__animation-wrapper'
          >
            <NavMenu />
          </motion.div>
        )}
      </AnimatePresence>
      <Header toggleMenu={() => setMenuOpen(!menuOpen)} />
      {children}
      <div
        className='scroll-progress'
        style={{ width: `${scrollProgress}vw` }}
      />
      <Footer />
    </main>
  )
}

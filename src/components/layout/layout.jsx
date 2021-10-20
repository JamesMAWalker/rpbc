import { useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

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
        {menuOpen && <NavMenu />}
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

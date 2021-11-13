import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { Container } from '../../../components/container/container'

import './location.scss'

const locations = [
  {
    name: 'An Thượng',
    address: `
      Tòa nhà, 
      Indochina Riverside Towers, Lầu 2, Đ. Trần Phú, 
      Hải Châu, Đà Nẵng
    `,
    number: '+84.865.528.252',
    coordinates: '',
  },
  {
    name: 'Hải Châu',
    address: `
      Tòa nhà, 
      Indochina Riverside Towers, Lầu 2, Đ. Trần Phú, 
      Hải Châu, Đà Nẵng
    `,
    number: '+84.865.528.252',
    coordinates: '',
  },
  {
    name: 'Sơn Trà',
    address: `
      Tòa nhà, 
      Indochina Riverside Towers, Lầu 2, Đ. Trần Phú, 
      Hải Châu, Đà Nẵng
    `,
    number: '+84.865.528.252',
    coordinates: '',
  },
]

export const Location = () => {
  const [currentLocation, setCurrentLocation] =
    useState(locations[0])

  const setLocation = (idx) => {
    const newLocation = locations[idx]
    if (currentLocation === newLocation) {
      setLocation(null)
    } else {
      setCurrentLocation(locations[idx])
    }
  }

  return (
    <section className='location'>
      <Container classes='column'>
        <div className='location__grid'>
          <div className='location__map'>
            <img
              src='https://res.cloudinary.com/jameswalker-work/image/upload/v1634903202/Roots/GPS-Map_uufti0.png'
              alt='map to currently selected location'
              className='map'
            />
          </div>
          <h3 className="location__header--mobile">
            Where to find us
          </h3>
          <div className='location__info'>
            <h3 className='location__header'>
              Where to Find Us
            </h3>
            <ul className='location__list'>
              {locations.map(
                ({ name, address, number }, idx) => {
                  const isOpen =
                    name === currentLocation?.name
                  return (
                    <li
                      key={name}
                      className='location__list--item'
                      onClick={() => setLocation(idx)}
                    >
                      <div
                        className={`selector-btn ${
                          isOpen ? 'accent' : ''
                        }`}
                      >
                        <motion.span
                          animate={{
                            rotate: isOpen ? 0 : 45,
                            x: 3,
                          }}
                          transition={{
                            duration: 0.2,
                            ease: [0.6, 0.05, -0.01, 0.9],
                          }}
                        />
                        <motion.span
                          animate={{
                            rotate: isOpen ? 0 : -45,
                            x: -3,
                          }}
                          transition={{
                            duration: 0.2,
                            ease: [0.6, 0.05, -0.01, 0.9],
                          }}
                        />
                      </div>
                      <span
                        className='location-info'
                        key={name}
                      >
                        <span
                          className={`title ${
                            isOpen ? 'open' : ''
                          }`}
                        >
                          {name}
                        </span>
                        <motion.div
                          className='content'
                          animate={{
                            height: isOpen ? '100%' : '0px',
                          }}
                          transition={{
                            duration: 0.2,
                            ease: [0.6, 0.05, -0.01, 0.9],
                          }}
                        >
                          <span>{address}</span>
                          <span>{number}</span>
                        </motion.div>
                      </span>
                    </li>
                  )
                }
              )}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

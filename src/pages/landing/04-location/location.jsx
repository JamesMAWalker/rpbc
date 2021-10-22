import React from 'react'
import { Container } from '../../../components/container/container'

import './location.scss'

const locations = [
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

  return (
    <section className='location'>
      <Container column>
        <div className='location__grid'>
          <div className='location__map'>
            <img
              src='https://res.cloudinary.com/jameswalker-work/image/upload/v1634903202/Roots/GPS-Map_uufti0.png'
              alt='map to currently selected location'
              className='map'
            />
          </div>
          <div className='location__wrap'>
            <ul className='locations'>
              {locations.map(({ name, address, number }) => {
                return (
                  <li className='location-info' key={name}>
                    <span>{name}</span>
                    <span>{address}</span>
                    <span>{number}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

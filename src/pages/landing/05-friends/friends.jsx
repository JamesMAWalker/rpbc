import React from 'react'

import { Container } from '../../../components/container/container'
import { Friend } from './friend.jsx'

import './friends.scss'

const friendsData = [
  {
    name: 'lady-kombucha',
    imgUrlFrag: `lady-kombucha_frerxw.png`,
    blurb: `Lady Kombucha is founded by our close friends Ben and Nguyen, they produce the highest quality Kombucha in Vietnam. Come to ROOTS and try their crafts products!
    `,
  },
  {
    name: `next-meats`,
    imgUrlFrag: `next-meats_z6b24p.png`,
    blurb: `Next Meats is a food tech start up company in Japan, their mission is “Do not end the earth” due to the impact of greenhouse gas emission from meat farm industry.  Here in Vietnam, they’re working together with Roots to develop the organic sauced  plant based Next Burger.
    `,
  },
  {
    name: 'dork-dancing',
    imgUrlFrag: `dork-dancing_vmiuyl.png`,
    blurb: `Next Meats is a food tech start up company in Japan, their mission is “Do not end the earth” due to the impact of greenhouse gas emission from meat farm industry.  Here in Vietnam, they’re working together with Roots to develop the organic sauced  plant based Next Burger.
    `,
  },
  {
    name: 'gold-star',
    imgUrlFrag: `gold-star_wixtl0.png`,
    blurb: `Next Meats is a food tech start up company in Japan, their mission is “Do not end the earth” due to the impact of greenhouse gas emission from meat farm industry.  Here in Vietnam, they’re working together with Roots to develop the organic sauced  plant based Next Burger.
    `,
  },
]

export const Friends = () => {
  return (
    <section className='friends'>
      <Container classes='column'>
        <div className='friends__img-wrap'>
          <div className='darkening-shade' />
          <img
            className='friends__img'
            src='https://res.cloudinary.com/jameswalker-work/image/upload/f_auto,q_80/v1634895951/Roots/feature-image/ikeda-san_bmyyv9.jpg'
            alt='Ikeda-san farming'
          />
        </div>
        <h2 className='friends__title'>
          FRIENDS OF <span>ROOTS</span>
        </h2>
        {friendsData.map(({ name, imgUrlFrag, blurb }) => {
          return (
            <div className='friends__content-wrap' key={name}>
              <Friend
                name={name}
                imgUrlFrag={imgUrlFrag}
                blurb={blurb}
              />
            </div>
          )
        })}
      </Container>
    </section>
  )
}

import { useState } from 'react'

import { Container } from '../../../components/container/container'
import { Arrow } from '../../../components/svg/arrow'

import './daily-fave.scss'

const favorites = [
  {
    imgUrlFrag: 'bowl__alt_yd9ebm',
    title: 'Falafel Mezze Bowl',
    shortTitle: 'Mezze Bowl',
    price: '100,000',
    blurb:
      'is a sampling of bright Mediterranean flavors, including green herb falafel, rich hummous, tofu feta, organic tabbouleh with kale, mint, cucumber, and a tahini-lime dressing. One of those rare meals that both fills and energizes!',
  },
]

export const DailyFave = () => {
  const [currentFavorite, setCurrentFavorite] = useState(
    favorites[0]
  )

  const { imgUrlFrag, title, shortTitle, price, blurb } =
    currentFavorite

  return (
    <section className='fave'>
      <Container classes='column'>
        <div className='fave__img-wrap'>
          <h3 className='desc-title'> 
            <span>Our</span>
            <span>Daily</span>
            <span className='emph'>Favorite</span>
          </h3>
          <div className="darkening-shade"/>
          <img
            className='fave__img'
            src={`https://res.cloudinary.com/jameswalker-work/image/upload/f_auto,q_auto:good/v1634895950/Roots/feature-image/${imgUrlFrag}.png`}
            alt={title}
          />
        </div>
        <h2 className='fave__title'>
          {title}
          <span className='fave__price'>{price}₫</span>
        </h2>
        <p className='fave__blurb'>
          <span className='emph'>The {shortTitle}</span>{' '}
          {blurb}
        </p>
        <button className='fave__order-now'>
          <span>order now</span>
          <div className='fave__arrow-wrap'>
            <Arrow />
          </div>
        </button>
      </Container>
    </section>
  )
}

import { useState, useEffect } from 'react'

import { Container } from '../../../components/container/container'
import { ShortArrow } from '../../../components/svg/arrow--short'
import { Instagram } from '../../../components/svg/instagram'

import './insta.scss'

const instaPhotos = [
  {
    imgUrlFrag: 'burger_sao6nu.jpg',
  },
  {
    imgUrlFrag: 'grill_fbxyrj.jpg',
  },
  {
    imgUrlFrag: 'pleiku_li6rnh.jpg',
  },
  {
    imgUrlFrag: 'baby-smoothie_vsxq0a.jpg',
  },
  {
    imgUrlFrag: 'roots__bowl2_kvp04k.jpg',
  },
]

export const Insta = () => {
  const [scrollIndex, setScrollIndex] = useState(0)
  const [photoPosition, setPhotoPosition] = useState(0)

  useEffect(() => {
    const scrollDistance = 30
    console.log('scrollIndex from useEffect: ', scrollIndex)
    setPhotoPosition(scrollDistance * scrollIndex)
    console.log(
      'photoPosition from useEffect: ',
      photoPosition
    )
  }, [scrollIndex])

  const scrollPhotos = (direction) => {
    
    const arrowRight = direction < 0
    const arrowLeft = direction > 0
    
    const rightMax = scrollIndex <= -3 
    const leftMax = scrollIndex >= 0 
    
    console.log('rightMax: ', rightMax);
    console.log('scrollIndex: ', scrollIndex);
    console.log('arrowRight: ', arrowRight);

    if (arrowRight && !rightMax) {
      setScrollIndex(scrollIndex - 1)
    } else if (arrowLeft && !leftMax) {
      setScrollIndex(scrollIndex + 1)
    }
  }

  return (
    <section className='insta'>
      <Container classes='column aifs'>
        <div className='insta__section-header'>
          <div className='insta__text'>
            <div className='hashtag'>#deeproots</div>
            <h4 className='text-tag'>
              let's be <br /> friends
            </h4>
          </div>
          <div className='insta__nav-arrows'>
            <div className='arrow-wrap'>
              <ShortArrow
                filled={scrollIndex < 0}
                scroll={() => scrollPhotos(1)}
              />
            </div>
            <div className='arrow-wrap'>
              <ShortArrow
                filled={scrollIndex > -3}
                direction='right'
                scroll={() => scrollPhotos(-1)}
              />
            </div>
          </div>
        </div>
        <div
          className='insta__photos'
          style={{
            transform: `translateX(${photoPosition}vw)`,
          }}
        >
          {instaPhotos.map(({ imgUrlFrag }) => {
            return (
              <div className='photo-wrap' key={imgUrlFrag}>
                <img
                  src={`https://res.cloudinary.com/jameswalker-work/image/upload/f_auto,q_70/v1635067111/Roots/instagram/${imgUrlFrag}`}
                  alt=''
                  className='photo'
                />
              </div>
            )
          })}
        </div>
        <div className='insta__cta'>
          <a>
            <span className='icon'>
              <Instagram />
            </span>
            follow{' '}
            <span className='color'>&nbsp;Roots</span>
          </a>
        </div>
      </Container>
    </section>
  )
}

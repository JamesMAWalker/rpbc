import React from 'react'

import { Container } from '../../../components/container/container'

import './about.scss'

export const About = () => {
  return (
    <section className='about'>
      <Container classes='column'>
        <p className='about__blurb'>
          <span>ROOTS Plant-Based Café</span> is a modern
          Vegan café, cold-pressed juice & smoothie bar born
          near the beach in Ðà Nẵng.
          <br />
          <br />
          Our aim is to provide health conscious meals made
          with plants and love, using fresh, locally farmed
          produce. Roots are a foundation for life. We truly
          believe that a balanced diet of fruits and
          vegetables can change your life.
        </p>
      </Container>
    </section>
  )
}

import React from 'react'
import { Hero } from './01-hero/hero'
import { About } from './02-about/about'
import { DailyFave } from './03-daily-fave/daily-fave'
import { Location } from './04-location/location'
import { Friends } from './05-friends/friends'
import { Insta } from './06-insta/insta'

export const Landing = () => {
  return (
    <div>
      <Hero/>
      <About />
      <DailyFave />
      <Location />
      <Friends />
      <Insta />
    </div>
  )
}

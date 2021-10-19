import { useState } from 'react'

import { Layout } from './components/layout/layout'
import { Hero } from './pages/landing/01-hero/hero'
import { About } from './pages/landing/02-about/about'
import { DailyFave } from './pages/landing/03-daily-fave/daily-fave'
import { Location } from './pages/landing/04-location/location'
import { Friends } from './pages/landing/05-friends/friends'
import { Insta } from './pages/landing/06-insta/insta'

import './styles/_global.scss'
import './styles/_imports.scss'

function App() {

  return (
    <div className="App">
      <Layout>
        <Hero />
        <About />
        <DailyFave/>
        <Location/>
        <Friends/>
        <Insta/>
      </Layout>
    </div>
  )
}

export default App

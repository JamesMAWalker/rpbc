import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Layout } from './components/layout/layout'
import { Landing } from './pages/landing/landing'
import { CategoryMenu } from './pages/category-menu/category-menu'

import './styles/_global.scss'
import './styles/_imports.scss'

const routes = [
  {
    name: 'home-page',
    path: '/',
    component: Landing,
  },
  {
    name: 'menu-page',
    path: '/menu',
    component: CategoryMenu,
  },
]

function App() {
  return (
    <div className='App'>
      <Layout>
        <Switch>
          {routes.map(({ name, path, component }) => (
            <Route key={name} exact path={path} component={component} />
          ))}
        </Switch>
      </Layout>
    </div>
  )
}

export default App

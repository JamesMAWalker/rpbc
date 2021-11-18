import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Layout } from './components/layout/layout'
import { Landing } from './pages/landing/landing'
import { CategoryMenu } from './pages/category-menu/category-menu'

import './styles/_global.scss'
import './styles/_imports.scss'

import { items as menuItems } from './mock-API/item-data.json'
import { categories } from './mock-API/category-data.json'

const routes = [
  {
    name: 'home-page',
    path: '/',
    element: <Landing />,
  },
  ...categories.map((cat) => {
    return {
      name: cat.id,
      path: `/menu/${cat.id}`,
      element: (
        <CategoryMenu
          items={menuItems.filter(
            (item) => item.category === cat.id
          )}
          info={cat}
        />
      ),
    }
  }),
]

function App() {
  return (
    <div className='App'>
      <Layout>
        <Routes>
          {routes.map(
            ({ name, path, element, items, info }) => (
              <Route
                key={name}
                exact
                path={path}
                element={element}
                items={items}
                info={info}
              />
            )
          )}
        </Routes>
      </Layout>
    </div>
  )
}

export default App

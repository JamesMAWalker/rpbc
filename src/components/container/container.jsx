import React from 'react'

import './container.scss'

export const Container = ({ children, classes }) => {

  return (
    <section className={`container-fluid  ${classes}`}>
      {children}
    </section>
  )
}

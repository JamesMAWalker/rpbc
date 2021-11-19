import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { BrowserRouter as Router } from 'react-router-dom'
import { OrderProvider } from './contexts/order-context'

ReactDOM.render(
  <React.StrictMode>
    <OrderProvider>
      <Router>
        <App />
      </Router>
    </OrderProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

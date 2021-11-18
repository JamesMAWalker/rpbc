import { createContext, useEffect, useState } from 'react'


const defaultValues = {
  checkout: {},
  addItem: () => {},
  adjustItemQty: () => {},
  removeItem: () => {},
}

const OrderContext = createContext(defaultValues)


export const OrderProvider = ({ children }) => {
  /*
    + How should item be defined?
      Items will eventually come from a CMS, therefore, data will be 
      defined in a separate data file, and replaced with CMS API call 
      once teh CMS has been loaded with data.  

    - Checkout button should not appear unless items are in checkout
    - Checkout button needs awareness of checkout items
    - Checkout slider needs awareness of checkout items
    - Checkout slider needs ability to alter checkout 
    - Menu item needs ability to add items to checkout
    - Feature item needs ability to add items to checkout
  */
  const [checkout, setCheckout] = useState({})


  return (
    <OrderContext.Provider>
      value={{

      }}
    </OrderContext.Provider>
  )
}

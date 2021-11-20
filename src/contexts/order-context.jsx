import { createContext, useEffect, useState } from 'react'

const defaultValues = {
  checkout: [],
  addItem: () => {},
  adjustItemQty: () => {},
  removeItem: () => {},
}

export const OrderContext = createContext(defaultValues)

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

    ! Progress Bookmark !
    - Need to initialize checkout to local storage
    - Once in LS, begin adding methods to adjust checkout contents
  */
  const [checkout, setCheckout] = useState([])

  // const testItem = {
  //   name: "Item2",
  //   price: 50,
  //   qty: 0,
  // }

  const addItemToCheckout = (item) => {
    const newCheckout = [...checkout, item]
    setCheckout(newCheckout)
  }

  useEffect(() => {
    if (checkout.length > 0)
      console.log('something changed!', checkout)
  }, [checkout])

  const removeItemFromCheckout = (item) => {}

  const adjustItemQty = (adjustedItemName) => {
    const adjustedCheckout = checkout.map((item) => {
      if (item.name === adjustedItemName) {
        item.qty = item.qty + 1
        console.log(item.name, "'s qty adjusted")
      }
      return item
    })
    setCheckout(adjustedCheckout)
    console.log(
      'Cart after attempting to update item qty: ',
      checkout
    )
  }

  return (
    <OrderContext.Provider
      value={{
        checkout,
        addItemToCheckout,
        removeItemFromCheckout,
        adjustItemQty,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

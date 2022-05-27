import { createContext, useEffect, useState } from 'react'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client'


// Items from GraphAPI
const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
})

// Local item handling
const defaultValues = {
  checkout: [],
  addItem: () => {},
  adjustItemQty: () => {},
  removeItem: () => {},
}

export const OrderContext = createContext(defaultValues)

const isBrowser = typeof window !== `undefined`
const localStorageKey = `roots_cukcuk_checkout_id`

export const OrderProvider = ({ children }) => {
  /*
    + How should item be defined?
      Items will eventually come from a CMS, therefore, data will be 
      defined in a separate data file, and replaced with CMS API call 
      once teh CMS has been loaded with data.  

    ! Progress Bookmark !
    - Create checkout item component for checkout slide
    - Need to initialize checkout to local storage
    - Once in LS, begin adding methods to adjust checkout contents
  */
  const [checkout, setCheckout] = useState([])

  /*
    Checkout flow:
    - On site load, check if checkoutID exists in localStorage
      + If NOT: set checkout as empty array but with JSON.stringify
      + If YES: get checkout and setCheckout using JSON.parse
    - On addition of an item, add to checkout local state, but also 
  */

  const setLSCheckout = (checkout) => {
    if (!isBrowser) return

    const newCheckout = JSON.stringify(checkout)
    localStorage.setItem(localStorageKey, newCheckout)
  }

  // Initialize Checkout in LS
  useEffect(() => {
    const initializeCheckout = () => {
      if (!isBrowser) return

      const existingCheckout =
        localStorage.getItem(localStorageKey)

      if (existingCheckout) {
        const parsedCheckout = JSON.parse(existingCheckout)
        try {
          setCheckout(parsedCheckout)
          return
        } catch (err) {
          console.log('Error setting checkout: ', err)
        }
      } else {
        setLSCheckout(checkout)
      }
    }

    initializeCheckout()
  }, [])

  // Sync checkout updates between local state/storage
  useEffect(() => {
    setLSCheckout(checkout)
  }, [checkout])

  const addItemToCheckout = (item) => {
    const newCheckout = [...checkout, item]
    setCheckout(newCheckout)
  }

  const removeItemFromCheckout = (itemName) => {
    const updatedCheckout = checkout.filter(
      (item) => item.name !== itemName
    )
    setCheckout(updatedCheckout)
  }

  const adjustItemQty = (adjustedItemName, crement) => {
    const adjustedCheckout = checkout.map((item) => {
      if (item.name === adjustedItemName) {
        item.qty = item.qty + crement
      }
      return item
    })
    setCheckout(adjustedCheckout)
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
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    </OrderContext.Provider>
  )
}

import React, { useReducer, useEffect } from 'react'
import { ADD_TO_CART, REMOVE_FROM_CART, INITIALIZE_STATE } from './actionTypes'
import actionHandlers from './actionHandlers'
import productApiCall from '../data/api'

const shopReducer = (state, action) => {
  if (!actionHandlers[action.type])
    throw new Error(`No action handler for ${action.type}`)

  return actionHandlers[action.type](state, action.payload)
}

const ShopContext = React.createContext()

export const ShopContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, {
    products: null,
    shoppingCart: null
  })

  const addToCart = item => {
    dispatch({ type: ADD_TO_CART, payload: { ...item } })
  }

  const removeFromCart = key => {
    dispatch({ type: REMOVE_FROM_CART, payload: { key } })
  }

 

  useEffect(() => {
    const initialize = async () => {
      // const rawData = localStorage.getItem('shopping_cart')
      const productData = await productApiCall()
      dispatch({
        type: INITIALIZE_STATE,
        payload: {
          shoppingCart: [],
          products: productData
        }
      })
    }
    initialize()
  }, [])

  // useEffect(() => {
  //   if(state.shoppingCart) {
  //     localStorage.setItem('shopping_cart', JSON.stringify(state.shoppingCart))
  //   }
  // }, [state.shoppingCart])


  return (
    <ShopContext.Provider
      value={{
        products: state.products,
        shoppingCart: state.shoppingCart,
        addToCart: addToCart,
        removeFromCart: removeFromCart
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContext

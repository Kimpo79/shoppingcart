import React, { useContext } from 'react'
import OrderLines from '../components/OrderLines'
import ShopContext from '../context/ShopContext'

function Checkout() {
  const context = useContext(ShopContext)

  const handleAddToCart = key => {
    context.addToCart({ ...context.shoppingCart[key] })
  }

  const handleRemoveFromCart = key => {
    context.removeFromCart(key)
  }

  const getProductQuantity = (productId, color) => {
    return context.products[productId].options[color].quantity
  }

  return (
    <>
      {context.shoppingCart && (
        <OrderLines
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
          getProductQuantity={getProductQuantity}
          orderLines={Object.keys(context.shoppingCart).map(
            key => context.shoppingCart[key]
          )}
        />
      )}
    </>
  )
}

export default Checkout

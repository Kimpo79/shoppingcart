import React, { useContext } from 'react'
import ProductDetails from '../components/ProductDetails'
import ShopContext from '../context/ShopContext'

function Product({ match }) {
  const context = useContext(ShopContext)
  const handleAddToCart = product => {
    context.addToCart(product)
  }
  return (
    <>
      {context.products && (
        <ProductDetails
          addToCart={handleAddToCart}
          product={context.products[match.params.id]}
        />
      )}
    </>
  )
}

export default Product

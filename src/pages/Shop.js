import React, { useContext } from 'react'
import ProductList from '../components/ProductList'
import ShopContext from '../context/ShopContext'

function Shop() {
  const context = useContext(ShopContext)
  return (
    <>
      {context.products && (
        <ProductList
          products={Object.keys(context.products).map(
            key => context.products[key]
          )}
        />
      )}
    </>
  )
}

export default Shop

import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductList = ({ products }) => {
  return (
    <ul className="product-list">
      {products
        .map(product => {
          return (
            <li key={product.id}>
              <div>
                <h3>
                  <NavLink to={`/product/${product.id}`}>
                    {product.name}
                  </NavLink>
                </h3>
              </div>
            </li>
          )
        })}
    </ul>
  )
}

export default ProductList

import React, { useContext } from 'react'
import ShopContext from '../context/ShopContext'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

function TopNav() {
  const context = useContext(ShopContext)
  return (
    <nav>
      <ul className="top-nav">
        <li>
          <NavLink to="/">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/checkout">
            Checkout <FaShoppingCart />
            {` `}(
            {context.shoppingCart &&
              Object.keys(context.shoppingCart).reduce((acc, curr) => {
                acc += context.shoppingCart[curr].quantity
                return acc
              }, 0)}
            )
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default TopNav

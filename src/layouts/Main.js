import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Shop from '../pages/Shop'
import Product from '../pages/Product'
import Checkout from '../pages/Checkout'

function MainLayout() {
  return (
    <Switch>
      <Route path="/" component={Shop} exact/>
      <Route path="/product/:id" component={Product} />
      <Route path="/checkout" component={Checkout} />
    </Switch>
  )
}

export default MainLayout

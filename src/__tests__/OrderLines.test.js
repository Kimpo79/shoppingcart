import React from 'react'
import { shallow } from 'enzyme'
import mockOrderLines from './mockDataOrderLines.json'
import OrderLines from '../components/OrderLines'
let wrapper

beforeEach(() => {
  wrapper = shallow(
    <OrderLines orderLines={mockOrderLines} getProductQuantity={() => 1} />
  )
})

describe('Orderlines on checkout page', () => {
  it('should render shopping cart orderline items', () => {
    expect(wrapper.find('.order-lines li')).toHaveLength(5)
  })

  it('should render the sum of all orderlines in shopping cart', () => {
    expect(wrapper.find('.shoppingcart-total').text()).toEqual(
      '9700'
    )
  })

  it('should render total quantity of an orderline item', () => {
    expect(
      wrapper
        .find('.order-lines li .product-quantity')
        .first()
        .text()
    ).toEqual('2')
  })

  it('should render the name of an orderline item', () => {
    expect(
      wrapper
        .find('.order-lines li .product-name')
        .first()
        .text()
    ).toEqual('Trådfria Lampor')
  })

   it('should render the name of an orderline item', () => {
    expect(
      wrapper
        .find('.order-lines li .product-brand')
        .first()
        .text()
    ).toEqual('IKEA')
  })

  it('should render the correct color of an orderline item', () => {
    expect(
      wrapper
        .find('.order-lines li .product-color')
        .first()
        .text()
    ).toEqual('red')
  })

  it('should render the correct extra attribute of an orderline item', () => {
    expect(
      wrapper
        .find('.order-lines li .product-power')
        .first()
        .text()
    ).toEqual('9.5')
  })

})

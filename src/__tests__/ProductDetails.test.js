import React from 'react'
import { shallow } from 'enzyme'
import mockDataProduct from './mockDataProduct.json'
import ProductDetails from '../components/ProductDetails'
let wrapper

beforeEach(() => {
  wrapper = shallow(<ProductDetails product={mockDataProduct} />)
})

describe('Product details page', () => {
  it('should render product title', () => {
    expect(wrapper.find('h1').text()).toEqual('Nintendo switch')
  })
})

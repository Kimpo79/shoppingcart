import React, { useState, useEffect } from 'react'
import ProductOptions from './ProductOptions'

const ProductDetails = ({ product, addToCart }) => {
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedStorage, setSelectedStorage] = useState('')
  const [selectedPower, setSelectedPower] = useState('')

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      price: product.price,
      weight: product.weight,
      name: product.name,
      brand: product.brand,
      color: selectedColor,
      storage: selectedStorage,
      power: selectedPower,
      orderLineId: product.id + selectedColor + selectedStorage + selectedPower
    })
  }

  const handleOnColorChange = e => {
    setSelectedColor(e.target.value)
  }

  const handleOnStorageChange = e => {
    setSelectedStorage(e.target.value)
  }

  const handleOnPowerChange = e => {
    setSelectedPower(e.target.value)
  }

  useEffect(() => {
    setSelectedStorage('')
    setSelectedPower('')
  }, [selectedColor])

  const productHasNoExtras =
    product.options[selectedColor] &&
    !product.options[selectedColor].storage &&
    !product.options[selectedColor].power

  const selectedProductQuantity =
    product.options[selectedColor] && product.options[selectedColor].quantity

  return (
    <div className="product-container">
      <h1>{product.name}</h1>
      <p>
        Brand: <b>{product.brand}</b>
      </p>
      <p>Price: ${product.price}</p>
      {product.available && (
        <ProductOptions
          onChange={handleOnColorChange}
          value={selectedColor}
          options={Object.keys(product.options)}
          defaultText="Choose color"
        />
      )}
      {product.options[selectedColor] && (
        <>
          <ProductOptions
            onChange={handleOnStorageChange}
            value={selectedStorage}
            options={product.options[selectedColor].storage}
            defaultText="Choose storage"
          />
          <ProductOptions
            onChange={handleOnPowerChange}
            value={selectedPower}
            options={product.options[selectedColor].power}
            defaultText="Choose power"
          />
          <p>In stock: {selectedProductQuantity}</p>

          {selectedProductQuantity > 0 &&
            product.available &&
            (selectedPower || selectedStorage || productHasNoExtras) && (
              <button onClick={handleAddToCart}>Add to cart</button>
            )}
        </>
      )}
      {!product.available && <span>Sorry, this product is not available.</span>}

      {selectedProductQuantity === 0 && (
        <span>Sorry, this product is out of stock.</span>
      )}
    </div>
  )
}

export default ProductDetails

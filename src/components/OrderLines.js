import React from 'react'

const OrderLines = ({
  orderLines,
  addToCart,
  removeFromCart,
  getProductQuantity
}) => {
  return (
    <>
      <ul className="order-lines">
        {orderLines.map((line, i) => {
          return (
            <li key={i}>
              <div>
                <p>
                  Name: <span className="product-name">{line.name}</span>
                </p>
                <p>
                  Color: <span className="product-color">{line.color}</span>
                </p>
                {line.power && (
                  <p>
                    Power: <span className="product-power">{line.power}</span>
                  </p>
                )}
                {line.storage && (
                  <p>
                    Storage:{' '}
                    <span className="product-storage">{line.storage}</span>
                  </p>
                )}
              </div>
              <div>
                <p>
                  Brand: <span className="product-brand">{line.brand}</span>
                </p>
                <p>
                  Price: <span className="product-price">${line.price}</span>
                </p>
              </div>
              <div>
                <p>
                  Quantity:{' '}
                  <span className="product-quantity">{line.quantity}</span>
                </p>
                <p>
                  <span>${line.quantity * line.price}</span>
                </p>
              </div>
              <div>
                <span>
                  <button onClick={() => removeFromCart(line.orderLineId)}>
                    -
                  </button>
                  {getProductQuantity(line.id, line.color) > 0 && (
                    <button
                      onClick={() => {
                        addToCart(line.orderLineId)
                      }}
                    >
                      +
                    </button>
                  )}
                </span>
              </div>
            </li>
          )
        })}
        {orderLines.length === 0 && <span>Your cart is empty</span>}
      </ul>
      {orderLines && (
        <div className="shoppingcart-footer">
          Total: $
          <span className="shoppingcart-total">
            {orderLines.reduce((acc, curr) => {
              acc += curr.quantity * curr.price
              return acc
            }, 0)}
          </span>
        </div>
      )}
    </>
  )
}

export default OrderLines

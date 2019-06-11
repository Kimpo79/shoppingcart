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
                <div>
                  Name: <span className="product-name">{line.name}</span>
                </div>
                <div>
                  Color: <span className="product-color">{line.color}</span>
                </div>
                {line.power && (
                  <div>
                    Power: <span className="product-power">{line.power}</span>
                  </div>
                )}
                {line.storage && (
                  <div>
                    Storage:{' '}
                    <span className="product-storage">{line.storage}</span>
                  </div>
                )}
              </div>
              <div>
                <div>
                  Brand: <span className="product-brand">{line.brand}</span>
                </div>
                <div>
                  Price: <span className="product-price">${line.price}</span>
                </div>
              </div>
              <div>
                <div>
                  Quantity:{' '}
                  <span className="product-quantity">{line.quantity}</span>
                </div>
                <div>
                  <span>${line.quantity * line.price}</span>
                </div>
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

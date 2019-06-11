import { ADD_TO_CART, REMOVE_FROM_CART, INITIALIZE_STATE } from './actionTypes'

export default {
  [ADD_TO_CART]: (state, payload) => {
    const selectedColor = payload.color
    const selectedProduct = state.products[payload.id]
    const nextState = {
      ...state,
      products: {
        ...state.products,
        [payload.id]: {
          ...selectedProduct,
          options: {
            ...selectedProduct.options,
            [selectedColor]: {
              ...selectedProduct.options[selectedColor],
              quantity: selectedProduct.options[selectedColor].quantity - 1
            }
          }
        }
      },
      shoppingCart: {
        ...state.shoppingCart,
        [payload.orderLineId]: {
          ...payload,
          quantity: state.shoppingCart[payload.orderLineId]
            ? state.shoppingCart[payload.orderLineId].quantity + 1
            : 1
        }
      }
    }
    return nextState
  },

  [REMOVE_FROM_CART]: (state, payload) => {
    const { id, color } = state.shoppingCart[payload.key]

    if (state.shoppingCart[payload.key].quantity === 1) {
      delete state.shoppingCart[payload.key]

      const nextState = {
        ...state,
        products: {
          ...state.products,
          [id]: {
            ...state.products[id],
            options: {
              ...state.products[id].options,
              [color]: {
                ...state.products[id].options[color],
                quantity: state.products[id].options[color].quantity + 1
              }
            }
          }
        }
      }
      return nextState
    }

    const nextState = {
      ...state,
      products: {
        ...state.products,
        [id]: {
          ...state.products[id],
          options: {
            ...state.products[id].options,
            [color]: {
              ...state.products[id].options[color],
              quantity: state.products[id].options[color].quantity + 1
            }
          }
        }
      },
      shoppingCart: {
        ...state.shoppingCart,
        [payload.key]: {
          ...state.shoppingCart[payload.key],
          quantity: state.shoppingCart[payload.key].quantity - 1
        }
      }
    }
    return nextState
  },

  [INITIALIZE_STATE]: (state, payload) => {
    return {
      ...state,
      shoppingCart: {
        ...payload.shoppingCart
      },
      products: {
        ...payload.products
      }
    }
  }
}

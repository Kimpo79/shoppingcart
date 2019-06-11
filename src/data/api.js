import productData from './products.json'

const productArrayToHashMapper = (acc, curr) => {
  curr.options = curr.options.reduce((options, currentOption) => {
    currentOption.color = Array.isArray(currentOption.color)
      ? currentOption.color.join('')
      : currentOption.color

    options[currentOption.color] = { ...currentOption }
    return options
  }, {})
  
  acc[curr.id] = curr
  return acc
}

export default function products() {
  const mappedData = productData.items.reduce(productArrayToHashMapper, {})
  return Promise.resolve(mappedData)
}

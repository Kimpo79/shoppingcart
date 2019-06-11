import React from 'react'

const ProductOptions = ({ onChange, value, options, defaultText = 'choose' }) => {
  return (
    <>
      {options && (
        <select onChange={onChange} value={value}>
          <option key={defaultText} value={''}>
            {defaultText}
          </option>
          {options.map(key => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      )}
    </>
  )
}

export default ProductOptions
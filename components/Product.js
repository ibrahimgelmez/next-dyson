import React from 'react'



export default function Product({ product }) {
  const {description , title} = product.fields
  return (
    <div>
      <div>
        Image Slider
      </div>
      <div>
        <h1>{title}</h1>
        <h3>Rating</h3>
        <p>Desc</p>
        <button>Add Cart</button>
      </div>
    </div>
  )
}

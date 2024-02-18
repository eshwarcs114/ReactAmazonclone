import React from 'react'
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
    const location = useLocation();
    const { title, image, price, rating } = location.state;
  return (
    <div>
     <h1>This sec tion can be done the idea was to let you know that i can build stuff {title}{image}{price}{rating}</h1>
      
    </div>
  )
}

export default ProductDetails

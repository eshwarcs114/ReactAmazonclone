import React from 'react'
import './ProductList.css'
import {removeOrder} from './actions/index.js'
import {useDispatch} from "react-redux";
function ProductList({basket}) {
    const dispatch = useDispatch()
    console.log(basket,'this is basket')
  return (
    <div className='checkoutProduct'>
    <img src={basket.image} alt="" className="checkoutProduct__image" />
    <div className="checoutProduct__info">
        <p className="checkoutProduct__title"></p>
        <p className="checkoutProduct__price">
            <strong>{basket.title}</strong>
        </p>
        <p>$
        {basket.price}</p>
        <div className="checkoutProduct__rating">
            {Array(basket.rating).fill().map(()=>{
                return <p>⭐</p>
            })}
        </div>
        <button onClick = { () => dispatch(removeOrder(basket))}>Remove From Basket</button>  

    </div>
      
    </div>
  )
}

export default ProductList


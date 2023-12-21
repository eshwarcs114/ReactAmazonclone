import React from "react";
import "./Product.css";
import {useDispatch} from "react-redux";
import { orderAdd } from './actions/index.js'

function Product({ id ,title, image, price, rating }) {
  const dispatch = useDispatch()

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>⭐</p>
          ))}
      </div>
      <img src={image} alt="" />
      <button onClick={ () => dispatch(orderAdd({ id ,title, image, price, rating }))}>Add to Basket</button>
    </div>
  );
}

export default Product;

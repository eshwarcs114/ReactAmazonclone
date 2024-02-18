import React from "react";
import "./Product.css";
import {useDispatch} from "react-redux";
import { orderAdd } from './actions/index.js'
import { useNavigate } from 'react-router-dom';

function Product({ id ,title, image, price, rating , Description }) {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const productDetails = (args) => {
    console.log(args,'this is args')
    navigate('/productDetails', { state: { id, title, image, price, rating , Description } });
  }

  return (
    <div className="product">
      <div className="product__info">
        <p><strong>{title}</strong></p>
        <p>{ Description }</p>
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
      <img onClick = {() => productDetails({id ,title, image, price, rating})} src={image} alt="" />
      <button onClick={ () => dispatch(orderAdd({ id ,title, image, price, rating }))}>Add to Basket</button>
    </div>
  );
}

export default Product;

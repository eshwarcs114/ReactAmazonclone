import React from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import Subtotal from "./Subtotal";
import ProductList from "./ProductList.js";
import { useSelector } from "react-redux/es/hooks/useSelector";
function Checkout() {
  let baskerProduct = useSelector((state) => {
    console.log(state, "this is use state in checkout product");
    console.log(state.addProduct['basket'],'this is probably give me an array')
    return state.addProduct['basket'];
  });
  console.log(baskerProduct)

  const gotToHome = () => {
    console.log("checkout this is what clicked");
  };
  return (
    <div className="checkout" onClick={gotToHome}>
      <div>
        <h2 className="checkout__title">Your Shopping Basket</h2>
        {baskerProduct.map((item) => {
          console.log(item,'this is the item in the props')
          let product = item
          console.log(product)
          return <ProductList  basket = {product}/>
        })}
      </div>
      <div className="checkout__right mx-5">
        <Subtotal />
      </div>
      <div className="checkout__left mx-5">
        <Link to="/">
          <img className="checkout__ad" src="./images/adv.jpg" alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Checkout;

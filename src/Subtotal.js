import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Subtotal() {
  let noOfItems = useSelector((state) => {
    console.log(state,'this is the state')
    if(state.addProduct.state !== 0 ){
      let basketContent = state.addProduct.basket
      let totalAmt = 0 
      basketContent.forEach((item) => {
        totalAmt += item.price
      })
      return {count : state.addProduct.state , amt : totalAmt }
    }else{
      return 0
    }
  })
  console.log(noOfItems,'this is no of items')
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal 0 items:<strong>{ noOfItems.count ? noOfItems.count : 'The Cart is Empty' }</strong>
            </p>
            <p>
              Total Amt : $<strong>{ noOfItems.amt ? noOfItems.amt : 0 }</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This Order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix=""
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;

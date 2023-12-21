import React from "react";
import "./Header.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
function Header() {
  let displayCount = 0 
  const count = useSelector((state) => state.addProduct)
  if(count.basket){
    displayCount = count.basket.length

  }
  return (
    <div className="header">
      <img
        className="header_logo"
        src="/images/download.png"
        alt=""
      />
      <div className="header__search">
        <input className="header__searchIn" type="text" />
        <SearchOutlinedIcon className="header_searchIcon"/>
      </div>
      <div className="header__nav">
      <Link to = '/login'>
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
      </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
        <Link to='/checkout'>
         <ShoppingCartOutlinedIcon className="shoppingCartIcon"/>
         <span className="header__optionLineTwo header__basketCount">{ displayCount ? displayCount : 0 }</span>
        </Link>

        </div>
      </div>
    </div>
  );
}

export default Header;

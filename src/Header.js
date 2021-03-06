import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="Header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
        alt=""
      />
      <div className="Header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="searchIcon" />
      </div>
      <div className="header_nav">
        <div className="Header_option">
          <span className="header_optionLineOne">Hello Guest</span>
          <span className="header_optionLineTwo"> Sign In</span>
        </div>
        <div className="Header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="Header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionLineTwo header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;

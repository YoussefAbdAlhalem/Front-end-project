import React from "react";
import "./Top.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosPhonePortrait } from "react-icons/io";
import { TbArrowsShuffle2 } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { HiCurrencyDollar } from "react-icons/hi2";


const Top = () => {
  return (
    <div className="top-header">
      <div className="top-left col-md-6">
        <div className="">
          <span className="lang-sel">
            <img src="/photos/eng.png" alt="ENG" />
            <span className="lang-label label">English</span>
          </span>
          <span className="curr-sel">
            <HiCurrencyDollar />
            <span className="curr-label label">USD</span>
          </span>
          <span>
            <IoIosPhonePortrait className="phone-icon" />
            <span className="phone-number label">123 456 7890</span>
          </span>
        </div>
      </div>
      <div className="top-right col-md-6">
        <span className="compare">
          <TbArrowsShuffle2 className="compare-icon" />
          <span className="com-label label">Compare</span>
        </span>
        <span className="wishlist">
          <CiHeart className="heart-icon" />
          <span className="wish-label label">Wishlist</span>
        </span>
        <span className="login">
          <IoPersonOutline className="person-icon" />
          <span className="log-label label">Login</span>
        </span>
      </div>
    </div>
  );
};

export default Top;

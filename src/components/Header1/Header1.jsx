import "./Header1.css";
import React from "react";

const Header1 = () => {
  return (
    <>
      <div className="header1-container">
        <div className="header1-left">
          <div className="header1-left-wrapper">
            <div className="header1-left-logo">
              <img
                className="header1-left-image"
                src="/src/assets/LOGO.png"
                alt=""
              />
            </div>
            <div className="header1-left-center">
              <img alt="" src="/src/assets/dashboard1.png" />
              <img alt="" src="/src/assets/order.png" />
              <img alt="" src="/src/assets/customer.png" />
              <img alt="" src="/src/assets/pickDelivery.png" />
              <img alt="" src="/src/assets/reports.png" />
              <img alt="" src="/src/assets/settings.png" />
              <img alt="" src="/src/assets/error.png" />
            </div>
            <div className="header1-left-down">
                <p>Accounts</p>
                <img src="/src/assets/" alt=""/>
                <img src="/src/assets/Register.png" alt=""/>
            </div>
          </div>
        </div>
        <div className="header1-right"></div>
      </div>
    </>
  );
};

export default Header1;

import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <header className="header-container">
        <div className="header-wrapper">
          <div className="header">
            <div className="header-left">
              <img className="header-left-image" src="/src/assets/LOGO.png" alt="logo"/>
            </div>
            <div className="header-center">
              <p className="header-center-1"> Home</p>
              <p className="header-center-2"> Services</p>
              <p className="header-center-3"> Pricing</p>
            </div>
            <div className="header-right">
              <button className="header-right-1">Sign up</button>
              <button className="header-right-2"> sign in</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

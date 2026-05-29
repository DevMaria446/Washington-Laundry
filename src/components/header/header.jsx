import React from "react";
import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();

  return (
    <>
      <header className="header-container">
        <div className="header-wrapper">
          <div className="header">
            <div className="header-left">
              <img
                className="header-left-image"
                src="/src/assets/LOGO.png"
                alt="logo"
              />
            </div>

            <div className="header-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "header-link active-link" : "header-link"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "header-link active-link" : "header-link"
                }
              >
                Services
              </NavLink>
              <NavLink
 

              
                to="/booking-form"
                className={({ isActive }) =>
                  isActive ? "header-link active-link" : "header-link"
                }
              >
                Pricing
              </NavLink>
            </div>

            <div className="header-right">
              <button className="header-right-1" onClick={() => nav("/signup")}>
                Sign up
              </button>

              <button className="header-right-2" onClick={() => nav("/login")}>
                Sign in
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

// <NavLink
//   to="/"
//   style={({ isActive }) => ({
//     color: isActive ? "white" : "black",
//     textDecoration: "none",
//   })}
// >
//   Home
// </NavLink>

// <NavLink
//   to="/services"
//   style={({ isActive }) => ({
//     color: isActive ? "white" : "black",
//     textDecoration: "none",
//   })}
// >
//   Services
// </NavLink>

// <NavLink
//   to="/booking-form"
//   style={({ isActive }) => ({
//     color: isActive ? "white" : "black",
//     textDecoration: "none",
//   })}
// >
//   Pricing
// </NavLink>

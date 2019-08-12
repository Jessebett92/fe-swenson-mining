import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-spacer">
        <div className="logo-wrapper">
          <div>// Logo goes here</div>
        </div>
      </div>
      <div className="nav-links">
        <div className="nav-link">
          <NavLink exact to="/">
            Home
          </NavLink>
        </div>
        <div className="nav-link">
          <NavLink to="/about">About-Us</NavLink>
        </div>
        <div className="nav-link">
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
      <div className="shopping">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/cart">Your Cart</NavLink>
      </div>
    </div>
  );
};

export default NavBar;

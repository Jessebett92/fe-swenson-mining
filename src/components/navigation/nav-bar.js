import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-spacer">
        <div className="logo-wrapper">
          <Link to="/">
            <img src="https://www.freelogoservices.com/api/main/images/1j+ojl1KOMkX9WyofBe43D6kiPSIrx9Nmx7NwXs1M3EMoAJtlSYogfBj9vU6" />
          </Link>
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

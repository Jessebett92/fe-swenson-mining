import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const NavBar = props => {
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
        <div className="login">
          <NavLink to="/login">
            <FontAwesomeIcon icon={faSignInAlt} />
          </NavLink>
        </div>
        <div className={props.cart.length > 0 ? "added-cart" : "cart"}>
          <p>{props.cart.length}</p>
          <NavLink to="/cart">
            <FontAwesomeIcon icon={faCartPlus} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

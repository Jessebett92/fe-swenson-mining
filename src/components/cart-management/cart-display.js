import React from "react";

const CartDisplay = props => {
  return (
    <div className="cart-item">
      <div className="cart-image">
        <img src={props.image} />
      </div>
      <div className="cart-details-wrapper">
        <div className="cart-title">
          <h1>{props.title}</h1>
        </div>
        <div className="cart-price">
          <h3>{props.price}</h3>
        </div>
        <button onClick={props.handleCartRemoval}>Remove from Cart</button>
      </div>
    </div>
  );
};

export default CartDisplay;

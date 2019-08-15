import React from "react";
import { Link } from "react-router-dom";

const ProductDisplay = props => {
  return (
    <div className="product-display">
      <div className="title-wrapper">
        <h1>{props.title}</h1>
      </div>
      <div className="image-wrapper">
        <img src={props.image} />
      </div>
      <div className="display-price">${props.price}</div>
      <div className="product-view">
        <Link to={`/product/${props.slug}`}>View Product</Link>
      </div>
    </div>
  );
};

export default ProductDisplay;

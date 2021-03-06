import React from "react";

import ProductDisplay from "./product-display";

class ProductFrame extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      products: []
    };
    this.getProductsInfo = this.getProductsInfo.bind(this);
  }

  getProductsInfo() {
    fetch("https://jb-goldmining-be.herokuapp.com/nuggets")
      .then(response => response.json())
      .then(data => {
        this.setState({
          products: data
        });
      })
      .catch(error => {
        console.log("pro-frame error", error);
      });
  }

  renderProducts() {
    return this.state.products.map(item => {
      return (
        <ProductDisplay
          key={item.id}
          id={item.id}
          image={item.image}
          price={item.price}
          title={item.title}
          description={item.description}
          jewltype={item.jewltype}
          new={item.new}
          slug={item.id}
        />
      );
    });
  }

  componentDidMount() {
    this.getProductsInfo();
  }

  render() {
    return <div className="products-display">{this.renderProducts()}</div>;
  }
}

export default ProductFrame;

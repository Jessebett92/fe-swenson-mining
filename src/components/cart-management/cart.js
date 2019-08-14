import React from "react";
import axios from "axios";
import UniqueId from "react-html-id";

import CartDisplay from "./cart-display";

class Cart extends React.Component {
  constructor(props) {
    super(props);

    UniqueId.enableUniqueIds(this);

    this.state = {
      isLoading: true,
      products: []
    };
    this.getCartItems = this.getCartItems.bind(this);
  }

  handleCartRemoval = (index, e) => {
    const products = Object.assign([], this.state.products);
    products.splice(index, 1);
    this.setState({ products: products });
  };

  getCartItems() {
    this.props.cart.forEach(item => {
      axios
        .get(`http://localhost:5000/nugget/${item}`)
        .then(response => {
          this.setState({
            products: this.state.products.concat(response)
          });
        })
        .catch(error => console.log(`error with item ${item}`, error));
    });
  }

  renderCartItems() {
    let count = -1;
    return this.state.products.map((item, index) => {
      count = count + 1;
      return (
        <CartDisplay
          key={count}
          id={this.nextUniqueId()}
          image={item.data.image}
          title={item.data.title}
          description={item.data.description}
          jewltype={item.jewltype}
          slug={item.id}
          handleCartRemoval={this.handleCartRemoval.bind(this, index)}
        />
      );
    });
  }

  componentDidMount() {
    this.getCartItems();
  }

  render() {
    return <div className="shopping-cart">{this.renderCartItems()}</div>;
  }
}

export default Cart;

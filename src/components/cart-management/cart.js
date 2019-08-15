import React from "react";
import axios from "axios";
import UniqueId from "react-html-id";
import StripeCheckout from "react-stripe-checkout";

import CartDisplay from "./cart-display";

class Cart extends React.Component {
  constructor(props) {
    super(props);

    UniqueId.enableUniqueIds(this);

    this.state = {
      isLoading: true,
      products: [],
      totalPrice: 0
    };
    this.getCartItems = this.getCartItems.bind(this);
    this.handleCartRemoval = this.handleCartRemoval.bind(this);
    this.renderCartItems = this.renderCartItems.bind(this);
    this.handleToken = this.handleToken.bind(this);
  }

  handleToken = (token, addresses) => {
    console.log({ token, addresses });
  };

  handleCartRemoval = (index, e) => {
    const products = Object.assign([], this.state.products);
    products.splice(index, 1);
    this.setState({ products: products });
    this.state.products.map(item => {
      this.setState({ totalPrice: this.state.totalPrice - item.price });
    });
    this.props.handleRemoveFromCart(index);
  };

  getCartItems = () => {
    this.props.cart.forEach(item => {
      axios
        .get(`http://localhost:5000/nugget/${item}`)
        .then(response => {
          this.setState({
            products: this.state.products.concat(response.data),
            totalPrice: this.state.totalPrice + response.data.price
          });
        })
        .catch(error => console.log(`error with item ${item}`, error));
    });
  };

  renderCartItems() {
    let count = -1;
    return this.state.products.map((item, index) => {
      count = count + 1;
      return (
        <CartDisplay
          key={count}
          id={this.nextUniqueId()}
          image={item.image}
          price={item.price}
          title={item.title}
          description={item.description}
          jewltype={item.jewltype}
          slug={item.id}
          handleCartRemoval={this.handleCartRemoval.bind(this, index)}
        />
      );
    });
  }

  componentWillMount() {
    this.getCartItems();
  }

  render() {
    return (
      <div className="shopping-cart">
        <div className="checkout-items-wrapper">
          <div className="checkout-form">
            <h3>Your total amount for this Order:</h3>
            <p>${this.state.totalPrice}</p>
            <StripeCheckout
              stripeKey="pk_test_rCanNJnwkis8NYRyDZwHdzh3004vctPfa4"
              token={this.handleToken}
            />
          </div>
        </div>
        <div className="cart-items">{this.renderCartItems()}</div>
      </div>
    );
  }
}

export default Cart;

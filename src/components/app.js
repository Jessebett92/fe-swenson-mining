import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./navigation/nav-bar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Login from "./auth/login";
import Cart from "./cart-management/cart";
import ProductDetail from "./products/product-detail";
import Footer from "./navigation/footer";
import NoMatch from "./pages/no-match";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: "NOT_LOGGED_IN",
      cart: []
    };
    this.addToCart = this.addToCart.bind(this);
  }

  handleRemoveFromCart = index => {
    const cart = Object.assign([], this.state.cart);
    cart.splice(index, 1);
    this.setState({ cart: cart });
  };

  addToCart = item => {
    this.setState({
      cart: this.state.cart.concat(item)
    });
  };

  render() {
    return (
      <div className="app">
        <Router>
          <div className="components-wrapper">
            <NavBar cart={this.state.cart} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route
                path="/cart"
                render={props => (
                  <Cart
                    {...props}
                    cart={this.state.cart}
                    handleRemoveFromCart={this.handleRemoveFromCart}
                  />
                )}
              />
              <Route path="/login" component={Login} />
              <Route
                exact
                path="/product/:slug"
                render={props => (
                  <ProductDetail {...props} addToCart={this.addToCart} />
                )}
              />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

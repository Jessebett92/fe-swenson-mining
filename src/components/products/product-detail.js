import React from "react";
import axios from "axios";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productInfo: ""
    };
    this.addThisItem = this.addThisItem.bind(this);
  }

  addThisItem = event => {
    event.preventDefault();
    this.props.addToCart(this.state.productInfo.id);
  };

  componentWillMount() {
    axios
      .get(`http://localhost:5000/nugget/${this.props.match.params.slug}`)
      .then(response => {
        this.setState({
          productInfo: response.data
        });
      })
      .catch(error => console.log("product info error", error));
  }

  render() {
    const { image, description, title, price } = this.state.productInfo;
    return (
      <div className="product-detail-wrapper">
        <div className="detail-title">
          <h1>{title}</h1>
        </div>
        <div className="detail-image">
          <img src={image} />
        </div>
        <div className="detail-price">
          <h3>${price}</h3>
          <button onClick={this.addThisItem}>Add to Cart</button>
        </div>
        <div className="detail-description">
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default ProductDetail;

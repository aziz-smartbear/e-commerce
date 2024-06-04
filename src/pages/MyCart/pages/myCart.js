import React, { Component } from "react";

export default class MyCart extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    this.getSelectedProducts()
  }

  getSelectedProducts = () => {
    const { cartReducer } = this.props;
    this.setState({ cart: cartReducer.cart });
    this.forceUpdate();
  } 

  handleRemoveFromCart = (productId) => {
    const { removeFromCart } = this.props;
    removeFromCart(productId);
    this.getSelectedProducts()
  }

  componentDidUpdate(prevProps) {
    const { cartReducer } = this.props;
    if (
      cartReducer.cart.length !== prevProps.cartReducer.cart.length 
    ) {
      this.getSelectedProducts();
    }
  }

  handleCheckout = (e) => {
    e.preventDefault();
  }

  render() {
    const { cart } = this.state;
    const total = cart.reduce((total, product) => {
      return total + product.price;
    }, 0);
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 mb-3 mt-3 d-flex justify-content-between align-items-center">
            <div>Total: {total.toFixed(2)}</div>
            <button className="btn btn-primary" disabled={cart.length === 0} onClick={this.handleCheckout}>
              Checkout
            </button>
          </div>
        </div>

        <div className="productsWrapper">
          {cart.map((product) => (
            <div className="custom-card" key={product.id}>
              <img src={product.image} alt="" />
              <h5 className="product-title mt-3">
                {product.title.slice(0, 20)}
              </h5>
              <h6>{product.price} Rs</h6>
              <button
                className="btn"
                onClick={() => this.handleRemoveFromCart(product.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

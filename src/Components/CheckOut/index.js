import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.state = {totalPrice : parseInt(localStorage.getItem('totalPrice'))}
  }

  handleCheckout = () => {
    const url = "http://localhost:8005/history";
    const rand = 1 + Math.random() * (999 - 1);
    axios
      .post(url, {
        transaction_code: rand,
        product_id: localStorage.getItem("id"),
        qty: localStorage.getItem("qty"),
        total: this.state.totalPrice,
      })
      .then((res) => {
        console.log(res);
        localStorage.removeItem("id");
        localStorage.removeItem("name");
        localStorage.removeItem("photo");
        localStorage.removeItem("qty");
        localStorage.removeItem("price");
        localStorage.removeItem("totalPrice");
      })
      .catch((err) => console.log(err));
      
    };
    
  render() {
    const name = localStorage.getItem("name");
    const qty = localStorage.getItem("qty");
    const price = localStorage.getItem("price");
    const photo = localStorage.getItem("photo");

    return (
      <Container className="main">
        <div className="container" style={{ marginTop: "120px" }}>
          <h1>
            <b>Checkout</b>
          </h1>
          <div className="row mt-4">
            <div className="col-md-8  mb-3">
              <div className="card w-100">
                <div className="row no-gutters">
                  <div
                    className="col-md-8 d-flex justify-center"
                    style={{ alignItems: "center" }}
                  >
                    <div className="card-body mt-2">
                      <h5 className="card-title d-inline-block">Dhiya Reksa</h5>
                      <p className="card-text">
                        Perumahan Ndalem Parikesit Block B7, Kelurahan Slerok,
                        Kota Tegal, Jawa Tengah, 52182
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card w-100 mt-3">
                <div className="row no-gutters">
                  <div className="col-md-2 d-flex justify-center">
                    <img
                      src={photo}
                      className="card-img w-75 h-75 m-auto"
                      alt="..."
                    />
                  </div>
                  <div
                    className="col-md-4 d-flex justify-center"
                    style={{ alignItems: "center" }}
                  >
                    <div className="card-body">
                      <h6 className="card-title font-weight-bold">{name}</h6>
                      <p className="card-text">Zalora Cloth</p>
                    </div>
                  </div>
                  <div
                    className="col-md-3 d-flex justify-center"
                    style={{ alignItems: "center" }}
                  >
                    <div className="card-body">
                      <ul className="horizontal-list d-flex justify-center">
                        <li
                          className="d-none"
                          style={{ margin: "0.9rem 1rem" }}
                        >
                          <span className="d-none">{qty}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="col-md-2 d-flex justify-center"
                    style={{ alignItems: "center" }}
                  >
                    <div className="card-body">
                      <h4 className="cost">{price}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 detail-price">
              <div className="card text-center w-100">
                <div className="card-body">
                  <h5 className="text-left font-weight-bold">Total Summary</h5>
                  <div className="price">
                    <p className="font-weight-bold d-inline">Total Price</p>
                    <p className="text-dark d-inline">
                      <b>{this.state.totalPrice}</b>
                    </p>
                  </div>
                  <div className="btn d-flex d-xs-none">
                    {/* <a href className="btnBtm btn-buy mt-2">
                      Buy Now
                    </a> */}
                    <Link
                      to="/"
                      onClick={this.handleCheckout}
                      className="btnBtm btn-buy mt-2"
                    >
                      Buy Now
                    </Link>
                  </div>
                  <div className="btn d-flex d-lg-none">
                    {/* <a href className="btnBtm btn-buy mt-2">
                      Buy Now
                    </a> */}
                    <Link
                      to="/"
                      onClick={this.handleCheckout}
                      className="btnBtm btn-buy mt-2"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

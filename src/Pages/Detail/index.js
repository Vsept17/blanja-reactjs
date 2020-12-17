import React, { Component } from "react";
import Navbar from "../../Components/Navbar";
import Details from "../../Components/Detail";
import Popular from "../../Components/Popular";
import Modal from "../../Components/Modal";
import { Container } from "react-bootstrap";
import axios from "axios";

// const url = 'https://b2bd74521743.ngrok.io/products/'
const url = " http://localhost:8000/product";

export default class Detail extends Component {
  state = {
    singleProduct: [],
  };

  getSingleProduct = () => {
    const { match } = this.props;

    axios
      .get(url + match.params.id, {
        header: {
          "x-access-token": "Bearer "+ localStorage.getItem('token')
        }
      })
      .then((res) => {
        const singleProduct = res.data.data;
        this.setState({ singleProduct });
        // console.log(singleProduct);
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getSingleProduct();
  }

  render() {
    // console.log(this.state.singleProduct);

    return (
      <>
        <Navbar />
        <Details
          product={this.state.singleProduct.id}
          category={this.state.singleProduct.category_name}
          colorHex={this.state.singleProduct.color_hexa}
          conditions={this.state.singleProduct.conditions}
          description={this.state.singleProduct.product_desc}
          name={this.state.singleProduct.product_name}
          photo={this.state.singleProduct.product_photo}
          price={this.state.singleProduct.product_price}
          qty={this.state.singleProduct.product_qty}
          rating={this.state.singleProduct.rating}
          size={this.state.singleProduct.size}
        />
        {/* <Container>
          <Popular style={{display:-1}} />
        </Container> */}
      </>
    );
  }
}

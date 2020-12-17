import React, { Component } from "react";
import Navbar from "../../Components/Navbar";
import Checkouts from "../../Components/CheckOut";

export default class Checkout extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Checkouts />
      </>
    );
  }
}

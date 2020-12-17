import React, { Component } from "react";
import Navbar from "../../Components/Navbar";
import Carousel from "../../Components/Carousel";
import Categories from "../../Components/Categories";
import News from "../../Components/News";
import Popular from "../../Components/Popular";

import { Container } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Container>
          <Carousel />
          <Categories />
          <News />
          <Popular/>
        </Container>
      </>
    );
  }
}

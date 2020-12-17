import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import axios from "axios";

export default class index extends Component {
  state = {
    categories: [],
  };

  getAllCategories = () => {
    axios
      // .get("https://b2bd74521743.ngrok.io/categories")
      .get("http://localhost:8000/categories")
      .then((res) => {
        const categories = res.data.data;
        this.setState({ categories });
        console.log(categories);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getAllCategories();
  }

  render() {
    return (
      <>
        <div className="tittle">
          <h2 style={{ fontSize: "34px" }}> Category </h2>
          <div className="d-flex justify-content-between">
            <p style={{ fontSize: "12px", color: "gray" }}>
              What are you currently looking for
            </p>
          </div>
        </div>
        <div className="row-category">
          {this.state.categories.map((category, id) => {
            return (
              <div
                key={id}
                className="card-category d-flex align-items-center justify-content-center"
              >
                <img src={category.category_photo} alt="" className="" />
                <p className="centered">{category.category_name}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

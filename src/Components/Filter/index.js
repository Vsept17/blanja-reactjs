import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./style.css";
import axios from 'axios'

export default class index extends Component {

    state = {
        productsFilter: [],
    };

    getAllFilterProducts = () => {
        // const url = "https://b2bd74521743.ngrok.io/sorting?keyword=";
        const url = "http://localhost:8005/sorting?keyword=";
        axios
        .get(url + this.props.keyword)
            .then((res) => {
                const productsFilter = res.data.data;
                this.setState({ productsFilter });
            })
            .catch((err) => err);
    };

    componentDidMount() {
        this.getAllFilterProducts();
    }

    // componentDidUpdate(){
    //     this.getAllFilterProducts();
    // }

    render() {
        return (
            <div style={{marginTop: '100px'}}>
                <div className="tittle">
                    <h2 style={{ fontSize: "34px" }}> Catalog </h2>
                    <div className="d-flex justify-content-between">
                        <p style={{ fontSize: "12px", color: "gray" }}>
                            You will see the product according to the filter
                        </p>
                        <p style={{ fontSize: "14px", color: "gray" }}>
                            <strong>SEE ALL </strong>
                            <FontAwesomeIcon icon={faChevronRight} />
                            <FontAwesomeIcon icon={faChevronRight} />
                        </p>
                    </div>
                </div>

                <div className="row-catalog">
                    {this.state.productsFilter.map((productNew, id,) => {
                        return (
                            <div key={id} className="card card-catalog">
                                <Link to={`/detail/${productNew.id}`} onClick={() => this.setPrice(productNew.product_price)}>
                                    <img
                                        src={productNew.product_photo}
                                        alt=""
                                        className="card-img-top img-news"
                                        width="238"
                                        height="136"
                                    />
                                    <div className="card-body">
                                        <p className="card-catalog-title">
                                            {productNew.product_name}
                                        </p>
                                        <p className="card-catalog-price">
                                            {productNew.product_price}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
}

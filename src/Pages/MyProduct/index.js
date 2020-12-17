import React, { Component } from "react";
import Navbar from "../../Components/Navbar2nd";
import MyProducts from "../../Components/MyProduct"


export default class MyProduct extends Component {
    render() {
        return (
            <>
                <Navbar />
                <MyProducts />
            </>
        );
    }
}

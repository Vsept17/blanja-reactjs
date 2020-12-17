import React, { Component } from "react";
import Navbar from "../../Components/Navbar";
import Mybags from "../../Components/MyBag"

export default class MyBag extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Mybags />
            </>
        );
    }
}
import React, { Component } from "react";
import MyOrders from "../../Components/MyOrder"
import Navbar from "../../Components/Navbar2nd";


export default class MyOrder extends Component {
    render() {
        return (
            <>
                <Navbar />
                <MyOrders />
            </>
        );
    }
}

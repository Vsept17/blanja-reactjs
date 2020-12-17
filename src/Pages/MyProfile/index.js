import React, { Component } from "react";
import Navbar from "../../Components/Navbar2nd";
import MyProfiles from "../../Components/MyProfile"


export default class MyProfile extends Component {
    render() {
        return (
            <>
                <Navbar />
                <MyProfiles />
            </>
        );
    }
}

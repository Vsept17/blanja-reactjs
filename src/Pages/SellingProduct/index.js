import React, { Component } from "react";
import Navbar from "../../Components/Navbar2nd";
import SellingProducts from "../../Components/SellingProduct"
import { connect } from "react-redux";


class SellingProduct extends Component {
    render() {
        return (
            <>
                <Navbar />
                <SellingProducts />
            </>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    return {
      auth,
    };
  };
  
export default connect(mapStateToProps)(SellingProduct);
  
  
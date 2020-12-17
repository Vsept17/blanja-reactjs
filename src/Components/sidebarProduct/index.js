import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Card, Accordion, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faAngleDown, faHome, faCube } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { connect } from "react-redux";

class Sidebar extends Component {

  render() {
    return (
      <>
        <div className="container-sidebar">
          <div className="content-sidebar">
            <div className='d-flex justify-content-center'>
              <div className="dp-profil">
                <img className="img-profil" alt="" />
              </div>
              <div className="ml-4">
                <p>{this.props.auth.username ? this.props.auth.username : "Johanes Mikael"}</p>
                <div className="d-flex margin-up">
                  <div className="mr-1">
                    <FontAwesomeIcon icon={faPen} />
                  </div>
                  <p>Ubah Profile</p>
                </div>
              </div>
            </div>

            <div className="mt-5 ml-4" >
              <div className='d-flex justify-content-between ml-5'>
                <Accordion defaultActiveKey="0">
                  <Card style={{ border: "none" }}>
                    <Card.Header style={{ backgroundColor: "white" }}>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0" className="d-flex justify-content-between">
                        <div className="icon mr-4" style={{ backgroundColor: "#456BF3" }}>
                          <FontAwesomeIcon icon={faHome} style={{ color: "white" }} />
                        </div>
                        <p className="mr-4 mt-1 text-black">Store</p>
                        <FontAwesomeIcon className="mt-2" icon={faAngleDown} />
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Link to="/my-profile-store">
                        <Card.Body className="list-side">Store Profile</Card.Body>
                      </Link>
                    </Accordion.Collapse>
                  </Card>
                  <Card style={{ border: "none" }}>
                    <Card.Header style={{ backgroundColor: "white" }}>
                      <Accordion.Toggle as={Button} variant="link" eventKey="1" className="d-flex justify-content-between">
                        <div className="icon mr-4" style={{ backgroundColor: "#F36F45" }}>
                          <FontAwesomeIcon icon={faCube} style={{ color: "white" }} />
                        </div>
                        <p className="mr-4 mt-1">Product</p>
                        <FontAwesomeIcon className="mt-2" icon={faAngleDown} />
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Link to="/my-product">
                        <Card.Body className="list-side">My Products</Card.Body>
                      </Link>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="1">
                      <Link to="/selling-product">
                        <Card.Body className="list-side">Selling Products</Card.Body>
                      </Link>
                    </Accordion.Collapse>
                  </Card>
                  <Card style={{ border: "none" }}>
                    <Card.Header style={{ backgroundColor: "white" }}>
                      <Accordion.Toggle as={Button} variant="link" eventKey="2" className="d-flex justify-content-between">
                        <div className="icon mr-4" style={{ backgroundColor: "#F3456F" }}>
                          <FontAwesomeIcon icon={faHome} style={{ color: "white" }} />
                        </div>
                        <p className="mr-4 mt-1">Order</p>
                        <FontAwesomeIcon className="mt-2" icon={faAngleDown} />
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Link to="/my-order">
                        <Card.Body className="list-side">My Order</Card.Body>
                      </Link>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(Sidebar);


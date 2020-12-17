import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  InputGroup,
  Navbar,
  FormControl,
  Modal,
  Button,
  Form,
  Col,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import search from '../../Assets/search.png'

import "./style.css";

class Navbarr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      showModal: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
  }

  handleChange = (e) => {
    this.setState({ keyword: e.target.value });
    // console.log(e.target.value);
  };

  handleShow = (id) => {
    this.setState(() => {
      return {
        showModal: true,
      };
    });
  };

  handleEnd = () => {
    this.setState(() => {
      return {
        showModal: false,
      };
    });
  };

  render() {
    return (
      <header className="header">
        <Navbar fixed="top" className="container" bg="white">
          <Link to="/" className="brand">
            <div className="brand d-lg-none">
              <Navbar.Brand>
                <img
                  src="https://res.cloudinary.com/devloops7/image/upload/v1606499947/newBlanja/VectorlogoKecil_ijoj9p.png"
                  width="30"
                  height="44"
                  className="d-inline-block align-top nav-logo"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            </div>
            <div className="brand2">
              <Navbar.Brand>
                <img
                  src="https://res.cloudinary.com/devloops7/image/upload/v1606499947/newBlanja/VectorlogoBesar_vobugk.png"
                  width="30"
                  height="44"
                  className="d-inline-block align-top nav-logo"
                  alt="React Bootstrap logo"
                />
                <Navbar.Text className="textNavbar ">Blanja</Navbar.Text>
              </Navbar.Brand>
            </div>
          </Link>
          <Navbar.Toggle />
          
          <div className="d-flex flex-column col-sm-12 col-lg-8  justify-content-start  rounded-pill">
              <InputGroup
                onChange={(e) => this.onChangeHandler(e)}
                className="mb-15 rounded-pill"
                style={{ borderRadius: "25px", marginRight: "5px" }}
              >
                <FormControl
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  style={{width:"80%"}}
                />
                <InputGroup.Append>
                  <Button className="justify-content-end" variant="outline-secondary">
                    <img src={search} alt="" />
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            
            </div>
          <div className="icon-filter">
            <Link style={{ color: "#9b9b9b" }} onClick={this.handleShow}>
              <FontAwesomeIcon icon={faFilter} />
            </Link>
          </div>
          <Navbar.Collapse className="justify-content-end">
            <Link to="/mybag" className="brand">
              <img
                src={
                  "https://res.cloudinary.com/devloops7/image/upload/v1606580439/newBlanja/cart_s7fhsn.png"
                }
                style={{ marginRight: "40px", marginLeft: "20px" }}
                alt=""
              />
            </Link>
            {
              this.props.auth.username == null ?
              <Link to="/login" className="btn-login-nav">
              <div>Login</div>
            </Link>

            :

            <Link to="/my-profile-store" className="btn-login-nav">
            <div>My Profile</div>
          </Link>

            }

            <Link to="/registration" className="btn-signup-nav">
            <div>Signup</div>
            </Link>
          </Navbar.Collapse>
        </Navbar>
        <Modal show={this.state.showModal} onHide={this.handleEnd}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
                Filter
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Product Name"
                  name="keyword"
                  id="formHorizontalRadios1"
                  value="product_name"
                  onChange={(e) => this.handleChange(e)}
                />
                <Form.Check
                  type="radio"
                  label="Date"
                  name="keyword"
                  id="formHorizontalRadios2"
                  value="created_at DESC"
                  onChange={(e) => this.handleChange(e)}
                />
                <Form.Check
                  type="radio"
                  label="Product Price"
                  name="keyword"
                  id="formHorizontalRadios3"
                  value="product_price"
                  onChange={(e) => this.handleChange(e)}
                />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleEnd}>
              Close
            </Button>
            <Link
              variant="primary"
              to={{
                pathname: "/filter",
                state: { keyword: this.state.keyword },
              }}
            >
              Save Changes
            </Link>
          </Modal.Footer>
        </Modal>
      </header>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(Navbarr);

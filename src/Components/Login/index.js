import React, { Component } from "react";
import "./style.css";

import axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Login extends Component {
  handleSubmit = (e) => {
    const { dispatch, auth } = this.props;
    const data = {
      username: this.username,
      password: this.password,
    };

    axios
      .post("http://localhost:8000/auth/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.data);
        res.headers["x-access-token"] = res.data.data;
        dispatch({ type: "LOGIN" });
        console.log(auth.isLogin);
        console.log(this.props.auth);
        console.log(res);
        console.log(res.headers);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { auth } = this.props;

    return (
      <div className="container main mt-1">
          {auth.isLogin && <Redirect to="/" />}
        <div className="header-form">
          <img
            src="https://res.cloudinary.com/devloops7/image/upload/v1606499947/newBlanja/VectorlogoKecil_ijoj9p.png"
            alt=""
            srcSet=""
          />
          <span>Blanja</span>
        </div>
        <p className="font-login">Please login with your account</p>
        <div className="btn-group">
          <button className="btn-white">Custommer</button>
          <button className="btn-red">Seller</button>
        </div>
        <form action="" className="form-login" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-control w-100 rounded"
            placeholder="Username"
            onChange={(e) => (this.username = e.target.value)}
          />
          <input
            type="password"
            className="form-control w-100 rounded"
            placeholder="Password"
            onChange={(e) => (this.password = e.target.value)}
          />
          <p className="font-forgot">
            <a href="/reset" className="font-register">
              Forgot password?
            </a>
          </p>
          <button className="btn-login">PRIMARY</button>
        </form>
        <p className="font-account">
          Don't have a Tokopedia account?
          <a href="/registration" className="font-register">
            Register
          </a>
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(Login);

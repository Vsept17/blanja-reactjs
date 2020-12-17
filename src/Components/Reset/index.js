import React, { Component } from "react";
import './style.css'

export default class Reset extends Component {
    render() {
        return (
            <div className="container main mt-1">
                <div className="header-form">
                    <img src="https://res.cloudinary.com/devloops7/image/upload/v1606499947/newBlanja/VectorlogoKecil_ijoj9p.png" alt="" srcSet="" />
                    <span>Blanja</span>
                </div>
                <p className="font-login">Reset Password</p>
                <form action className="form-login">
                    <input type="text" className="form-control" placeholder="Email" />
                    <button className="form-control btn-login">
                        <a href> PRIMARY </a>
                    </button>
                </form>
                <p className="font-account">
                    Don't have a Tokopedia account?
          <a href="/registration" className="font-register">Register</a>
                </p>
            </div >
        );
    }
}

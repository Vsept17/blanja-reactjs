import React, { Component } from "react";
import './style.css'

export default class Registration extends Component {
    render() {
        return (
            <div className="container main mt-1">
                <div className="header-form">
                    <img src="https://res.cloudinary.com/devloops7/image/upload/v1606499947/newBlanja/VectorlogoKecil_ijoj9p.png" alt="" srcSet="" />
                    <span>Blanja</span>
                </div>
                <p className="font-login">Please login with your account</p>
                <div className="btn-group">
                    <button className="btn-white">Custommer</button>
                    <button className="btn-red">Seller</button>
                </div>
                <form action="" class="form-login">
                    <input type="text" class="form-control" placeholder="Name" />
                    <input type="text" class="form-control" placeholder="Email" />
                    <input type="text" class="form-control" placeholder="Phone number" />
                    <input type="text" class="form-control" placeholder="Store name" />
                    <input type="text" class="form-control" placeholder="Password" />
                    <button class="form-control btn-login">
                        <a href> PRIMARY </a>
                    </button>
                </form>
                <p class="font-account">
                    Already have a Tokopedia account?
      <a href="/login" class="font-register">Login</a>
                </p>
            </div >
        );
    }
}

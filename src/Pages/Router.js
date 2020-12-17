import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./Home";
import Detail from "./Detail";
import MyBag from "./MyBag";
import Checkout from "./Checkout";
import Category from "./Category";
import Login from "./Login";
import Registration from "./Registratioin";
import Reset from "../Components/Reset";
import MyProfile from "./MyProfile";
import SellingProduct from "./SellingProduct";
import MyProduct from "./MyProduct";
import MyOrder from "./MyOrder";
import Filter from "./Filter";
import store from "../redux/store";

export default function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/mybag" component={MyBag} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/category/:id" component={Category} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/reset" component={Reset} />
        <Route path="/my-profile-store" component={MyProfile} />
        <Route path="/selling-product" component={SellingProduct} />
        <Route path="/my-product" component={MyProduct} />
        <Route path="/my-order" component={MyOrder} />
        <Route path="/filter" render={(props) => <Filter {...props} />} />
      </BrowserRouter>
    </Provider>
  );
}

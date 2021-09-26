import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Page/Home/Home";
import Page404 from "../Page/NotFoundPage/Page404";
import ProducListPage from "../Page/ProducListPage/ProducListPage";
import ProductActionPage from "../Page/ProductActonPage/ProductActionPage";
// import ProductActionPage from "../Page/ProductActonPage/ProductActionPage";
class RouterURL extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />{" "}
          <Route path="/quanlisanpham" exact component={ProducListPage} />{" "}
          <Route path="/quanlisanpham/add" component={ProductActionPage} />
          <Route component={Page404} />{" "}
        </Switch>{" "}
      </div>
    );
  }
}
export default RouterURL;

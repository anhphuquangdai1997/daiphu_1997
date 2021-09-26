import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Menu extends Component {
    render() {
        return ( <
            div className = "navbar" >
            <
            a className = "navbar-brand"
            href = "ccc" >
            Daiphu <
            /a> <
            ul className = "nav navbar-nav" >
            <
            li className = "active" >
            <
            NavLink to = "/" > Home < /NavLink> <
            /li> <
            li >
            <
            NavLink to = "/quanlisanpham" > Quản Lí Sản Phẩm < /NavLink> <
            /li> <
            /ul> <
            /div>
        );
    }
}

export default Menu;
import React from "react";
import { NavLink } from "react-router-dom";

import './NavLinks.css'

const NavLinks = props => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/products">Products</NavLink>
        </li>
        <li>
            <NavLink to="/" >Al Users</NavLink>
        </li>
        <li>
            <NavLink to="/u1/cart">Cart</NavLink>
        </li>
        <li>
            <NavLink to="/auth">Authenticate</NavLink>
        </li>
    </ul>
};

export default NavLinks
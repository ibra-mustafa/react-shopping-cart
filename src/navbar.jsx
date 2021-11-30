import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends React.Component {
    render() { 
        return (
            <nav className="navbar navbar-light bg-light">
                 <a className="navbar-brand">
                     Navbar
                 </a>
                 <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/shoppingCart">ShoppingCart</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/productInfo">productInfo</Link>
                  </li>
               </ul>
            </nav>
        );
    }
}
 
export default NavBar;
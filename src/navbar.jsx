import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends React.Component {
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                 <a className="navbar-brand">
                     Navbar
                 </a>
                 <div className="collapse navbar-collapse">
                 <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/shoppingCart">ShoppingCart</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/table">Menu</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin">Admin</Link>
                  </li>
               </ul>
               </div>
            </nav>
        );
    }
}
 
export default NavBar;
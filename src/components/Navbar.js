import React from 'react';
import '../CSS/navbar.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
     return (
         <div className="Navbar">
                <nav className="nav">

                    <ul className="nav-items">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/portfolios">Portfolios</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
         </div>
     );
}

export default Navbar;
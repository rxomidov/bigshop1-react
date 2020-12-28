import React from 'react';
import logo from '../assets/Logo.png'
import {Link} from "react-router-dom";
import {FaCartPlus} from "react-icons/all";

export default function Header(props) {
    return (
        <header className="header">
            <div className="container">
                <nav>
                    <img src={logo} alt="logo" className="logo"/>
                    <ul>
                        <div>

                        </div>
                        <div>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/products">Products</Link>
                            </li>
                            <li>
                                <Link to="/cart">
                                    <FaCartPlus/>
                                </Link>
                            </li>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

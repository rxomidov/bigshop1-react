import React from 'react';
import {socialData} from "../context/socialData";
import {Link} from "react-router-dom";

export default function Footer(props) {
    return <>
        <div className="footer">
            <div className="container py-3 text-center">
                <h1 className="">Big Shop</h1>
                <div className="footer-categories">
                    <Link to="/products">
                        All
                    </Link>
                    <Link to="/electronics">
                        Electronics
                    </Link>
                    <Link to="/menClothing">
                        Men Clothing
                    </Link>
                    <Link to="/womenClothing">
                        Women Clothing
                    </Link>
                    <Link to="/jewelery">
                        Jewelery
                    </Link>
                </div>
                <div className="footer-icons">
                    {socialData.map(item =>
                        <a href={item.url} key={item.id}>
                            {item.icon}
                        </a>)}
                </div>
            </div>
            <div className="copyright text-center text-capitalize">
                copyright &copy; big shop {new Date().getFullYear()}.
                all rights reserved{" "}
            </div>
        </div>
    </>
}


import React from 'react';
import {ProductContext} from "../../context/products";
import Loading from "../Loading";
import {Link} from "react-router-dom";
import ProductList from "./ProductList";

export default function WomenClothing(props) {
    const {loading, womenClothing} = React.useContext(ProductContext);
    //console.log(menClothing);
    if (loading) {
        return <div className="our-products"><Loading/></div>
    }
    return <div className="our-products">
        <div className="container products-tab">
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
        <ProductList title="Women Clothing" products={womenClothing}/>
    </div>
}

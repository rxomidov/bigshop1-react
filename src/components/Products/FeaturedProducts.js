import React from 'react';
import Loading from "../Loading";
import {ProductContext} from "../../context/products";
import ProductList from "./ProductList";

export default function FeaturedProducts(props) {
    const {loading, electronics} = React.useContext(ProductContext);
    if (loading) {
        return (
            <div className="container text-center">
                <div className="featured-block mt-5 p-3">
                    <h1 className="mt-5">Trendy Arrivals</h1>
                    <Loading/>
                </div>
            </div>
        );
    }
    return (
        <div className="container text-center">
            <div className="featured-block mt-5 p-3">
                <h1 className="mt-5">Trendy Arrivals</h1>
                <ProductList title="featured products"
                             products={electronics}/>
            </div>
        </div>
    );
}

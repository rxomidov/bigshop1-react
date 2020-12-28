import React from 'react';
import {Link} from "react-router-dom";
import FeaturedProducts from "../components/Products/FeaturedProducts";
import Hero from "../components/Hero";
import {FcRight} from "react-icons/all";
import Newsletter from "../components/Newsletter";

export default function Home(props) {
    return <>
        <Hero>
            <Link to="/products" className="btn-hero btn">
                Details <FcRight/>
            </Link>
        </Hero>
        <FeaturedProducts/>
        <Newsletter/>
    </>
}

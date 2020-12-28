import React from "react";
import Product from "./Product";

export default function ProductList({title, products}) {

    return <section className="container text-center">
        <h2 className="section-title">{title}</h2>
        <div className="container products-center">
            {products.map(item => {
                return <Product key={item.id} {...item}/>
            })}
        </div>
    </section>;
}

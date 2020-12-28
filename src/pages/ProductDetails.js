import React from "react";
import {useParams} from 'react-router-dom';
import {ProductContext} from "../context/products";
//import {CartContext} from "../context/cart";
import {useHistory} from 'react-router-dom';
import Loading from "../components/Loading";
import {FaCartPlus, FaChevronRight} from "react-icons/all";

export default function ProductDetails() {
    const {id} = useParams();
    //console.log(id)
    const history = useHistory();
    const {products} = React.useContext(ProductContext);
    //const {addToCart} = React.useContext(CartContext);
    const product = products.find(item => item.id === parseInt(id));
    if (products.length === 0) {
        return <Loading/>
    } else {
        const {image, title, price, description} = product;
        return <section className="container single-product">
            <div className="row">
                <div className="col-md-6 col-sm-10">
                    <img src={image} alt={title} className="single-product-image"/>
                </div>
                <div className="col-md-6 col-sm-10">
                    <article>
                        <h1>{title}</h1>
                        <h2>${price}</h2>
                        <p>{description}</p>
                        <div className="btn-group px-4">
                            <button className="btn btn-primary px-4" onClick={() => {
                                //addToCart(product)
                                history.push('/cart')
                            }}>add to cart <FaCartPlus className="ml-1 mbb"/></button>
                            <button type="button" className="btn btn-primary px-4"
                            onClick={()=>{
                              history.push('/products')
                            }}>
                                back to products <FaChevronRight className="text-white ml-1 mbb"/></button>
                        </div>
                    </article>
                </div>
            </div>
        </section>;
    }
}

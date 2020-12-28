import React from "react";
import {Link} from "react-router-dom";

export default function EmptyCart() {
  return <section className="container text-center empty-cart section my-5">
    <h2>Empty Cart</h2>
    <Link to='/products' className="my-5 btn btn-primary btn-fill">
      fill it
    </Link>
  </section>;
}

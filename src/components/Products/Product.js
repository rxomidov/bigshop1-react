import React from "react";
import {Link} from "react-router-dom";
import heartIcon from '../../assets/hearticon.png';
import messageIcon from '../../assets/messageicon.png';

export default function Product({image, category, title, id, price}) {
    //let url = image.url;
    return <article className="product">
      <div className="img-container">
        <img src={image} alt={title}/>
        <div className="img-icons">
          <div className="left-blog float-left">
            <img src={heartIcon} alt=""/>
            <span>0</span>
          </div>
          <div className="right-blog float-right">
            <img src={messageIcon} alt=""/>
            <span>0</span>
          </div>
        </div>
      </div>
      <div className="product-footer">
        <p className="product-title">{title}</p>
        {/*<p className="product-title">{category}</p>*/}
        <p className="product-price">$ {price}</p>
        <Link to={`products/${id}`} className="btn btn-primary product-link product-link-left">
          details
        </Link>
        <Link to={`products/${id}`} className="btn btn-primary product-link product-link-right">
          add to cart
        </Link>
      </div>
    </article>;
}

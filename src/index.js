import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductProvider from "./context/products";
import {CartProvider} from "./context/cart";

ReactDOM.render(
    <CartProvider>
        <ProductProvider>
            <App/>
        </ProductProvider>
    </CartProvider>,
    document.getElementById('root')
);

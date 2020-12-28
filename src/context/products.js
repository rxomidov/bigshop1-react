// products context
import React from 'react';
import axios from 'axios';
//import url from '../utils/URL'
import {
    categoryElectronics, categoryJewelery, categoryMenClothing,
    categoryWomenClothing
} from "../utils/helpers";

export const ProductContext = React.createContext();

//provider, consumer, usecontext

export default function ProductProvider({children}) {
    const [loading, setLoading] = React.useState(false);
    const [products, setProducts] = React.useState([]);

    const [electronics, setElectronics] = React.useState([]);
    const [menClothing, setMenClothing] = React.useState([]);
    const [womenClothing, setWomenClothing] = React.useState([]);
    const [jewelery, setJewelery] = React.useState([]);

    React.useEffect(()=>{
        setLoading(true);
        axios.get(`https://fakestoreapi.com/products`)
            .then(response=>{
                const electronics = categoryElectronics(response.data);
                const menClothing = categoryMenClothing(response.data);
                const womenClothing = categoryWomenClothing(response.data);
                const jewelery = categoryJewelery(response.data);
                setProducts(response.data);

                setElectronics(electronics);
                setMenClothing(menClothing);
                setWomenClothing(womenClothing);
                setJewelery(jewelery);

                setLoading(false);
            });
        return()=>{

        }
    },[]);

    return (
        <ProductContext.Provider value={
            {products,loading,electronics,menClothing,womenClothing,
                jewelery}}>
            {children}
        </ProductContext.Provider>
    );
}

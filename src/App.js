import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Electronics from "./components/Products/Electronics";
import MenClothing from "./components/Products/MenClothing";
import WomenClothing from "./components/Products/WomenClothing";
import Jewelery from "./components/Products/Jewelery";


function App() {
    return <Router>
        <Header/>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route exact path="/products">
                <Products/>
            </Route>
            <Route exact path="/electronics">
                <Electronics/>
            </Route>
            <Route exact path="/menClothing">
                <MenClothing/>
            </Route>
            <Route exact path="/womenClothing">
                <WomenClothing/>
            </Route>
            <Route exact path="/jewelery">
                <Jewelery/>
            </Route>
            <Route path="/products/:id"
                   children={<ProductDetails></ProductDetails>}>
            </Route>
            <Route path="/cart">
                <Cart/>
            </Route>
        </Switch>
        <Footer/>
    </Router>
}

export default App;

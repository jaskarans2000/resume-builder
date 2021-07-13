import React from 'react'
import { Switch, Route, BrowserRouter as Router, Redirect, Link } from "react-router-dom"
import Cart from './Component/Cart'
import Home from './Component/Home'
import Product from './Component/Product'

function Ecommerce() {
    return (
        <div>
            <Router>
                    <Switch>
                        <Route path="/cart" component={Cart}></Route>
                        <Route path="/product" component={Product}></Route>
                        <Route path="/" component={Home}></Route>
                        <Redirect to="/"></Redirect>
                    </Switch>
            </Router>
        </div>
    )
}

export default Ecommerce

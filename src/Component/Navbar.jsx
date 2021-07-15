import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import {connect} from "react-redux";
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Navbar(props) {
    return (
        <div className="navBar" key="navBar">
            <AppBar position="static" style={{backgroundColor:'lightgreen'}}>
                <Toolbar>
                <Typography variant="h4" style={{ flexGrow:1,paddingLeft:"1rem",}}>Redux Shopping</Typography>
                <Link to="/cart"><div>
                    <Typography style={{textAlign:"center",fontSize:"0.8rem",color:"white"}}>{props.cart.length}</Typography>
                    <ShoppingCartIcon style={{color:"white"}}></ShoppingCartIcon>
                </div></Link>
                </Toolbar>
            </AppBar>
            </div> 
    )
}

function mapStatetoProps(store) {
    return store;
}

export default connect(mapStatetoProps)(Navbar);

import { AppBar, Button, Card, CardActions, CardContent, CardMedia, Toolbar, Typography } from '@material-ui/core';
import React from 'react'
import { Switch, Route, BrowserRouter as Router, Redirect, Link } from "react-router-dom"
import {connect} from "react-redux";
import smartphone from '../data/smartphone.jpg'
import speaker from '../data/speaker.jpg';
import book from '../data/book.jpg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Navbar from './Navbar';

function Home(props) {
    console.log(props.products);
    return (
        <>
         <Navbar></Navbar>
        <div style={{display:"flex",justifyContent:"space-around",overflow:"auto",marginTop:"2rem"}}>
            {props.products.map((product,idx)=>{
                return (<Card variant="outlined" style={{height:"85vh",width:"30vw"}} key={idx}>
                    <CardMedia style={{height:"50%",objectFit:"contain"}}
                        image={product.image}
                        title="Product"
                    />
                    <CardContent>
                        <Typography style={{textAlign:"center",fontWeight:"bold",fontSize:"1.5rem"}}>{product.title}</Typography>
                        <Typography style={{textAlign:"center"}}>{product.description}</Typography>
                        <Typography variant="h6" style={{textAlign:"center"}}>${product.price}</Typography>
                    </CardContent>
                    <CardActions>
                        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",padding: "8px"}}>
                        <Link to="/product"><Button onClick={(e)=>{props.setSelected(product)}}>View Description</Button></Link>
                        <Button onClick={()=>{props.addToCart(product)}}>Add to Cart</Button>
                        </div>
                    </CardActions>
                </Card>)
            })}
        </div>
        </>
    )
}

function mapStatetoProps(store) {
    return store;
}

function mapDispatchtoProps(dispatch) {
    return {
        addToCart: (prod)=> {
           return  dispatch({type:"add_to_cart",payload:prod});
        },
        setSelected:(prod)=>{
            return dispatch({type:"set_selected",payload:prod})
        }
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Home);

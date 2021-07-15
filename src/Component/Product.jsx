import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react'
import {connect} from "react-redux";
import Navbar from './Navbar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Product(props) {
    return (
        <div>
            <Navbar></Navbar>
            <div style={{backgroundColor:"gray"}}>
                <Grid container style={{paddingRight:"1rem"}} spacing={2}>
                    <Grid item xs={2} sm={3} md={5} lg={5}>
                        <div>
                           <Card style={{height:"80vh",marginTop:"3rem",marginLeft:"2rem"}}>
                               <img src={props.selectedProduct.image} alt={props.selectedProduct.title} height="100%"></img>
                           </Card>
                        </div>
                    </Grid>
                    <Grid item md={7} lg={7}>
                        <Card style={{height:"80vh",marginTop:"3rem"}}>
                            <CardContent>
                                <Typography variant="h3">{props.selectedProduct.title}</Typography>
                                <div style={{display:"flex",marginTop:"1rem"}}>
                                    <Typography>M.R.P :</Typography>
                                    <Typography style={{color:"red"}}>₹{props.selectedProduct.price}</Typography>
                                </div>
                                <Typography style={{marginTop:"3rem",fontWeight:"bold"}}>Description</Typography>
                                <Typography style={{marginTop:"1rem"}}>{props.selectedProduct.description}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" style={{backgroundColor:"orange",margin:"1rem"}} onClick={()=>{props.addToCart(props.selectedProduct)}} startIcon={<ShoppingCartIcon/>}>ADD TO CART</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

function mapStatetoProps(store) {
    return store;
}

function mapDispatchtoProps(dispatch) {
    return {
        addToCart: (prod)=> {
           return  dispatch({type:"add_to_cart",payload:prod});
        }
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Product);

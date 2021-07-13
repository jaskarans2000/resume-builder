import { AppBar, Button, Card, CardActions, CardContent, CardMedia, Toolbar, Typography } from '@material-ui/core';
import React from 'react'
import {connect} from "react-redux";
import smartphone from '../data/smartphone.jpg'
import speaker from '../data/speaker.jpg';
import book from '../data/book.jpg';

function Home(props) {
    console.log(props.products);
    return (
        <>
        <div className="navBar" key="navBar">
            <AppBar position="static" style={{backgroundColor:'lightgreen'}}>
                <Toolbar>
                <Typography variant="h4" style={{ flexGrow:1,paddingLeft:"1rem",}}>Redux Shopping</Typography>
                <button >Cart</button>
                <Typography>{props.cart.length}</Typography>
                </Toolbar>
            </AppBar>
            </div>
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
                        <div style={{display:"flex",justifyContent:"center"}}>
                        <Button>View Description</Button>
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
        }
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Home);

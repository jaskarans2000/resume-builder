import { Button, Card, CardActions, CardContent, Grid, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import {connect} from "react-redux";
import Navbar from './Navbar';

function Cart(props) {
    const [val,setValue]=useState("")
    const [countArr,setCount]=useState([])
    useEffect(() => {
        let arr=[];
        for(let i=0;i<props.products.length;i++){
            arr.push(0);
        }
        props.cart.map((prod)=>{
            arr[prod.id-1]++;
        })
        setCount(arr);
    }, [props.cart])
    return (
        <div>
            <Navbar></Navbar>
            <div style={{backgroundColor:"gray"}}>
                <Grid container spacing={2}>
                    <Grid item xs={2} sm={3} md={6} lg={7}>
                        <div>
                            <Card style={{height:"8vh",padding:"8px",marginTop:"3rem"}}>
                                <Typography style={{margin:"8px"}}>Shopping Cart</Typography>
                            </Card>
                            {props.cart.length==0?<Card style={{height:"15vh",padding:"8px",marginTop:"1rem"}}>
                                <CardContent>
                                    <Typography>No Product in the cart</Typography>
                                </CardContent>
                            </Card>:props.products.map((prod)=>{
                                return countArr[prod.id-1]==0?null: <Card style={{marginTop:"2rem"}}>
                                    <div style={{display:"flex",height:"60vh"}}>
                                        <div style={{width:"30%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                            <img src={prod.image} alt="product" height="80%" object-fit="contain"></img>
                                        </div>
                                        <div style={{width:"60%",padding:"8px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                            <div>
                                                <Typography style={{color:"blue",fontWeight:"bold"}}>{prod.title}</Typography>
                                                <div style={{display:"flex"}}>
                                                    <div>
                                                        <Typography>Qty :</Typography>
                                                    </div>
                                                    {/* <input type="number" size="4"
                                                        placeholder={countArr[prod.id-1]}
                                                        value={countArr[prod.id-1]}
                                                        onChange={(val)=>{
                                                            let arr=[...countArr];
                                                            arr[prod-1]=val.target.value;
                                                            setCount(arr);}
                                                        }
                                                    /> */}
                                                </div>
                                                <Typography>{prod.description}</Typography>
                                                <div style={{display:"flex",marginTop:"2rem"}}>
                                                    <Button variant="contained" style={{backgroundColor:"deeppink",color:"white",marginRight:"1rem"}} onClick={()=>{props.deleteFromCart(prod)}}>Delete</Button>
                                                    <Typography>₹{prod.price}</Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            })}
                        </div>
                    </Grid>
                    <Grid item md={4} lg={4}>
                        <Card style={{height:"35vh",marginTop:"3rem",marginLeft:"6rem"}}>
                            <CardContent>
                                <Typography style={{textAlign:"center",fontWeight:"bold"}}>Cart Summary</Typography>
                                <div style={{display:"flex",justifyContent:"center",marginTop:"1rem"}}>
                                    <Typography style={{textAlign:"center"}}>Select ({props.cart.length} items) : </Typography>
                                    <Typography style={{textAlign:"center",fontWeight:"bold"}}> ₹{props.cartPrice}</Typography>
                                </div>
                                <div style={{display:"flex",justifyContent:"center", marginTop:"1rem"}}>
                                    <TextField id="standard-basic" label="COUPAN" onChange={(val)=>{setValue(val.target.value)}} />
                                    <Button variant="contained" style={{backgroundColor:"white"}} onClick={()=>{console.log(val);props.applyCoupan(val)}} >Apply</Button>
                                </div>
                                <div style={{display:"flex",justifyContent:"center",marginTop:"2rem"}}>
                                    <Button variant="contained" color="primary" style={{color:"white"}}>PROCEED TO PAY</Button>
                                </div>
                            </CardContent>
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
        },
        applyCoupan:(val)=>{
            return dispatch({type:"apply_coupan",payload:val})
        },
        deleteFromCart:(prod)=>{
            return dispatch({type:"delete_cart",payload:prod})
        }
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Cart);

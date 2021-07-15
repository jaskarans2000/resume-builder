import React from 'react';
import {products,coupons} from '../data/data'

const initialState={
    products:products,
    cart:[],
    cartPrice:0,
    selectedProduct:{},
    coupons
}

function eReducer(state=initialState,action) {
    switch (action.type) {
        case "add_to_cart":
            return {
                ...state,
                cart:[...state.cart,action.payload],
                cartPrice:state.cartPrice+action.payload.price
            };
        case "set_selected":
            return{
                ...state,
                selectedProduct:action.payload
            };
        case "apply_coupan":
            let price=state.cartPrice;
            let coupon=action.payload
            let discount=state.coupons[`${coupon}`].discount;
            price=discount>0?price-((discount*price)/100):price;
            return{
                ...state,
                cartPrice:price>0?price:0,
            };
        case "delete_cart":
            let carts=state.cart;
            carts=carts.filter((prod)=>{
                return prod!=action.payload;
            })
            let p=0;
            for(let i=0;i<carts.length;i++){
                p+=carts[i].price;
            }
            console.log(carts)
            return{
                ...state,
                cart:carts,
                cartPrice:p,
            }
        default:
            return state;
    }
}

export default eReducer;

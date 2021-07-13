import React from 'react';
import {products} from '../data/data'

const initialState={
    products:products,
    cart:[],
}

function eReducer(state=initialState,action) {
    switch (action.type) {
        case "add_to_cart":
            return {
                ...state,
                cart:[...state.cart,action.payload]
            }
        default:
            return state;
    }
}

export default eReducer;

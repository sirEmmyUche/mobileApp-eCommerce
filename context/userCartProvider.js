import { createContext, useContext, useReducer, useState } from "react";
import {addToCartItem, deleteFromCartItem, getAllCartItem } from '../api';

const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children})=>{
    const reducer = (prevState, action)=>{
        switch(action.type){
            case "ADD_TO_CART": return {...prevState,addToCartItem:addToCartItem()};
            case "DELETE_FROM_CART": return {...prevState,deleteFromCartItem:deleteFromCartItem()};
            case "GET_ALL_CART_ITEM": return {...prevState,deleteFromCartItem:getAllCartItem()};
        }
    }
     const [cartAction, dispatch] = useReducer(reducer,{addToCartItem:"", deleteFromCart:"",getAllCart:""})

    return (
        <CartContext.Provider value={{cartAction}}>
            {children}
        </CartContext.Provider>
    )
} 

"use client"
import React from 'react'
import { useSelector } from 'react-redux';

function Cart() {
    const cartArray = useSelector((state:any) => state.cart);
    console.log(cartArray);
    
  return (
    <div>Cart</div>
  )
}

export default Cart
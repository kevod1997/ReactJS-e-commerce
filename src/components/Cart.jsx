/* eslint-disable react/prop-types */
import React from "react";
import { useCart } from "../context/CartContext";
// import CartLayout from "./CartLayout";
// import { useContext } from 'react'
// import { CartContext } from '../context/CartContext'

const Cart = ({saludo}) => {
  //forma larga de llamar context
  //  const{cart} = useContext(CartContext)

  const {cart}=useCart()
  console.log('carrito', cart)
  
  return (
<>
  <h1 className='elH1' > {saludo} 
  </h1>
  <div> {cart.map((item)=> (
    <p key={item.id}> {item.name} </p>
  ))} </div>
  <div> {JSON.stringify(cart)} </div>
    {/* <CartLayout cart={cart}/> */}
  </>
  );
}

export default Cart;

/* eslint-disable react/prop-types */
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
  const { cartQuantity } = useCart();
  return (
    <>
      <div>
        <ShoppingCartIcon color="secondary" fontSize="large" />
        <span style={{color: 'white', fontSize: '20px'}}> {cartQuantity() || ""} </span>
        {/* condicional tradicional if y else*/}
        {/* <span>{!cart.lenght ? '' : cartQuantity()  }</span> */}
        {/* condicional ternario if sin else */}
        {/* <span>{cart.lenght && cartQuantity()  }</span> */}
      </div>
    </>
  );
};

export default CartWidget;

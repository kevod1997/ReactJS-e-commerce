/* eslint-disable react/prop-types */
import * as React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../context/CartContext";
import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
  const { cartQuantity } = useCart();
  const navigate = useNavigate();
  return (
    <>
      <Badge
        badgeContent={cartQuantity()}
        variant="outlined"
        color="warning"
        onClick={() => navigate(`/cart`)}
        style={{ cursor: "pointer" }}
        size="lg"
      >
        <ShoppingCartIcon style={{ fontSize: 40, color: "white" }} />
      </Badge>
    </>
  );
};

export default CartWidget;

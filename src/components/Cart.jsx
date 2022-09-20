/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
// import CartLayout from "./CartLayout";
// import { useContext } from 'react'
// import { CartContext } from '../context/CartContext'

const Cart = ({ saludo }) => {
  //forma larga de llamar context
  //  const{cart} = useContext(CartContext)

  const { cart, cartTotal, removeItem, clear } = useCart();
  console.log("carrito", cart);
  const navegate = useNavigate();
  return (
    <>
      <h1 className="elH1"> {saludo}</h1>
      <div>
        {!cart.length ? (
          <div>
            <h2
              className="alert alert-dark d-flex justify-content-center"
              role="alert"
            >
              Tu carrito está vacío
            </h2>
            <a
              className="btn btn-secondary d-flex justify-content-center"
              onClick={() => navegate("/")}
              style={{ marginLeft: "200px", marginRight: "200px" }}
            >
              Ir a Comprar
            </a>
          </div>
        ) : (
          <div>
           {cart.map((purchase)=> <CartItem purchase={purchase} key={purchase.id} />)}
            {/* TOTAL PURCHASE */}
            <div className="card text-center" style={{marginLeft: '225px', marginRight: '225px'}}>
              <div className="card-header">Total en el Carrito</div>
              <div className="card-body">
                <p className="card-text">
                 Monto total: $ {cartTotal()}
                </p>
                <a href="#" className="btn btn-success" style={{marginLeft: '5px', marginRight: '5px'}}>
                  Finalizar Compra
                </a>
                <a href="#" className="btn btn-danger" onClick={clear} style={{marginLeft: '5px', marginRight: '5px'}}>
                  Vaciar Carrito
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <CartLayout cart={cart}/> */}
    </>
  );
};

export default Cart;

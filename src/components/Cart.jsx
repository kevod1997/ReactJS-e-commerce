/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
// import CartLayout from "./CartLayout";
// import { useContext } from 'react'
// import { CartContext } from '../context/CartContext'

const Cart = () => {
  //forma larga de llamar context
  //  const{cart} = useContext(CartContext)

  const { cart, cartTotal, clear } = useCart();
  console.log("carrito", cart);
  const navegate = useNavigate();
  return (
    <>
      <div style={{ marginTop: "75px" }}>
        {!cart.length ? (
          <div
            className="card text-center"
            style={{
              marginLeft: "225px",
              marginRight: "225px",
              backgroundColor: "#D3D3D3",
              marginBottom: "300px",
            }}
          >
            <h2
              className="alert alert-dark d-flex justify-content-center"
              role="alert"
              style={{
                marginLeft: "200px",
                marginRight: "200px",
                marginTop: "25px",
              }}
            >
              Tu carrito está vacío
            </h2>
            <a
              className="btn btn-secondary d-flex justify-content-center"
              onClick={() => navegate("/")}
              style={{
                marginLeft: "200px",
                marginRight: "200px",
                marginBottom: "25px",
              }}
            >
              Ir a Comprar
            </a>
          </div>
        ) : (
          <div>
            {/* TOTAL PURCHASE */}
            <div
              className="card text-center"
              style={{ marginLeft: "225px", marginRight: "225px" }}
            >
              <div className="card-header">Total en el Carrito</div>
              <div>
                {cart.map((purchase) => (
                  <CartItem purchase={purchase} key={purchase.id} />
                ))}
              </div>
              <div className="card-body">
                <p className="card-text">Monto total: $ {cartTotal()}</p>
                <a
                  href="#"
                  className="btn btn-success"
                  style={{ marginLeft: "5px", marginRight: "5px" }}
                  onClick={() => navegate("/checkout")}
                >
                  Finalizar Compra
                </a>
                <a
                  href="#"
                  className="btn btn-danger"
                  onClick={clear}
                  style={{ marginLeft: "5px", marginRight: "5px" }}
                >
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

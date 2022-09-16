/* eslint-disable react/prop-types */
import React from "react";
import { useCart } from "../context/CartContext";
// import CartLayout from "./CartLayout";
// import { useContext } from 'react'
// import { CartContext } from '../context/CartContext'

const Cart = ({ saludo }) => {
  //forma larga de llamar context
  //  const{cart} = useContext(CartContext)

  const { cart } = useCart();
  console.log("carrito", cart);

  return (
    <>
      <h1 className="elH1"> {saludo}</h1>
      <div>
        {" "}
        {cart.map((item) => (
          <div
            className="container d-flex justify-content-center"
            key={item.id}
          >
            <div className="row">
              <div
                className="card col-3 d-flex justify-content-center "
                style={{
                  width: "50rem",
                  height: "150px",
                  margin: "15px",
                  padding: "100px",
                }}
              >
                <ul className="list-group list-group-flush">
                  <li className="list-group-item  d-flex justify-content-center ">
                    Producto: {item.name}
                  </li>
                  <li className="list-group-item  d-flex justify-content-center ">
                    Cantidad: {item.quantity}
                  </li>
                  <li className="list-group-item  d-flex justify-content-center ">
                    Precio: {item.quantity * item.price}
                  </li>
                  <div className="d-flex justify-content-center">
                  <a
                    className="btn btn-outline-primary"
                    style={{
                      marginLeft: "50px",
                      marginRight: "50px",
                      borderRadius: "10px",
                      marginTop: "10px",
                      marginBottom: '10px'
                    }}
                  >
                    Seguir comprando
                  </a>
                  <a
                    className="btn btn-outline-danger"
                    style={{
                      marginLeft: "50px",
                      marginRight: "50px",
                      borderRadius: "10px",
                      marginTop: "10px",
                      marginBottom: '10px'
                    }}
                  >
                    Eliminar Producto
                  </a>
                  </div>
                 
                </ul>
              </div>
            </div>
          </div>
        ))}{" "}
      </div>
      {/* <CartLayout cart={cart}/> */}
    </>
  );
};

export default Cart;

/* eslint-disable react/prop-types */
import React from 'react'
import { useCart } from '../context/CartContext'

export default function CartItem({purchase, navegate}) {
    const{removeItem}= useCart()
  return (
        <div
          className="container d-flex justify-content-center"
          key={purchase.id}
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
                  Producto: {purchase.name}
                </li>
                <li className="list-group-item  d-flex justify-content-center ">
                  Cantidad: {purchase.quantity}
                </li>
                <li className="list-group-item  d-flex justify-content-center ">
                  Precio: {purchase.quantity * purchase.price}
                </li>
                <div className="d-flex justify-content-center">
                  <a
                    onClick={() => navegate("/")}
                    className="btn btn-outline-primary"
                    style={{
                      marginLeft: "50px",
                      marginRight: "50px",
                      borderRadius: "10px",
                      marginTop: "10px",
                      marginBottom: "10px",
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
                      marginBottom: "10px",
                    }}
                    onClick={()=>removeItem(purchase.id)}
                  >
                    Eliminar Producto
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
  )
}

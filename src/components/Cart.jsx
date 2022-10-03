/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import { Container } from "@mui/material";
import { FaArrowLeft, FaRegTrashAlt } from "react-icons/fa";

const Cart = () => {
  //forma larga de llamar context
  //  const{cart} = useContext(CartContext)

  const { cart, cartTotal, clear } = useCart();
  const navegate = useNavigate();

  return (
    <>
      <div>
        {!cart.length ? (
          <div
            className="card text-center"
            style={{
              backgroundColor: "#D3D3D3",
              backgroundImage:
                'url("https://img.freepik.com/free-psd/bread-bio-packaging-real-context-mockup_23-2149293557.jpg?w=1060&t=st=1664200032~exp=1664200632~hmac=8a78a4cbc54e7e9b1c9a8420d42567b8c57c25ef201f4f56cb8ee606f448319b")',
              paddingLeft: "225px",
              paddingRight: "225px",
              padding: "300px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
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
          <div
            style={{
              backgroundColor: "#D3D3D3",
              backgroundImage:
                'url("https://img.freepik.com/free-psd/bread-bio-packaging-real-context-mockup_23-2149293557.jpg?w=1060&t=st=1664200032~exp=1664200632~hmac=8a78a4cbc54e7e9b1c9a8420d42567b8c57c25ef201f4f56cb8ee606f448319b")',
              paddingLeft: "225px",
              paddingRight: "225px",
              padding: "100px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {/* TOTAL PURCHASE */}

            {/* <div className="card-header">Total en el Carrito</div> */}
            <div className="container text-center" style={{}}>
              <div
                className="row"
                style={{ margin: "175px", marginTop: "0px" }}
              >
                <div
                  className="col-12"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(201,201,201,1) 3%, rgba(237,236,236,1) 15%, rgba(237,236,236,1) 85%, rgba(201,201,201,1) 97%)",
                    paddingTop: "15px",
                    paddingBottom: "15px",
                    borderBottom: "1px solid #c9c9c9",
                    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                    fontWeight: "lighter",
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px'
                  }}
                >
                  Carrito ({cart.length}){" "}
                  <FaRegTrashAlt
                    onClick={clear}
                    style={{ marginLeft: "5px", cursor: "pointer" }}
                  />
                </div>
                <div
                  className="col-12"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(201,201,201,1) 3%, rgba(237,236,236,1) 15%, rgba(237,236,236,1) 85%, rgba(201,201,201,1) 97%)",
                    paddingTop: "15px",
                  }}
                >
                  <Container maxWidth="sm">
                    {cart.map((purchase) => (
                      <CartItem purchase={purchase} key={purchase.id} />
                    ))}
                  </Container>
                </div>
                <div
                  className="col-12"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(201,201,201,1) 3%, rgba(237,236,236,1) 15%, rgba(237,236,236,1) 85%, rgba(201,201,201,1) 97%)",
                    paddingTop: "40px",
                    borderBottomLeftRadius: '10px',
                      borderBottomRightRadius: '10px'
                  }}
                >
                  <div className="d-flex justify-content-center" style={{paddingBottom:'25px',borderBottom: "1px solid #c9c9c9" }}>
                    <button
                      className="btn btn-outline-dark"
                      style={{ cursor: "pointer", marginRight: "50px"}}
                      onClick={() => navegate("/checkout")}
                    >
                      Finalizar Compra
                    </button>
                    <p style={{ marginBottom: "0px", marginLeft: "50px", paddingTop:'7px', fontWeight:'bold' }}>
                      Total: ${cartTotal()}
                    </p>
                  </div>

                  <div
                    className="col-12"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(201,201,201,1) 3%, rgba(237,236,236,1) 15%, rgba(237,236,236,1) 85%, rgba(201,201,201,1) 97%)",
                      paddingTop: "20px",
                      paddingBottom: "15px",
                    }}
                  >
                    <span
                      style={{ cursor: "pointer", fontWeight: "lighter" }}
                      onClick={() => navegate("/")}
                    >
                      <FaArrowLeft /> Ir a Productos
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;

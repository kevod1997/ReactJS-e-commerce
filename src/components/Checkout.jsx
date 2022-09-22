import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { database } from "../firebase/firebase";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

export default function Checkout() {
  const [comprador, setComprador] = useState({});
  const [orderId, setOrderId] = useState("");
  const { cart, cartTotal, clear } = useCart();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const datosComprador = (e) => {
    setComprador({
      ...comprador,
      [e.target.name]: e.target.value,
    });
  };

  const finalizarCompra = (e) => {
    if (Object.values(comprador).length !== 3) {
      e.preventDefault();
      alert("Tenes que completar todos los campos");
    } else {
      e.preventDefault();
      setLoader(true);
      const ventas = collection(database, "orders");
      addDoc(ventas, {
        comprador,
        items: cart,
        total: cartTotal(),
        date: serverTimestamp(),
      })
        .then((res) => {
          setOrderId(res.id);
          clear();
        })
        .catch((error) => console.log(error))
        .finally(() => setLoader(false));
    }
  };
  if (loader) {
    return (
      <p>
        <Loader />
      </p>
    );
  }
  return (
    <div>
      {!orderId ? (
        <div className="card d-flex justify-content-center" style={{margin: '150px'}}>
          <div>
            <h3 className="d-flex justify-content-center">Finalizar Compra</h3>
            <h4 className="d-flex justify-content-center">Por favor complete los siguientes campos</h4>
          </div>
          <form
          className="d-flex justify-content-center"
            onSubmit={finalizarCompra}
            style={{marginBottom: '50px', marginTop: '30px'}}
          >
            <input
            
              style={{ margin: "5px" }}
              type="text"
              placeholder="Ingresa tu nombre y Apellido"
              name="name"
              onChange={datosComprador}
            />
            <input
            
              style={{ margin: "5px" }}
              type="number"
              placeholder="Ingresa tu telefono"
              name="phone"
              onChange={datosComprador}
            />
            <input
            
              style={{ margin: "5px" }}
              type="email"
              placeholder="Ingresa tu correo"
              name="email"
              onChange={datosComprador}
            />
            <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-outline-success d-flex justify-content-center">Comprar</button>
            </div>
            
          </form>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "whitesmoke",
            margin: "250px",
            borderRadius: "10px",
          }}
        >
          <h2>Gracias por comprar!</h2>
          <button
            className="btn btn-success"
            onClick={() => navigate("/")}
            style={{ margin: "10px" }}
          >
            {" "}
            Volver
          </button>
        </div>
      )}
    </div>
  );
}

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
  const [loader, setLoader] = useState(false)
  const navigate = useNavigate()


  const datosComprador = (e) => {
    setComprador({
      ...comprador,
      [e.target.name]: e.target.value,
    });
  };

  const finalizarCompra = (e) => {
    if(Object.values(comprador).length !== 3){
        e.preventDefault()
        alert('Tenes que completar todos los campos')
    }else{
        e.preventDefault();
        setLoader(true)
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
          .finally(()=> setLoader(false))
      } 
    }
    if(loader){
        return <p><Loader/></p>
    }
  return (
    <div>
      {!orderId ? 
        <div>
          <h2>Finalizar Comprar</h2>
          <h4>Por favor complete los siguientes campos</h4>
          <form
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            onSubmit={finalizarCompra}
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
            <button type="submit">Comprar</button>
          </form>
        </div>
       : 
        <div>
          <h2>Gracias por su compra!</h2>
          <h4> Su orden es: {orderId} </h4>
          <button onClick={()=> navigate('/')}> Volver</button>
        </div>
      }
    </div>
  );
}

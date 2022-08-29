import React from 'react'
import { useState } from "react";
export default function Mensaje() {
    const [mensaje, setMensaje] = useState("");

    return (
      <div className="mensaje">
        <input
          className="input"
          onChange={(e) => setMensaje(e.target.value)}
        ></input>
        <button
          onClick={() => {
            mensaje.length == 0
              ? alert("El mensaje esta vacio")
              : alert("Tu mensaje es: " + mensaje);
          }}
        >
          Guardar
        </button>
      </div>
    );
  }

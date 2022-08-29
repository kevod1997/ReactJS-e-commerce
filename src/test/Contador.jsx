import React from "react";
import { useState } from "react";

function Contador() {
  const [contador, setCounter] = useState(0);

  return (
    <div className="contador">
      <h1>
        <span>Contador: {contador} </span>
      </h1>
      <button
        onClick={() => {
          contador >= 10
            ? alert("No podes sumar mas")
            : setCounter(contador + 1);
        }}
      >
        Sumar
      </button>
      <button
        onClick={() => {
          if (contador > 0) {
            setCounter(contador - 1);
          }
        }}
      >
        Restar
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reinciar
      </button>
    </div>
  );
}

export default Contador;

/* eslint-disable react/prop-types */

import React, { useState } from "react";
import Counter from "./Counter";

function ItemCount({ stock, initial }) {
  const [contador, setContador] = useState(initial);
  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };
  const onAdd = () => {
    if (contador === 0) {
        alert("No compraste caramelos")
        return
    }
    contador === 1
      ? alert("Compraste " + contador + " caramelo")
      : alert("Compraste " + contador + " caramelos");
  };
  return (
    <div className="itemCount">
      <div>
        <button className="btn btn-danger" onClick={restar}>
          -
        </button>
        <Counter contador={contador} />
        <button className="btn btn-success" onClick={sumar}>
          +
        </button>
      </div>
      <button className="btn btn-primary m-2" onClick={onAdd}>
        Comprar
      </button>
    </div>
  );
}

export default ItemCount;

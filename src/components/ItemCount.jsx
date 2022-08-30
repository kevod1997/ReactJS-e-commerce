/* eslint-disable react/prop-types */

import React from "react";
import Counter from "./Counter";

function ItemCount({ stock, setContador, contador }) {
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
    // cont === 0
    //   ? alert("No compraste caramelos")
    //   : cont === 1
    //   ? alert("Compraste " + cont + " caramelo")
    //   : alert("Compraste " + cont + " caramelos");
    // Son equivalentes
    if (contador === 0) {
      alert("No compraste caramelos");
      return;
    } else if (contador === 1) {
      alert("Compraste " + contador + " caramelo");
    } else {
      alert("Compraste " + contador + " caramelos");
    }
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

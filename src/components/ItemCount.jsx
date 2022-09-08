/* eslint-disable react/prop-types */

import React, { useState } from "react";

function ItemCount({ initial, onAdd, stock }) {
  const [counter, setCounter] = useState(initial);

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const restar = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <p
        style={{ margin: "35px" }}
        className="contador card-text d-flex justify-content-center "
      >
        <span>{counter} </span>{" "}
      </p>
      <div className="d-flex justify-content-center">
        <a
          onClick={restar}
          style={{ margin: "4px" }}
          className="btn btn-danger"
        >
          -
        </a>
        <a onClick={onAdd} className="btn btn-light">
          Comprar
        </a>
        <a
          onClick={sumar}
          style={{ margin: "4px" }}
          className="btn btn-success"
        >
          +
        </a>
      </div>
    </>
  );
}

export default ItemCount;

/* eslint-disable react/prop-types */

import React from "react";

function ItemCount({ contador, onAdd, sumar, restar }) {
  return (
    <>
    <p style={{ margin: "35px" }}className="contador card-text d-flex justify-content-center "><span >
    {contador} </span> </p>
    <div className="d-flex justify-content-center">
    <a onClick={restar} style={{ margin: "4px" }} className="btn btn-danger">
      -
    </a>
    <a onClick={onAdd} className="btn btn-light">
      Comprar
    </a>
    <a onClick={sumar} style={{ margin: "4px" }} className="btn btn-success">
      +
    </a>
    </div>
    </>
  );
}

export default ItemCount;

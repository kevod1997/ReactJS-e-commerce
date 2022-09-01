/* eslint-disable react/prop-types */

import React from "react";

function ItemCount({ contador, onAdd, sumar, restar }) {
  return (
    <>
    <p className="card-text d-flex justify-content-center"><span >
    {contador} </span> </p>
    <div className="d-flex justify-content-center">
    <a onClick={restar} style={{ margin: "1px" }} className="btn btn-danger">
      -
    </a>
    <a onClick={onAdd} className="btn btn-primary">
      Comprar
    </a>
    <a onClick={sumar} style={{ margin: "1px" }} className="btn btn-success">
      +
    </a>
    </div>
    </>
  );
}

export default ItemCount;

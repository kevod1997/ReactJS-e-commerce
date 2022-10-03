/* eslint-disable react/prop-types */
import { FaPlus, FaMinus } from "react-icons/fa";

import React from "react";

function ItemCount({ onAdd, stock, counter, setCounter }) {

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
        <FaMinus onClick={restar}
          style={{ marginRight: "20px", cursor:'pointer' }}/>
        <a onClick={counter >= 1 ? onAdd : null } className="btn btn-outline-dark" style={{marginTop: '-10px'}} >
          Agregar
        </a>
        <FaPlus onClick={sumar}
          style={{ marginLeft: "20px", cursor:'pointer' }}/>
      </div>
    </>
  );
}

export default ItemCount;

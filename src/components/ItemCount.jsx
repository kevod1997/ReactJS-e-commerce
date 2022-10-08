/* eslint-disable react/prop-types */
import { FaPlus, FaMinus } from "react-icons/fa";

import React from "react";

function ItemCount({ onAdd, stock, counter, setCounter, stockLimit }) {

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
      {counter === stockLimit || stockLimit === 0 || counter === stock ?
      <p className="d-flex justify-content-center" style={{fontWeight: 'bold', border: '1px solid black', borderRadius: '5px'}}>No hay mas stock</p>: <> <p
      style={{ margin: "20px" }}
      className="contador card-text d-flex justify-content-center "
    >
      <span>{counter} </span>{" "}
    </p> 
    <p className="d-flex justify-content-center btn btn-outline-dark" style={{ margin: '20px'}}>Cantidad disponible: {stockLimit}</p>
    <div className="d-flex justify-content-center">
      <FaMinus onClick={restar}
        style={{ marginRight: "20px", cursor:'pointer' }}/>
      <a onClick={counter >= 1 ? onAdd : null } className="btn btn-outline-dark" style={{marginTop: '-10px'}}>
        Agregar
      </a>
      <FaPlus onClick={sumar}
        style={{ marginLeft: "20px", cursor:'pointer' }}/>
    </div>
    </>
    }
      
    </>
  );
}

export default ItemCount;

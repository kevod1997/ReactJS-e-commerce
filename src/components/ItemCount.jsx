/* eslint-disable react/prop-types */
import { FaPlus, FaMinus } from "react-icons/fa";
import React from "react";
import { useState } from "react";

function ItemCount({ onAdd, stock, counter, setCounter, stockLimit }) {
  const [stockOn, setStock] = useState(stockLimit)
  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
      setStock(stockOn-1)
    }
  };

  const restar = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setStock(stockOn+1)
    }
  };

  return (
    <>
      <>
          <p className="d-flex justify-content-center btn btn-outline-dark" style={{ margin: '20px'}}>Cantidad disponible: {stockOn}</p>
       <p
      style={{ margin: "20px" }}
      className="contador card-text d-flex justify-content-center "
    >
      <span>{counter} </span>{" "}
    </p> 
    <div className="d-flex justify-content-center">
      <FaMinus onClick={restar}
        style={{ marginRight: "20px", cursor:'pointer' }}/>
         {counter === stockLimit+1 || stockLimit === 0 || counter === stock+1 ?
      <p className="d-flex justify-content-center" style={{fontWeight: 'bold', border: '1px solid black', borderRadius: '5px'}}>No hay mas stock</p>:
      <a onClick={counter >= 1 ? onAdd : null } className="btn btn-outline-dark" style={{marginTop: '-10px'}}>
        Agregar
      </a>
      }
      <FaPlus onClick={counter === stockLimit+1 || stockLimit === 0 || counter === stock+1 ? null : sumar}
        style={{ marginLeft: "20px", cursor:'pointer' }}/>
    </div>
    </>

    </>
  );
}

export default ItemCount;

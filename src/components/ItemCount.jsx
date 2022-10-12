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
          <p className="d-flex justify-content-center btn" style={stockOn === 0? {color:'red',fontWeight: 'lighter', border: '1px solid red', borderRadius: '5px',margin:'20px'}:{ margin: '20px', border:'1px solid black'}}>Cantidad disponible: {stockOn}</p>
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
      <p className="d-flex justify-content-center" style={{fontWeight: 'lighter', border: '1px solid red', borderRadius: '5px', color:'red',marginTop:'-5px', padding:'0px 2px'}}>No hay mas stock</p>:
      <a onClick={counter >= 1 ? onAdd : null } className="btn btn-outline-dark" style={{marginTop: '-10px'}}>
        Agregar
      </a>
      }
      <FaPlus onClick={counter === stockLimit || stockLimit === 0 || counter === stock ? null : sumar}
        style={{ marginLeft: "20px", cursor:'pointer' }}/>
    </div>
    </>

    </>
  );
}

export default ItemCount;

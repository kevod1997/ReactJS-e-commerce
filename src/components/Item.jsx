/* eslint-disable react/prop-types */
import React, {useState} from "react";
import ItemCount from "./ItemCount";

const Item = ({ product }) => {
  const {img, name, detail, price, stock}= product

  return (
    <>
            <div className="card col-3" style={{ width: "19rem", margin: "30px" }}>
              <img src={img} className="card-img-top" />
              <div className="card-body">
                <h1 className="card-title d-flex justify-content-center">{name}</h1>
                <p className="card-text d-flex justify-content-center">Precio: ${price}</p>
                <ItemCount stock={stock} initial={1}/>
                
              </div>
            </div>
            {/* <ItemCount stock={productos.stock} setContador= {setContador} contador= {contador}/> */}
    </>
  );
}

export default Item;

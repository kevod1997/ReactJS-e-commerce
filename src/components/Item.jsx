/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ product }) => {
  const { id, img, name, price } = product;
  const navigate = useNavigate();

  return (
    <>
      <div className="card col-3" style={{ width: "19rem", margin: "30px" }}>
        <img src={img} className="card-img-top" />
        <div className="card-body">
          <h1 className="card-title d-flex justify-content-center">{name}</h1>
          <p className="card-text d-flex justify-content-center">
            Precio: ${price}
          </p>
          <a
            className="btn btn-primary d-flex justify-content-center"
            onClick={() => navigate(`/detail/${id}`)}
          >
            Ver más
          </a>
          {/* <ItemCount stock={stock} initial={1}/> */}
        </div>
      </div>
    </>
  );
};

export default Item;

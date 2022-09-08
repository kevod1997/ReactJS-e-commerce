/* eslint-disable react/prop-types */
import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ productDetail }) => {
  const { name, description, price, stock, img } = productDetail;
  // const ondAdd = () => {
  //   // cont === 0
  //   //   ? alert("No compraste caramelos")
  //   //   : cont === 1
  //   //   ? alert("Compraste " + cont + " caramelo")
  //   //   : alert("Compraste " + cont + " caramelos");
  //   // Son equivalentes
  //   if (counter === 0) {
  //     alert("No compraste nada");
  //     return;
  //   } else if (counter === 1) {
  //     alert("Compraste " + counter + " " + name + " por un valor de" + " $ " + price * counter);
  //   } else {
  //     alert("Compraste " + counter + " " + name + " por un valor de" + " $ " + price * counter);
  //   }
  //   }

  const onAdd = () => {
    alert("Tu compra esta siendo procesada");
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row" style={{ margin: "5px" }}>
          <div
            className="card col-3"
            style={{ width: "19rem", margin: "30px" }}
          >
            <img src={img} className="card-img-top" />
            <div className="card-body">
              <h1 className="card-title d-flex justify-content-center">
                {name}
              </h1>
              <p className="card-text d-flex justify-content-center">
                {description}
              </p>
              <p className="card-text d-flex justify-content-center">
                Precio: ${price}
              </p>
              <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

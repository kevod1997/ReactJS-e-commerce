/* eslint-disable react/prop-types */
import React, {useState} from "react";
import ItemCount from "./ItemCount";

const Item = ({ product }) => {

const [contador, setContador] = useState(1)

  const sumar = () => {
    if (contador < product.stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };
  
  const onAdd = () => {
    const precio = product.precio
    // cont === 0
    //   ? alert("No compraste caramelos")
    //   : cont === 1
    //   ? alert("Compraste " + cont + " caramelo")
    //   : alert("Compraste " + cont + " caramelos");
    // Son equivalentes
    if (contador === 0) {
      alert("No compraste nada");
      return;
    } else if (contador === 1) {
      alert("Compraste " + contador + " " + product.nombre + " por un valor de" + " $ " + precio * contador);
    } else {
      alert("Compraste " + contador + " " + product.nombre + " por un valor de" + " $ " + precio * contador);
    }
    }

  return (
    <>
            <div className="card col-3" style={{ width: "19rem", margin: "30px" }}>
              <img src={product.img} className="card-img-top" />
              <div className="card-body">
                <h1 className="card-title d-flex justify-content-center">{product.nombre}</h1>
                <p className="card-text d-flex justify-content-center">Precio: ${product.precio}</p>
                <ItemCount contador={contador} onAdd={onAdd} sumar={sumar} restar={restar} />
              </div>
            </div>
            {/* <ItemCount stock={productos.stock} setContador= {setContador} contador= {contador}/> */}
    </>
  );
}

export default Item;

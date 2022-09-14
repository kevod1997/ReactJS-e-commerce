/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import ItemCount from './ItemCount'

const ItemDetail = ({ productDetail }) => {

  const [counter, setCounter] = useState(1);
  const [compra, setCompra]= useState(false)
  const { name, description, price, stock, img, id } = productDetail;
  const navigate = useNavigate()
  const {addItem}= useCart()
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
    let purchase = {
      id,
      name,
      price,
      stock, 
      img,
      quantity:counter
    }
    setCompra(true)
    //funcion mandando un producto armado desde itemDetail  (purchase)
     addItem(purchase)
     //funcion que recibe los 2 parametos, item y cantidad

    // addItem2(productDetail,count)
}

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
              {!compra
               ? <ItemCount stock={stock} initial={1} onAdd={onAdd} counter={counter} setCounter={setCounter} /> 
               : 
              <div>
                  <button onClick={()=>navigate('/')}>Seguir Comprando</button>
                  <button onClick={()=>navigate('/cart')}>Ir al Carrito</button>
               </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import ItemCount from './ItemCount'
import { ToastContainer } from "react-toastify"


const ItemDetail = ({ productDetail }) => {

  const [counter, setCounter] = useState(0);
  const [compra, setCompra]= useState(false)
  const { name, description, price, stock, img, id } = productDetail;
  const navigate = useNavigate()
  const {addItem,cart}= useCart()
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
const stockLimit = () => {

  const found = cart.find((prod) => prod.id === id)
  if (found){
    return (found.stock - found.quantity)
  }
  else {
    return stock
  }
}


  return (
    <div>
      <div className="container-fluid d-flex justify-content-center" style={{padding: '25px 0px'}}>
        <div className="row" style={{ padding: "5px"}}>
          <div
            className="card col-3 d-flex justify-content-center"
            style={{ width: "19rem", margin: "30px", padding: '0px', border: '0px' }}
          >
            <img src={img} className="card-img-top" />
            <div className="card-body">
              <h3 className="card-title d-flex justify-content-center">
                {name}
              </h3>
              <p className="card-text d-flex justify-content-center" style={{margin: '5px 20px'}}>
                {description}
              </p>
              <p className="card-text d-flex justify-content-center">
                Precio: ${price}
              </p>
              <ToastContainer/>
              {!compra
               ? <ItemCount stock={stock} initial={1} onAdd={onAdd} counter={counter} setCounter={setCounter} stockLimit={stockLimit()} /> 
               :
               <>
              <div className="card-text d-flex justify-content-center" style={{paddingBottom: '10px'}}>
                  <button className="btn btn-outline-dark" onClick={()=>navigate('/cart')}>Ir al Carrito</button>
               </div>
               <div className="card-text d-flex justify-content-center">
                 <button className="btn btn-outline-dark" onClick={()=>navigate('/products')}>Seguir Comprando</button>
               </div>
               </> 
               }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

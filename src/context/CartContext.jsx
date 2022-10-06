/* eslint-disable react/prop-types */
import React, { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    deleteCartAlert
  }, [])
 
 const MySwal = withReactContent(Swal)
 const deleteCartAlert=()=>{
   MySwal.fire({
     title: <strong>Estas seguro que deseas vaciar el carrito?</strong>,
     icon: 'warning',
     denyButtonText: 'No',
     confirmButtonText: 'Si',
     showDenyButton: true
   }).then(response =>{
    if(response.isConfirmed){
      MySwal.fire({title: <strong>El carrito fue vaciado</strong> });
    }else if(response.isDenied){
      return
    }
    setCart([]);
   })
   
 }


  //FUNCION CON ITEM Y QUANTITY
  //hay que pasarles el item y el contador
  // const addItem2 = (item, cantidad) => {
  //     const purchase = {...item, quantity:cantidad}
  //     const existsInCart = cart.find((prod)=> prod.id === item.id)
  //     if(existsInCart){
  //                 const carritoActualizado = cart.map((prod)=>{
  //                     if(prod.id === item.id){
  //                         return {...prod, quantity:prod.quantity + cantidad}
  //                     }else{
  //                         return prod
  //                     }
  //                 })
  //                 setCart(carritoActualizado )
  //             }else{
  //                 setCart([...cart, purchase])
  //             }

  // }

  //Funcion que recibe item(recibe purchase)


  const addItem = (item) => {
    const existsInCart = cart.find((prod) => prod.id === item.id)
    if(existsInCart){
        const updatedCart = cart.map((prod)=> {
            if(prod.id === item.id){
                return {...prod, quantity:prod.quantity + item.quantity}
            }else{
                return prod
            }
        })
        setCart(updatedCart)
    }else{
        setCart([...cart, item])
    }
  }
  const sumItem = (item) => {
    const updateItem = cart.map((prod) => {
        if (prod.id === item.id && prod.quantity < item.stock) {
            return { ...prod, quantity: prod.quantity + 1 }
        } else {
            return prod
        }
    })
    setCart(updateItem)
}

const reduceItem = (item) => {
    const updateItem = cart.map((prod) => {
        if (prod.id === item.id) {
            return { ...prod, quantity: prod.quantity - 1 }
        } else {
            return prod
        }

    })
    setCart(updateItem)
}

  const clear = () => {
    deleteCartAlert();
  };
  const clearFinally = () => {
    setCart([])
  };


  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const cartQuantity = () => {
    return cart.reduce((acumulador, prod) => acumulador += prod.quantity,0)
  }
  const cartTotal = () => {
    return cart.reduce((acumulador, prod)=> acumulador += prod.price * prod.quantity,0)
  }

  return (
    <CartContext.Provider value={{ cart, setCart, addItem, clear, clearFinally, removeItem, isInCart, cartQuantity, cartTotal,sumItem,
      reduceItem }}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext)
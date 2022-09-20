import React, { createContext, useContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

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

  const clear = () => {
    setCart([]);
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
    <CartContext.Provider value={{ cart, setCart, addItem, clear, removeItem, isInCart, cartQuantity, cartTotal }}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext)
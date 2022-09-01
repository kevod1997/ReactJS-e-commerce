/* eslint-disable react/prop-types */
import React, {useEffect, useState} from "react";
import ItemList from "./ItemList";
import productos from "./productos";
import { customFetch } from "./customFetch";

const ItemListContainer = ({ saludo }) => {
  //   console.log(props);
  //   const{saludo}=props
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    customFetch(productos)
    .then(data=> setListProducts(data))
  },[])
  return (
    <>
    <div className="itemContainer">
      <h1> {saludo} </h1>
    </div>
    <ItemList listProducts={listProducts}/>
    </>
  );
};
export default ItemListContainer;

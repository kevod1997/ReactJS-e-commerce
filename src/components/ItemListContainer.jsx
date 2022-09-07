/* eslint-disable react/prop-types */
import React, {useEffect, useState} from "react";
import ItemList from "./ItemList";
import productos from "./productos";
import { customFetch } from "./customFetch";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ saludo }) => {
  //   console.log(props);
  //   const{saludo}=props
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    customFetch(productos)
    .then(data=> setListProducts(data))
  },[])

  const {idcategory, idproduct} = useParams();

  const [products, setProducts] = useState([
    {id:100, name: 'pelota boca', precio: 100, idcategory: 'deportivo'},
    {id:100, name: 'pelota river', precio: 100, idcategory: 'deportivo'},
    ]);
  useEffect(() => {
    if(!idcategory){
      setProducts(products)
    }else{
      setProducts(products.filter((product) => product.idcategory == idcategory));
    }
 }, [idcategory]);
  


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

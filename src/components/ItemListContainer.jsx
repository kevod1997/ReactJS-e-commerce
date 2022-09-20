/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
// import { data } from "../mocks/mockData";
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../firebase/firebase";

const ItemListContainer = ({ saludo }) => {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  //firebase

  useEffect (()=> {
    setLoading(true)
    const products = categoryId ? query( collection(database, "products"), where("category", "==", categoryId) ) :collection(database, "products")
    getDocs(products)
    .then((res)=> {
      const list = res.docs.map((product)=> {
        return{
          id:product.id,
          ...product.data()
        }
      })
      setListProducts(list)
    })
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false))
  }, []);


  //mock

  // useEffect(() => {
  //   setLoading(true);
  //   data
  //     .then((res) => {
  //       if (categoryId) {
  //         setListProducts(res.filter((item) => item.category === categoryId));
  //       } else {
  //         setListProducts(res);
  //       }
  //     })
  //     .catch((error) => console.log(error))
  //     .finally(() => setLoading(false));
  // }, [categoryId]);


  return (
    <>
      <div className="itemContainer">
        <h1> {saludo} </h1>
      </div>
      {loading ? <p>Cargando...</p> : <ItemList listProducts={listProducts} />}
    </>
  );
};
export default ItemListContainer;

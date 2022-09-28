/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
// import { data } from "../mocks/mockData";
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../firebase/firebase";
import Loader from "./Loader";

const ItemListContainer = () => {
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
  }, [categoryId]);


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
      <div style={{height: '130vh',backgroundImage: 'url("https://img.freepik.com/free-photo/rolling-pin-eggs-flour_144627-8691.jpg?w=1060&t=st=1664200115~exp=1664200715~hmac=9d6cff08e7a978eef712788804aa432b42a10f13314cf28dc6dbc3daaa3514a2")', backgroundRepeat: 'repeat-x', backgroundSize: 'cover'}}>
      {loading ? <div><Loader/></div> : <div> <ItemList listProducts={listProducts} /></div>}
      </div>
      
    </>
  );
};
export default ItemListContainer;

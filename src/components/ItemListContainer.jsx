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
    const products = categoryId ? query( collection(database, "products"), where("category", "==", categoryId) ) : collection(database, "products")
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
      <div style={{height: '105vh',backgroundImage: 'url("https://img.freepik.com/free-photo/mid-section-male-baker-holding-paper-bag-with-breads_23-2147883355.jpg?w=1060&t=st=1664820586~exp=1664821186~hmac=bc7e01466de035a41e62e1647d9e841453bc368bcf0d642f2d4e5e2a3c065cea")', backgroundRepeat: 'repeat-x', backgroundSize: 'cover'}}>
      {loading ? <div><Loader/></div> : <div> <ItemList listProducts={listProducts} /></div>}
      </div>
      
    </>
  );
};
export default ItemListContainer;

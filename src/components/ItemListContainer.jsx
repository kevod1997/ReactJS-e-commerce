/* eslint-disable react/prop-types */
import React, {useEffect, useState} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { data } from "../mocks/mockData"

const ItemListContainer = ({ saludo }) => {


  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading]= useState(false)

  

  useEffect(()=>{
    setLoading(true)
      data
      .then((res)=> 
      setListProducts(res))
      .catch((error)=> console.log(error))
      .finally(()=> setLoading(false))
    }, [])
  

//   const {idcategory, idproduct} = useParams();

//   const [products, setProducts] = useState([
//     {id:100, name: 'pelota boca', precio: 100, idcategory: 'deportivo'},
//     {id:100, name: 'pelota river', precio: 100, idcategory: 'deportivo'},
//     ]);
//   useEffect(() => {
//     if(!idcategory){
//       setProducts(products)
//     }else{
//       setProducts(products.filter((product) => product.idcategory == idcategory));
//     }
//  }, [idcategory]);
  


  return (
    <>
    <div className="itemContainer">
      <h1> {saludo} </h1>
    </div>
    {loading ? <p>Cargando...</p> : <ItemList listProducts={listProducts}/>}
    </>
  );
};
export default ItemListContainer;

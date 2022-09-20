import { collection, doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { database } from "../firebase/firebase";
// import { data } from "../mocks/mockData";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(()=> {
    //le decimos nuestra base de datos y en que collection esta
    const productCollection = collection(database, 'products')
    //hacer referencia que me traiga el id
    const docReference = doc(productCollection, id)
    //traemos un documento
    getDoc(docReference)
    .then((res)=> {
      setProductDetail({
        id:res.id,
        ...res.data()
      })
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  }, [])


  // useEffect(() => {
  //   data
  //     .then((res) => setProductDetail(res.find((item) => item.id === id)))
  //     .catch((error) => console.log(error))
  //     .finally(() => setLoading(false));
  // }, [id]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ItemDetail productDetail={productDetail} />
      )}
    </div>
  );
};

export default ItemDetailContainer;

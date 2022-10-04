import { collection, doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { database } from "../firebase/firebase";
// import { data } from "../mocks/mockData";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

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
    <div style={{backgroundImage: 'url("https://img.freepik.com/free-photo/agriculture-industry-bakery-organic-food-healthy-eating-concept-different-tasty-breads-made-organic-flour-sourdough-main-product-daily-nutrition-rich-nutrients-minerals_273609-38098.jpg?w=1060&t=st=1664763702~exp=1664764302~hmac=8710d9b6e72d5a7635555bceeaa615314b97709450de1503509c69e760833d60")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      {loading ? (
        <div style={{height: '80vh'}}><Loader/></div>
      ) : (
        <ItemDetail productDetail={productDetail} />
      )}
    </div>
  );
};

export default ItemDetailContainer;

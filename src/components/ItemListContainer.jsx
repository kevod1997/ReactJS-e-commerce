/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { data } from "../mocks/mockData";

const ItemListContainer = ({ saludo }) => {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    data
      .then((res) => {
        if (categoryId) {
          setListProducts(res.filter((item) => item.category === categoryId));
        } else {
          setListProducts(res);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoryId]);

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

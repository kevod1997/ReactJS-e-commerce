/* eslint-disable react/prop-types */
import React from "react";
import Item from "./Item";
function ItemList({ listProducts }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ margin: "5px" }}>
          {listProducts.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ItemList;
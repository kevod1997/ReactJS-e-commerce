/* eslint-disable react/prop-types */
import React from "react";
import Item from "./Item";
function ItemList({ listProducts }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {listProducts.map((product) => (
            <div className="col-md-4" key={product.id}>
              <Item  product={product} />
            </div>
            
          ))}
        </div>
      </div>
    </>
  );
}

export default ItemList;
